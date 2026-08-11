export type RedditPost = {
  id: string
  title: string
  text: string
  url: string
  createdAt: string
  subreddit: string
}

const REDDIT_USERNAME = "FC-Dev"
const REDDIT_RSS_URL = `https://old.reddit.com/user/${REDDIT_USERNAME}/submitted/.rss`
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(REDDIT_RSS_URL)}`
const LOCAL_REDDIT_POSTS_URL = "/reddit-posts.json"

const getText = (node: ParentNode, selector: string) =>
  node.querySelector(selector)?.textContent?.trim() ?? ""

const htmlToText = (html: string) => {
  if (!html) return ""
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent?.replace(/\s+/g, " ").trim() ?? ""
}

const getSubredditFromUrl = (url: string) => {
  const match = url.match(/\/r\/([^/]+)\//i)
  return match?.[1] ?? "reddit"
}

const normalizePosts = (posts: RedditPost[], limit: number) => posts.slice(0, limit)

const fetchLocalPosts = async (limit: number): Promise<RedditPost[]> => {
  const response = await fetch(LOCAL_REDDIT_POSTS_URL)
  if (!response.ok) {
    return []
  }

  const payload = (await response.json()) as {
    posts?: RedditPost[]
  }

  if (!Array.isArray(payload.posts) || !payload.posts.length) {
    return []
  }

  return normalizePosts(
    payload.posts
      .filter((post) => post.id && post.title && post.url)
      .map((post) => ({
        ...post,
        subreddit: post.subreddit || getSubredditFromUrl(post.url),
      })),
    limit,
  )
}

const fetchViaRss2Json = async (limit: number): Promise<RedditPost[]> => {
  const response = await fetch(RSS2JSON_URL)
  if (!response.ok) {
    return []
  }

  const payload = (await response.json()) as {
    status?: string
    items?: Array<{
      guid?: string
      title?: string
      content?: string
      description?: string
      link?: string
      pubDate?: string
      categories?: string[]
    }>
  }

  if (payload.status !== "ok" || !payload.items?.length) {
    return []
  }

  return payload.items.slice(0, limit).map((item) => {
    const url = item.link?.trim() ?? ""
    const text = htmlToText(item.content?.trim() || item.description?.trim() || "")
    const category = item.categories?.find(Boolean)?.replace("u/", "")

    return {
      id: item.guid?.trim() || url,
      title: item.title?.trim() || "",
      text,
      url,
      createdAt: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
      subreddit: category || getSubredditFromUrl(url),
    }
  })
}

const fetchRssXml = async (url: string) => {
  const attempts = [
    url,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
  ]

  for (let index = 0; index < attempts.length; index += 1) {
    const endpoint = attempts[index]
    const response = await fetch(endpoint)
    if (!response.ok) {
      continue
    }

    if (index === 2) {
      const payload = (await response.json()) as { contents?: string }
      if (payload.contents) {
        return payload.contents
      }
      continue
    }

    const xml = await response.text()
    if (xml) {
      return xml
    }
  }

  throw new Error("No se pudo obtener el feed RSS de Reddit.")
}

export const fetchRedditPostsRss = async (limit = 10): Promise<RedditPost[]> => {
  const localPosts = await fetchLocalPosts(limit)
  if (localPosts.length) {
    return localPosts
  }

  const rss2jsonPosts = await fetchViaRss2Json(limit)
  if (rss2jsonPosts.length) {
    return rss2jsonPosts
  }

  const xml = await fetchRssXml(REDDIT_RSS_URL)
  const feed = new DOMParser().parseFromString(xml, "application/xml")

  const parserError = feed.querySelector("parsererror")
  if (parserError) {
    throw new Error("El RSS recibido no tiene un formato valido.")
  }

  const atomEntries = Array.from(feed.querySelectorAll("entry"))
  const rssItems = Array.from(feed.querySelectorAll("item"))
  const nodes = (atomEntries.length ? atomEntries : rssItems).slice(0, limit)

  if (!nodes.length) {
    return []
  }

  return nodes.map((node) => {
    const isAtom = node.tagName.toLowerCase() === "entry"
    const title = getText(node, "title")
    const description = getText(node, "description") || getText(node, "summary")
    const contentEncoded = getText(node, "content") || getText(node, "content\\:encoded")

    const atomLink = node
      .querySelector("link[rel='alternate']")
      ?.getAttribute("href")
      ?.trim()
    const rssLink = getText(node, "link")
    const url = atomLink || rssLink

    const text = htmlToText(contentEncoded || description)
    const categoryNodes = Array.from(node.querySelectorAll("category"))
    const categoryTerms = categoryNodes
      .map((item) => item.getAttribute("term")?.trim() || item.textContent?.trim() || "")
      .filter(Boolean)

    const subreddit =
      categoryTerms.find((term) => term.startsWith("r/"))?.replace("r/", "") ||
      categoryTerms.find((term) => !term.startsWith("u_")) ||
      getText(node, "category") ||
      "reddit"

    const createdAtRaw = isAtom ? getText(node, "updated") || getText(node, "published") : getText(node, "pubDate")
    const createdAt = createdAtRaw ? new Date(createdAtRaw).toISOString() : new Date().toISOString()

    return {
      id: getText(node, "id") || getText(node, "guid") || url || `${title}-${createdAt}`,
      title,
      text,
      url,
      createdAt,
      subreddit,
    }
  })
}

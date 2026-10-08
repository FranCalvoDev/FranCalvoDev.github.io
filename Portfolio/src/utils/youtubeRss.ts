export type YoutubeVideo = {
  id: string
  title: string
  url: string
  thumbnail: string
  createdAt: string
}

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@FranCalvoDev"
const YOUTUBE_CHANNEL_ID = "UCvn20kp1iDVGnwe7ALcT1Eg"
const YOUTUBE_RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(YOUTUBE_RSS_URL)}`

export const fetchYoutubeVideos = async (limit = 4): Promise<YoutubeVideo[]> => {
  const response = await fetch(RSS2JSON_URL)
  if (!response.ok) {
    throw new Error("YouTube feed unavailable")
  }

  const payload = (await response.json()) as {
    status?: string
    items?: Array<{ guid?: string; title?: string; link?: string; pubDate?: string }>
  }

  if (payload.status !== "ok" || !payload.items) {
    return []
  }

  return payload.items.slice(0, limit).flatMap((item) => {
    const id = item.guid?.replace("yt:video:", "") || item.link?.match(/[?&]v=([\w-]{11})/)?.[1]
    if (!id) return []

    return [
      {
        id,
        title: item.title?.trim() || "",
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        createdAt: item.pubDate ? new Date(item.pubDate.replace(" ", "T") + "Z").toISOString() : "",
      },
    ]
  })
}

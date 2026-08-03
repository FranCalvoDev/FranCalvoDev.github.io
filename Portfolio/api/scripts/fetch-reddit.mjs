import { writeFileSync } from 'fs';

const REDDIT_USERNAME = 'FC-Dev';
const RSS_URL = `https://old.reddit.com/user/${REDDIT_USERNAME}/submitted/.rss`;
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

const stripHtml = (value) =>
  value
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const getSubredditFromUrl = (url) => url.match(/\/r\/([^/]+)\//i)?.[1] ?? 'reddit';

async function main() {
  const res = await fetch(RSS2JSON_URL);

  if (!res.ok) {
    throw new Error(`RSS2JSON fetch failed: ${res.status}`);
  }

  const json = await res.json();

  if (json.status !== 'ok') {
    throw new Error(`RSS2JSON returned status: ${json.status ?? 'unknown'}`);
  }

  const items = Array.isArray(json.items) ? json.items : [];

  const posts = items.slice(0, 10).map((item) => {
    const title = (item.title ?? '').trim();
    const content = (item.content ?? item.description ?? '').trim();
    const link = (item.link ?? '').trim();
    const guid = (item.guid ?? link).trim();
    const category = Array.isArray(item.categories)
      ? item.categories.find(Boolean)?.replace('u/', '')
      : '';

    return {
      id: guid || link,
      title,
      text: stripHtml(content),
      url: link,
      createdAt: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
      subreddit: category || getSubredditFromUrl(link),
    };
  });

  writeFileSync('public/reddit-posts.json', JSON.stringify({ posts }, null, 2));
  console.log(`Wrote ${posts.length} posts`);
}

main();
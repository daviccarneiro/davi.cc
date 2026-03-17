import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const RESOURCES_DIR = path.join(ROOT, 'src', 'content', 'resources');
const CACHE_FILE = path.join(ROOT, 'src', 'data', 'resources-meta-cache.json');
const REFRESH_ALL = process.argv.includes('--refresh');

const decodeHtml = (text) =>
  text
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();

const pickMetaContent = (html, keys) => {
  for (const key of keys) {
    const regex = new RegExp(
      `<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=["']([^"']+)["'][^>]*>|<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${key}["'][^>]*>`,
      'i'
    );
    const match = html.match(regex);
    const value = (match?.[1] || match?.[2] || '').trim();
    if (value) return decodeHtml(value);
  }
  return '';
};

const resolveAbsoluteUrl = (baseUrl, maybeRelative) => {
  try {
    return new URL(maybeRelative, baseUrl).toString();
  } catch {
    return '';
  }
};

const readCache = async () => {
  try {
    const content = await readFile(CACHE_FILE, 'utf-8');
    const parsed = JSON.parse(content);
    if (parsed && typeof parsed === 'object') return parsed;
  } catch {}
  return {};
};

const extractUrlFromResource = (rawContent) => {
  const frontmatterMatch = rawContent.match(/^---\s*\n([\s\S]*?)\n---/);
  const block = frontmatterMatch?.[1] || '';
  const urlLine = block.match(/^\s*url:\s*(.+)\s*$/m);
  if (!urlLine) return '';
  return urlLine[1].trim().replace(/^['"]|['"]$/g, '');
};

const fetchMetaFromUrl = async (url) => {
  let title = '';
  let image = '';

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500);
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; davi.cc-resource-cache/1.0)'
      }
    });
    clearTimeout(timeout);

    if (response.ok) {
      const html = await response.text();
      title = pickMetaContent(html, ['og:title', 'twitter:title']);
      image = pickMetaContent(html, ['og:image', 'twitter:image']);
      if (!title) {
        const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        title = decodeHtml((titleMatch?.[1] || '').replace(/\s+/g, ' ').trim());
      }
      if (image) {
        image = resolveAbsoluteUrl(url, image);
      }
    }
  } catch {}

  return { title, image };
};

const run = async () => {
  const files = await readdir(RESOURCES_DIR);
  const resourceFiles = files.filter((file) => file.endsWith('.md'));
  const cache = await readCache();
  const urls = [];

  for (const fileName of resourceFiles) {
    const filePath = path.join(RESOURCES_DIR, fileName);
    const content = await readFile(filePath, 'utf-8');
    const url = extractUrlFromResource(content);
    if (url) urls.push(url);
  }

  const uniqueUrls = [...new Set(urls)];
  let fetchedCount = 0;

  for (const url of uniqueUrls) {
    const existing = cache[url] || {};
    const hasEnoughData = Boolean(existing.title || existing.image);
    if (!REFRESH_ALL && hasEnoughData) continue;

    const meta = await fetchMetaFromUrl(url);
    cache[url] = {
      ...(cache[url] || {}),
      title: meta.title || existing.title || '',
      image: meta.image || existing.image || '',
      updatedAt: new Date().toISOString()
    };
    fetchedCount += 1;
  }

  for (const key of Object.keys(cache)) {
    if (!uniqueUrls.includes(key)) delete cache[key];
  }

  const sortedEntries = Object.entries(cache).sort(([a], [b]) => a.localeCompare(b));
  const sortedCache = Object.fromEntries(sortedEntries);

  await mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await writeFile(CACHE_FILE, `${JSON.stringify(sortedCache, null, 2)}\n`, 'utf-8');

  console.log(`Resource metadata cache synced (${fetchedCount} fetched, ${uniqueUrls.length} total URLs).`);
};

run().catch((error) => {
  console.error('Failed to sync resource metadata cache.');
  console.error(error);
  process.exit(1);
});

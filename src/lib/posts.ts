import { getCollection } from 'astro:content';

/** Published posts, newest first (same-day posts ordered by sortOrder). */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf() || a.data.sortOrder - b.data.sortOrder,
  );
}

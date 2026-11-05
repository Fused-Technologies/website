import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    readTime: z.number(),
    image: z.string(),
    imageAlt: z.string().default(''),
    author: z.string().default('IT Help Desk Team'),
    draft: z.boolean().default(false),
    /** Tie-breaker for posts published on the same date (lower shows first) */
    sortOrder: z.number().default(0),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, legal };

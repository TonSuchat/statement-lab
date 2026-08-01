import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    duration: z.string(),
    standard: z.string(),
    reviewed: z.string(),
    thai: z.string(),
  }),
});

export const collections = { lessons };

import { defineCollection, z } from 'astro:content';

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    url: z.string().url(),
    overrideTitle: z.string().optional(),
    overrideDescription: z.string().optional(),
    overrideImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.string().or(z.date()).optional()
  })
});

export const collections = {
  resources: resourcesCollection
};

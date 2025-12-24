import { defineCollection, z, } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string().or(z.date()).transform((val) => new Date(val)),
        heroImage: image().optional(),
    })
})

const resourcesCollection = defineCollection({
    type: 'data',
    schema: () => z.object({
        url: z.string().url(),
        overrideTitle: z.string().optional(),
        overrideDescription: z.string().optional(),
        overrideImage: z.string().url().optional(),
        tags: z.array(z.string()).optional(),
        date: z.string().or(z.date()).optional(),
    })
})

export const collections = {
    'blog': blogCollection,
    'resources': resourcesCollection,
};
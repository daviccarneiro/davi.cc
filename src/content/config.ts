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

export const collections = {
    'blog': blogCollection,
};
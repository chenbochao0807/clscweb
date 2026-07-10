import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});
const specCollection = defineCollection({
	schema: z.object({}),
});
const membersCollection = defineCollection({
	schema: z.object({
		name: z.string(),
		position: z.string(),
		photo: z.string().optional().default(""),
		bio: z.string().optional().default(""),
		github: z.string().optional().default(""),
		instagram: z.string().optional().default(""),
		threads: z.string().optional().default(""),
		order: z.number().optional().default(99),
	}),
});
const resourcesCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		category: z.string(),
		url: z.string().optional().default(""),
		description: z.string().optional().default(""),
		order: z.number().optional().default(99),
	}),
});
const achievementsCollection = defineCollection({
	schema: z.object({
		year: z.string(),
		competition: z.string(),
		award: z.string(),
		photo: z.string().optional().default(""),
		order: z.number().optional().default(99),
	}),
});
const friendsCollection = defineCollection({
	schema: z.object({
		name: z.string(),
		school: z.string(),
		logo: z.string().optional().default(""),
		website: z.string().optional().default(""),
		instagram: z.string().optional().default(""),
		order: z.number().optional().default(99),
	}),
});
export const collections = {
	posts: postsCollection,
	spec: specCollection,
	members: membersCollection,
	resources: resourcesCollection,
	achievements: achievementsCollection,
	friends: friendsCollection,
};

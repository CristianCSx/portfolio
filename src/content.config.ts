import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectsEs = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects/es" }),
		schema: z.object({
		title: z.string(),
		technologies: z.array(z.string()),
		image: z.string(),
		description: z.string(),
		link: z.string()
	}),
});

const projectsEn = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects/en" }),
		schema: z.object({
		title: z.string(),
		technologies: z.array(z.string()),
		image: z.string(),
		description: z.string(),
		link: z.string()
	}),
});

export const collections = { projectsEs, projectsEn };

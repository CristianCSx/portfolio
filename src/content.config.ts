import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
	technologies: z.array(z.string()),
	img: z.string(),
	description: z.string(),
	link: z.url()
  }),
});

export const collections = { projects };

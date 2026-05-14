import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
		routing: {
			prefixDefaultLocale: false
		}
	}
});

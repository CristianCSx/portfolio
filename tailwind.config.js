/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,ts,tsx}",
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
		fontFamily: {
			sans: ['Onest', 'sans-serif'],
			mono: ['Cascadia Code', 'monospace'],
		}
		}
	},
	plugins: [
		typography
	]
}

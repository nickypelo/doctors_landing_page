/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			"colors": {
				"primary": "#0f2852",
				"secondary": "#cde1cd"
			},
			"backgroundColor": {
				"primary": "#0f2852",
				"secondary": "#cde1cd"
			},
			"maxWidth":{
				"primary": "1140px"
			}
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'purple-dark': 'linear-gradient(97deg, rgba(33,33,62,1) 28%, rgb(47, 47, 75) 92%)',
				'purple-light': '#535374',
			}
		},
	},
	plugins: [],
}

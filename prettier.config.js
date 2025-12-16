/** @type {import("prettier").Config} */
export default {
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
		'@prettier/plugin-oxc',
	],
	overrides: [
		{
			files: ['.*', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};

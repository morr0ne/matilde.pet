import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://matilde.pet',
	integrations: [sitemap()],
});

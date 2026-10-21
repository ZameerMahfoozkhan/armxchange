import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://armsxchange.in',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/about-armxchange': '/about-armsxchange/'
  },
  build: {
    format: 'directory'
  }
});

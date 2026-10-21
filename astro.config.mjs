import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://armsxchange.in',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/about-armxchange': '/about-armsxchange/',
    '/second-hand-rifles/': '/second-hand-air-rifles/',
    '/second-hand-pistols/': '/second-hand-air-pistols/',
    '/rifles/': '/10m-air-rifles/',
    '/pistols/': '/10m-air-pistols/',
    '/boots/': '/shooting-boots/'
  },
  build: {
    format: 'directory'
  }
});

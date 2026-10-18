import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://armxchange.in',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});

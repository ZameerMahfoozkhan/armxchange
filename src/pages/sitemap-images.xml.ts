import type { APIRoute } from 'astro';
import { PRODUCTS } from '../data/products';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export const GET: APIRoute = async () => {
  const siteUrl = 'https://armsxchange.in';

  const xmlEntries = PRODUCTS.map((product) => {
    const pageUrl = `${siteUrl}/listing/${product.slug}/`;
    const imageElements = product.images.map((img) => `
    <image:image>
      <image:loc>${siteUrl}${img}</image:loc>
      <image:title>${escapeXml(product.isPreOwned ? `Second Hand ${product.title}` : product.title)}</image:title>
      <image:caption>${escapeXml(product.description || `${product.brand} 10m target sports equipment`)}</image:caption>
    </image:image>`).join('');

    return `  <url>
    <loc>${pageUrl}</loc>${imageElements}
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${xmlEntries}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};

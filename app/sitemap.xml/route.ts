// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

const DOMAIN = 'https://simbameubles.be'; // remplace par ton domaine réel

export async function GET() {
    const pages = [
        '',
        '/packs',
        '/packs/duo',
        '/packs/duo/options',
        '/packs/duo/contact',
        '/packs/duo/summary',
        '/packs/trio',
        '/packs/trio/options',
    ];

    const urls = pages.map((path) => `
    <url>
      <loc>${DOMAIN}${path}</loc>
    </url>
  `).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}

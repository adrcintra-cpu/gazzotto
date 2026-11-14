import type { APIRoute } from "astro";

export const prerender = true;

// Sitemap gerado manualmente (site de página única + política de privacidade).
// O painel /admin fica de fora de propósito: não é conteúdo público para indexação.
const PAGINAS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/privacidade", changefreq: "yearly", priority: "0.3" },
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.href?.replace(/\/$/, "") ?? "https://gazzotto.com.br";
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGINAS.map(
  (p) => `  <url>
    <loc>${base}${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
).join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

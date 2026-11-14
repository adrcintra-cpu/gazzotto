import { rewrite, next } from "@vercel/functions";

// Abre app.gazzotto.com.br direto no painel /admin, sem mudar a URL que o
// visitante vê. Usamos o Routing Middleware da Vercel (e não o "rewrites" do
// vercel.json) porque, em projetos Astro, o rewrite condicional por host no
// vercel.json não é suportado oficialmente e se mostrou inconsistente em
// produção — a Vercel recomenda o Routing Middleware para esse caso.
export const config = {
  matcher: "/",
};

export default function middleware(request: Request) {
  const host = request.headers.get("host") || "";
  if (host === "app.gazzotto.com.br") {
    return rewrite(new URL("/admin", request.url));
  }
  return next();
}

/**
 * MÍDIA DO SITE — troque só este arquivo.
 *
 * Vídeos: cole aqui os links do Cloudinary (URL completa .../video/upload/.../arquivo.mp4).
 * O helper `cld()` injeta `f_auto,q_auto` automaticamente (formato e qualidade otimizados).
 * Deixe vazio ("") para o bloco usar o fundo/placeholder enquanto o vídeo não existe.
 */

const CLD_TRANSFORM = "f_auto,q_auto";

/** Insere transformações do Cloudinary logo após /upload/ (só se ainda não houver). */
export function cld(url: string, transform = CLD_TRANSFORM): string {
  if (!url || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) return url;
  const [head, tail] = url.split("/upload/");
  if (/^[a-z]{1,3}_[^/]+\//.test(tail)) return url; // já tem transformação
  return `${head}/upload/${transform}/${tail}`;
}

/** Poster automático a partir de um vídeo do Cloudinary (primeiro frame em JPG). */
export function cldPoster(url: string): string {
  if (!url || !url.includes("/video/upload/")) return "";
  return cld(url, "f_jpg,q_auto,so_0").replace(/\.[a-z0-9]+$/i, ".jpg");
}

export const media = {
  // Hero cinematográfico: os 2 vídeos ficam em src/components/CineHero.astro (URLs exatos, sem transformação).

  // Vídeo institucional "Conheça um pouco mais" (com player)
  aboutVideo: "https://res.cloudinary.com/ptx05pwt/video/upload/evento_cvngwi.mp4", // ex.: "https://res.cloudinary.com/SEU_CLOUD/video/upload/v1/gazzotto/institucional.mp4"
  aboutPoster: "",
  youtubeUrl: "#", // link do canal ("Veja na íntegra…")

  // Imagens (podem ser Cloudinary também). Vazio = placeholder escuro.
  logo: "/img/logo.webp", // marca do rodapé (troque pelo selo horizontal quando tiver)
  mascot: "/img/mascot.webp", // touro da seção laranja
  gallery: ["/img/gallery-1.webp", "/img/gallery-2.webp", "/img/gallery-3.webp", "/img/gallery-4.webp"],
  story: "/img/story.webp", // foto de fundo do bloco "A Gazzotto BBQ leva até você…"
};

export const contact = {
  whatsapp: "5519991605930", // ex.: "5511999999999" — habilita o botão "Quero um orçamento"
  email: "", // ex.: "contato@gazzotto.com"
  instagram: "#",
  facebook: "#",
  youtube: "#",
  linkedin: "#",
};

import { FooterSitemap, FooterMeta } from "@/components/footer";
import GridContainer from "@/components/grid-container";
import ShowcaseThumbnail from "@/components/showcase-thumbnail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Una colección de hermosos sitios web construidos con Tailwind CSS, incluyendo sitios de marketing, aplicaciones SaaS, tiendas de ecommerce y más.",
  openGraph: {
    type: "article",
    title: "Showcase - Construye cualquier cosa",
    description: "Una colección de hermosos sitios web construidos con Tailwind CSS.",
    images: "https://tailwindcss.com/api/og?path=/showcase",
    url: "https://tailwindcss.com/showcase",
  },
};

export default async function Showcase() {
  return (
    <div className="mt-24">
      <div className="mx-2 font-mono text-sm/7 font-medium tracking-widest text-gray-500 uppercase">Showcase</div>
      <GridContainer>
        <h1 className="mx-2 text-4xl tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">
          Puedes construir cualquier cosa con Tailwind CSS.
        </h1>
      </GridContainer>

      <GridContainer className="mt-10">
        <p className="prose mx-2 max-w-(--breakpoint-md) text-lg leading-8 text-gray-600 dark:text-gray-400">
          Bueno, no exactamente <em>cualquier cosa</em>, por ejemplo, no puedes construir una nave espacial con él. Pero definitivamente puedes construir el
          sitio web para la nave espacial —{" "}
          <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer">
            NASA
          </a>{" "}
          lo hizo.
        </p>
      </GridContainer>

      <div className="mt-12 mb-46 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showcase.map((showcase, siteIndex) => (
          <ShowcaseThumbnail key={showcase.name} showcase={showcase} priority={siteIndex < 8} />
        ))}
      </div>
      <GridContainer>
        <FooterSitemap className="*:first:border-l-0 *:last:border-r-0" />
      </GridContainer>
      <FooterMeta className="px-4 md:px-6 lg:px-8" />
    </div>
  );
}

const showcase = [
  {
    name: "OpenAI / ChatGPT",
    url: "https://openai.com",
    thumbnail: require("./img/openai.com.png").default,
    video: "/showcase-videos/openai.com.mp4",
    description: "Sitio web de marketing e interfaz de chat",
  },
  {
    name: "Lemon Squeezy",
    url: "https://app.lemonsqueezy.com",
    thumbnail: require("./img/app.lemonsqueezy.com.png").default,
    video: "/showcase-videos/app.lemonsqueezy.com.mp4",
    description: "Aplicación SaaS",
  },
  {
    name: "Shopify",
    url: "https://shopify.com",
    thumbnail: require("./img/shopify.com.png").default,
    video: "/showcase-videos/shopify.com.mp4",
    description: "Sitio web de plataforma Ecommerce",
  },
  {
    name: "Wealthfront",
    url: "https://wealthfront.com",
    thumbnail: require("./img/wealthfront.com.png").default,
    video: "/showcase-videos/wealthfront.com.mp4",
    description: "Sitio web de marketing Fintech",
  },
  // {
  //   name: "Netflix Global Top 10",
  //   url: "https://top10.netflix.com",
  //   thumbnail: require("./img/top10.netflix.com.png").default,
  //   video: "/showcase-videos/top10.netflix.com.mp4",
  //   description: "Microsite",
  // },
  {
    name: "Loom",
    url: "https://www.loom.com",
    thumbnail: require("./img/loom.com.png").default,
    video: "/showcase-videos/loom.com.mp4",
    description: "Sitio web de marketing SaaS",
  },
  {
    name: "The Verge",
    url: "https://www.theverge.com",
    thumbnail: require("./img/theverge.com.png").default,
    video: "/showcase-videos/theverge.com.mp4",
    description: "Sitio web de noticias",
  },
  {
    name: "Laracon Online",
    url: "https://laracon.net",
    thumbnail: require("./img/laracon.net.png").default,
    video: "/showcase-videos/laracon.net.mp4",
    description: "Sitio web de conferencia",
  },
  {
    name: "Turbo",
    url: "https://turbo.build",
    thumbnail: require("./img/turbo.build.png").default,
    video: "/showcase-videos/turbo.build.mp4",
    description: "Sitio web de herramienta para desarrolladores",
  },
  {
    name: "candycode",
    url: "https://candycode.com",
    thumbnail: require("./img/candycode.com.png").default,
    video: "/showcase-videos/candycode.com.mp4",
    description: "Sitio web de agencia",
  },
  {
    name: "Column",
    url: "https://column.com",
    thumbnail: require("./img/column.com.png").default,
    video: "/showcase-videos/column.com.mp4",
    description: "Sitio web de marketing Fintech",
  },
  {
    name: "Wander",
    url: "https://wander.com",
    thumbnail: require("./img/wander.com.png").default,
    video: "/showcase-videos/wander.com.mp4",
    description: "Sitio web de alquiler vacacional",
  },
  {
    name: "New York Times Events",
    url: "https://nytimes.com/events",
    thumbnail: require("./img/nytimes.com.png").default,
    video: "/showcase-videos/nytimes.com.mp4",
    description: "Sitio web de noticias",
  },
  {
    name: "GitHub Next",
    url: "https://githubnext.com",
    thumbnail: require("./img/githubnext.com.png").default,
    video: "/showcase-videos/githubnext.com.mp4",
    description: "Sitio web de investigación",
  },
  {
    name: "PlanetScale",
    url: "https://planetscale.com",
    thumbnail: require("./img/planetscale.com.png").default,
    video: "/showcase-videos/planetscale.com.mp4",
    description: "Sitio web de marketing SaaS",
  },
  {
    name: "Algolia Docs",
    url: "https://www.algolia.com/doc",
    thumbnail: require("./img/algolia.com.png").default,
    video: "/showcase-videos/algolia.com.mp4",
    description: "Sitio web de documentación",
  },
  {
    name: "MrBeast Feastables",
    url: "https://feastables.com",
    thumbnail: require("./img/feastables.com.png").default,
    video: "/showcase-videos/feastables.com.mp4",
    description: "Tienda directa al consumidor",
  },
  {
    name: "NASA Jet Propulsion Laboratory",
    url: "https://jpl.nasa.gov",
    thumbnail: require("./img/jpl.nasa.gov.png").default,
    video: "/showcase-videos/jpl.nasa.gov.mp4",
    description: "Sitio web de laboratorio espacial",
  },
  {
    name: "Salient",
    url: "https://salient.tailwindui.com",
    thumbnail: require("./img/salient.tailwindui.com.png").default,
    video: "/showcase-videos/salient.tailwindui.com.mp4",
    description: "Sitio web de marketing SaaS",
    isTemplate: true,
  },
  {
    name: "Mashable",
    url: "https://mashable.com",
    thumbnail: require("./img/mashable.com.png").default,
    video: "/showcase-videos/mashable.com.mp4",
    description: "Sitio web de noticias",
  },
  {
    name: "Microsoft .NET",
    url: "https://dotnet.microsoft.com",
    thumbnail: require("./img/dotnet.microsoft.com.png").default,
    video: "/showcase-videos/dotnet.microsoft.com.mp4",
    description: "Sitio web de framework de software",
  },
  {
    name: "Spotlight",
    url: "https://spotlight.tailwindui.com",
    thumbnail: require("./img/spotlight.tailwindui.com.png").default,
    video: "/showcase-videos/spotlight.tailwindui.com.mp4",
    description: "Sitio web personal",
    isTemplate: true,
    dark: {
      thumbnail: require("./img/spotlight.tailwindui.com-dark.png").default,
      video: "/showcase-videos/spotlight.tailwindui.com-dark.mp4",
    },
  },
  {
    name: "Clearbit",
    url: "https://clearbit.com",
    thumbnail: require("./img/clearbit.com.png").default,
    video: "/showcase-videos/clearbit.com.mp4",
    description: "Sitio web de marketing SaaS",
  },
  {
    name: "Dizzie",
    url: "https://getdizzie.com",
    thumbnail: require("./img/getdizzie.com.png").default,
    video: "/showcase-videos/getdizzie.com.mp4",
    description: "Tienda E-commerce",
  },
  {
    name: "Google I/O",
    url: "https://io.google",
    thumbnail: require("./img/io.google.png").default,
    video: "/showcase-videos/io.google.mp4",
    description: "Sitio web de conferencia",
    dark: {
      thumbnail: require("./img/io.google-dark.png").default,
      video: "/showcase-videos/io.google-dark.mp4",
    },
  },
  {
    name: "Keynote",
    url: "https://keynote.tailwindui.com",
    thumbnail: require("./img/keynote.tailwindui.com.png").default,
    video: "/showcase-videos/keynote.tailwindui.com.mp4",
    description: "Sitio web de conferencia",
    isTemplate: true,
  },
  {
    name: "KeepGrading",
    url: "https://keepgrading.com",
    thumbnail: require("./img/keepgrading.com.png").default,
    video: "/showcase-videos/keepgrading.com.mp4",
    description: "Sitio web de aplicación SaaS",
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    thumbnail: require("./img/perplexity.ai.png").default,
    video: "/showcase-videos/perplexity.ai.mp4",
    description: "Sitio web de plataforma IA",
  },
  {
    name: "Fly.io",
    url: "https://fly.io",
    thumbnail: require("./img/fly.io.png").default,
    video: "/showcase-videos/fly.io.mp4",
    description: "Sitio web de marketing SaaS",
  },
  {
    name: "Syntax",
    url: "https://syntax.tailwindui.com",
    thumbnail: require("./img/syntax.tailwindui.com.png").default,
    video: "/showcase-videos/syntax.tailwindui.com.mp4",
    description: "Sitio web de documentación",
    isTemplate: true,
    dark: {
      thumbnail: require("./img/syntax.tailwindui.com-dark.png").default,
      video: "/showcase-videos/syntax.tailwindui.com-dark.mp4",
    },
  },
  {
    name: "Render",
    url: "https://render.com",
    thumbnail: require("./img/render.com.png").default,
    video: "/showcase-videos/render.com.mp4",
    description: "Sitio web de marketing SaaS",
  },
  {
    name: "Etsy Seller Handbook",
    url: "https://www.etsy.com/seller-handbook",
    thumbnail: require("./img/etsy.com.png").default,
    video: "/showcase-videos/etsy.com.mp4",
    description: "Sitio web de Marketplace",
  },
  {
    name: "Stripe Press",
    url: "https://press.stripe.com",
    thumbnail: require("./img/press.stripe.com.png").default,
    video: "/showcase-videos/press.stripe.com.mp4",
    description: "Tienda E-commerce",
  },
  {
    name: "Transistor",
    url: "https://transistor.fm",
    thumbnail: require("./img/transistor.fm.png").default,
    video: "/showcase-videos/transistor.fm.mp4",
    description: "Sitio web de marketing SaaS",
  },
  {
    name: "Refactoring UI",
    url: "https://refactoringui.com",
    thumbnail: require("./img/refactoringui.com.png").default,
    video: "/showcase-videos/refactoringui.com.mp4",
    description: "Sitio web de curso online",
  },
  {
    name: "Intercom Messenger",
    url: "https://www.intercom.com/messenger",
    thumbnail: require("./img/intercom.com.png").default,
    video: "/showcase-videos/intercom.com.mp4",
    description: "Sitio web de soporte al cliente",
  },
];

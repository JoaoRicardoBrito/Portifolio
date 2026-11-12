import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Alex_Brush } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
  preload: false,
});
const script = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-ab",
  display: "block",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joaoricardo.vercel.app"),
  title: {
    default: `${profile.shortName} | Desenvolvedor Full-Stack`,
    template: `%s | ${profile.shortName}`,
  },
  description:
    "Portfólio de João Ricardo de Brito — Desenvolvedor Full-Stack em Teresina, PI. Next.js, NestJS, IA aplicada e automação.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: `${profile.shortName} | Desenvolvedor Full-Stack`,
    description: "Next.js, NestJS, IA aplicada e automação de dados.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

// Roda antes da pintura: pula a intro "olá" se já foi vista nesta sessão.
const introScript = `try{if(sessionStorage.getItem('intro')){document.documentElement.setAttribute('data-seen','')}else{sessionStorage.setItem('intro','1')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${mono.variable} ${script.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

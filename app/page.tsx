import Link from "next/link";
import { profile } from "@/lib/data";
import { ArrowDownRight, Bot, Github, Linkedin, Mail, Zap } from "@/components/icons";

function Rays() {
  // Feixes de luz estáticos (só CSS, sem custo de animação)
  const beam = (style: React.CSSProperties) => (
    <div className="absolute top-0" style={{ width: 240, height: 1380, ...style }} />
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      <div className="absolute top-0 left-0 h-screen w-screen">
        {beam({
          left: 0,
          width: 560,
          transform: "translateY(-300px) rotate(-45deg)",
          background:
            "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0,0%,100%,.15) 0, hsla(0,0%,100%,.05) 50%, transparent 80%)",
        })}
        {beam({
          left: 0,
          transformOrigin: "top left",
          transform: "rotate(-45deg) translate(5%, -50%)",
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(0,0%,100%,.1) 0, hsla(0,0%,100%,.02) 80%, transparent 100%)",
        })}
      </div>
      <div className="absolute top-0 right-0 h-screen w-screen">
        {beam({
          right: 0,
          width: 560,
          transform: "translateY(-300px) rotate(45deg)",
          background:
            "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0,0%,100%,.15) 0, hsla(0,0%,100%,.05) 50%, transparent 80%)",
        })}
        {beam({
          right: 0,
          transformOrigin: "top right",
          transform: "rotate(45deg) translate(-5%, -50%)",
          background:
            "radial-gradient(50% 50% at 50% 50%, hsla(0,0%,100%,.1) 0, hsla(0,0%,100%,.02) 80%, transparent 100%)",
        })}
      </div>
    </div>
  );
}

const big =
  "rise text-shiny px-2 md:px-4 text-[clamp(2.5rem,11vw,13rem)] font-black leading-[0.85] tracking-tighter";
const social =
  "absolute z-20 text-foreground/60 transition-colors hover:text-foreground focus-visible:text-foreground";

export default function Home() {
  return (
    <>
      {/* Intro "olá" — some sozinha via CSS e é pulada se já vista na sessão */}
      <div
        aria-hidden
        className="intro fixed inset-0 z-[1000] flex items-center justify-center bg-background"
      >
        <span className="intro-word font-script text-7xl sm:text-8xl md:text-9xl">olá</span>
      </div>

      <div className="relative flex min-h-[100svh] w-full flex-col overflow-hidden">
        <div aria-hidden className="bg-dots absolute inset-0 z-0 opacity-20" />
        <Rays />

        <main className="relative z-10 mx-auto flex w-full max-w-[105rem] flex-1 flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="relative flex w-full flex-col justify-center gap-4 px-6 md:items-center">
            <div className="relative items-center gap-8 md:flex">
              <p
                className="slide-l max-w-[220px] pb-4 text-start text-[10px] leading-relaxed font-medium tracking-[0.2em] text-muted uppercase md:pb-0 md:text-right md:text-xs"
                style={{ "--d": "0.3s" } as React.CSSProperties}
              >
                Oi, eu sou {profile.name}. Construo produtos web e sistemas com IA aplicada.
              </p>
              <div className="relative">
                <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className={`${social} -top-6 right-2`}>
                  <Github className="h-7 w-7 md:h-8 md:w-8" />
                </a>
                <h1 className={big} style={{ "--d": "0s" } as React.CSSProperties}>
                  IA &amp; WEB
                </h1>
              </div>
            </div>

            <div className="relative items-center gap-8 md:flex">
              <div className="relative">
                {profile.linkedin ? (
                  <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className={`${social} -top-8 left-4`}>
                    <Linkedin className="h-7 w-7 md:h-8 md:w-8" />
                  </a>
                ) : null}
                <a href={`mailto:${profile.email}`} aria-label="E-mail" className={`${social} -bottom-10 right-24 md:right-36`}>
                  <Mail className="h-7 w-7 md:h-8 md:w-8" />
                </a>
                <p className={`${big} flex items-center`} style={{ "--d": "0.1s" } as React.CSSProperties}>
                  <span>SOFT</span>
                  <Zap className="mx-[0.03em] h-[0.8em] w-[0.8em] shrink-0 text-sky-400" strokeWidth={1.5} />
                  <span>WARE</span>
                </p>
              </div>
            </div>

            <div className="relative items-center gap-8 md:flex">
              <p className={`${big} flex items-center`} style={{ "--d": "0.2s" } as React.CSSProperties}>
                <span>EN</span>
                <Bot className="mx-[0.03em] h-[0.85em] w-[0.85em] shrink-0 fill-yellow-500/10 text-yellow-500" />
                <span>GINEER</span>
              </p>
              <p
                className="slide-r max-w-[250px] pt-4 text-[10px] leading-relaxed font-medium tracking-widest text-muted uppercase md:max-w-[200px] md:pt-8 md:text-xs"
                style={{ "--d": "0.4s" } as React.CSSProperties}
              >
                Aberto a freelas, colaborações e oportunidades — remoto ou presencial.
              </p>
            </div>
          </div>

          <div
            className="rise mx-auto mt-12 w-full max-w-[105rem] px-8 md:mt-24 md:px-20"
            style={{ "--d": "0.5s" } as React.CSSProperties}
          >
            <div className="flex items-center gap-6">
              <div className="hidden h-px flex-1 bg-line md:block" />
              <span className="text-[10px] font-bold tracking-[0.3em] whitespace-nowrap text-muted uppercase md:text-xs">
                {profile.location} — {profile.year}
              </span>
              <Link href="/curriculo" className="group flex items-center" aria-label="Ver currículo">
                <span className="relative flex h-12 w-12 items-center overflow-hidden rounded-full bg-white shadow-xl transition-[width] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-44 group-focus-visible:w-44">
                  <span className="pr-12 pl-6 text-[10px] font-black tracking-widest whitespace-nowrap text-black uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:delay-150 group-focus-visible:opacity-100">
                    Ver currículo
                  </span>
                  <span className="absolute right-0 flex size-12 items-center justify-center text-black transition-transform duration-500 group-hover:-rotate-45">
                    <ArrowDownRight className="h-5 w-5" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </main>

        <div className="absolute top-1/2 left-0 z-50 hidden -translate-y-1/2 md:flex">
          <div className="rounded-r-3xl border-y border-r border-zinc-200 bg-white px-4 py-10 text-[10px] font-black tracking-[0.5em] text-black uppercase shadow-2xl">
            <span className="[writing-mode:vertical-rl]">Disponível para oportunidades</span>
          </div>
        </div>
      </div>
    </>
  );
}

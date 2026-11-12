import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  education,
  experience,
  githubLanguages,
  languages,
  learningNext,
  marqueeBottom,
  marqueeTop,
  ongoing,
  profile,
  projects,
  services,
  skillGroups,
  techLogos,
} from "@/lib/data";
import LanguageChart from "@/components/LanguageChart";
import { ArrowLeft, ArrowUpRight, Github, Linkedin, Mail, Phone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Currículo",
  description: `Sobre, experiência, projetos e habilidades de ${profile.name}.`,
};

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] text-muted uppercase md:text-xs">
      <span className="font-mono text-foreground/40">{n}</span>
      <span className="h-px w-10 bg-line" />
      <span>{children}</span>
    </div>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28">
      {children}
    </section>
  );
}

function Marquee({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const row = items.map((t) => (
    <span key={t} className="flex items-center gap-8 pr-8 text-3xl font-black tracking-tighter text-foreground/80 uppercase md:text-5xl">
      {t}
      <span className="text-foreground/20">✦</span>
    </span>
  ));
  return (
    <div className="marquee overflow-hidden py-3">
      <div className="marquee-track" data-reverse={reverse ? "" : undefined}>
        {row}
        <span aria-hidden className="contents">{row}</span>
      </div>
    </div>
  );
}

const nav = [
  ["sobre", "Sobre"],
  ["experiencia", "Experiência"],
  ["projetos", "Projetos"],
  ["habilidades", "Skills"],
  ["andamento", "Em andamento"],
  ["contato", "Contato"],
] as const;

export default function Curriculo() {
  return (
    <div className="relative min-h-screen">
      <div aria-hidden className="bg-dots pointer-events-none fixed inset-0 z-0 opacity-[0.12]" />

      {/* Barra superior */}
      <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-muted transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Início
          </Link>
          <nav className="hidden gap-8 md:flex">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-[11px] font-semibold tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <a href="#contato" className="rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-widest text-black uppercase transition-transform hover:scale-105">
            Contato
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-6 md:px-10 md:pt-28">
          <p className="rise mb-6 text-[10px] font-bold tracking-[0.3em] text-muted uppercase md:text-xs">
            {profile.role}
          </p>
          <h1
            className="rise text-shiny pt-[0.15em] text-[clamp(2.5rem,9vw,8rem)] leading-[0.9] font-black tracking-tighter"
            style={{ "--d": "0.1s" } as React.CSSProperties}
          >
            JOÃO RICARDO
            <br />
            DE BRITO
          </h1>
        </div>

        {/* Sobre */}
        <Section id="sobre">
          <Label n="01">Sobre mim</Label>
          <div className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-16">
            <div className="reveal relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-3xl border border-line bg-card">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={`Foto de ${profile.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-bottom transition-transform duration-700 hover:scale-[1.03]"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#262626,#0a0a0a)] text-7xl font-black tracking-tighter text-foreground/20">
                  JR
                </div>
              )}
            </div>
            <div className="reveal">
              <p className="text-xl leading-relaxed text-foreground/90 md:text-2xl">{profile.summary}</p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
                {[
                  ["Local", profile.location],
                  ["Formação", "Eng. de Software"],
                  ["Idiomas", "PT · EN"],
                  ["Status", "Disponível"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase">{k}</dt>
                    <dd className="mt-2 text-sm font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* O que faço */}
        <Section id="servicos">
          <Label n="02">O que faço</Label>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {services.map((s, i) => (
              <div key={s.title} className="reveal group bg-background p-8 transition-colors hover:bg-card md:p-10">
                <span className="font-mono text-xs text-foreground/30">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experiência */}
        <Section id="experiencia">
          <Label n="03">Experiência</Label>
          <ol className="relative border-l border-line">
            {experience.map((e) => (
              <li key={e.company} className="reveal relative pb-16 pl-8 last:pb-0 md:pl-12">
                <span className="absolute top-2 -left-[5px] h-[9px] w-[9px] rounded-full bg-white ring-4 ring-background" />
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-2xl font-black tracking-tight md:text-4xl">
                    {e.role} <span className="text-muted">· {e.company}</span>
                  </h3>
                  <span className="font-mono text-xs tracking-wider text-muted uppercase">{e.period}</span>
                </div>
                <p className="mt-1 text-xs font-bold tracking-[0.2em] text-foreground/40 uppercase">{e.type}</p>
                <ul className="mt-6 space-y-3">
                  {e.items.map((it) => (
                    <li key={it} className="flex gap-3 leading-relaxed text-foreground/80">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-foreground/40" />
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projetos */}
        <Section id="projetos">
          <Label n="04">Portfólio</Label>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => {
              const Card = p.link ? "a" : "div";
              return (
                <Card
                  key={p.title}
                  {...(p.link ? { href: p.link, target: "_blank", rel: "noopener" } : {})}
                  className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-card transition-colors hover:border-foreground/25"
                >
                  <div
                    className="relative aspect-[16/9] overflow-hidden border-b border-line"
                    style={p.imageBg ? { background: p.imageBg } : undefined}
                  >
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`transition-transform duration-700 group-hover:scale-105 ${
                          p.imageFit === "contain" ? "object-contain p-5 md:p-6" : "object-cover"
                        }`}
                      />
                    ) : (
                      <div className="bg-dots flex h-full items-center justify-center bg-[#0d0d0d]">
                        <span className="px-6 text-center text-3xl leading-none font-black tracking-tighter text-foreground/15 uppercase md:text-4xl">
                          {p.title}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-muted uppercase">{p.category}</p>
                        <h3 className="mt-2 text-2xl font-black tracking-tight">{p.title}</h3>
                      </div>
                      {p.link ? (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      ) : null}
                    </div>
                    <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-foreground/70">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* Habilidades */}
        <section id="habilidades" className="scroll-mt-24 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <Label n="05">Skills</Label>
          </div>
          <Marquee items={marqueeTop} />
          <Marquee items={marqueeBottom} reverse />
          <div className="mx-auto mt-16 grid max-w-6xl gap-x-10 gap-y-8 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.label} className="reveal border-t border-line pt-5">
                <h3 className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">{g.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 leading-relaxed text-foreground/85">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-1.5">
                      {techLogos[it] ? (
                        <img src={techLogos[it]} alt="" width={16} height={16} loading="lazy" decoding="async" className="max-h-4 max-w-4 object-contain" />
                      ) : null}
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-20 grid max-w-6xl gap-6 px-6 md:px-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="reveal">
              <LanguageChart data={githubLanguages} source="% do código nos repositórios do GitHub" />
            </div>

            <div className="reveal flex flex-col rounded-3xl border border-line bg-card p-6 md:p-10">
              <p className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">Próximos passos</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">Quero aprender</h3>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {learningNext.map((l) => (
                  <li
                    key={l.name}
                    className="group flex items-start gap-4 rounded-2xl border border-dashed border-line p-4 transition-colors hover:border-foreground/30"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">
                      {l.logo ? (
                        <img src={l.logo} alt="" width={32} height={32} loading="lazy" decoding="async" className="max-h-8 max-w-8 object-contain grayscale-[0.6] transition group-hover:grayscale-0" />
                      ) : (
                        <span className="font-mono text-sm font-bold text-foreground/60">{l.name.slice(0, 2)}</span>
                      )}
                    </span>
                    <span>
                      <span className="flex items-center gap-2 font-bold">
                        {l.name}
                        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[9px] tracking-wider text-muted uppercase">
                          em breve
                        </span>
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{l.why}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Formação */}
        <Section id="formacao">
          <Label n="06">Formação</Label>
          <div className="grid gap-10 md:grid-cols-[1fr_280px]">
            <div className="reveal">
              <h3 className="text-3xl font-black tracking-tight md:text-5xl">{education.course}</h3>
              <p className="mt-3 text-muted">
                {education.school} · <span className="font-mono text-sm">{education.period}</span>
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {education.subjects.map((s) => (
                  <li key={s} className="rounded-full border border-line px-4 py-1.5 text-sm text-foreground/80">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal rounded-3xl border border-line bg-card p-8">
              <h4 className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">Idiomas</h4>
              <ul className="mt-6 space-y-4">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between border-b border-line pb-3 last:border-0">
                    <span className="font-semibold">{l.name}</span>
                    <span className="font-mono text-xs text-muted uppercase">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Em andamento */}
        <Section id="andamento">
          <Label n="07">Em andamento</Label>
          {ongoing.map((p) => (
            <article key={p.title} className="reveal overflow-hidden rounded-3xl border border-line bg-card">
              <header className="flex flex-col gap-6 border-b border-line p-6 md:flex-row md:items-center md:justify-between md:p-10">
                <div>
                  <img src={p.logo} alt={p.title} width={720} height={169} loading="lazy" decoding="async" className="h-10 w-auto md:h-14" />
                  <p className="mt-4 text-sm font-semibold tracking-wide text-muted">{p.subtitle}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    {p.status}
                  </span>
                </div>
              </header>

              <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <h3 className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">O problema</h3>
                  <p className="mt-3 leading-relaxed text-foreground/85">{p.problem}</p>
                  <h3 className="mt-8 text-[10px] font-bold tracking-[0.25em] text-muted uppercase">A solução</h3>
                  <p className="mt-3 leading-relaxed text-foreground/85">{p.solution}</p>
                  <h3 className="mt-8 text-[10px] font-bold tracking-[0.25em] text-muted uppercase">Destaques técnicos</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                        <span className="mt-2 h-px w-4 shrink-0 bg-foreground/40" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">Metas do piloto</h3>
                    <dl className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                      {p.goals.map((g) => (
                        <div key={g.label} className="bg-card p-4">
                          <dt className="text-xl font-black tracking-tight tabular-nums md:text-2xl">{g.value}</dt>
                          <dd className="mt-1 text-[11px] leading-snug text-muted">{g.label}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">Progresso</h3>
                    {/* Barra estilo controle de volume: trilho, preenchimento e botão */}
                    <div
                      role="progressbar"
                      aria-label={`${p.title} em andamento`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={p.progress}
                      className="relative mt-5 h-1.5 w-full rounded-full bg-white/10"
                    >
                      <div className="grow-x h-full rounded-full bg-emerald-400" style={{ width: `${p.progress}%` }} />
                      <span
                        className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-400 bg-white shadow-[0_0_0_4px_rgb(52_211_153/0.15)]"
                        style={{ left: `${p.progress}%` }}
                      />
                    </div>
                    <p className="mt-3 text-xs font-semibold tracking-wide text-muted">(em andamento)</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-foreground/70">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </Section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
            <Label n="08">Contato</Label>
            <h2 className="text-shiny text-[clamp(3rem,12vw,10rem)] leading-[0.85] font-black tracking-tighter">
              VAMOS
              <br />
              CONVERSAR
            </h2>
            <p className="mt-8 max-w-xl text-lg text-muted">
              Tem um projeto, uma vaga ou uma ideia? Me chama — respondo rápido.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: `mailto:${profile.email}`, label: "E-mail", value: profile.email, Icon: Mail },
                { href: profile.whatsapp, label: "WhatsApp", value: profile.phone, Icon: Phone },
                { href: profile.github, label: "GitHub", value: "JoaoRicardoBrito", Icon: Github },
                ...(profile.linkedin
                  ? [{ href: profile.linkedin, label: "LinkedIn", value: "Perfil", Icon: Linkedin }]
                  : []),
              ].map(({ href, label, value, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-foreground/30"
                >
                  <Icon className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-foreground" />
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold tracking-[0.2em] text-muted uppercase">{label}</span>
                    <span className="block truncate text-sm font-semibold">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-[10px] font-bold tracking-[0.25em] text-muted uppercase sm:flex-row md:px-10">
          <span>© {profile.year} {profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </div>
  );
}

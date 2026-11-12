"use client";

import { useState } from "react";

type Lang = { name: string; pct: number; color: string; logo?: string };

// Barra segmentada (visão do todo) + lista ranqueada (comparação exata).
// Passar o mouse / tocar / focar em qualquer um destaca o item nos dois lugares.
export default function LanguageChart({ data, source }: { data: Lang[]; source: string }) {
  const [active, setActive] = useState<string | null>(null);
  const max = Math.max(...data.map((d) => d.pct));
  const current = data.find((d) => d.name === active);

  const bind = (name: string) => ({
    onMouseEnter: () => setActive(name),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(name),
    onBlur: () => setActive(null),
    onClick: () => setActive((a) => (a === name ? null : name)),
  });
  const dim = (name: string) => (active && active !== name ? "opacity-30" : "opacity-100");

  return (
    <figure className="rounded-3xl border border-line bg-card p-6 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <figcaption>
          <p className="text-[10px] font-bold tracking-[0.25em] text-muted uppercase">Linguagens mais usadas</p>
          <p className="mt-2 text-sm text-muted">{source}</p>
        </figcaption>
        {/* Leitura do item em destaque (substitui o tooltip, funciona no toque) */}
        <p aria-live="polite" className="text-right">
          <span className="block text-4xl font-black tracking-tighter tabular-nums md:text-5xl">
            {(current ?? data[0]).pct.toFixed(1).replace(".", ",")}%
          </span>
          <span className="text-xs font-semibold tracking-[0.15em] text-muted uppercase">
            {(current ?? data[0]).name}
          </span>
        </p>
      </div>

      {/* Barra segmentada: cada bloco é uma linguagem, com 2px de respiro */}
      <div className="mt-8 flex h-4 w-full gap-[2px] overflow-hidden rounded-[4px]" role="presentation">
        {data.map((d) => (
          <button
            key={d.name}
            type="button"
            tabIndex={-1}
            aria-hidden
            {...bind(d.name)}
            className={`grow-x h-full min-w-[3px] basis-0 cursor-pointer transition-opacity duration-200 ${dim(d.name)}`}
            style={{ flexGrow: d.pct, background: d.color }}
          />
        ))}
      </div>

      {/* Lista ranqueada: nome, barra no mesmo eixo e valor */}
      <ul className="mt-8 space-y-1">
        {data.map((d) => (
          <li key={d.name}>
            <button
              type="button"
              {...bind(d.name)}
              aria-label={`${d.name}: ${d.pct}%`}
              className={`grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 rounded-xl px-3 py-2.5 text-left transition-[opacity,background-color] duration-200 hover:bg-white/[0.03] focus-visible:bg-white/[0.05] focus-visible:outline-none sm:grid-cols-[160px_1fr_56px] ${dim(d.name)}`}
            >
              <span className="flex items-center gap-2.5 text-sm font-semibold">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: d.color }} />
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  {d.logo ? (
                    <img src={d.logo} alt="" width={20} height={20} loading="lazy" decoding="async" className="max-h-5 max-w-5 object-contain" />
                  ) : null}
                </span>
                {d.name}
              </span>
              <span className="col-span-2 row-start-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06] sm:col-span-1 sm:row-start-auto">
                <span
                  className="grow-x block h-full rounded-full"
                  style={{ width: `${(d.pct / max) * 100}%`, background: d.color }}
                />
              </span>
              <span className="col-start-2 row-start-1 text-right font-mono text-sm text-foreground/80 tabular-nums sm:col-start-auto sm:row-start-auto">
                {d.pct.toFixed(1).replace(".", ",")}%
              </span>
            </button>
          </li>
        ))}
      </ul>
    </figure>
  );
}

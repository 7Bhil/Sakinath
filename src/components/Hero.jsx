import { site } from "../data/site.js";
import { Arrow, Reveal, Spark } from "./ui.jsx";

// Effet de profondeur avec le curseur
const layer = "transition-transform duration-500 ease-out will-change-transform";
const depth = (px) => ({ transform: `translate3d(calc(var(--mx) * ${px}px), calc(var(--my) * ${px}px), 0)` });
const disc = "absolute left-1/2 top-[16%] aspect-square w-[92%] -ml-[46%] [container-type:inline-size]";
const tilt = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
  e.currentTarget.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
};
const reset = (e) => { e.currentTarget.style.setProperty("--mx", 0); e.currentTarget.style.setProperty("--my", 0); };

export default function Hero() {
  return (
    <section id="top" className="p-2 sm:p-3">
      <div className="relative overflow-hidden rounded-[1.75rem] rounded-b-[3.5rem] bg-bone text-ink sm:rounded-[2.5rem] sm:rounded-b-[9rem] lg:min-h-[calc(100svh-1.5rem)]">
        <div className="shell flex flex-col pt-32 sm:pt-[clamp(7.5rem,17svh,11rem)] lg:min-h-[calc(100svh-1.5rem)]">
          {/* Titre & Bannière */}
          <div className="relative z-10 mx-auto w-fit max-w-full text-center lg:text-[clamp(2.1rem,min(5.2vw,9.6svh),5.75rem)]">
            <Reveal delay={150} className="absolute -left-4 -top-12 hidden h-16 w-16 sm:block lg:-left-[1.25em] lg:top-0 lg:h-[1em] lg:w-[1em]"><Spark className="h-full w-full animate-spin-slow text-accent" /></Reveal>
            <Reveal delay={1150} className="absolute -right-4 bottom-1 hidden h-10 w-14 sm:block lg:-right-16 lg:h-12 lg:w-16"><svg viewBox="0 0 60 40" className="h-full w-full text-accent" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
              <path d="M4 30 30 8M22 36 54 14M44 38l12-8" />
            </svg></Reveal>
            
            <p className="font-cursive text-3xl text-accent sm:text-4xl lg:text-5xl font-semibold">
              « {site.bannerQuote} »
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.1rem,min(5.2vw,9.6svh),5.75rem)] font-bold leading-[1.12] tracking-[-0.03em]">
              <Reveal as="span" delay={450} className="block sm:inline-block">Mes journées,</Reveal><br className="hidden sm:block" />{" "}
              <Reveal as="span" delay={800} className="block sm:inline-block">vos déclics de vie</Reveal>
            </h1>
          </div>

          {/* Texte · portrait · repère */}
          <div className="grid flex-1 items-end gap-x-10 gap-y-12 pt-10 lg:grid-cols-[minmax(15rem,1fr)_auto_minmax(15rem,1fr)] lg:pt-[clamp(1.5rem,5svh,3.5rem)]">
            <Reveal delay={1900} className="relative z-10 text-center lg:self-center lg:pb-10 lg:text-left">
              <svg viewBox="0 0 40 30" className="mx-auto mb-6 h-7 w-9 text-accent lg:mx-0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
                <path d="M4 22 20 6M16 26 36 10" />
              </svg>
              <p className="mx-auto max-w-[21rem] text-base leading-[1.8] text-moss lg:mx-0 lg:text-lg">
                J'écris sur ce que je vis chaque jour à <strong>Porto-Novo</strong> et au-delà. Des récits intimes, authentiques et puissants qui vous poussent à vous relever, grandir et voir le monde autrement.
              </p>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="btn mt-9 whitespace-nowrap border border-ink/40 !px-7 !py-3 !text-sm hover:border-ink hover:bg-ink hover:text-bone lg:!text-base">
                Découvrir mes écrits sur Facebook ↗
              </a>
            </Reveal>

            {/* Portrait de Sakinath */}
            <Reveal
              delay={1300} onMouseMove={tilt} onMouseLeave={reset} style={{ "--mx": 0, "--my": 0 }}
              className="group/portrait relative order-last mx-auto w-full max-w-xl lg:order-none lg:w-fit lg:max-w-full"
            >
              <div className={`${disc} ${layer}`} style={depth(-16)}>
                <div className="h-full w-full rounded-full bg-ink/[0.13] transition-transform duration-700 group-hover/portrait:scale-[1.05]" />
              </div>
              <div className={`${disc} ${layer}`} style={depth(-8)} aria-hidden="true">
                <div className="h-full w-full scale-90 animate-spin-slow rounded-full border-2 border-dashed border-accent opacity-0 transition-[opacity,transform] duration-700 group-hover/portrait:scale-[1.14] group-hover/portrait:opacity-100" />
              </div>
              <svg viewBox="0 0 200 200" className={`absolute -left-[6%] top-[38%] w-[46%] text-ink ${layer}`} style={depth(-30)} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M150 20C70 10 10 70 30 130s90 70 130 30-10-110-60-90-50 80 0 90" />
              </svg>

              <div className="relative mx-auto flex justify-center overflow-hidden rounded-b-[4rem] lg:rounded-b-[6rem]">
                <img
                  src={site.images.hero} alt={`Portrait de ${site.name}`} width={800} height={950}
                  className={`relative mx-auto block max-h-[60svh] w-auto select-none rounded-3xl object-contain shadow-2xl transition-[transform,filter] duration-700 ease-out will-change-transform group-hover/portrait:scale-105 lg:max-h-[75svh]`} style={depth(10)} draggable="false"
                />
              </div>

              <div className="absolute bottom-6 left-1/2 w-max -translate-x-1/2 z-20">
                <Reveal delay={2500} className="flex flex-nowrap items-center gap-3 whitespace-nowrap sm:gap-5">
                  <a href={site.facebook} target="_blank" rel="noreferrer" className="btn group !gap-2 bg-accent !px-6 !py-3.5 !text-sm text-ink shadow-xl hover:bg-bone lg:!text-base">
                    Lire mes chroniques <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                  <a href="#about" className="btn border border-bone/20 bg-ink !px-6 !py-3.5 !text-sm text-bone shadow-xl hover:bg-bone hover:text-ink lg:!text-base">En savoir plus</a>
                </Reveal>
              </div>
            </Reveal>

            <Reveal delay={2150} className="relative z-10 flex flex-col items-center text-center lg:items-end lg:self-center lg:pb-10 lg:text-right">
              <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-moss">
                🇬🇧 English & 🇫🇷 Français
              </span>
              <p className="mt-5 whitespace-nowrap font-display text-3xl font-bold leading-none tracking-tight xl:text-4xl text-ink">Récits Vivants</p>
              <p className="mt-3 text-base text-moss-dim lg:text-lg">Partage de mes journées · Mindset</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

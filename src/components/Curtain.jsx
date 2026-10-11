import { useEffect, useState } from "react";

/**
 * Écran d'accueil au rafraîchissement :
 * - Fond noir / bleu nuit profond (#050914).
 * - Écriture cursive pure élégante (Dancing Script, Great Vibes, Parisienne, cursive).
 * - "Bonjour" ou "Bonsoir" selon l'heure, tracé lettre par lettre.
 * - Suivi d'un message doux, puis disparition automatique par fondu.
 */
export default function Curtain() {
  const [displayText, setDisplayText] = useState("");
  const [subText, setSubText] = useState("");
  const [phase, setPhase] = useState("writing"); // writing -> fading -> gone

  useEffect(() => {
    const hour = new Date().getHours();
    const salutation = hour >= 18 || hour < 5 ? "Bonsoir" : "Bonjour";

    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      delete root.dataset.stage;
      setPhase("gone");
      return;
    }

    root.dataset.stage = "closed";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // Tracé cursif lettre par lettre
    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx++;
      setDisplayText(salutation.slice(0, currentIdx));
      if (currentIdx >= salutation.length) {
        clearInterval(interval);
        setTimeout(() => {
          setSubText("Bienvenue dans mon quotidien & mes récits...");
        }, 350);
        setTimeout(() => {
          setPhase("fading");
          delete root.dataset.stage;
          document.body.style.overflow = "";
        }, 2200);
        setTimeout(() => {
          setPhase("gone");
          root.dataset.stage = "played";
        }, 2900);
      }
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050914] px-6 text-center text-bone transition-opacity duration-1000 ease-in-out ${
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex max-w-xl flex-col items-center">
        {/* Lueur dorée d'ambiance */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-72 w-72 rounded-full bg-accent/20 blur-[130px]"
        />

        {/* Mot manuscrit en cursive pure avec style inline garanti */}
        <h1
          style={{ fontFamily: "'Dancing Script', 'Great Vibes', 'Parisienne', cursive" }}
          className="relative text-8xl sm:text-9xl md:text-[10rem] font-bold tracking-wider text-accent py-4 select-none leading-none drop-shadow-md"
        >
          {displayText}
          <span className="inline-block animate-pulse text-bone/60 font-light ml-1 text-7xl sm:text-8xl">|</span>
        </h1>

        {/* Sous-titre cursif */}
        <p
          style={{ fontFamily: "'Dancing Script', 'Parisienne', cursive" }}
          className={`relative mt-4 text-3xl sm:text-4xl tracking-wide text-mist transition-all duration-700 ease-out select-none ${
            subText ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {subText}
        </p>

        {/* Signature */}
        <p
          className={`mt-6 font-display text-xs uppercase tracking-[0.3em] text-accent/80 transition-all duration-700 delay-200 ${
            subText ? "opacity-100" : "opacity-0"
          }`}
        >
          Sakinath Afounou · Storyteller
        </p>
      </div>
    </div>
  );
}

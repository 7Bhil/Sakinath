import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="shell py-14 sm:py-20">
      <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-2xl font-bold tracking-[0.12em]">{site.name.toUpperCase()}<span className="text-accent">.</span></p>
          <p className="mt-2 text-mist-dim">{site.role}</p>
          <p className="mt-1 text-xs text-mist-dim">{site.location} · {site.languages}</p>
          <p className="mt-5 max-w-sm font-handwriting text-2xl text-accent">« {site.bannerQuote} »</p>
        </div>
        <ul className="flex gap-8 font-display">
          <li><a className="link-line hover:text-accent font-semibold" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a className="link-line hover:text-accent" href={`mailto:${site.email}`}>E-mail</a></li>
        </ul>
      </div>
      <div className="mt-12 flex justify-between border-t border-bone/15 pt-6 text-sm text-mist-dim">
        <p>© 2026 {site.name} — Storytelleuse & Copywriter | Storytelling de Marque</p>
        <a href="#top" className="link-line">Retour en haut ↑</a>
      </div>
    </footer>
  );
}

import { site } from "../data/site.js";
import ContactForm from "./ContactForm.jsx";
import { Reveal, Spark } from "./ui.jsx";

export default function Contact() {
  return (
    <section id="contact" className="p-2 sm:p-3">
      <div className="relative overflow-hidden rounded-panel bg-bone py-24 text-ink sm:py-32">
        <Spark className="absolute -right-16 -top-16 h-64 w-64 animate-spin-slow text-accent sm:h-96 sm:w-96" />
        <div className="shell relative">
          <Reveal className="eyebrow">( Contact & Échange )</Reveal>
          <Reveal as="h2" delay={80} className="mt-8 font-display text-mega font-bold">
            Une collaboration ?<br /><span className="mark">Écrivons l'histoire.</span>
          </Reveal>
          <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-xl leading-relaxed text-moss sm:text-2xl">
                Que ce soit pour valoriser votre marque à travers une histoire mémorable, concevoir des textes qui font passer à l'action ou dynamiser vos réseaux sociaux, je serai ravie de collaborer avec vous.
              </p>
              <ul className="mt-10 flex flex-col gap-4 font-display text-lg font-medium">
                <li>
                  <a className="link-line text-accent font-bold" href={site.facebook} target="_blank" rel="noreferrer">
                    Page Facebook : facebook.com/sakinath.adebissi ↗
                  </a>
                </li>
                <li><a className="link-line break-all" href={`mailto:${site.email}`}>{site.email}</a></li>
                {site.phone && (
                  <li>
                    <a className="link-line text-ink" href={`tel:${site.phone.replace(/\s+/g, '')}`}>
                      📞 {site.phone}
                    </a>
                  </li>
                )}
                <li className="text-moss-dim">Localisation : {site.location}</li>
                <li className="text-moss-dim">Langues : {site.languages}</li>
              </ul>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

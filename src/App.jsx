import { useEffect } from "react";
import { notifyVisitOnce } from "./lib/visitNotifier.js";
import Curtain from "./components/Curtain.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Marquee from "./components/Marquee.jsx";
import WhyMe from "./components/WhyMe.jsx";
import Problem from "./components/Problem.jsx";
import Faq from "./components/Faq.jsx";
import Offer from "./components/Offer.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Prévient par e-mail lors d'une nouvelle visite
  useEffect(() => notifyVisitOnce(), []);

  return (
    <>
      <Curtain />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Problem />
        <WhyMe />
        <Faq />
        <Offer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

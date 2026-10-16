// Section « Ce que vous apporte mon Storytelling »
const icon = (n) => `/assets/icons/benefit-${n}.svg`;

export const benefits = [
  { 
    icon: icon("goal"), 
    title: "Storytelling de Marque", 
    text: "Sublimer les produits, les matières premières et le savoir-faire des artisans et créateurs avec une histoire humaine et captivante." 
  },
  { 
    icon: icon("talk"), 
    title: "Identification & Émotion", 
    text: "Fini les discours institutionnels froids : des récits authentiques ancrés dans le quotidien qui touchent directement le cœur de votre cible." 
  },
  { 
    icon: icon("quality"), 
    title: "Copywriting de Conversion", 
    text: "Maîtrise pointue des leviers d'action : accroches magnétiques, rythme soutenu et incitations fortes au passage à l'acte d'achat." 
  },
  { 
    icon: icon("mobile"), 
    title: "Viralité & Audience Engagée", 
    text: "Une capacité prouvée à capter l'attention (+369k vues sur un post, 9.8k abonnés) et à fédérer une véritable communauté." 
  },
  { 
    icon: icon("speed"), 
    title: "Sensibilité Multiculturelle", 
    text: "Expression fluide en Français, Anglais, Yoruba et Goun : une richesse linguistique au service des marques locales et internationales." 
  },
  { 
    icon: icon("fullstack"), 
    title: "Rigueur & Méthode (Mentorat)", 
    text: "Formée 6 mois aux méthodes éprouvées de copywriting avec Fritzel Adjaho pour allier créativité et stratégie commerciale." 
  },
];

// Comparaison : Contenu classique vs Storytelling immersif
export const comparison = [
  ["Contenus froids, sans âme ni émotion", "Récits vivants, vibrants d'humanité et de sincérité"],
  ["Conseils génériques vite oubliés", "Histoires marquantes qui créent un déclic durable"],
  ["Communication impersonnelle et distante", "Connexion authentique et proximité avec l'audience"],
  ["Posts invisibles dans le fil d'actualité", "Textes magnétiques qui retiennent la lecture jusqu'au bout"],
  ["Message confus ou trop académique", "Simplicité, clarté et impact direct sur le mindset"],
];

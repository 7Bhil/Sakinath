// Section « Ce que vous apporte mon Storytelling »
const icon = (n) => `/assets/icons/benefit-${n}.svg`;

export const benefits = [
  { 
    icon: icon("goal"), 
    title: "Storytelling Authentique & Vécu", 
    text: "Pas de théories abstraites : chaque texte est enraciné dans l'expérience réelle du quotidien, touchant directement le cœur des lecteurs." 
  },
  { 
    icon: icon("talk"), 
    title: "Édification du Mindset", 
    text: "Des leçons puissantes de résilience, de foi et de persévérance pour aider chacun à traverser ses propres épreuves avec force." 
  },
  { 
    icon: icon("quality"), 
    title: "Contenu Narratif Captivant", 
    text: "L'art de structurer un récit qui captive dès les premières lignes et retient l'attention jusqu'au dénouement inspirant." 
  },
  { 
    icon: icon("mobile"), 
    title: "Maîtrise des Réseaux Sociaux", 
    text: "Une présence vivante et régulière sur Facebook, bâtissant une communauté engagée autour de valeurs positives et constructives." 
  },
  { 
    icon: icon("speed"), 
    title: "Expression Bilingue (Français & Anglais)", 
    text: "Aisance totale pour concevoir et délivrer des messages narratifs puissants en français comme en anglais." 
  },
  { 
    icon: icon("fullstack"), 
    title: "Rigueur d'esprit & Sens du détail", 
    text: "L'alliance rare de la créativité littéraire et de la précision méthodologique (héritage de ma formation de gestionnaire)." 
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

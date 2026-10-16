// Compétences — Storytelling de marque, Copywriting & Création de contenus
const icon = (name) => `/assets/icons/${name}.svg`;

// Les 3 piliers majeurs de son profil
export const coreSkills = [
  { 
    n: "01", 
    name: "Storytelling de Marque", 
    role: "Sens, Histoire & Valeurs", 
    icon: icon("benefit-speed"),
    detail: "Mettre en avant les produits, les matières, les inspirations et le savoir-faire. Créer une relation humaine authentique entre la marque et son public." 
  },
  { 
    n: "02", 
    name: "Copywriting Percutant", 
    role: "Écriture & Conversion", 
    icon: icon("benefit-quality"),
    detail: "Formée 6 mois par Fritzel Adjaho : travail des accroches, du rythme, de la psychologie des lecteurs et des appels à l'action précis." 
  },
  { 
    n: "03", 
    name: "Contenus Narratifs Réseaux", 
    role: "Viralité & Communauté", 
    icon: icon("benefit-goal"),
    detail: "Création de publications engageantes sur Facebook (jusqu'à 369k vues), fidélisation d'une communauté et analyse fine des réactions de l'audience." 
  },
];

export const skillGroups = [
  { 
    n: "01", 
    title: "Storytelling & Récits", 
    items: [
      { name: "Storytelling de Marque", icon: icon("benefit-speed") },
      { name: "Mise en valeur de produit", icon: icon("focus") },
      { name: "Structure & Rythme narratif", icon: icon("approach") },
      { name: "Chutes & Déclics mémorables", icon: icon("role") },
      { name: "Expériences vécues & Mindset", icon: icon("benefit-goal") },
      { name: "Identification & Émotion", icon: icon("benefit-quality") },
    ]
  },
  { 
    n: "02", 
    title: "Copywriting & Rédaction", 
    items: [
      { name: "Accroches magnétiques", icon: icon("benefit-goal") },
      { name: "Mentorat Fritzel Adjaho (6 mois)", icon: icon("focus") },
      { name: "Publications engageantes", icon: icon("role") },
      { name: "Appels à l'action (CTA)", icon: icon("approach") },
      { name: "Psychologie d'audience", icon: icon("benefit-quality") },
    ]
  },
  { 
    n: "03", 
    title: "Centres d'intérêt & Univers", 
    items: [
      { name: "Mode africaine", icon: icon("benefit-goal") },
      { name: "Culture & Héritage", icon: icon("focus") },
      { name: "Marques locales & Artisans", icon: icon("role") },
      { name: "Prise de parole en public", icon: icon("approach") },
      { name: "Polyglotte (FR, EN, Yoruba, Goun)", icon: icon("benefit-talk") },
    ]
  },
];

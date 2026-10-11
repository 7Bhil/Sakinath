// Compétences — adaptées à la Gestion des Transports, Logistique et Transit
const icon = (name) => `/assets/icons/${name}.svg`;

// Les 3 piliers majeurs de son profil
export const coreSkills = [
  { 
    n: "01", 
    name: "Supply Chain & Fret", 
    role: "Transport Multimodal & Corridors", 
    icon: icon("benefit-speed"),
    detail: "Planification des tournées, affrètement routier/maritime, optimisation des flux sur le corridor Bénin-Hinterland." 
  },
  { 
    n: "02", 
    name: "Gestion des Stocks", 
    role: "Entreposage & Plateformes", 
    icon: icon("benefit-quality"),
    detail: "Tenue des registres d'inventaire, rotation FIFO/LIFO, gestion des magasins et prévention des ruptures de stock." 
  },
  { 
    n: "03", 
    name: "Douane & Transit", 
    role: "Procédures d’Import / Export", 
    icon: icon("benefit-goal"),
    detail: "Maîtrise des Incoterms, liasse documentaire (connaissement, déclaration douanière), passage portuaire et dédouanement." 
  },
];

export const skillGroups = [
  { 
    n: "01", 
    title: "Logistique & Fret", 
    items: [
      { name: "Transport Multimodal", icon: icon("benefit-speed") },
      { name: "Gestion de Flotte", icon: icon("focus") },
      { name: "Planification des Flux", icon: icon("approach") },
      { name: "Suivi des Expéditions (Tracking)", icon: icon("role") },
      { name: "Calcul des Coûts Logistiques", icon: icon("benefit-goal") },
      { name: "Gestion des Entrepôts", icon: icon("benefit-quality") },
    ]
  },
  { 
    n: "02", 
    title: "Transit & Réglementation", 
    items: [
      { name: "Incoterms (CCI)", icon: icon("benefit-goal") },
      { name: "Procédures Douanières", icon: icon("focus") },
      { name: "Liasse Documentaire Import/Export", icon: icon("role") },
      { name: "Réglementation Portuaire & UEMOA", icon: icon("approach") },
      { name: "Gestion des Litiges & Assurances", icon: icon("benefit-quality") },
    ]
  },
  { 
    n: "03", 
    title: "Gestion, Outils & Méthodes", 
    items: [
      { name: "Comptabilité & Gestion (Bac G2)", icon: icon("benefit-goal") },
      { name: "Excel Avancé & Tableaux de bord", icon: icon("focus") },
      { name: "Logiciels de Gestion / ERP", icon: icon("role") },
      { name: "Organisation & Événementiel", icon: icon("approach") },
      { name: "Négociation & Relation Fournisseurs", icon: icon("benefit-talk") },
    ]
  },
];

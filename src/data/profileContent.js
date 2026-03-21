export const LANGUAGES = ['fr', 'en'];
export const RECRUITER_TYPES = ['cabinet', 'entreprise', 'autre'];

export const navItems = [
  { path: '/', fr: 'Accueil', en: 'Home' },
  { path: '/recruteur-30s', fr: 'Version 30 secondes', en: '30-second version' },
  { path: '/cv', fr: 'CV', en: 'Resume' },
  { path: '/projets', fr: 'Projets', en: 'Projects' },
  { path: '/lettres', fr: 'Lettre de motivation', en: 'Cover Letter' },
  { path: '/competences', fr: 'Compétences', en: 'Skills' },
  { path: '/contact', fr: 'Contact', en: 'Contact' },
];

export const recruiterLabels = {
  fr: {
    cabinet: 'Cabinet comptable',
    entreprise: 'Entreprise (compta / finance)',
    autre: 'Autre structure',
  },
  en: {
    cabinet: 'Accounting firm',
    entreprise: 'Company (accounting / finance)',
    autre: 'Other organisation',
  },
};

export const homeContent = {
  fr: {
    eyebrow: 'Accueil',
    title: 'Bienvenue sur le portfolio de Yohann-Axel Bouah',
    subtitle:
      'Profil alternance comptabilité et gestion. Explorez le CV, les projets, les compétences et les documents en un seul espace.',
    modeTitle: 'Préférences sélectionnées',
    modeHint: 'Langue et structure définies à l\'ouverture de l\'application.',
    heroNote:
      'Yohann-Axel Bouah · Alternance Comptabilité & Gestion · Lille · Rythme 3 semaines en entreprise et 1 semaine de cours',
    smartCardTitle: 'Positionnement du profil',
    smartCardSubtitle: 'Vue synthétique des forces clés pour ce contexte.',
    strengthsTitle: 'Compétences mises en avant',
    strengthsSubtitle: 'Les points les plus utiles pour le poste ciblé.',
    timelineTitle: 'Disponibilité',
    timelineItems: [
      { label: 'Immédiat', detail: 'Ouvert aux échanges et entretiens' },
      {
        label: 'Rentrée 2026',
        detail: 'Démarrage alternance Bachelor Gestion Finance (IGEFI Lille)',
      },
      {
        label: 'Rythme',
        detail: '3 semaines en entreprise et 1 semaine de cours',
      },
    ],
    impactTitle: 'Ce que je peux apporter dès le départ',
    impactItems: [
      'Saisie comptable clients/fournisseurs',
      'Déclarations TVA et suivi des échéances',
      'Usage quotidien de Pennylane et Excel',
      'Relation client et coordination à distance',
    ],
  },
  en: {
    eyebrow: 'Home',
    title: 'Welcome to Yohann-Axel Bouah portfolio',
    subtitle:
      'Accounting and management work-study profile. Explore resume, projects, skills and documents in one place.',
    modeTitle: 'Selected preferences',
    modeHint: 'Language and organisation type selected at app entry.',
    heroNote:
      'Yohann-Axel Bouah · Accounting & Management work-study candidate · Lille · 3 weeks in company and 1 week of classes',
    smartCardTitle: 'Profile positioning',
    smartCardSubtitle: 'Quick overview of key strengths for this context.',
    strengthsTitle: 'Highlighted skills',
    strengthsSubtitle: 'Most relevant strengths for the target role.',
    timelineTitle: 'Availability',
    timelineItems: [
      { label: 'Immediate', detail: 'Open to interviews and hiring discussions' },
      {
        label: '2026 intake',
        detail: 'Work-study start for Bachelor in Finance Management (IGEFI Lille)',
      },
      { label: 'Schedule', detail: '3 weeks in company and 1 week of classes' },
    ],
    impactTitle: 'What I can contribute from day one',
    impactItems: [
      'Customer/supplier bookkeeping',
      'VAT returns and deadline tracking',
      'Daily Pennylane and Excel workflow',
      'Client communication and remote coordination',
    ],
  },
};

export const skillSignals = {
  accounting: 9,
  vat: 8,
  client: 8,
  digital: 8,
  analysis: 7,
  process: 7,
  entrepreneurship: 7,
  adaptability: 9,
  communication: 8,
  teamwork: 8,
};

export const signalLabels = {
  fr: {
    accounting: 'Maîtrise comptable',
    vat: 'Conformité TVA',
    client: 'Relation client',
    digital: 'Aisance outils numériques',
    analysis: 'Analyse des données',
    process: 'Organisation des processus',
    entrepreneurship: 'Esprit entrepreneurial',
    adaptability: 'Adaptabilité',
    communication: 'Communication',
    teamwork: 'Travail en équipe',
  },
  en: {
    accounting: 'Accounting execution',
    vat: 'VAT compliance',
    client: 'Client management',
    digital: 'Digital fluency',
    analysis: 'Data analysis',
    process: 'Process mindset',
    entrepreneurship: 'Entrepreneurial mindset',
    adaptability: 'Adaptability',
    communication: 'Communication',
    teamwork: 'Team collaboration',
  },
};

export const recruiterWeights = {
  cabinet: {
    accounting: 1.4,
    vat: 1.4,
    client: 1.2,
    process: 1.15,
    digital: 1.05,
    communication: 1,
    teamwork: 0.9,
    analysis: 0.9,
    adaptability: 0.9,
    entrepreneurship: 0.7,
  },
  entreprise: {
    accounting: 1.2,
    analysis: 1.25,
    process: 1.2,
    teamwork: 1.1,
    communication: 1.05,
    digital: 1.05,
    vat: 1,
    client: 0.95,
    adaptability: 1,
    entrepreneurship: 0.85,
  },
  autre: {
    adaptability: 1.35,
    entrepreneurship: 1.35,
    communication: 1.2,
    digital: 1.15,
    client: 1.1,
    teamwork: 1,
    process: 0.95,
    accounting: 0.95,
    analysis: 0.9,
    vat: 0.75,
  },
};

export const cvContent = {
  fr: {
    title: 'CV · Yohann-Axel Bouah',
    role: 'Alternant comptabilité & gestion',
    subtitle:
      'Diplômé du BTS Comptabilité et Gestion, en recherche d\'alternance pour le Bachelor Gestion Finance à l\'IGEFI Lille.',
    profileTitle: 'Profil',
    profile:
      'Actuellement assistant comptable chez Finance Conseil (cabinet à Paris, mission en distanciel depuis Lille), je contribue à la production comptable, aux déclarations de TVA et au suivi des dossiers clients. Je suis également à l\'aise en anglais et j\'aime apprendre rapidement de nouveaux outils et méthodes de travail.',
    contactTitle: 'Coordonnées',
    contacts: [
      { label: 'Localisation', value: 'Lille, France' },
      { label: 'Téléphone', value: '06 25 65 43 16' },
      { label: 'Email', value: 'yohann_bouah@icloud.com' },
      {
        label: 'LinkedIn',
        value: '/in/yohann-axel-bouah-69b65a2a3',
        href: 'https://www.linkedin.com/in/yohann-axel-bouah-69b65a2a3',
      },
      {
        label: 'Zafira Séjour',
        value: 'linktr.ee/zafira.sejour',
        href: 'https://linktr.ee/zafira.sejour',
      },
    ],
    experienceTitle: 'Expérience professionnelle',
    experiences: [
      {
        title: 'Assistant comptable · Finance Conseil',
        meta: 'Octobre 2024 - Aujourd\'hui · Paris (distanciel)',
        bullets: [
          'Saisie comptable clients et fournisseurs.',
          'Préparation des déclarations de taxe sur la valeur ajoutée.',
          'Suivi documentaire et contrôle de cohérence des pièces.',
          'Communication régulière avec les clients du cabinet.',
        ],
        tags: ['Pennylane', 'TVA', 'Saisie comptable', 'Relation client'],
      },
    ],
    educationTitle: 'Formation',
    education: [
      {
        title: 'Bachelor Gestion Finance · IGEFI Lille',
        meta: 'Rentrée 2026 · Alternance souhaitée',
        detail:
          'Rythme visé: 3 semaines en entreprise et 1 semaine de cours.',
      },
      {
        title: 'BTS Comptabilité et Gestion · IGEFI Lille',
        meta: 'Diplôme obtenu en 2026',
        detail:
          'Formation centrée sur la comptabilité générale, la fiscalité, la gestion et les outils numériques professionnels.',
      },
    ],
    skillsTitle: 'Compétences clés',
    skills: [
      'Saisie comptable',
      'Déclarations TVA',
      'Excel',
      'Pennylane',
      'EBP',
      'Anglais professionnel',
      'Apprentissage rapide',
    ],
    certificationsTitle: 'Certifications',
    certifications: [
      'Certification Pennylane (en cours)',
      'Certification Voltaire (obtenue)',
    ],
  },
  en: {
    title: 'Resume · Yohann-Axel Bouah',
    role: 'Accounting & management apprentice',
    subtitle:
      'BTS Accounting and Management graduate seeking a work-study role for the Bachelor in Finance Management at IGEFI Lille.',
    profileTitle: 'Profile',
    profile:
      'I currently work as an assistant accountant at Finance Conseil (Paris-based firm, remote from Lille). I contribute to bookkeeping production, VAT returns and client file monitoring. I am comfortable in English and I enjoy learning new tools and processes quickly.',
    contactTitle: 'Contact details',
    contacts: [
      { label: 'Location', value: 'Lille, France' },
      { label: 'Phone', value: '+33 6 25 65 43 16' },
      { label: 'Email', value: 'yohann_bouah@icloud.com' },
      {
        label: 'LinkedIn',
        value: '/in/yohann-axel-bouah-69b65a2a3',
        href: 'https://www.linkedin.com/in/yohann-axel-bouah-69b65a2a3',
      },
      {
        label: 'Zafira Sejour',
        value: 'linktr.ee/zafira.sejour',
        href: 'https://linktr.ee/zafira.sejour',
      },
    ],
    experienceTitle: 'Professional experience',
    experiences: [
      {
        title: 'Assistant accountant · Finance Conseil',
        meta: 'October 2024 - Present · Paris (remote)',
        bullets: [
          'Customer and supplier bookkeeping.',
          'Preparation of VAT returns.',
          'Document quality checks and accounting consistency review.',
          'Regular communication with firm clients.',
        ],
        tags: ['Pennylane', 'VAT', 'Bookkeeping', 'Client relations'],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        title: 'Bachelor in Finance Management · IGEFI Lille',
        meta: '2026 intake · Work-study target',
        detail: 'Target rhythm: 3 weeks in company and 1 week of classes.',
      },
      {
        title: 'BTS Accounting and Management · IGEFI Lille',
        meta: 'Graduated in 2026',
        detail:
          'Curriculum focused on accounting, taxation, management and professional digital tools.',
      },
    ],
    skillsTitle: 'Core skills',
    skills: [
      'Bookkeeping',
      'VAT returns',
      'Excel',
      'Pennylane',
      'EBP',
      'Professional English',
      'Fast learner',
    ],
    certificationsTitle: 'Certifications',
    certifications: ['Pennylane certification (in progress)', 'Voltaire certification'],
  },
};

export const projectsContent = {
  fr: {
    title: 'Projets professionnels & entrepreneuriaux',
    subtitle:
      'Des expériences concrètes, orientées exécution, relation client et montée en compétences finance.',
    sections: [
      {
        title: 'Comptabilité & finance',
        projects: [
          {
            title: 'Portefeuille clients · Finance Conseil',
            period: '2024 - 2026',
            bullets: [
              'Saisie comptable quotidienne et catégorisation des pièces.',
              'Préparation des déclarations TVA et suivi des échéances.',
              'Mise à jour régulière des dossiers sur Pennylane.',
            ],
            tags: ['Pennylane', 'TVA', 'Fiabilité opérationnelle'],
          },
          {
            title: 'Suivi d\'un portefeuille de TPE',
            period: '2025 - 2026',
            bullets: [
              'Accompagnement des clients sur les pièces comptables attendues.',
              'Priorisation des tâches selon deadlines et criticité.',
            ],
            tags: ['Organisation', 'Relation client', 'Rigueur'],
          },
        ],
      },
      {
        title: 'Entrepreneuriat & terrain',
        projects: [
          {
            title: 'Zafira Séjour (ex-Havana Suits)',
            period: '2023 - Aujourd\'hui',
            bullets: [
              'Développement d\'une activité de séjours en Côte d\'Ivoire.',
              'Gestion des réservations, relation client et présence digitale.',
            ],
            tags: ['Entrepreneuriat', 'Marketing', 'Service client'],
          },
          {
            title: 'Straight Walk Marketing · Chargé de terrain',
            period: '2021',
            bullets: [
              'Identification de prospects et accompagnement de prestataires.',
              'Renforcement des compétences en communication persuasive.',
            ],
            tags: ['Terrain', 'Communication', 'Négociation'],
          },
          {
            title: 'Coconut\'s Village · Stage hôtellerie',
            period: '2020',
            bullets: [
              'Découverte de l\'exploitation hôtelière et du service client.',
            ],
            tags: ['Hospitalité', 'Service', 'Découverte métier'],
          },
        ],
      },
    ],
    appsTitle: 'Applications',
    appsSubtitle: 'Clique sur une icône pour voir le rôle de chaque application.',
    apps: [
      {
        id: 'fox-erp',
        name: 'Fox ERP',
        short: 'FX',
        summary:
          'Application ERP pour centraliser la gestion clients, la facturation et le suivi des opérations comptables.',
      },
      {
        id: 'maya-mixa',
        name: 'Maya Mixa',
        short: 'MM',
        summary:
          'Application orientée contenus et communication, utilisée pour organiser les publications et la relation audience.',
      },
      {
        id: 'maya-home',
        name: 'Maya Home',
        short: 'MH',
        summary:
          'Interface de pilotage global: accès rapide aux outils, indicateurs et fonctionnalités principales.',
      },
      {
        id: 'cabinet-yao',
        name: 'Cabinet Yao',
        short: 'CY',
        summary:
          'Plateforme métier pour la gestion d\'un cabinet: dossiers, suivi client et organisation des tâches.',
      },
    ],
  },
  en: {
    title: 'Professional & entrepreneurial projects',
    subtitle:
      'Execution-focused experiences across accounting, client service and entrepreneurial operations.',
    sections: [
      {
        title: 'Accounting & finance',
        projects: [
          {
            title: 'Client portfolio · Finance Conseil',
            period: '2024 - 2026',
            bullets: [
              'Daily bookkeeping and document categorisation.',
              'VAT return preparation and deadline monitoring.',
              'Consistent updates of files in Pennylane.',
            ],
            tags: ['Pennylane', 'VAT', 'Operational reliability'],
          },
          {
            title: 'Small business portfolio follow-up',
            period: '2025 - 2026',
            bullets: [
              'Client support on required accounting documentation.',
              'Task prioritisation based on deadlines and impact.',
            ],
            tags: ['Organisation', 'Client relations', 'Rigor'],
          },
        ],
      },
      {
        title: 'Entrepreneurship & field work',
        projects: [
          {
            title: 'Zafira Sejour (formerly Havana Suits)',
            period: '2023 - Present',
            bullets: [
              'Development of a travel-stay activity in Cote d\'Ivoire.',
              'Bookings, customer communication and digital visibility.',
            ],
            tags: ['Entrepreneurship', 'Marketing', 'Customer service'],
          },
          {
            title: 'Straight Walk Marketing · Field officer',
            period: '2021',
            bullets: [
              'Prospect identification and partner support.',
              'Stronger persuasive communication in field operations.',
            ],
            tags: ['Field work', 'Communication', 'Negotiation'],
          },
          {
            title: "Coconut's Village · Hospitality internship",
            period: '2020',
            bullets: ['Exposure to hospitality operations and customer service.'],
            tags: ['Hospitality', 'Service', 'Career exploration'],
          },
        ],
      },
    ],
    appsTitle: 'Applications',
    appsSubtitle: 'Click an icon to see what each app is used for.',
    apps: [
      {
        id: 'fox-erp',
        name: 'Fox ERP',
        short: 'FX',
        summary:
          'ERP app to centralize client management, invoicing and accounting operations tracking.',
      },
      {
        id: 'maya-mixa',
        name: 'Maya Mixa',
        short: 'MM',
        summary:
          'Content and communication app used to organize publishing and audience relationship workflows.',
      },
      {
        id: 'maya-home',
        name: 'Maya Home',
        short: 'MH',
        summary:
          'Global dashboard interface with quick access to tools, indicators and key actions.',
      },
      {
        id: 'cabinet-yao',
        name: 'Cabinet Yao',
        short: 'CY',
        summary:
          'Business platform for cabinet operations: files, client follow-up and task organization.',
      },
    ],
  },
};

export const skillsContent = {
  fr: {
    title: 'Compétences & expériences',
    subtitle:
      'Vue synthétique des expertises techniques, qualités humaines et expériences terrain.',
    hardSkillsTitle: 'Compétences techniques',
    softSkillsTitle: 'Compétences humaines',
    timelineTitle: 'Parcours expérience',
    hardSkills: [
      { name: 'Saisie comptable', level: 88 },
      { name: 'TVA', level: 75 },
      { name: 'Pennylane', level: 84 },
      { name: 'Excel', level: 80 },
      { name: 'Organisation dossiers', level: 86 },
    ],
    softSkills: [
      'Rigueur',
      'Autonomie',
      'Polyvalence',
      'Communication',
      'Curiosité',
      'Apprentissage continu',
    ],
    timeline: [
      {
        title: 'Finance Conseil',
        period: '2024 - Aujourd\'hui',
        summary: 'Assistant comptable: saisie, TVA, suivi dossiers et échanges clients.',
        tags: ['Comptabilité', 'TVA', 'Client'],
      },
      {
        title: 'Zafira Séjour',
        period: '2023 - Aujourd\'hui',
        summary: 'Projet entrepreneurial: réservations, marketing digital et relation client.',
        tags: ['Gestion', 'Marketing', 'Service client'],
      },
      {
        title: 'Straight Walk Marketing',
        period: '2021',
        summary: 'Missions terrain: prospection et communication opérationnelle.',
        tags: ['Prospection', 'Communication'],
      },
      {
        title: 'Coconut\'s Village',
        period: '2020',
        summary: 'Stage découverte en environnement hôtellerie et service.',
        tags: ['Hospitalité', 'Opérations'],
      },
    ],
  },
  en: {
    title: 'Skills & experience',
    subtitle:
      'A concise view of technical capabilities, soft skills and on-the-ground experience.',
    hardSkillsTitle: 'Technical skills',
    softSkillsTitle: 'Soft skills',
    timelineTitle: 'Experience journey',
    hardSkills: [
      { name: 'Bookkeeping', level: 88 },
      { name: 'VAT returns', level: 75 },
      { name: 'Pennylane', level: 84 },
      { name: 'Excel', level: 80 },
      { name: 'File organisation', level: 86 },
    ],
    softSkills: [
      'Rigor',
      'Autonomy',
      'Versatility',
      'Communication',
      'Curiosity',
      'Continuous learning',
    ],
    timeline: [
      {
        title: 'Finance Conseil',
        period: '2024 - Present',
        summary: 'Assistant accountant: bookkeeping, VAT, file monitoring and client exchanges.',
        tags: ['Accounting', 'VAT', 'Client work'],
      },
      {
        title: 'Zafira Sejour',
        period: '2023 - Present',
        summary: 'Entrepreneurial project: bookings, digital marketing and customer management.',
        tags: ['Operations', 'Marketing', 'Client service'],
      },
      {
        title: 'Straight Walk Marketing',
        period: '2021',
        summary: 'Field missions focused on prospecting and operational communication.',
        tags: ['Prospecting', 'Communication'],
      },
      {
        title: "Coconut's Village",
        period: '2020',
        summary: 'Internship exposure to hospitality operations and service culture.',
        tags: ['Hospitality', 'Operations'],
      },
    ],
  },
};

export const contactContent = {
  fr: {
    title: 'Contact & disponibilités',
    subtitle:
      'Un contact direct, clair et rapide pour démarrer un échange sur l\'alternance.',
    detailsTitle: 'Coordonnées',
    downloadTitle: 'Documents',
    availabilityTitle: 'Disponibilité',
    availability: 'Ouvert aux entretiens dès maintenant · Mobilité Lille / remote',
    sendMail: 'Envoyer un email',
    call: 'Appeler',
    copyMail: 'Copier l\'email',
    viewCv: 'Consulter le CV',
    viewLetter: 'Consulter la lettre de motivation',
    downloadCv: 'Télécharger le CV',
    downloadLetter: 'Télécharger la lettre de motivation',
  },
  en: {
    title: 'Contact & availability',
    subtitle:
      'A direct and clear way to start a conversation about a work-study opportunity.',
    detailsTitle: 'Contact details',
    downloadTitle: 'Documents',
    availabilityTitle: 'Availability',
    availability: 'Open to interviews now · Lille / remote mobility',
    sendMail: 'Send email',
    call: 'Call',
    copyMail: 'Copy email',
    viewCv: 'View resume',
    viewLetter: 'View cover letter',
    downloadCv: 'Download resume',
    downloadLetter: 'Download cover letter',
  },
};

export const contactInfo = {
  name: 'Yohann-Axel Bouah',
  phone: '06 25 65 43 16',
  internationalPhone: '+33625654316',
  email: 'yohann_bouah@icloud.com',
  location: 'Lille, France',
  linkedin: 'https://www.linkedin.com/in/yohann-axel-bouah-69b65a2a3',
  linkedinLabel: '/in/yohann-axel-bouah-69b65a2a3',
  zafira: 'https://linktr.ee/zafira.sejour',
  zafiraLabel: 'linktr.ee/zafira.sejour',
};

export const downloads = {
  cvPdfUrl: '/docs/cv-yohann-bouah.pdf',
  letterPdfUrl: '/docs/lettre-motivation-yohann-bouah.pdf',
};

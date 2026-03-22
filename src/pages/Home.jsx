import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Mail, MapPin, Timer } from 'lucide-react';
import { useAppContext } from '../context/AppContext.jsx';
import { downloads } from '../data/profileContent.js';
import { Badge, SurfaceCard } from '../components/ui.jsx';

const homeText = {
  fr: {
    name: 'Yohann-Axel Bouah',
    role: 'Candidat en alternance comptabilité & gestion - disponible pour la rentrée septembre 2026',
    meta: 'Lille · Rythme 3 semaines en entreprise et 1 semaine de cours',
    keySkills:
      'Compétences clés : tenue comptable, saisie comptable, Excel, Pennylane, anglais professionnel.',
    cardsTitle: 'Ce que vous recherchez',
    cards: [
      { label: 'Poste recherché', value: 'Alternance comptabilité / gestion' },
      { label: 'Disponibilité', value: 'Rentrée septembre 2026' },
      { label: 'Rythme', value: '3 semaines en entreprise et 1 semaine de cours' },
      { label: 'Localisation', value: 'Lille' },
    ],
    cv: 'Voir mon CV',
    contact: 'Me contacter',
    download: 'Télécharger le CV',
    operationalTitle: 'Opérationnel dès le départ',
    operationalItems: [
      'Saisie comptable clients/fournisseurs',
      'Participation à la préparation des déclarations de TVA',
      'Suivi des échéances',
      'Excel & Pennylane au quotidien',
      'Organisation administrative',
      'Rigueur de traitement',
    ],
    missionTitle: 'Compétences clés (missions concrètes)',
    missionBadges: [
      'Saisie comptable clients/fournisseurs',
      'Tenue comptable',
      'Participation à la déclaration de TVA',
      'Suivi des échéances',
      'Excel & Pennylane',
      'Organisation administrative',
      'Anglais professionnel',
    ],
    whyTitle: 'Pourquoi mon profil est adapté',
    whyByType: {
      cabinet:
        'Je suis opérationnel sur les missions de tenue comptable: saisie, organisation des pièces, respect des échéances et exécution fiable sur Pennylane et Excel. Mon objectif est de progresser durablement sur la qualité de production.',
      entreprise:
        'Je peux contribuer rapidement à la tenue comptable, au suivi des échéances et aux contrôles de cohérence. Mon profil est orienté rigueur, continuité et montée en compétences.',
      autre:
        'Mon profil combine comptabilité, autonomie et polyvalence entrepreneuriale. Je peux m\'adapter vite à un environnement dynamique tout en gardant une base financière solide pour sécuriser le suivi opérationnel.',
    },
  },
  en: {
    name: 'Yohann-Axel Bouah',
    role: 'Accounting & management work-study candidate - available for September 2026 intake',
    meta: 'Lille · 3 weeks in company and 1 week of classes',
    keySkills:
      'Key skills: bookkeeping, accounting support, Excel, Pennylane, professional English.',
    cardsTitle: 'What you are looking for',
    cards: [
      { label: 'Target role', value: 'Accounting / management work-study' },
      { label: 'Availability', value: 'September 2026 intake' },
      { label: 'Schedule', value: '3 weeks in company and 1 week of classes' },
      { label: 'Location', value: 'Lille' },
    ],
    cv: 'View my resume',
    contact: 'Contact me',
    download: 'Download resume',
    operationalTitle: 'Operational from day one',
    operationalItems: [
      'Customer and supplier bookkeeping',
      'Participation in VAT filing preparation',
      'Deadline tracking',
      'Daily Excel & Pennylane usage',
      'Administrative organization',
      'Consistent execution',
    ],
    missionTitle: 'Key skills (concrete missions)',
    missionBadges: [
      'Customer/supplier bookkeeping',
      'Accounting operations',
      'VAT filing support',
      'Deadline tracking',
      'Excel & Pennylane',
      'Administrative organization',
      'Professional English',
    ],
    whyTitle: 'Why this profile fits',
    whyByType: {
      cabinet:
        'I am operational on core bookkeeping missions: entries, schedule discipline and reliable execution with Pennylane and Excel. My objective is to keep improving production quality over time.',
      entreprise:
        'I can quickly support bookkeeping flow, consistency checks and deadline follow-up. My profile is built around rigor, consistency and continuous progression.',
      autre:
        'My profile combines accounting execution, autonomy and entrepreneurial versatility. I can adapt fast to dynamic environments while maintaining strong financial discipline.',
    },
  },
};

export default function Home() {
  const { lang, recruiterType } = useAppContext();
  const t = homeText[lang];

  return (
    <section className="page home-recruiter">
      <SurfaceCard className="hero-recruiter">
        <div className="hero-recruiter-head">
          <h1>{t.name}</h1>
          <p className="hero-role">{t.role}</p>
          <p className="hero-meta">
            <MapPin size={14} />
            <span>{t.meta}</span>
          </p>
          <p className="hero-key-skills">{t.keySkills}</p>
        </div>

        <div className="button-row wrap">
          <Link className="btn btn-primary" to="/cv">
            {t.cv}
          </Link>
          <Link className="btn btn-secondary" to="/contact">
            <Mail size={14} />
            {t.contact}
          </Link>
          <a className="btn btn-secondary" href={downloads.cvPdfUrl} download>
            <Download size={14} />
            {t.download}
          </a>
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div className="card-head compact">
          <h2>
            <Timer size={16} />
            {t.cardsTitle}
          </h2>
        </div>
        <div className="quick-facts-grid">
          {t.cards.map((item) => (
            <div key={item.label} className="quick-fact">
              <p>{item.label}</p>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div className="card-head compact">
          <h2>{t.operationalTitle}</h2>
        </div>
        <ul className="check-list">
          {t.operationalItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SurfaceCard>

      <SurfaceCard>
        <div className="card-head compact">
          <h2>{t.missionTitle}</h2>
        </div>
        <div className="badge-wrap">
          {t.missionBadges.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div className="card-head compact">
          <h2>{t.whyTitle}</h2>
        </div>
        <p className="body-copy">{t.whyByType[recruiterType]}</p>
      </SurfaceCard>
    </section>
  );
}

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
      'Compétences clés : saisie comptable, TVA, relation client, Excel, Pennylane.',
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
      'Déclarations de TVA',
      'Suivi des échéances',
      'Excel & Pennylane au quotidien',
      'Organisation administrative',
      'Échanges clients',
    ],
    missionTitle: 'Compétences clés (missions concrètes)',
    missionBadges: [
      'Saisie comptable clients/fournisseurs',
      'Déclarations de TVA',
      'Suivi des échéances',
      'Excel & Pennylane',
      'Échanges clients',
      'Organisation administrative',
    ],
    whyTitle: 'Pourquoi mon profil est adapté',
    whyByType: {
      cabinet:
        'Je suis déjà opérationnel sur les missions comptables courantes en cabinet: saisie, TVA, suivi documentaire et échanges clients. Mon objectif est de progresser sur la qualité de production et d\'apporter une exécution fiable au quotidien.',
      entreprise:
        'Je peux contribuer rapidement à la tenue comptable, au suivi des pièces, aux contrôles et à la relation avec les interlocuteurs internes/externes. Mon profil est orienté rigueur, continuité et montée en compétences.',
      autre:
        'Mon profil combine comptabilité, autonomie et polyvalence entrepreneuriale. Je peux m\'adapter vite à un environnement dynamique tout en gardant une base financière solide pour sécuriser le suivi opérationnel.',
    },
  },
  en: {
    name: 'Yohann-Axel Bouah',
    role: 'Accounting & management work-study candidate - available for September 2026 intake',
    meta: 'Lille · 3 weeks in company and 1 week of classes',
    keySkills:
      'Key skills: bookkeeping, VAT, client communication, Excel, Pennylane.',
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
      'VAT returns',
      'Deadline tracking',
      'Daily Excel & Pennylane usage',
      'Administrative organization',
      'Client communication',
    ],
    missionTitle: 'Key skills (concrete missions)',
    missionBadges: [
      'Customer/supplier bookkeeping',
      'VAT returns',
      'Deadline tracking',
      'Excel & Pennylane',
      'Client communication',
      'Administrative organization',
    ],
    whyTitle: 'Why this profile fits',
    whyByType: {
      cabinet:
        'I am already operational on core accounting-firm missions: bookkeeping, VAT, document monitoring and client communication. My objective is to deliver reliable execution and keep improving production quality.',
      entreprise:
        'I can quickly support bookkeeping flow, document controls and communication with internal/external stakeholders. My profile is built around rigor, consistency and continuous progression.',
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

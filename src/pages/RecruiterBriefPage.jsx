import React from 'react';
import { Download, Mail, MapPin, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext.jsx';
import { contactInfo, downloads } from '../data/profileContent.js';
import { PageHeader, SurfaceCard } from '../components/ui.jsx';

const briefContent = {
  fr: {
    eyebrow: 'Version recruteur',
    title: 'Profil recruteur · 30 secondes',
    subtitle:
      'Essentiel du profil pour prendre une décision rapide: poste recherché, disponibilité, rythme, compétences et contact.',
    role: 'Poste recherché: Alternance comptabilité / gestion',
    availability: 'Disponibilité: Rentrée septembre 2026',
    rhythm: 'Rythme: 3 semaines en entreprise et 1 semaine de cours',
    location: 'Localisation: Lille',
    valueTitle: 'Opérationnel dès l\'arrivée',
    valuePoints: [
      'Saisie comptable clients et fournisseurs',
      'Opérationnel sur les missions de tenue comptable',
      'Participation à la préparation des déclarations de TVA',
      'Maîtrise opérationnelle d\'Excel et Pennylane',
      'Rigueur de traitement et respect des échéances',
    ],
    toolsTitle: 'Outils et environnement',
    tools: ['Pennylane', 'Excel', 'EBP', 'Outils bureautiques', 'Anglais professionnel'],
    actionsTitle: 'Actions immédiates',
    viewCv: 'Voir mon CV',
    contact: 'Me contacter',
    downloadCv: 'Télécharger le CV',
    mailLabel: "Envoyer un email direct",
  },
  en: {
    eyebrow: 'Recruiter version',
    title: '30-second recruiter snapshot',
    subtitle:
      'Fast decision view: target role, availability, schedule, core skills and direct contact.',
    role: 'Target role: Accounting / management work-study',
    availability: 'Availability: September 2026 intake',
    rhythm: 'Schedule: 3 weeks in company and 1 week of classes',
    location: 'Location: Lille',
    valueTitle: 'Operational from day one',
    valuePoints: [
      'Customer and supplier bookkeeping',
      'Operational on core bookkeeping missions',
      'Participation in VAT filing preparation',
      'Daily execution with Excel and Pennylane',
      'Consistent execution and deadline discipline',
    ],
    toolsTitle: 'Tools and environment',
    tools: ['Pennylane', 'Excel', 'EBP', 'Office tools', 'Professional English'],
    actionsTitle: 'Immediate actions',
    viewCv: 'View resume',
    contact: 'Contact me',
    downloadCv: 'Download resume',
    mailLabel: 'Send direct email',
  },
};

export default function RecruiterBriefPage() {
  const { lang } = useAppContext();
  const t = briefContent[lang] ?? briefContent.fr;

  return (
    <section className="page">
      <PageHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <SurfaceCard>
        <div className="brief-meta-grid">
          <div className="brief-meta-item">
            <strong>{t.role}</strong>
          </div>
          <div className="brief-meta-item">
            <strong>{t.availability}</strong>
          </div>
          <div className="brief-meta-item">
            <Timer size={14} />
            <strong>{t.rhythm}</strong>
          </div>
          <div className="brief-meta-item">
            <MapPin size={14} />
            <strong>{t.location}</strong>
          </div>
        </div>
      </SurfaceCard>

      <div className="layout-grid two-col">
        <SurfaceCard>
          <div className="card-head compact">
            <h2>{t.valueTitle}</h2>
          </div>
          <ul className="check-list">
            {t.valuePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </SurfaceCard>

        <SurfaceCard>
          <div className="card-head compact">
            <h2>{t.toolsTitle}</h2>
          </div>
          <div className="badge-wrap">
            {t.tools.map((tool) => (
              <span key={tool} className="badge">
                {tool}
              </span>
            ))}
          </div>
        </SurfaceCard>
      </div>

      <SurfaceCard>
        <div className="card-head compact">
          <h2>{t.actionsTitle}</h2>
        </div>

        <div className="button-row wrap">
          <Link className="btn btn-primary" to="/cv">
            {t.viewCv}
          </Link>
          <Link className="btn btn-secondary" to="/contact">
            {t.contact}
          </Link>
          <a className="btn btn-secondary" href={downloads.cvPdfUrl} download>
            <Download size={14} />
            {t.downloadCv}
          </a>
          <a className="btn btn-secondary" href={`mailto:${contactInfo.email}`}>
            <Mail size={14} />
            {t.mailLabel}
          </a>
        </div>
      </SurfaceCard>
    </section>
  );
}

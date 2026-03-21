import React from 'react';
import { Building2, Globe2, Sparkles } from 'lucide-react';
import { recruiterLabels } from '../data/profileContent.js';

const gateContent = {
  fr: {
    badge: 'Configuration initiale',
    title: 'Bienvenue',
    subtitle:
      "Choisis d'abord la langue et le type de structure pour personnaliser ton espace.",
    languageTitle: 'Langue',
    structureTitle: 'Type de structure',
    continue: 'Entrer dans l\'app',
  },
  en: {
    badge: 'Initial setup',
    title: 'Welcome',
    subtitle:
      'Select language and organisation type first to personalize your experience.',
    languageTitle: 'Language',
    structureTitle: 'Organisation type',
    continue: 'Enter app',
  },
};

export default function WelcomeGate({
  lang,
  recruiterType,
  setLang,
  setRecruiterType,
  onContinue,
}) {
  const content = gateContent[lang];

  return (
    <section className="welcome-gate">
      <article className="welcome-card">
        <p className="welcome-badge">
          <Sparkles size={14} />
          {content.badge}
        </p>

        <header className="welcome-head">
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </header>

        <div className="welcome-block">
          <h2>
            <Globe2 size={16} />
            {content.languageTitle}
          </h2>
          <div className="welcome-actions">
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={lang === 'fr' ? 'segment segment-active' : 'segment'}
            >
              Francais
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'segment segment-active' : 'segment'}
            >
              English
            </button>
          </div>
        </div>

        <div className="welcome-block">
          <h2>
            <Building2 size={16} />
            {content.structureTitle}
          </h2>
          <div className="welcome-actions welcome-actions-stacked">
            {Object.entries(recruiterLabels[lang]).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setRecruiterType(key)}
                className={recruiterType === key ? 'segment segment-active' : 'segment'}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <button type="button" className="btn btn-primary welcome-cta" onClick={onContinue}>
          {content.continue}
        </button>
      </article>
    </section>
  );
}

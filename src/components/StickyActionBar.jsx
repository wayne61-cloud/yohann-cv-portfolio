import React from 'react';
import { Download, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { downloads } from '../data/profileContent.js';

const labels = {
  fr: {
    cv: 'Voir mon CV',
    contact: 'Me contacter',
    quick: 'Version 30 secondes',
    download: 'Télécharger le CV',
  },
  en: {
    cv: 'View resume',
    contact: 'Contact me',
    quick: '30-second version',
    download: 'Download resume',
  },
};

export default function StickyActionBar({ lang }) {
  const t = labels[lang] ?? labels.fr;

  return (
    <aside className="sticky-action-bar" aria-label={lang === 'fr' ? 'Actions rapides' : 'Quick actions'}>
      <div className="sticky-action-shell">
        <Link className="btn btn-primary sticky-action-btn" to="/cv">
          <FileText size={14} />
          <span>{t.cv}</span>
        </Link>

        <Link className="btn btn-secondary sticky-action-btn" to="/contact">
          <Mail size={14} />
          <span>{t.contact}</span>
        </Link>

        <Link className="btn btn-secondary sticky-action-btn" to="/recruteur-30s">
          <span>{t.quick}</span>
        </Link>

        <a className="btn btn-secondary sticky-action-btn" href={downloads.cvPdfUrl} download>
          <Download size={14} />
          <span>{t.download}</span>
        </a>
      </div>
    </aside>
  );
}

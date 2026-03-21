import React from 'react';
import { Download, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { downloads } from '../data/profileContent.js';

const labels = {
  fr: {
    cv: 'Mon CV',
    contact: 'Contact',
    quick: 'Profil 30s',
    download: 'Télécharger le CV',
  },
  en: {
    cv: 'Resume',
    contact: 'Contact',
    quick: '30s profile',
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

import React, { useMemo } from 'react';
import { MailCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext.jsx';
import { lettersByLang } from '../data/letters.js';
import { recruiterLabels } from '../data/profileContent.js';
import { PageHeader, SurfaceCard } from '../components/ui.jsx';

export default function LettersPage() {
  const { lang, recruiterType } = useAppContext();

  const letter = lettersByLang[lang][recruiterType];

  const mailToLink = useMemo(() => {
    const subject = encodeURIComponent(letter.subject);
    return `mailto:yohann_bouah@icloud.com?subject=${subject}`;
  }, [letter]);

  return (
    <section className="page">
      <PageHeader
        eyebrow={lang === 'fr' ? 'Pôle lettre de motivation' : 'Cover letter hub'}
        title={letter.title}
        subtitle={
          lang === 'fr'
            ? `Version adaptée pour: ${recruiterLabels.fr[recruiterType]}.`
            : `Version adapted for: ${recruiterLabels.en[recruiterType]}.`
        }
      />

      <SurfaceCard>
        <div className="letter-meta">
          <p>
            <strong>{lang === 'fr' ? 'Objet recommandé:' : 'Suggested subject:'}</strong>{' '}
            {letter.subject}
          </p>
          <div className="button-row">
            <a className="btn btn-primary" href={mailToLink}>
              <MailCheck size={14} />
              {lang === 'fr' ? "M'ouvrir un nouveau mail" : 'Open a new email'}
            </a>
          </div>
        </div>

        <div className="letter-body">
          {letter.body.split('\n').map((line, index) => (
            <p key={`${line}-${index}`}>{line || '\u00a0'}</p>
          ))}
        </div>
      </SurfaceCard>
    </section>
  );
}

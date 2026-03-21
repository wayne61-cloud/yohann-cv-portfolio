import React, { useState } from 'react';
import { Copy, Download, Eye, Mail, MapPin, Phone } from 'lucide-react';
import AppModal from '../components/AppModal.jsx';
import { useAppContext } from '../context/AppContext.jsx';
import {
  contactContent,
  contactInfo,
  downloads,
} from '../data/profileContent.js';
import { PageHeader, SurfaceCard } from '../components/ui.jsx';

function DocumentActions({ viewLabel, downloadLabel, href, onView }) {
  if (!href) {
    return (
      <button type="button" className="btn btn-secondary btn-disabled" disabled>
        <Download size={14} />
        {downloadLabel}
      </button>
    );
  }

  return (
    <div className="button-row wrap">
      <button type="button" className="btn btn-secondary" onClick={onView}>
        <Eye size={14} />
        {viewLabel}
      </button>
      <a className="btn btn-secondary" href={href} download>
        <Download size={14} />
        {downloadLabel}
      </a>
    </div>
  );
}

export default function ContactPage() {
  const { lang } = useAppContext();
  const content = contactContent[lang];
  const [copied, setCopied] = useState(false);
  const [openedDocument, setOpenedDocument] = useState(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="page">
      <PageHeader
        eyebrow={lang === 'fr' ? 'Parlons alternance' : "Let's connect"}
        title={content.title}
        subtitle={content.subtitle}
      />

      <div className="layout-grid two-col">
        <SurfaceCard>
          <div className="card-head compact">
            <h2>{content.detailsTitle}</h2>
          </div>
          <div className="stack-sm">
            <div className="inline-icon-row">
              <MapPin size={14} />
              <span>{contactInfo.location}</span>
            </div>
            <div className="inline-icon-row">
              <Phone size={14} />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="inline-icon-row">
              <Mail size={14} />
              <span>{contactInfo.email}</span>
            </div>
            <div className="contact-row">
              <span>LinkedIn</span>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                {contactInfo.linkedinLabel}
              </a>
            </div>
            <div className="contact-row">
              <span>Zafira</span>
              <a href={contactInfo.zafira} target="_blank" rel="noreferrer">
                {contactInfo.zafiraLabel}
              </a>
            </div>
          </div>

          <div className="button-row wrap">
            <a className="btn btn-primary" href={`mailto:${contactInfo.email}`}>
              <Mail size={14} />
              {content.sendMail}
            </a>
            <a className="btn btn-secondary" href={`tel:${contactInfo.internationalPhone}`}>
              <Phone size={14} />
              {content.call}
            </a>
            <button type="button" className="btn btn-secondary" onClick={copyEmail}>
              <Copy size={14} />
              {copied ? (lang === 'fr' ? 'Email copié' : 'Email copied') : content.copyMail}
            </button>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <div className="card-head compact">
            <h2>{content.downloadTitle}</h2>
          </div>

          <div className="document-grid">
            <div className="document-item">
              <h3 className="mini-title">{lang === 'fr' ? 'CV' : 'Resume'}</h3>
              <DocumentActions
                href={downloads.cvPdfUrl}
                viewLabel={content.viewCv}
                downloadLabel={content.downloadCv}
                onView={() =>
                  setOpenedDocument({
                    title: lang === 'fr' ? 'CV - Yohann-Axel Bouah' : 'Resume - Yohann-Axel Bouah',
                    url: downloads.cvPdfUrl,
                  })
                }
              />
            </div>

            <div className="document-item">
              <h3 className="mini-title">
                {lang === 'fr' ? 'Lettre de motivation' : 'Cover letter'}
              </h3>
              <DocumentActions
                href={downloads.letterPdfUrl}
                viewLabel={content.viewLetter}
                downloadLabel={content.downloadLetter}
                onView={() =>
                  setOpenedDocument({
                    title:
                      lang === 'fr'
                        ? 'Lettre de motivation - Yohann-Axel Bouah'
                        : 'Cover letter - Yohann-Axel Bouah',
                    url: downloads.letterPdfUrl,
                  })
                }
              />
            </div>
          </div>

          <div className="availability-box">
            <h3>{content.availabilityTitle}</h3>
            <p>{content.availability}</p>
          </div>
        </SurfaceCard>
      </div>

      <AppModal
        open={Boolean(openedDocument)}
        title={openedDocument?.title ?? ''}
        onClose={() => setOpenedDocument(null)}
      >
        {openedDocument ? (
          <div className="document-viewer">
            <iframe title={openedDocument.title} src={openedDocument.url} />
          </div>
        ) : null}
      </AppModal>
    </section>
  );
}

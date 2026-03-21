import React from 'react';
import { BriefcaseBusiness, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { useAppContext } from '../context/AppContext.jsx';
import { cvContent } from '../data/profileContent.js';
import { Badge, PageHeader, SurfaceCard } from '../components/ui.jsx';

function ContactRow({ label, value, href }) {
  return (
    <div className="contact-row">
      <span>{label}</span>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <strong>{value}</strong>
      )}
    </div>
  );
}

export default function CvPage() {
  const { lang } = useAppContext();
  const content = cvContent[lang];

  return (
    <section className="page cv-page">
      <PageHeader
        eyebrow={lang === 'fr' ? 'Profil ciblé' : 'Targeted profile'}
        title={content.title}
        subtitle={content.subtitle}
        chip={content.role}
      />

      <div className="layout-grid two-col">
        <SurfaceCard>
          <div className="card-head compact">
            <h2>{content.profileTitle}</h2>
          </div>
          <p className="body-copy">{content.profile}</p>
        </SurfaceCard>

        <SurfaceCard>
          <div className="card-head compact">
            <h2>{content.contactTitle}</h2>
          </div>

          <div className="contacts-stack">
            <div className="inline-icon-row">
              <MapPin size={14} />
              <span>{content.contacts[0].value}</span>
            </div>
            <div className="inline-icon-row">
              <Phone size={14} />
              <span>{content.contacts[1].value}</span>
            </div>
            <div className="inline-icon-row">
              <Mail size={14} />
              <span>{content.contacts[2].value}</span>
            </div>
            {content.contacts.slice(3).map((item) => (
              <ContactRow
                key={item.label}
                label={item.label}
                value={item.value}
                href={item.href}
              />
            ))}
          </div>
        </SurfaceCard>
      </div>

      <div className="layout-grid two-col">
        <SurfaceCard>
          <div className="card-head compact">
            <h2>
              <BriefcaseBusiness size={16} />
              {content.experienceTitle}
            </h2>
          </div>

          <div className="stack-md">
            {content.experiences.map((experience) => (
              <article key={experience.title} className="detail-card">
                <header>
                  <h3>{experience.title}</h3>
                  <p>{experience.meta}</p>
                </header>
                <ul>
                  {experience.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="badge-wrap">
                  {experience.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <div className="card-head compact">
            <h2>
              <GraduationCap size={16} />
              {content.educationTitle}
            </h2>
          </div>

          <div className="stack-md">
            {content.education.map((course) => (
              <article key={course.title} className="detail-card">
                <header>
                  <h3>{course.title}</h3>
                  <p>{course.meta}</p>
                </header>
                <p className="body-copy">{course.detail}</p>
              </article>
            ))}
          </div>

          <div className="split-mini">
            <div>
              <h3 className="mini-title">{content.skillsTitle}</h3>
              <div className="skills-spotlight">
                {content.skills.map((skill) => (
                  <span key={skill} className="skill-pill-strong">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mini-title">{content.certificationsTitle}</h3>
              <ul className="simple-list">
                {content.certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
}

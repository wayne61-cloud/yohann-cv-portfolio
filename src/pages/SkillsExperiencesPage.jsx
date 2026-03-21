import React, { useMemo, useState } from 'react';
import {
  Disc3,
  Dribbble,
  MicVocal,
  Music2,
  Sailboat,
  Sparkles,
} from 'lucide-react';
import AppModal from '../components/AppModal.jsx';
import { useAppContext } from '../context/AppContext.jsx';
import { skillsContent } from '../data/profileContent.js';
import { Badge, PageHeader, ProgressBar, SurfaceCard } from '../components/ui.jsx';

export default function SkillsExperiencesPage() {
  const { lang } = useAppContext();
  const content = skillsContent[lang];

  const hobbies = useMemo(() => {
    if (lang === 'fr') {
      return [
        {
          id: 'musique',
          name: 'Musique',
          icon: Music2,
          details: [
            "J'adore la musique et j'en écoute depuis que je suis petit.",
            'La musique fait partie de mon quotidien, elle me motive et me canalise.',
            'Elle nourrit aussi ma créativité dans mes projets personnels.',
          ],
        },
        {
          id: 'basket',
          name: 'Basket-ball',
          icon: Dribbble,
          details: [
            'Le basket m\'apprend la discipline, la réactivité et l\'esprit d\'équipe.',
            'C\'est un sport que j\'aime pour son rythme et son exigence mentale.',
            'Il renforce ma persévérance et ma capacité à rester concentré.',
          ],
        },
        {
          id: 'inge-son',
          name: 'Ingé son',
          icon: MicVocal,
          details: [
            'J\'enregistre mes amis et parfois moi-même dans ma chambre.',
            'Je m\'intéresse au placement micro, au niveau de prise et au rendu final.',
            'Cette pratique développe mon oreille et ma rigueur technique.',
          ],
        },
        {
          id: 'beatmaking',
          name: 'Beatmaking',
          icon: Disc3,
          details: [
            'J\'ai commencé à faire des beats depuis la 4e.',
            "Cela fait un moment que je n'ai pas produit régulièrement.",
            'Voici ma dernière production solo disponible sur SoundCloud.',
          ],
          soundcloud:
            'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bigbaarry/kalia&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
          externalLink:
            'https://soundcloud.com/bigbaarry/kalia?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        },
        {
          id: 'kanoe',
          name: 'Kanoë / Pirogue',
          icon: Sailboat,
          details: [
            'Depuis petit, j\'adore les sports de kanoë et de pirogue.',
            "J'en pratique depuis longtemps grâce à l'hôtel de mes parents situé en bord d'eau en Côte d'Ivoire.",
            'C\'est un loisir qui m\'apporte équilibre, endurance et plaisir.',
          ],
        },
      ];
    }

    return [
      {
        id: 'music',
        name: 'Music',
        icon: Music2,
        details: [
          'I love music and I have listened to it since childhood.',
          'Music is part of my daily rhythm and motivation.',
          'It also feeds my creativity for personal projects.',
        ],
      },
      {
        id: 'basketball',
        name: 'Basketball',
        icon: Dribbble,
        details: [
          'Basketball teaches discipline, responsiveness and team spirit.',
          'I enjoy its pace and the mental focus it requires.',
          'It strengthens perseverance and concentration.',
        ],
      },
      {
        id: 'sound-engineering',
        name: 'Sound engineering',
        icon: MicVocal,
        details: [
          'I record friends and sometimes myself in my room setup.',
          'I work on mic placement, levels and final audio texture.',
          'It improves both my listening skills and technical rigor.',
        ],
      },
      {
        id: 'beatmaking',
        name: 'Beatmaking',
        icon: Disc3,
        details: [
          'I started making beats in middle school.',
          "I have not produced regularly recently.",
          'My latest solo production is available on SoundCloud.',
        ],
        soundcloud:
          'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bigbaarry/kalia&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        externalLink:
          'https://soundcloud.com/bigbaarry/kalia?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      },
      {
        id: 'canoe',
        name: 'Canoe / Pirogue',
        icon: Sailboat,
        details: [
          'I have loved canoe and pirogue sports since I was young.',
          "I practiced for years thanks to my parents' hotel by the water in Côte d'Ivoire.",
          'It brings balance, endurance and strong discipline.',
        ],
      },
    ];
  }, [lang]);

  const [selectedHobby, setSelectedHobby] = useState(null);

  return (
    <section className="page">
      <PageHeader
        eyebrow={lang === 'fr' ? 'Compétences' : 'Capabilities'}
        title={content.title}
        subtitle={content.subtitle}
      />

      <div className="layout-grid two-col">
        <SurfaceCard>
          <div className="card-head compact">
            <h2>{content.hardSkillsTitle}</h2>
          </div>
          <div className="stack-md">
            {content.hardSkills.map((skill) => (
              <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <div className="card-head compact">
            <h2>{content.softSkillsTitle}</h2>
          </div>
          <div className="soft-skill-grid">
            {content.softSkills.map((skill) => (
              <button key={skill} type="button" className="soft-skill-chip">
                <Sparkles size={14} />
                <span>{skill}</span>
              </button>
            ))}
          </div>
        </SurfaceCard>
      </div>

      <SurfaceCard>
        <div className="card-head compact">
          <h2>{lang === 'fr' ? 'Loisirs' : 'Hobbies'}</h2>
        </div>
        <div className="hobby-grid">
          {hobbies.map((hobby) => {
            const HobbyIcon = hobby.icon;
            return (
              <div key={hobby.id} className="hobby-card">
                <button
                  type="button"
                  className="hobby-icon-button"
                  onClick={() => setSelectedHobby(hobby)}
                >
                  <HobbyIcon size={20} />
                </button>
                <strong>{hobby.name}</strong>
                <button
                  type="button"
                  className="btn btn-secondary app-detail-btn"
                  onClick={() => setSelectedHobby(hobby)}
                >
                  {lang === 'fr' ? 'Plus de détails' : 'More details'}
                </button>
              </div>
            );
          })}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div className="card-head compact">
          <h2>{content.timelineTitle}</h2>
        </div>
        <ol className="experience-journey">
          {content.timeline.map((item) => (
            <li key={`${item.title}-${item.period}`}>
              <span className="journey-period">{item.period}</span>
              <article className="journey-card">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="badge-wrap">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </SurfaceCard>

      <AppModal
        open={Boolean(selectedHobby)}
        title={selectedHobby?.name ?? ''}
        onClose={() => setSelectedHobby(null)}
      >
        {selectedHobby ? (
          <div className="modal-hobby-details">
            {selectedHobby.details.map((line) => (
              <p key={line}>{line}</p>
            ))}

            {selectedHobby.soundcloud ? (
              <div className="soundcloud-embed">
                <iframe
                  title="SoundCloud player"
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={selectedHobby.soundcloud}
                />
                <a href={selectedHobby.externalLink} target="_blank" rel="noreferrer">
                  {lang === 'fr'
                    ? 'Ouvrir le morceau sur SoundCloud'
                    : 'Open the track on SoundCloud'}
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </AppModal>
    </section>
  );
}

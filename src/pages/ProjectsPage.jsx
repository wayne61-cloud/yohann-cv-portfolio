import React, { useMemo, useState } from 'react';
import {
  Calculator,
  Compass,
  FileSpreadsheet,
  FolderKanban,
  Hotel,
  Megaphone,
  Sparkles,
} from 'lucide-react';
import AppModal from '../components/AppModal.jsx';
import { useAppContext } from '../context/AppContext.jsx';
import { projectsContent } from '../data/profileContent.js';
import { Badge, PageHeader, SurfaceCard } from '../components/ui.jsx';

export default function ProjectsPage() {
  const { lang } = useAppContext();
  const content = projectsContent[lang];

  const apps = useMemo(() => {
    if (lang === 'fr') {
      return [
        {
          id: 'fox-erp',
          name: 'Fox ERP',
          logo: '/apps/fox-erp.png',
          lines: [
            'Fox ERP centralise les modules de gestion clés dans une seule interface.',
            'L\'objectif principal est de gagner du temps sur le suivi opérationnel quotidien.',
            'L\'application facilite la gestion clients avec une vue claire des dossiers.',
            'Elle intègre le suivi de facturation et des statuts de paiement.',
            'Le pilotage des tâches se fait via des écrans simples et actionnables.',
            'Les informations sont structurées pour réduire les oublis administratifs.',
            'Elle aide à garder une cohérence entre opérations, compta et relation client.',
            'L\'approche est orientée productivité: moins de friction, plus de clarté.',
            'Le design favorise une prise en main rapide même pour un nouveau collaborateur.',
            'En résumé: un ERP pratique pour cadrer et accélérer la gestion métier.',
          ],
        },
        {
          id: 'maya-mixa',
          name: 'Maya Mixa',
          logo: '/apps/maya-mixa.png',
          lines: [
            'Maya Mixa est pensée pour la gestion de contenu et la communication digitale.',
            'Elle aide à organiser les idées, les publications et les campagnes.',
            'Le coeur de l\'outil est la planification simple et visuelle.',
            'Elle structure le flux entre création, validation et diffusion.',
            'La plateforme améliore la régularité des publications dans le temps.',
            'Elle permet de garder une ligne éditoriale cohérente.',
            'Les actions sont priorisées pour éviter la surcharge de micro-tâches.',
            'L\'interface met l\'accent sur rapidité, lisibilité et exécution.',
            'Elle est utile pour garder le contrôle même sur plusieurs canaux.',
            'En résumé: un cockpit de production pour mieux piloter la communication.',
          ],
        },
        {
          id: 'maya-home',
          name: 'Maya Home',
          logo: '/apps/maya-home.png',
          lines: [
            'Maya Home sert de point d\'entrée principal vers les outils du projet.',
            'Elle rassemble les accès prioritaires dans un seul écran.',
            'Le but est de réduire les clics et accélérer les actions récurrentes.',
            'Les raccourcis sont organisés pour une navigation immédiate.',
            'L\'expérience est pensée comme un tableau de bord personnel.',
            'Elle aide à garder une vision globale des modules actifs.',
            'Chaque bloc est orienté usage concret et non simple décoration.',
            'L\'interface est optimisée pour une lecture claire sur desktop/mobile.',
            'Elle simplifie la coordination entre plusieurs espaces applicatifs.',
            'En résumé: la base centrale qui fluidifie toute l\'expérience utilisateur.',
          ],
        },
        {
          id: 'cabinet-yao',
          name: 'Cabinet Yao',
          logo: '/apps/cabinet-yao.png',
          lines: [
            'Cabinet Yao vise la gestion métier d\'un cabinet avec plus de structure.',
            'L\'application organise les dossiers et les suivis clients.',
            'Elle permet de visualiser les étapes importantes par dossier.',
            'Le suivi des tâches évite les retards sur les actions critiques.',
            'La plateforme renforce la qualité de service côté client.',
            'Les informations sont regroupées pour une meilleure prise de décision.',
            'Le système soutient une gestion plus fiable au quotidien.',
            'L\'ergonomie est pensée pour un usage simple et répétable.',
            'Le positionnement est orienté efficacité opérationnelle.',
            'En résumé: une base digitale solide pour piloter un cabinet moderne.',
          ],
        },
      ];
    }

    return [
      {
        id: 'fox-erp',
        name: 'Fox ERP',
        logo: '/apps/fox-erp.png',
        lines: [
          'Fox ERP centralizes key management modules in one workspace.',
          'The main goal is to speed up daily operational follow-up.',
          'It supports clearer client file management.',
          'It includes billing and payment-status tracking.',
          'Task execution is guided through actionable screens.',
          'Data structure helps reduce administrative misses.',
          'It aligns operations, accounting and client communication.',
          'The product is built for productivity and clarity.',
          'The UI is designed for fast onboarding.',
          'In short: a practical ERP to streamline business operations.',
        ],
      },
      {
        id: 'maya-mixa',
        name: 'Maya Mixa',
        logo: '/apps/maya-mixa.png',
        lines: [
          'Maya Mixa is designed for content and communication workflows.',
          'It helps organize ideas, publishing and campaign planning.',
          'The core is a clean visual planning approach.',
          'It structures creation, validation and delivery.',
          'The platform improves publication consistency over time.',
          'It helps maintain editorial coherence.',
          'Actions are prioritized to avoid task overload.',
          'The UI favors speed, readability and execution.',
          'It remains practical even across multiple channels.',
          'In short: a production cockpit for communication management.',
        ],
      },
      {
        id: 'maya-home',
        name: 'Maya Home',
        logo: '/apps/maya-home.png',
        lines: [
          'Maya Home acts as the main entry point to project tools.',
          'It gathers priority actions in a single screen.',
          'The goal is to reduce clicks and speed up recurring tasks.',
          'Shortcuts are structured for immediate navigation.',
          'The experience is built like a personal dashboard.',
          'It keeps a global view of active modules.',
          'Every block is oriented to concrete usage.',
          'The layout is optimized for desktop and mobile readability.',
          'It improves continuity between multiple app spaces.',
          'In short: a central home layer that makes the suite smoother.',
        ],
      },
      {
        id: 'cabinet-yao',
        name: 'Cabinet Yao',
        logo: '/apps/cabinet-yao.png',
        lines: [
          'Cabinet Yao focuses on structured cabinet workflow management.',
          'The app organizes files and client follow-up.',
          'It highlights important stages per case.',
          'Task tracking helps prevent delays on critical actions.',
          'The platform supports stronger client service quality.',
          'Information is grouped for faster decision support.',
          'The system enables more reliable day-to-day execution.',
          'Ergonomics are designed for repeated practical usage.',
          'Its positioning is fully operations-oriented.',
          'In short: a strong digital base for a modern firm workflow.',
        ],
      },
    ];
  }, [lang]);

  const [selectedApp, setSelectedApp] = useState(null);

  function getProjectIcon(title) {
    const normalized = title.toLowerCase();

    if (
      normalized.includes('portefeuille clients') ||
      normalized.includes('client portfolio')
    ) {
      return FileSpreadsheet;
    }
    if (normalized.includes('tpe') || normalized.includes('portfolio follow-up')) {
      return Calculator;
    }
    if (normalized.includes('zafira')) {
      return Compass;
    }
    if (normalized.includes('straight walk')) {
      return Megaphone;
    }
    if (normalized.includes('coconut')) {
      return Hotel;
    }

    return FolderKanban;
  }

  return (
    <section className="page">
      <PageHeader
        eyebrow={lang === 'fr' ? 'Réalisations' : 'Projects'}
        title={content.title}
        subtitle={content.subtitle}
      />

      {content.sections.map((section) => (
        <div key={section.title} className="section-block">
          <h2 className="section-title">
            <FolderKanban size={16} />
            {section.title}
          </h2>
          <div className="layout-grid two-col">
            {section.projects.map((project) => (
              <SurfaceCard key={project.title}>
                <article className="detail-card full-height">
                  <header>
                    <div className="project-heading">
                      <span className="project-icon-badge">
                        {React.createElement(getProjectIcon(project.title), { size: 15 })}
                      </span>
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.period}</p>
                  </header>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="badge-wrap">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </article>
              </SurfaceCard>
            ))}
          </div>
        </div>
      ))}

      <SurfaceCard>
        <div className="card-head compact">
          <h2>
            <Sparkles size={16} />
            {content.appsTitle}
          </h2>
          <p>{content.appsSubtitle}</p>
        </div>

        <div className="apps-grid" role="list">
          {apps.map((app) => (
            <div key={app.id} className="app-tile-wrap" role="listitem">
              <button type="button" className="app-tile" onClick={() => setSelectedApp(app)}>
                <img src={app.logo} alt={app.name} className="app-logo" />
                <span className="app-name">{app.name}</span>
              </button>
              <button
                type="button"
                className="btn btn-secondary app-detail-btn"
                onClick={() => setSelectedApp(app)}
              >
                {lang === 'fr' ? 'Plus de détails' : 'More details'}
              </button>
            </div>
          ))}
        </div>
      </SurfaceCard>

      <AppModal
        open={Boolean(selectedApp)}
        title={selectedApp?.name ?? ''}
        onClose={() => setSelectedApp(null)}
      >
        {selectedApp ? (
          <div className="modal-app-details">
            <img src={selectedApp.logo} alt={selectedApp.name} className="modal-app-logo" />
            <ol className="detail-lines">
              {selectedApp.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
          </div>
        ) : null}
      </AppModal>
    </section>
  );
}

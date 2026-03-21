import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import WelcomeGate from './components/WelcomeGate.jsx';
import Home from './pages/Home.jsx';
import CvPage from './pages/CvPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import LettersPage from './pages/LettersPage.jsx';
import SkillsExperiencesPage from './pages/SkillsExperiencesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import RecruiterBriefPage from './pages/RecruiterBriefPage.jsx';
import StickyActionBar from './components/StickyActionBar.jsx';
import { AppContext } from './context/AppContext.jsx';
import { LANGUAGES, RECRUITER_TYPES } from './data/profileContent.js';
import './App.css';

const STORAGE_KEYS = {
  lang: 'yab-portfolio-lang',
  recruiterType: 'yab-portfolio-recruiter',
};

function getStoredValue(key, allowedValues, fallback) {
  if (typeof window === 'undefined') return fallback;

  const stored = window.localStorage.getItem(key);
  return allowedValues.includes(stored) ? stored : fallback;
}

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [lang, setLang] = useState(() =>
    getStoredValue(STORAGE_KEYS.lang, LANGUAGES, 'fr'),
  );
  const [recruiterType, setRecruiterType] = useState(() =>
    getStoredValue(STORAGE_KEYS.recruiterType, RECRUITER_TYPES, 'cabinet'),
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEYS.lang, lang);
  }, [lang]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.recruiterType, recruiterType);
  }, [recruiterType]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      recruiterType,
      setRecruiterType,
      openWelcomeGate: () => setHasEntered(false),
    }),
    [lang, recruiterType],
  );

  return (
    <AppContext.Provider value={value}>
      <div className="app-shell">
        <div className="ambient ambient-top" aria-hidden="true" />
        <div className="ambient ambient-bottom" aria-hidden="true" />

        {!hasEntered ? (
          <WelcomeGate
            lang={lang}
            recruiterType={recruiterType}
            setLang={setLang}
            setRecruiterType={setRecruiterType}
            onContinue={() => setHasEntered(true)}
          />
        ) : (
          <>
            <Navbar lang={lang} onOpenWelcome={() => setHasEntered(false)} />

            <main id="content" className="main-shell">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CvPage />} />
                <Route path="/projets" element={<ProjectsPage />} />
                <Route path="/lettres" element={<LettersPage />} />
                <Route path="/competences" element={<SkillsExperiencesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/recruteur-30s" element={<RecruiterBriefPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <StickyActionBar lang={lang} />
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}

import React from 'react';

export function PageHeader({ eyebrow, title, subtitle, chip }) {
  return (
    <header className="page-header">
      {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
      <h1 className="page-title">
        {title}
        {chip ? <span className="chip">{chip}</span> : null}
      </h1>
      {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
    </header>
  );
}

export function SurfaceCard({ className = '', children }) {
  return <article className={`surface-card ${className}`.trim()}>{children}</article>;
}

export function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

export function ProgressBar({ label, value }) {
  return (
    <div className="progress-row">
      <div className="progress-meta">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function ScoreRing({ score }) {
  return (
    <div
      className="score-ring"
      style={{
        '--score': `${score}%`,
      }}
      role="img"
      aria-label={`Compatibility score ${score}%`}
    >
      <span>{score}%</span>
    </div>
  );
}

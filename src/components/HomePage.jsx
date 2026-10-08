import React from 'react';

/**
 * HomePage Component
 * Landing view with project introduction, feature cards, and "START GAME" button.
 */
export default function HomePage({ onStartGame }) {
  return (
    <div className="page-content home-page">
      <div className="brand-header">
        <span className="brand-badge">🎧 College Mini-Project</span>
        <h1 className="app-title">SOUND HACK</h1>
        <p className="app-subtitle">Audio-Speed Listening Challenge</p>
        <p className="app-description">
          Listen carefully. Remember the details. Answer correctly.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">🎧</span>
          <div className="feature-title">Listen</div>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🧠</span>
          <div className="feature-title">Remember</div>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🎯</span>
          <div className="feature-title">Answer</div>
        </div>
      </div>

      <button className="btn-primary" onClick={onStartGame}>
        START GAME →
      </button>
    </div>
  );
}

import React from 'react';
import { STORIES_DATA, getStarDisplay } from '../data/storiesData';

/**
 * GrandSummaryPage Component
 * Full breakdown dashboard showing how much score and star rating
 * was earned for EACH of the 10 quizzes.
 */
export default function GrandSummaryPage({ storyResults, onBackToHub, onResetAll }) {
  let totalScore = 0;
  let totalStars = 0;
  let completedCount = 0;

  STORIES_DATA.forEach((s) => {
    const res = storyResults[s.id];
    if (res) {
      totalScore += res.score;
      totalStars += res.stars;
      completedCount++;
    }
  });

  const maxTotalScore = STORIES_DATA.length * 30; // 300 pts max
  const maxTotalStars = STORIES_DATA.length * 3;  // 30 stars max

  const getGrandBadge = () => {
    if (completedCount === 0) return "No Quizzes Attempted Yet";
    const percent = (totalScore / (completedCount * 30)) * 100;
    if (percent >= 90 && totalStars >= completedCount * 2.5) {
      return "👑 GRAND LISTENING MASTER";
    }
    if (percent >= 70) {
      return "🏆 SHARP LISTENER";
    }
    return "🎧 ACTIVE LISTENER";
  };

  return (
    <div className="page-content grand-summary-page">
      <div className="section-header">
        <span className="brand-badge">📊 Grand Summary Dashboard</span>
        <h2 className="section-title">All Quizzes Breakdown</h2>
        <p className="section-instruction">
          Review your scores, listen counts, and star ratings across all 10 quizzes.
        </p>
      </div>

      {/* Cumulative Stats Banner */}
      <div className="grand-stats-banner">
        <div className="grand-stat-card">
          <div className="grand-stat-value">{totalScore} <span className="max-tag">/ {maxTotalScore}</span></div>
          <div className="grand-stat-label">Total Points Earned</div>
        </div>

        <div className="grand-stat-card">
          <div className="grand-stat-value">{totalStars} <span className="max-tag">/ {maxTotalStars} ⭐</span></div>
          <div className="grand-stat-label">Efficiency Stars</div>
        </div>
      </div>

      <div className="grand-badge-wrapper">
        <span className="grand-master-badge">{getGrandBadge()}</span>
      </div>

      {/* Breakdown List for Each Quiz */}
      <div className="summary-list">
        <h3 className="summary-list-title">Detailed Quiz Performance ({completedCount}/10 Completed)</h3>

        {STORIES_DATA.map((story) => {
          const res = storyResults[story.id];

          return (
            <div key={story.id} className={`summary-row ${res ? 'done' : 'pending'}`}>
              <div className="summary-row-main">
                <span className="row-icon">{story.icon}</span>
                <div className="row-details">
                  <span className="row-title">{story.id}. {story.title}</span>
                  <span className="row-category">{story.category}</span>
                </div>
              </div>

              <div className="summary-row-stats">
                {res ? (
                  <>
                    <div className="row-stat-item">
                      <span className="stat-num">{res.score}/30</span>
                      <span className="stat-lbl">Points</span>
                    </div>

                    <div className="row-stat-item">
                      <span className="stat-num">{res.listens}</span>
                      <span className="stat-lbl">{res.listens === 1 ? 'Listen' : 'Listens'}</span>
                    </div>

                    <div className="row-stat-item stars">
                      <span className="stat-num">{getStarDisplay(res.stars)}</span>
                    </div>
                  </>
                ) : (
                  <span className="not-attempted-badge">Not Attempted</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="action-button-group" style={{ marginTop: '28px' }}>
        <button className="btn-primary" onClick={onBackToHub}>
          STORY HUB 📚
        </button>

        <button className="btn-secondary" onClick={onResetAll}>
          RESTART ALL PROGRESS 🔄
        </button>
      </div>
    </div>
  );
}

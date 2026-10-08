import React from 'react';
import { STORIES_DATA, getStarDisplay } from '../data/storiesData';

/**
 * StorySelectorPage Component
 * Level selector hub displaying all 10 audio stories with badges,
 * play counts, and star ratings earned.
 */
export default function StorySelectorPage({ storyResults, onSelectStory, onViewGrandSummary }) {
  const completedCount = Object.keys(storyResults).length;

  return (
    <div className="page-content story-selector-page">
      <div className="section-header">
        <span className="brand-badge">🎧 10 Story Challenge</span>
        <h2 className="section-title">Select an Audio Story</h2>
        <p className="section-instruction">
          Listen to each story only ONCE to earn maximum 3-Star (⭐⭐⭐) efficiency rating!
        </p>
      </div>

      <div className="stories-grid">
        {STORIES_DATA.map((story) => {
          const res = storyResults[story.id];
          const isDone = !!res;

          return (
            <div
              key={story.id}
              className={`story-card ${isDone ? 'completed' : ''}`}
              onClick={() => onSelectStory(story.id)}
            >
              <div className="story-card-header">
                <span className="story-icon">{story.icon}</span>
                <span className="story-badge">{story.category}</span>
              </div>

              <h3 className="story-card-title">
                {story.id}. {story.title}
              </h3>
              
              <p className="story-card-desc">{story.description}</p>

              <div className="story-card-footer">
                {isDone ? (
                  <div className="completed-info">
                    <span className="stars-earned">{getStarDisplay(res.stars)}</span>
                    <span className="score-earned">{res.score}/30 Pts</span>
                  </div>
                ) : (
                  <span className="start-prompt">Play Level →</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {completedCount > 0 && (
        <button
          className="btn-primary grand-summary-btn"
          onClick={onViewGrandSummary}
        >
          VIEW GRAND SUMMARY ({completedCount}/10 Completed) 🏆
        </button>
      )}
    </div>
  );
}

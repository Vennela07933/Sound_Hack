import React from 'react';
import { calculateStars, getStarDisplay } from '../data/storiesData';

/**
 * ResultPage Component
 * Displays score summary, listener efficiency star rating,
 * and next level / grand summary navigation buttons.
 */
export default function ResultPage({
  story,
  selectedAnswers,
  listenCount,
  totalCompletedCount,
  onNextStory,
  onSelectAnotherStory,
  onViewGrandSummary
}) {
  const questionsData = story.questions;
  let correctCount = 0;
  let wrongCount = 0;

  questionsData.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctAnswer) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const score = correctCount * 10;
  const maxScore = questionsData.length * 10;
  const starsEarned = calculateStars(listenCount);

  const getPerformanceMessage = (score) => {
    if (score === 30) return "Excellent Listening! 🏆";
    if (score === 20) return "Good Job! 👍";
    if (score === 10) return "Keep Practicing! 💪";
    return "Try Again! 🎧";
  };

  return (
    <div className="page-content result-page">
      <div className="result-header">
        <span className="result-emoji">🎉</span>
        <h2 className="section-title">Quiz Complete: Story #{story.id}</h2>
        <p className="app-subtitle">{story.title}</p>
      </div>

      <div className="result-score-card">
        <div className="score-display">
          {score} <span>/ {maxScore}</span>
        </div>

        <div className="stars-earned-banner">
          <span className="stars-large">{getStarDisplay(starsEarned)}</span>
          <span className="stars-label">
            Efficiency Rating ({listenCount === 1 ? '1 Listen' : `${listenCount} Listens`})
          </span>
        </div>

        <div className="performance-badge">
          {getPerformanceMessage(score)}
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-box">
          <div className="stat-value correct">{correctCount}</div>
          <div className="stat-title">Correct Answers</div>
        </div>

        <div className="stat-box">
          <div className="stat-value wrong">{wrongCount}</div>
          <div className="stat-title">Wrong Answers</div>
        </div>
      </div>

      <div className="action-button-group">
        {story.id < 10 && (
          <button className="btn-primary" onClick={onNextStory}>
            NEXT STORY (#{story.id + 1}) →
          </button>
        )}

        <button className="btn-secondary" onClick={onSelectAnotherStory}>
          STORY HUB 📚
        </button>

        <button className="btn-secondary highlight" onClick={onViewGrandSummary}>
          VIEW GRAND SUMMARY ({totalCompletedCount}/10) 🏆
        </button>
      </div>
    </div>
  );
}

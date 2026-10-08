import React from 'react';
import { QUESTIONS_DATA } from './QuestionsPage';

/**
 * ResultPage Component
 * Displays score summary, performance badges, answer breakdowns,
 * and a "PLAY AGAIN" button to reset the challenge.
 */
export default function ResultPage({ selectedAnswers, onPlayAgain }) {
  // Calculate score & statistics
  let correctCount = 0;
  let wrongCount = 0;

  QUESTIONS_DATA.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctAnswer) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const totalScore = correctCount * 10;
  const maxScore = QUESTIONS_DATA.length * 10;

  // Determine Performance Message based on prompt specifications
  const getPerformanceMessage = (score) => {
    if (score === 30) return "Excellent Listening! 🏆";
    if (score === 20) return "Good Job! 👍";
    if (score === 10) return "Keep Practicing! 💪";
    return "Try Again! 🎧";
  };

  const performanceMsg = getPerformanceMessage(totalScore);

  return (
    <div className="page-content result-page">
      <div className="result-header">
        <span className="result-emoji">🎉</span>
        <h2 className="section-title">GAME COMPLETE!</h2>
      </div>

      <div className="result-score-card">
        <div className="score-display">
          {totalScore} <span>/ {maxScore}</span>
        </div>
        <div className="performance-badge">
          {performanceMsg}
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

      <button className="btn-primary" onClick={onPlayAgain}>
        PLAY AGAIN 🔄
      </button>
    </div>
  );
}

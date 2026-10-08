import React from 'react';

/**
 * QuestionsPage Component
 * Displays 3 multiple-choice questions for the active story.
 */
export default function QuestionsPage({
  story,
  currentQuestionIndex,
  selectedAnswers,
  onSelectAnswer,
  onNextQuestion,
  onSubmitAnswers
}) {
  const questionsData = story.questions;
  const currentQ = questionsData[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;

  return (
    <div className="page-content questions-page">
      {/* Header & Step Counter */}
      <div className="question-tracker">
        <span className="question-badge">
          Story #{story.id}: Question {currentQuestionIndex + 1} of {questionsData.length}
        </span>

        <div className="step-dots">
          {questionsData.map((_, idx) => (
            <div
              key={idx}
              className={`step-dot ${
                idx === currentQuestionIndex
                  ? 'active'
                  : idx < currentQuestionIndex
                  ? 'completed'
                  : ''
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question & Options */}
      <div className="question-box">
        <h3 className="question-text">{currentQ.question}</h3>

        <div className="options-list">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOption === opt.key;
            return (
              <button
                key={opt.key}
                className={`option-button ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectAnswer(currentQuestionIndex, opt.key)}
              >
                <span className="option-prefix">{opt.key}</span>
                <span className="option-label">{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      {isLastQuestion ? (
        <button
          className="btn-primary"
          disabled={!selectedOption}
          onClick={onSubmitAnswers}
        >
          SUBMIT ANSWERS 🚀
        </button>
      ) : (
        <button
          className="btn-primary"
          disabled={!selectedOption}
          onClick={onNextQuestion}
        >
          NEXT →
        </button>
      )}
    </div>
  );
}

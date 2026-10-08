import React from 'react';

/**
 * QuestionsPage Component
 * Displays 3 multiple choice questions sequentially based on the audio story.
 * Does NOT reveal answers prior to submission.
 */
export const QUESTIONS_DATA = [
  {
    id: 1,
    question: "When did Rahul join the company?",
    options: [
      { key: 'A', text: 'May' },
      { key: 'B', text: 'June' },
      { key: 'C', text: 'July' },
      { key: 'D', text: 'August' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 2,
    question: "Which module was Rahul responsible for?",
    options: [
      { key: 'A', text: 'Login module' },
      { key: 'B', text: 'Payment module' },
      { key: 'C', text: 'Database module' },
      { key: 'D', text: 'UI module' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 3,
    question: "How long did the payment module take to complete?",
    options: [
      { key: 'A', text: 'Two weeks' },
      { key: 'B', text: 'Four weeks' },
      { key: 'C', text: 'Six weeks' },
      { key: 'D', text: 'Eight weeks' }
    ],
    correctAnswer: 'C'
  }
];

export default function QuestionsPage({
  currentQuestionIndex,
  selectedAnswers,
  onSelectAnswer,
  onNextQuestion,
  onSubmitAnswers
}) {
  const currentQ = QUESTIONS_DATA[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS_DATA.length - 1;

  return (
    <div className="page-content questions-page">
      {/* Tracker & Progress Header */}
      <div className="question-tracker">
        <span className="question-badge">
          Question {currentQuestionIndex + 1} of {QUESTIONS_DATA.length}
        </span>

        <div className="step-dots">
          {QUESTIONS_DATA.map((_, idx) => (
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

      {/* Question Text & Options */}
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

      {/* Action Button */}
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

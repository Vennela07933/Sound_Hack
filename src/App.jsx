import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ListeningPage from './components/ListeningPage';
import QuestionsPage from './components/QuestionsPage';
import ResultPage from './components/ResultPage';

/**
 * Sound Hack App Root Component
 * Central state orchestrator for screens, audio playback speed, user answers, and score.
 */
export default function App() {
  // Screen state: 'home' | 'listen' | 'questions' | 'result'
  const [currentScreen, setCurrentScreen] = useState('home');
  
  // Game state
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([null, null, null]);

  // Handlers for game navigation & user choices
  const handleStartGame = () => {
    setCurrentScreen('listen');
  };

  const handleAudioReady = () => {
    setCurrentScreen('questions');
  };

  const handleSelectAnswer = (questionIndex, answerKey) => {
    const updated = [...selectedAnswers];
    updated[questionIndex] = answerKey;
    setSelectedAnswers(updated);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSubmitAnswers = () => {
    setCurrentScreen('result');
  };

  const handlePlayAgain = () => {
    // Reset all state to clean baseline
    setCurrentScreen('home');
    setPlaybackSpeed(1);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([null, null, null]);
  };

  return (
    <div className="app-wrapper">
      <div className="game-container">
        {currentScreen === 'home' && (
          <HomePage onStartGame={handleStartGame} />
        )}

        {currentScreen === 'listen' && (
          <ListeningPage
            playbackSpeed={playbackSpeed}
            setPlaybackSpeed={setPlaybackSpeed}
            onReady={handleAudioReady}
          />
        )}

        {currentScreen === 'questions' && (
          <QuestionsPage
            currentQuestionIndex={currentQuestionIndex}
            selectedAnswers={selectedAnswers}
            onSelectAnswer={handleSelectAnswer}
            onNextQuestion={handleNextQuestion}
            onSubmitAnswers={handleSubmitAnswers}
          />
        )}

        {currentScreen === 'result' && (
          <ResultPage
            selectedAnswers={selectedAnswers}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </div>

      <div className="footer-tag">
        Sound Hack &bull; College Listening Comprehension Challenge
      </div>
    </div>
  );
}

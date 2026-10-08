import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import StorySelectorPage from './components/StorySelectorPage';
import ListeningPage from './components/ListeningPage';
import QuestionsPage from './components/QuestionsPage';
import ResultPage from './components/ResultPage';
import GrandSummaryPage from './components/GrandSummaryPage';
import { STORIES_DATA, calculateStars } from './data/storiesData';

/**
 * Sound Hack Master App Component
 * Manages multi-story state, listen counters, quiz scoring, and grand summary tracking.
 */
export default function App() {
  // Screen state: 'home' | 'hub' | 'listen' | 'questions' | 'result' | 'grand_summary'
  const [currentScreen, setCurrentScreen] = useState('home');

  // Selected story & audio tracking
  const [selectedStoryId, setSelectedStoryId] = useState(1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [listenCount, setListenCount] = useState(1);

  // Active quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([null, null, null]);

  // Persistent results map: { [storyId]: { score: number, listens: number, stars: number } }
  const [storyResults, setStoryResults] = useState({});

  const activeStory = STORIES_DATA.find((s) => s.id === selectedStoryId) || STORIES_DATA[0];

  // Handlers
  const handleStartGame = () => {
    setCurrentScreen('hub');
  };

  const handleSelectStory = (storyId) => {
    setSelectedStoryId(storyId);
    setListenCount(1);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([null, null, null]);
    setCurrentScreen('listen');
  };

  const handleAudioReady = () => {
    setCurrentScreen('questions');
  };

  const handleSelectAnswer = (qIndex, answerKey) => {
    const updated = [...selectedAnswers];
    updated[qIndex] = answerKey;
    setSelectedAnswers(updated);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSubmitAnswers = () => {
    // Calculate score for active story
    let correctCount = 0;
    activeStory.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const score = correctCount * 10;
    const finalListens = listenCount === 0 ? 1 : listenCount;
    const stars = calculateStars(finalListens);

    // Save result to map
    setStoryResults((prev) => ({
      ...prev,
      [activeStory.id]: {
        score,
        listens: finalListens,
        stars
      }
    }));

    setCurrentScreen('result');
  };

  const handleNextStory = () => {
    if (selectedStoryId < 10) {
      handleSelectStory(selectedStoryId + 1);
    } else {
      setCurrentScreen('grand_summary');
    }
  };

  const handleResetAll = () => {
    setStoryResults({});
    setSelectedStoryId(1);
    setListenCount(1);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([null, null, null]);
    setCurrentScreen('home');
  };

  return (
    <div className="app-wrapper">
      <div className="game-container">
        {currentScreen === 'home' && (
          <HomePage onStartGame={handleStartGame} />
        )}

        {currentScreen === 'hub' && (
          <StorySelectorPage
            storyResults={storyResults}
            onSelectStory={handleSelectStory}
            onViewGrandSummary={() => setCurrentScreen('grand_summary')}
          />
        )}

        {currentScreen === 'listen' && (
          <ListeningPage
            story={activeStory}
            playbackSpeed={playbackSpeed}
            setPlaybackSpeed={setPlaybackSpeed}
            listenCount={listenCount}
            setListenCount={setListenCount}
            onReady={handleAudioReady}
          />
        )}

        {currentScreen === 'questions' && (
          <QuestionsPage
            story={activeStory}
            currentQuestionIndex={currentQuestionIndex}
            selectedAnswers={selectedAnswers}
            onSelectAnswer={handleSelectAnswer}
            onNextQuestion={handleNextQuestion}
            onSubmitAnswers={handleSubmitAnswers}
          />
        )}

        {currentScreen === 'result' && (
          <ResultPage
            story={activeStory}
            selectedAnswers={selectedAnswers}
            listenCount={listenCount}
            totalCompletedCount={Object.keys(storyResults).length}
            onNextStory={handleNextStory}
            onSelectAnotherStory={() => setCurrentScreen('hub')}
            onViewGrandSummary={() => setCurrentScreen('grand_summary')}
          />
        )}

        {currentScreen === 'grand_summary' && (
          <GrandSummaryPage
            storyResults={storyResults}
            onBackToHub={() => setCurrentScreen('hub')}
            onResetAll={handleResetAll}
          />
        )}
      </div>

      <div className="footer-tag">
        Sound Hack &bull; 10-Story Audio Listening Challenge
      </div>
    </div>
  );
}

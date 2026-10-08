import React, { useRef, useState, useEffect } from 'react';
import { calculateStars, getStarDisplay } from '../data/storiesData';

/**
 * ListeningPage Component
 * Plays story audio, controls speed, tracks listen count,
 * and displays active efficiency rating state.
 */
export default function ListeningPage({
  story,
  playbackSpeed,
  setPlaybackSpeed,
  listenCount,
  setListenCount,
  onReady
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Update playback speed whenever state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Sync current time and duration
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
      audioRef.current.playbackRate = playbackSpeed;
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (window.speechSynthesis) window.speechSynthesis.pause();
    } else {
      // If starting playback for the first time or re-listening, increment count if audio ended
      if (listenCount === 0) {
        setListenCount(1);
      }
      audioRef.current.playbackRate = playbackSpeed;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn("HTML5 Audio play error, invoking SpeechSynthesis fallback:", err);
            playSpeechFallback();
          });
      }
    }
  };

  const handleReplay = () => {
    // Replay increases listen count and reduces efficiency rating
    setListenCount((prev) => prev + 1);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.playbackRate = playbackSpeed;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => playSpeechFallback());
    } else {
      playSpeechFallback();
    }
  };

  // Web Speech API fallback for instant audio synthesis
  const playSpeechFallback = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(story.speechText);
      utterance.rate = playbackSpeed;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const currentStars = calculateStars(listenCount);

  return (
    <div className="page-content listening-page">
      <div className="section-header">
        <span className="brand-badge">{story.category} &bull; Story #{story.id}</span>
        <h2 className="section-title">{story.icon} {story.title}</h2>
        <p className="section-instruction">
          Listen carefully to the audio. Do not rely on written text!
        </p>
      </div>

      {/* Live Efficiency Rating Bar */}
      <div className="listen-rating-banner">
        <div className="rating-info">
          <span className="rating-stars">{getStarDisplay(currentStars)}</span>
          <span className="rating-text">
            {listenCount <= 1
              ? "1st Listen: Max ⭐⭐⭐ Rating Active!"
              : `Listened ${listenCount} times (Rating decreased to ${currentStars} Stars)`}
          </span>
        </div>
      </div>

      <div className="audio-box">
        {/* Animated wave visualizer */}
        <div className={`visualizer-wrapper ${isPlaying ? 'playing' : ''}`}>
          <div className="audio-bar"></div>
          <div className="audio-bar"></div>
          <div className="audio-bar"></div>
          <div className="audio-bar"></div>
          <div className="audio-bar"></div>
          <div className="audio-bar"></div>
          <div className="audio-bar"></div>
          <div className="audio-bar"></div>
        </div>

        {/* Audio Controls */}
        <div className="audio-controls">
          <button 
            className="btn-audio-action" 
            onClick={handleReplay}
            title="Replay Audio (Increases listen count)"
          >
            ↺
          </button>
          
          <button 
            className="btn-audio-action play-main" 
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
        </div>

        {/* Timeline Track */}
        <div className="time-progress-container">
          <div className="progress-track" onClick={handleSeek}>
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="time-labels">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Speed Controls */}
        <div className="speed-control-group">
          <span className="speed-label">Playback Speed</span>
          <div className="speed-buttons">
            {[0.5, 1, 1.5, 2].map((speed) => (
              <button
                key={speed}
                className={`speed-btn ${playbackSpeed === speed ? 'active' : ''}`}
                onClick={() => setPlaybackSpeed(speed)}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>

        <audio
          ref={audioRef}
          src={story.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      <button className="btn-primary" onClick={() => {
        if (audioRef.current) audioRef.current.pause();
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        onReady();
      }}>
        I'M READY FOR THE QUIZ →
      </button>
    </div>
  );
}

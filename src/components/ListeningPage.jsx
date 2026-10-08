import React, { useRef, useState, useEffect } from 'react';

/**
 * ListeningPage Component
 * Provides audio playback controls, speed adjusters (0.5x, 1x, 1.5x, 2x),
 * and audio state tracking. Note: The written story text is intentionally HIDDEN.
 */
export default function ListeningPage({ playbackSpeed, setPlaybackSpeed, onReady }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);

  // Story text used exclusively for Web Speech API synthesis fallback if audio file fails
  const storySpeechText = "Rahul joined a software company in June. His team was developing an e-commerce application. Rahul was responsible for the payment module. The team expected to complete the module in four weeks, but a technical issue delayed the work, and it took six weeks to complete.";

  // Update playback speed whenever playbackSpeed state changes
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
      audioRef.current.playbackRate = playbackSpeed;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAudioError(false);
          })
          .catch((err) => {
            console.warn("HTML5 Audio play error, invoking SpeechSynthesis fallback:", err);
            setAudioError(true);
            playSpeechFallback();
          });
      }
    }
  };

  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.playbackRate = playbackSpeed;
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => playSpeechFallback());
    } else {
      playSpeechFallback();
    }
  };

  // Web Speech API fallback in case browser blocks or can't access audio file
  const playSpeechFallback = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(storySpeechText);
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

  return (
    <div className="page-content listening-page">
      <div className="section-header">
        <h2 className="section-title">🎧 Listen Carefully</h2>
        <p className="section-instruction">
          Listen to the complete story. You will answer questions based on what you hear.
        </p>
      </div>

      <div className="audio-box">
        {/* Animated wave bars visualizer */}
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

        {/* Audio Controls (Replay, Play/Pause) */}
        <div className="audio-controls">
          <button 
            className="btn-audio-action" 
            onClick={handleReplay}
            title="Replay Audio"
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

        {/* Timeline Progress Bar */}
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

        {/* 
          HTML5 Audio Element 
          Audio Source Location: public/audio/story1.mp3
          Instructions: Place your custom audio file at 'public/audio/story1.mp3' if you want to swap the story audio!
        */}
        <audio
          ref={audioRef}
          src="/audio/story1.mp3"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onError={() => console.log("Note: Native audio fallback ready if story1.mp3 missing.")}
        />
      </div>

      <div className="dev-note-box">
        💡 <strong>Audio Source:</strong> <code>public/audio/story1.mp3</code> (Place your custom MP3 file here anytime)
      </div>

      <button className="btn-primary" onClick={() => {
        if (audioRef.current) audioRef.current.pause();
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        onReady();
      }}>
        I'M READY →
      </button>
    </div>
  );
}

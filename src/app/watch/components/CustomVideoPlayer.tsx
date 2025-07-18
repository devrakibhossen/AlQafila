"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Controls ref can be used for more advanced interactions like hiding controls on idle
  const controlsContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [speed, setSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isBuffering, setIsBuffering] = useState(false); // New state for buffering

  // Timeout for hiding controls
  const controlsHideTimeout = useRef<NodeJS.Timeout | null>(null);

  // Function to hide controls after a delay
  const hideControlsAfterDelay = useCallback(() => {
    if (isPlaying) {
      // Only hide controls if video is playing
      if (controlsHideTimeout.current) {
        clearTimeout(controlsHideTimeout.current);
      }
      controlsHideTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000); // Hide after 3 seconds of inactivity
    }
  }, [isPlaying]);

  // Effect for video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume;
    video.playbackRate = speed;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      // If video starts muted (autoplay often requires it), unmute initially
      // Or set initial volume. Let's keep the muted state as true based on your original code.
      // video.volume = 0.5; // Set initial volume
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsBuffering(true); // When video is buffering
    const handlePlaying = () => setIsBuffering(false); // When video resumes playing

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Initial check for fullscreen state in case component mounts in fullscreen
    setIsFullscreen(!!document.fullscreenElement);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      if (controlsHideTimeout.current) {
        clearTimeout(controlsHideTimeout.current);
      }
    };
  }, [volume, speed]);

  // Effect for handling controls visibility on mouse move/idle
  useEffect(() => {
    const playerContainer = videoRef.current?.parentElement;
    if (!playerContainer) return;

    const handleMouseMove = () => {
      setShowControls(true);
      hideControlsAfterDelay();
    };

    playerContainer.addEventListener("mousemove", handleMouseMove);
    playerContainer.addEventListener("mouseenter", handleMouseMove); // Show controls on mouse enter
    playerContainer.addEventListener("mouseleave", () =>
      setShowControls(false)
    ); // Hide controls on mouse leave (immediately)

    // Initial hide after component mounts
    hideControlsAfterDelay();

    return () => {
      playerContainer.removeEventListener("mousemove", handleMouseMove);
      playerContainer.removeEventListener("mouseenter", handleMouseMove);
      playerContainer.removeEventListener("mouseleave", () =>
        setShowControls(false)
      );
      if (controlsHideTimeout.current) {
        clearTimeout(controlsHideTimeout.current);
      }
    };
  }, [hideControlsAfterDelay]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    // No need to set isPlaying state here, event listeners will handle it
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    // If unmuting from 0 volume, set it to a default
    if (!video.muted && video.volume === 0) {
      video.volume = 0.5;
      setVolume(0.5);
    }
  };

  const toggleFullscreen = () => {
    const videoContainer = videoRef.current?.parentElement; // Request fullscreen on the container
    if (!videoContainer) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoContainer.requestFullscreen();
    }
  };

  const changeSpeed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpeed(parseFloat(e.target.value));
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = (parseFloat(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
    setCurrentTime(newTime); // Update current time immediately on scrub
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      setIsMuted(videoRef.current.muted);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00"; // Handle NaN before calculation
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Keyboard shortcuts (optional, but highly recommended for pro players)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const video = videoRef.current;
      if (!video) return;

      switch (e.key) {
        case " ": // Spacebar
          e.preventDefault(); // Prevent page scrolling
          togglePlay();
          break;
        case "ArrowRight": // Right arrow
          video.currentTime = Math.min(video.currentTime + 5, video.duration); // Seek 5 seconds forward
          break;
        case "ArrowLeft": // Left arrow
          video.currentTime = Math.max(video.currentTime - 5, 0); // Seek 5 seconds backward
          break;
        case "ArrowUp": // Up arrow
          setVolume((prev) => Math.min(prev + 0.1, 1));
          break;
        case "ArrowDown": // Down arrow
          setVolume((prev) => Math.max(prev - 0.1, 0));
          break;
        case "f": // 'f' for fullscreen
          toggleFullscreen();
          break;
        case "m": // 'm' for mute
          toggleMute();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePlay, toggleFullscreen, toggleMute]); // Dependencies for useCallback

  return (
    <div
      className="relative w-full max-h-[500px] overflow-hidden group bg-black  " // Added rounded corners and shadow
      // onMouseEnter and onMouseLeave are handled by useEffect now for better control
    >
      <video
        ref={videoRef}
        src={src}
        muted={isMuted}
        preload="metadata"
        className="w-full h-auto max-h-[500px] object-contain cursor-pointer" // object-contain for better aspect ratio fitting
        onClick={togglePlay}
        aria-label="Video player"
      />

      {/* Loading Indicator */}
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <svg
            className="animate-spin h-10 w-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}

      {/* Progress bar and time display */}
      <div
        className={`absolute bottom-16 left-0 right-0 px-6 z-8 transition-transform transition-opacity duration-300 ${
          showControls
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none" // pointer-events-none to prevent interaction when hidden
        }`}
      >
        <div className="flex items-center gap-3 text-sm text-white font-medium">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="flex-1 h-1.5 appearance-none bg-gray-600 rounded-full cursor-pointer 
                       [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
                       [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                       [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150
                       hover:[&::-webkit-slider-thumb]:scale-110 focus:[&::-webkit-slider-thumb]:ring-2 focus:[&::-webkit-slider-thumb]:ring-white focus:[&::-webkit-slider-thumb]:ring-opacity-50"
            aria-label="Video progress"
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div
        ref={controlsContainerRef}
        className={`absolute bg-gradient-to-t from-black/70 to-transparent bottom-0 left-0 right-0 px-6 pt-6 pb-4 flex items-center justify-between 
        text-white transition-all duration-300 z-8
        ${
          showControls
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none" // pointer-events-none to prevent interaction when hidden
        }`}
      >
        {/* Left Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause size={20} className="text-white" />
            ) : (
              <Play size={20} className="text-white" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX size={20} className="text-white" />
              ) : (
                <Volume2 size={20} className="text-white" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1.5 bg-gray-600 rounded-full appearance-none 
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
                         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                         [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150
                         hover:[&::-webkit-slider-thumb]:scale-110 focus:[&::-webkit-slider-thumb]:ring-2 focus:[&::-webkit-slider-thumb]:ring-white focus:[&::-webkit-slider-thumb]:ring-opacity-50"
              aria-label="Volume control"
            />
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <select
            className="bg-white/10 text-white rounded-lg px-2 py-1.5 text-sm border border-white/20 
                       focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 backdrop-blur-sm cursor-pointer"
            value={speed}
            onChange={changeSpeed}
            aria-label="Playback speed"
          >
            <option value="0.5" className="bg-gray-800 text-white">
              0.5x
            </option>
            <option value="1" className="bg-gray-800 text-white">
              1x
            </option>
            <option value="1.5" className="bg-gray-800 text-white">
              1.5x
            </option>
            <option value="2" className="bg-gray-800 text-white">
              2x
            </option>
          </select>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 size={20} className="text-white" />
            ) : (
              <Maximize2 size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;

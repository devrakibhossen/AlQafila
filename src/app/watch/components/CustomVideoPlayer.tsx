"use client";
import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [speed, setSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume;
    video.playbackRate = speed;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [volume, speed]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
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
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div 
      className="relative w-full max-h-[500px] overflow-hidden group shadow-2xl bg-black"
      onMouseEnter={() => setShowControls(true)} 
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        muted={isMuted}
        preload="metadata"
        className="w-full h-auto max-h-[500px] object-cover cursor-pointer "
        onClick={togglePlay}
      />

      {/* Progress bar */}
      <div className="absolute bottom-10 left-0 right-0 px-4 z-20">
        <div className={`flex items-center gap-2 text-xs text-white/80  ${showControls ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
          <span>{formatTime(videoRef.current?.currentTime || 0)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="flex-1 h-1.5 appearance-none bg-green-accent rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
          <span>{formatTime(videoRef.current?.duration || 0)}</span>
        </div>
      </div>

      {/* Controls */}
      <div 
        ref={controlsRef}
        className={`absolute bottom-0 left-0 right-0 px-6 py-1 flex items-center justify-between 
        text-white transition-all duration-300
        ${showControls ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        {/* Left Controls */}
        <div className="flex items-center gap-3">
          <button 
            onClick={togglePlay} 
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
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
              className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-all duration-200"
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
              className="w-20 h-1 bg-green-accent rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <select 
            className="bg-white/10 text-white rounded-lg px-3 py-1 text-sm border border-white/20 focus:outline-none focus:ring-2  focus:border-transparent backdrop-blur-sm"
            value={speed} 
            onChange={changeSpeed}
          >
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>

          <button 
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {isFullscreen ? (
              <Minimize2 size={20} className="green-accent" />
            ) : (
              <Maximize2 size={20} className="green-accent" />
            )}
          </button>
        </div>
      </div>

      {/* Play/Pause center button */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
        >
          <Play size={32} className="green-accent pl-1" />
        </button>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
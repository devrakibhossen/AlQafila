"use client";
import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5); // Default volume: 50%

  // Update progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume;

    const handleTimeUpdate = () => {
      const current = video.currentTime;
      const total = video.duration;
      setProgress((current / total) * 100);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [volume]);

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

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (
      (video as HTMLVideoElement & { webkitRequestFullscreen?: () => void })
        .webkitRequestFullscreen
    ) {
      (video as HTMLVideoElement & { webkitRequestFullscreen?: () => void })
        .webkitRequestFullscreen!();
    }
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

  return (
    <div className="relative w-full max-h-[400px]  overflow-hidden group">
      <video
        ref={videoRef}
        src={src}
        muted
        preload="metadata"
        className="w-full max-h-[400px] object-cover cursor-pointer"
        onClick={togglePlay}
      ></video>

      {/* Progress bar */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        className="absolute bottom-10 left-0 right-0 w-full h-1 bg-gray-300 appearance-none cursor-pointer group-hover:opacity-100 opacity-0 transition"
      />

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition text-white">
        {/* Left controls */}
        <div className="flex items-center gap-3">
          <button onClick={togglePlay}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button onClick={toggleMute}>
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          {/* Volume slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 cursor-pointer"
          />
        </div>

        {/* Fullscreen */}
        <button onClick={toggleFullscreen}>
          <Maximize2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;

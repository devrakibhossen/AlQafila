// "use client";
// import React, { useRef, useState, useEffect, useCallback } from "react";
// import {
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   Maximize2,
//   Minimize2,
// } from "lucide-react";

// interface CustomVideoPlayerProps {
//   src?: string;
// }
// interface HTMLVideoElementWithWebkit extends HTMLVideoElement {
//   webkitEnterFullscreen?: () => void;
// }

// const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
//   src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const controlsContainerRef = useRef<HTMLDivElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [volume, setVolume] = useState(0.7);
//   const [speed, setSpeed] = useState(1);
//   const [showControls, setShowControls] = useState(true);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [isBuffering, setIsBuffering] = useState(false);
//   const [showVolumeSlider, setShowVolumeSlider] = useState(false);
//   const [showSpeedMenu, setShowSpeedMenu] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [lastTapTime, setLastTapTime] = useState(0);
//   const controlsHideTimeout = useRef<NodeJS.Timeout | null>(null);

//   // Auto-hide volume slider on mobile after interaction
//   useEffect(() => {
//     if (isMobile && showVolumeSlider) {
//       const timer = setTimeout(() => {
//         setShowVolumeSlider(false);
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [showVolumeSlider, isMobile]);

//   // Mobile detection
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const hideControlsAfterDelay = useCallback(() => {
//     if (isPlaying) {
//       if (controlsHideTimeout.current) {
//         clearTimeout(controlsHideTimeout.current);
//       }
//       controlsHideTimeout.current = setTimeout(() => {
//         setShowControls(false);
//         setShowVolumeSlider(false);
//         setShowSpeedMenu(false);
//       }, isMobile ? 4000 : 3000); // Longer delay on mobile
//     }
//   }, [isPlaying, isMobile]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     video.volume = volume;
//     video.playbackRate = speed;

//     const handleTimeUpdate = () => {
//       setProgress((video.currentTime / video.duration) * 100);
//       setCurrentTime(video.currentTime);
//     };

//     const handleLoadedMetadata = () => {
//       setDuration(video.duration);
//     };

//     const handlePlay = () => setIsPlaying(true);
//     const handlePause = () => setIsPlaying(false);
//     const handleWaiting = () => setIsBuffering(true);
//     const handlePlaying = () => setIsBuffering(false);

//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     video.addEventListener("timeupdate", handleTimeUpdate);
//     video.addEventListener("loadedmetadata", handleLoadedMetadata);
//     video.addEventListener("play", handlePlay);
//     video.addEventListener("pause", handlePause);
//     video.addEventListener("waiting", handleWaiting);
//     video.addEventListener("playing", handlePlaying);
//     document.addEventListener("fullscreenchange", handleFullscreenChange);

//     setIsFullscreen(!!document.fullscreenElement);

//     return () => {
//       video.removeEventListener("timeupdate", handleTimeUpdate);
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       video.removeEventListener("play", handlePlay);
//       video.removeEventListener("pause", handlePause);
//       video.removeEventListener("waiting", handleWaiting);
//       video.removeEventListener("playing", handlePlaying);
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//       if (controlsHideTimeout.current) {
//         clearTimeout(controlsHideTimeout.current);
//       }
//     };
//   }, [volume, speed]);

//   // Touch and mouse events
//   useEffect(() => {
//     const playerContainer = videoRef.current?.parentElement;
//     if (!playerContainer) return;

//     const handleInteraction = () => {
//       setShowControls(true);
//       hideControlsAfterDelay();
//     };

//     const handleLeave = () => {
//       if (!isMobile) {
//         setShowControls(false);
//         setShowVolumeSlider(false);
//         setShowSpeedMenu(false);
//       }
//     };

//     if (isMobile) {
//       playerContainer.addEventListener("touchstart", handleInteraction);
//       playerContainer.addEventListener("touchmove", handleInteraction);
//     } else {
//       playerContainer.addEventListener("mousemove", handleInteraction);
//       playerContainer.addEventListener("mouseenter", handleInteraction);
//       playerContainer.addEventListener("mouseleave", handleLeave);
//     }

//     hideControlsAfterDelay();

//     return () => {
//       if (isMobile) {
//         playerContainer.removeEventListener("touchstart", handleInteraction);
//         playerContainer.removeEventListener("touchmove", handleInteraction);
//       } else {
//         playerContainer.removeEventListener("mousemove", handleInteraction);
//         playerContainer.removeEventListener("mouseenter", handleInteraction);
//         playerContainer.removeEventListener("mouseleave", handleLeave);
//       }
//       if (controlsHideTimeout.current) {
//         clearTimeout(controlsHideTimeout.current);
//       }
//     };
//   }, [hideControlsAfterDelay, isMobile]);

//   const togglePlay = useCallback(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   }, []);

//   // Double tap for fullscreen on mobile
//   const handleVideoTap = useCallback((e: React.MouseEvent | React.TouchEvent) => {
//     const currentTime = Date.now();
//     const timeDiff = currentTime - lastTapTime;

//     if (isMobile && timeDiff < 300 && timeDiff > 0) {
//       // Double tap detected
//       e.preventDefault();
//       toggleFullscreen();
//     } else {
//       // Single tap
//       togglePlay();
//     }

//     setLastTapTime(currentTime);
//   }, [lastTapTime, isMobile, togglePlay]);

//   const toggleMute = useCallback(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     video.muted = !video.muted;
//     setIsMuted(video.muted);

//     if (!video.muted && video.volume === 0) {
//       video.volume = 0.5;
//       setVolume(0.5);
//     }
//   }, []);

//   const toggleFullscreen = useCallback(() => {
//     const videoContainer = videoRef.current?.parentElement;
//     if (!videoContainer) return;

//     if (document.fullscreenElement) {
//       document.exitFullscreen();
//     } else {
//     videoContainer.requestFullscreen().catch(() => {
//       // Fallback for iOS Safari
//       const video = videoRef.current as HTMLVideoElementWithWebkit | null;
//       video?.webkitEnterFullscreen?.();
//     });
//   }
//   }, []);

//   const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const video = videoRef.current;
//     if (!video) return;

//     const newTime = (parseFloat(e.target.value) / 100) * video.duration;
//     video.currentTime = newTime;
//     setProgress(parseFloat(e.target.value));
//     setCurrentTime(newTime);
//   };

//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);

//     if (videoRef.current) {
//       videoRef.current.volume = newVolume;
//       videoRef.current.muted = newVolume === 0;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   const formatTime = (seconds: number) => {
//     if (isNaN(seconds)) return "0:00";
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   const changeSpeed = (newSpeed: number) => {
//     setSpeed(newSpeed);
//     setShowSpeedMenu(false);
//   };

//   // Keyboard shortcuts (disabled on mobile)
//   useEffect(() => {
//     if (isMobile) return;

//     const handleKeyDown = (e: KeyboardEvent) => {
//       const video = videoRef.current;
//       if (!video) return;

//       switch (e.key) {
//         case " ":
//           e.preventDefault();
//           togglePlay();
//           break;
//         case "ArrowRight":
//           video.currentTime = Math.min(video.currentTime + 5, video.duration);
//           break;
//         case "ArrowLeft":
//           video.currentTime = Math.max(video.currentTime - 5, 0);
//           break;
//         case "ArrowUp":
//           e.preventDefault();
//           setVolume((prev) => Math.min(prev + 0.1, 1));
//           break;
//         case "ArrowDown":
//           e.preventDefault();
//           setVolume((prev) => Math.max(prev - 0.1, 0));
//           break;
//         case "f":
//           toggleFullscreen();
//           break;
//         case "m":
//           toggleMute();
//           break;
//         default:
//           break;
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [togglePlay, toggleFullscreen, toggleMute, isMobile]);

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-black  overflow-hidden shadow-2xl">
//       <div
//         className="relative w-full bg-black group select-none"
//         style={{ aspectRatio: '16/9' }}
//       >
//         <video
//           ref={videoRef}
//           src={src}
//           muted={isMuted}
//           preload="metadata"
//           className={`w-full h-full object-contain cursor-pointer ${
//             isFullscreen ? "h-screen" : ""
//           }`}
//           onClick={!isMobile ? togglePlay : undefined}
//           onTouchEnd={isMobile ? handleVideoTap : undefined}
//           aria-label="Video player"
//           playsInline // Important for iOS
//           webkit-playsinline="true" // Legacy iOS support
//         />

//         {/* Center Play Button */}
//         {!isPlaying && !isBuffering && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <button
//               onClick={togglePlay}
//               onTouchEnd={(e) => {
//                 e.stopPropagation();
//                 togglePlay();
//               }}
//               className={`bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
//                 isMobile ? 'p-2' : 'p-2'
//               }`}
//             >
//               <Play size={isMobile ? 20 : 22} className="text-white ml-1" />
//             </button>
//           </div>
//         )}

//         {/* Loading Indicator */}
//         {isBuffering && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//             <div className={`animate-spin rounded-full border-4 border-white/30 border-t-white ${
//               isMobile ? 'h-16 w-16' : 'h-12 w-12'
//             }`}></div>
//           </div>
//         )}

//         {/* Progress bar */}
//         <div
//           className={`absolute ${isMobile ? 'bottom-14' : 'bottom-12'} left-0 right-0 px-4 transition-opacity duration-300 ${
//             showControls ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="relative">
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={progress}
//               onChange={handleProgressChange}
//               className={`w-full bg-white/30 rounded-full appearance-none cursor-pointer
//                          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
//                          [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg
//                          [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150 ${
//                 isMobile
//                   ? 'h-2 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5'
//                   : 'h-1 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 hover:[&::-webkit-slider-thumb]:scale-110'
//               }`}
//               style={{
//                 background: `linear-gradient(to right, #1976d2 0%, #1976d2 ${progress}%, rgba(255,255,255,0.3) ${progress}%, rgba(255,255,255,0.3) 100%)`
//               }}
//             />
//           </div>
//         </div>

//         {/* Controls */}
//         <div
//           ref={controlsContainerRef}
//           className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
//                       text-white transition-all duration-300 ${
//             isMobile ? 'px-3 py-2' : 'px-4 py-3'
//           } ${
//             showControls ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//         >
//           {/* Mobile Layout */}
//           {isMobile ? (
//             <div className="space-y-2">
//               {/* Top row: Time */}
//               <div className="flex justify-center">
//                 <div className="text-xs font-medium bg-black/50 px-2 py-1 rounded">
//                   {formatTime(currentTime)} / {formatTime(duration)}
//                 </div>
//               </div>

//               {/* Bottom row: Controls */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={togglePlay}
//                     className="p-3 rounded-full hover:bg-white/20 active:bg-white/30 transition-all duration-200"
//                   >
//                     {isPlaying ? <Pause size={24} /> : <Play size={24} />}
//                   </button>

//                 <div className="flex items-center gap-2 relative">
//                   <button
//                     onClick={toggleMute}
//                     onTouchStart={() => setShowVolumeSlider(!showVolumeSlider)}
//                     className="p-3 rounded-full hover:bg-white/20 active:bg-white/30 transition-all duration-200"
//                   >
//                     {isMuted || volume === 0 ? <VolumeX size={24} /> : <Volume2 size={24} />}
//                   </button>

//                   {/* Mobile Volume Slider */}
//                   {showVolumeSlider && (
//                     <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-black/90 backdrop-blur-sm rounded-lg p-3 min-w-[140px]">
//                       <div className="flex items-center gap-3">
//                         <VolumeX size={16} className="text-white/70" />
//                         <input
//                           type="range"
//                           min="0"
//                           max="1"
//                           step="0.01"
//                           value={volume}
//                           onChange={handleVolumeChange}
//                           className="flex-1 h-2 bg-white/30 rounded-full appearance-none cursor-pointer
//                                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
//                                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
//                                      [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
//                           style={{
//                             background: `linear-gradient(to right, #1976d2 0%, #1976d2 ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
//                           }}
//                         />
//                         <Volume2 size={16} className="text-white/70" />
//                       </div>
//                       <div className="text-center mt-2 text-xs text-white/80 font-medium">
//                         {Math.round(volume * 100)}%
//                       </div>
//                       {/* Small arrow pointing down */}
//                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
//                     </div>
//                   )}
//                 </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => setShowSpeedMenu(!showSpeedMenu)}
//                     className="px-3 py-2 text-sm bg-white/20 rounded hover:bg-white/30 active:bg-white/40 transition-all duration-200 min-w-12"
//                   >
//                     {speed}x
//                   </button>

//                   <button
//                     onClick={toggleFullscreen}
//                     className="p-3 rounded-full hover:bg-white/20 active:bg-white/30 transition-all duration-200"
//                   >
//                     {isFullscreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             /* Desktop Layout */
//             <div className="flex items-center justify-between">
//               {/* Left Controls */}
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={togglePlay}
//                   className="p-2 rounded-full hover:bg-white/20 transition-all duration-200"
//                 >
//                   {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//                 </button>

//                 <div className="flex items-center gap-2 relative group">
//                   <button
//                     onClick={toggleMute}
//                     className="p-2 rounded-full hover:bg-white/20 transition-all duration-200 relative"
//                   >
//                     {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
//                   </button>

//                   {/* Desktop Volume Slider */}
//                   <div className="hidden group-hover:flex items-center bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 absolute left-full ml-2 whitespace-nowrap">
//                     <input
//                       type="range"
//                       min="0"
//                       max="1"
//                       step="0.01"
//                       value={volume}
//                       onChange={handleVolumeChange}
//                       className="w-20 h-1 bg-white/30 rounded-full appearance-none cursor-pointer
//                                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3
//                                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer
//                                  [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
//                       style={{
//                         background: `linear-gradient(to right, #1976d2 0%, #1976d2 ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
//                       }}
//                     />
//                     <span className="ml-2 text-xs font-medium w-8 text-right">
//                       {Math.round(volume * 100)}%
//                     </span>
//                   </div>
//                 </div>

//                 <div className="text-sm font-medium">
//                   {formatTime(currentTime)} / {formatTime(duration)}
//                 </div>
//               </div>

//               {/* Right Controls */}
//               <div className="flex items-center gap-3">
//                 {/* Speed Control */}
//                 <div className="relative">
//                   <button
//                     onClick={() => setShowSpeedMenu(!showSpeedMenu)}
//                     className="px-2 py-1 text-sm bg-white/20 rounded hover:bg-white/30 transition-all duration-200"
//                   >
//                     {speed}x
//                   </button>

//                   {showSpeedMenu && (
//                     <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-sm rounded-lg p-1 min-w-16">
//                       {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
//                         <button
//                           key={s}
//                           onClick={() => changeSpeed(s)}
//                           className={`block w-full px-2 py-1 text-sm text-left hover:bg-white/20 rounded ${
//                             speed === s ? "bg-white/20" : ""
//                           }`}
//                         >
//                           {s}x
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   onClick={toggleFullscreen}
//                   className="p-2 rounded-full hover:bg-white/20 transition-all duration-200"
//                 >
//                   {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Speed Menu for Mobile */}
//         {isMobile && showSpeedMenu && (
//           <div className="absolute bottom-20 right-4 bg-black/90 backdrop-blur-sm rounded-lg p-2 min-w-20">
//             {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
//               <button
//                 key={s}
//                 onClick={() => changeSpeed(s)}
//                 className={`block w-full px-3 py-2 text-sm text-center hover:bg-white/20 active:bg-white/30 rounded transition-all ${
//                   speed === s ? "bg-white/20" : ""
//                 }`}
//               >
//                 {s}x
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Mobile Helper Text (shows briefly) */}
//         {isMobile && showControls && !isPlaying && (
//           <div className="absolute top-4 left-4 right-4 text-center">
//             <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white/80 inline-block">
//               Double tap for fullscreen
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomVideoPlayer;
"use client";
import React, { useRef } from "react";
import VideoJS from "./video";
import type { VideoJsPlayer } from "video.js";

interface CustomVideoPlayerProps {
  src?: string;
}

const CustomVideoPlayer = ({ src }: CustomVideoPlayerProps) => {
  const playerRef = useRef<VideoJsPlayer | null>(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: src ? [{ src, type: "video/mp4" }] : [],
  };
  const handlePlayerReady = (player: VideoJsPlayer) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div className="aspect-video max-h-[600px]">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default CustomVideoPlayer;

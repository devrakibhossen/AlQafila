import React, { useRef, useEffect } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";

interface VideoJSProps {
  options: VideoJsPlayerOptions;
  onReady?: (player: VideoJsPlayer) => void;
}

export const VideoJS: React.FC<VideoJSProps> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      // Create video element
      const videoElement = document.createElement("video");
      videoElement.classList.add("video-js", "vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      // Initialize Video.js
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onReady && onReady(player);
      }));
    } else if (playerRef.current) {
      // Update player if options change
      const player = playerRef.current;
      if (options.autoplay !== undefined) {
        player.autoplay(options.autoplay);
      }
      if (options.sources) {
        player.src(options.sources);
      }
    }
  }, [options, onReady]);

  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className="aspect-video max-h-[600px]">
      <div ref={videoRef} />
    </div>
  );
};

export default VideoJS;

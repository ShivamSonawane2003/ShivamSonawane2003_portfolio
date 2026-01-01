import { useEffect, useRef, useState } from 'react';
import animationVideo from '@/assets/animation.mov';

interface VideoBackgroundProps {
  fixed?: boolean;
  opacity?: number;
  showOverlay?: boolean;
}

const VideoBackground = ({ 
  fixed = true, 
  opacity = 0.7,
  showOverlay = true 
}: VideoBackgroundProps = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      // Ensure video plays
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Video autoplay prevented:', error);
        });
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);

    // Try to load and play immediately
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className={`${fixed ? 'fixed' : 'absolute'} inset-0 z-0 overflow-hidden pointer-events-none`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isLoaded ? opacity : 0,
          transition: 'opacity 0.5s ease-in-out',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      >
        <source src={animationVideo} type="video/quicktime" />
        <source src={animationVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay gradient for better text readability */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background/50" />
      )}
    </div>
  );
};

export default VideoBackground;


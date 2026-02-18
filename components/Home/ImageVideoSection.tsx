import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const ImageVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="bg-[#f5f5f5] pb-6 xs:pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Video/Image Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl"
        >
          {/* Video */}
          <div className="w-full relative bg-black h-[200px] xs:h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[540px] 2xl:h-[560px]">
            <video
              ref={videoRef}
              src="/homeVid.mp4"
              className="w-full h-full object-cover"
              playsInline
              muted={isMuted}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Play/Pause button (center) */}
            <button 
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white active:bg-white transition-colors shadow-lg z-10"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              style={{ opacity: isPlaying ? 0 : 1, transition: 'opacity 0.3s' }}
              onMouseEnter={(e) => { if (isPlaying) e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { if (isPlaying) e.currentTarget.style.opacity = '0'; }}
            >
              {isPlaying ? <Pause size={20} fill="black" stroke="black" className="sm:w-6 sm:h-6" /> : <Play size={20} fill="black" stroke="black" className="sm:w-6 sm:h-6" />}
            </button>

            {/* Mute/Unmute button (bottom-right) */}
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 active:bg-black/80 transition-colors z-10"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={16} className="text-white sm:w-[18px] sm:h-[18px]" /> : <Volume2 size={16} className="text-white sm:w-[18px] sm:h-[18px]" />}
            </button>
          </div>
        </motion.div>

        {/* Info Row Below Video */}
        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold text-black text-base xs:text-lg sm:text-xl md:text-[22px] lg:text-2xl"
            >
              Solwaste Composting Machine
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-1 sm:mt-1.5 md:mt-2 text-[#777] text-[11px] xs:text-xs sm:text-[13px] md:text-sm"
              style={{ lineHeight: 1.7 }}
            >
              A fully automatic waste conversion in 24 hours.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/owc"
              className="inline-flex items-center gap-2 bg-black text-white font-medium hover:bg-gray-800 transition-colors px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] xs:text-xs sm:text-[13px]"
              style={{ letterSpacing: '0.02em' }}
            >
              Learn More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const ImageVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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
    <section className="bg-[#f5f5f5]" style={{ padding: '0 0 120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Video/Image Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative w-full overflow-hidden"
          style={{ borderRadius: '24px' }}
        >
          {/* Video */}
          <div 
            className="w-full relative bg-black"
            style={{ height: 'clamp(350px, 45vw, 550px)' }}
          >
            <video
              ref={videoRef}
              src="/homeVid.mp4"
              className="w-full h-full object-cover"
              playsInline
              onEnded={() => setIsPlaying(false)}
            />

            {/* Play/Pause button (center) */}
            <button 
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              style={{ opacity: isPlaying ? 0 : 1, transition: 'opacity 0.3s' }}
              onMouseEnter={(e) => { if (isPlaying) e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { if (isPlaying) e.currentTarget.style.opacity = '0'; }}
            >
              {isPlaying ? <Pause size={24} fill="black" stroke="black" /> : <Play size={24} fill="black" stroke="black" />}
            </button>

            {/* Mute/Unmute button (bottom-right) */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors z-10"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
            </button>
          </div>
        </motion.div>

        {/* Info Row Below Video */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold text-black"
              style={{ fontSize: '22px' }}
            >
              Solwaste Composting Machine
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-[#777]"
              style={{ fontSize: '13px', lineHeight: 1.7 }}
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
              className="inline-flex items-center gap-2 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              style={{ 
                padding: '12px 24px', 
                borderRadius: '999px',
                fontSize: '12px',
                letterSpacing: '0.02em'
              }}
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

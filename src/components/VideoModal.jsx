import React, { useEffect } from 'react';
import { X, Play, Flame, Clock, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, reel }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !reel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090D1C] border-2 border-[var(--theme-primary)] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_50px_var(--theme-glow)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)] transition-all cursor-pointer backdrop-blur-md"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black">
          <video
            src={reel.videoUrl}
            poster={reel.poster}
            controls
            autoPlay
            loop
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video Metadata Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-[#090D1C] to-[#060814] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] text-[10px] font-heading font-black uppercase tracking-wider mb-2 border border-[var(--theme-primary)]/40">
              <Sparkles className="w-3 h-3" /> {reel.tag} • {reel.difficulty}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">{reel.title}</h3>
            <p className="text-xs text-cool-gray-300 mt-1 font-body">{reel.subtitle}</p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <div className="text-xs text-cool-gray-400 font-bold">Huấn luyện viên:</div>
              <div className="text-sm font-black text-[var(--theme-secondary)]">{reel.coach}</div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#12182E] border border-white/10 text-center">
              <div className="text-[10px] text-cool-gray-400 font-bold uppercase">Mức Đốt Calo</div>
              <div className="text-xs font-black text-[var(--theme-primary)]">{reel.burn}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

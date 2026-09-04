import React, { useState } from 'react';
import { workoutReelsData } from '../data/fitnessData';
import { Play, Flame, Clock, Sparkles, Activity, ShieldCheck, Trophy, Film, Search } from 'lucide-react';

export default function WorkoutReels({ onSelectReel, onOpenFreePass }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'TẤT CẢ REELS' },
    { id: 'STRENGTH', label: 'SỨC MẠNH & TẠ' },
    { id: 'GROUPX', label: 'GROUPX LES MILLS' },
    { id: 'OLYMPIC', label: 'CỬ TẠ OLYMPIC' },
    { id: 'MOBILITY', label: 'YOGA & PHỤC HỒI' },
  ];

  const filteredReels = workoutReelsData.filter((r) => {
    if (activeCategory === 'ALL') return true;
    return r.tag.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="reels" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-3 shadow-[0_0_15px_var(--theme-glow)]">
              <Film className="w-3.5 h-3.5" /> Cinematic Workout Reels &amp; Motivation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              CLIP LUYỆN TẬP <span className="text-[var(--theme-primary)]">ĐẲNG CẤP 5 SAO</span>
            </h2>
          </div>
          <p className="text-cool-gray-300 text-sm sm:text-base max-w-md leading-relaxed font-body">
            Xem thực tế các buổi huấn luyện cường độ cao của Master Coach và cảm nhận năng lượng thể thao bùng nổ tại hệ thống KINETIC.PRO.
          </p>
        </div>

        {/* Motivational Luxury Banner Bar with Sound Equalizer */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#13141C] border border-[var(--theme-primary)]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[var(--theme-glow)] animate-pulse">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-[var(--theme-secondary)] flex items-center gap-2">
                <span>TRIẾT LÝ RÈN LUYỆN THƯỢNG LƯU</span>
                <span className="w-2 h-2 rounded-full bg-[var(--theme-secondary)] animate-ping inline-block"></span>
              </div>
              <div className="text-lg sm:text-xl font-black text-white uppercase mt-0.5">
                "KỶ LUẬT TẠO NÊN SỰ VĨ ĐẠI • VÓC DÁNG ĐỊNH HÌNH PHONG THÁI"
              </div>
            </div>
          </div>

          <button
            onClick={onOpenFreePass}
            className="inline-flex items-center gap-2 px-7 py-3.5 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-lg shrink-0 cursor-pointer shimmer-effect"
          >
            <span>TẬP THỬ MIỄN PHÍ NGAY</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'btn-vibrant-primary shadow-lg shadow-[var(--theme-glow)] scale-105'
                  : 'bg-[#101117] text-cool-gray-300 border border-white/10 hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 4 Video Reels Grid with Animated Audio Wave */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => onSelectReel(reel)}
              className="group relative bg-[#13141C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-[var(--theme-primary)]/70 transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-2.5 hover:shadow-[0_25px_50px_rgba(0,0,0,0.95),0_0_35px_var(--theme-glow)]"
            >
              {/* Video Thumbnail & Play Button Overlay */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#07070A]">
                <img
                  src={reel.poster}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-[1.14] brightness-[0.9]"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#13141C] via-black/30 to-transparent"></div>

                {/* Top Difficulty Pill */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-white/20 text-[var(--theme-primary)] text-[10px] font-heading font-black uppercase tracking-wider shadow">
                  {reel.tag}
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur border border-white/20 text-white text-[10px] font-numbers font-black flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[var(--theme-secondary)]" />
                  <span>{reel.duration}</span>
                </div>

                {/* Pulsing Play Button Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-[var(--theme-primary)]/90 group-hover:bg-[var(--theme-primary)] flex items-center justify-center text-white shadow-[0_0_30px_var(--theme-glow)] group-hover:scale-115 transition-all duration-300 border-2 border-white/40">
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                </div>

                {/* Real Animated Equalizer Wave Bars on bottom */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
                  <div className="flex items-end gap-1 h-8">
                    <span className="w-1 bg-[var(--theme-secondary)] rounded-full wave-bar-1 inline-block"></span>
                    <span className="w-1 bg-[var(--theme-primary)] rounded-full wave-bar-2 inline-block"></span>
                    <span className="w-1 bg-white rounded-full wave-bar-3 inline-block"></span>
                    <span className="w-1 bg-[var(--theme-secondary)] rounded-full wave-bar-4 inline-block"></span>
                    <span className="w-1 bg-[var(--theme-primary)] rounded-full wave-bar-1 inline-block"></span>
                  </div>

                  <span className="text-[10px] font-black text-white px-2 py-0.5 rounded bg-black/70 border border-white/20 uppercase tracking-widest">
                    HD PREVIEW
                  </span>
                </div>
              </div>

              {/* Card Body Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-black text-white uppercase mb-1 group-hover:text-[var(--theme-primary)] transition-colors leading-tight">
                  {reel.title}
                </h3>
                <p className="text-xs text-cool-gray-300 leading-relaxed mb-4 line-clamp-2 font-body">
                  {reel.subtitle}
                </p>

                {/* Bottom Metadata */}
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[var(--theme-secondary)] font-bold text-[11px] truncate max-w-[140px]">
                    {reel.coach}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--theme-primary)] font-numbers font-black">
                    <Flame className="w-3.5 h-3.5" />
                    {reel.burn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

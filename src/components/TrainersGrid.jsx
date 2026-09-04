import React, { useRef } from 'react';
import { trainersData } from '../data/fitnessData';
import { UserCheck, Award, Star, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TrainersGrid({ onSelectCoach }) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="trainers" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Left/Right Horizontal Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
              <UserCheck className="w-3.5 h-3.5" /> Đội Ngũ Huấn Luyện Viên Quốc Tế
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-2">
              MASTER COACH <span className="text-[var(--theme-primary)]">1-KÈM-1</span>
            </h2>
            <p className="text-cool-gray-300 text-sm sm:text-base leading-relaxed font-body max-w-xl">
              100% Huấn luyện viên đạt chuẩn chứng chỉ thể hình &amp; y học thể thao quốc tế (NASM, CSCS, ACE), cam kết đồng hành và đo lường kết quả theo từng tuần.
            </p>
          </div>

          {/* Horizontal Scroll Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-2xl bg-[#13141C] border border-white/15 flex items-center justify-center text-white hover:bg-[var(--theme-primary)] hover:border-[var(--theme-primary)] transition-all cursor-pointer shadow-lg"
              aria-label="Previous Trainers"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-2xl bg-[#13141C] border border-white/15 flex items-center justify-center text-white hover:bg-[var(--theme-primary)] hover:border-[var(--theme-primary)] transition-all cursor-pointer shadow-lg"
              aria-label="Next Trainers"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Trainers Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trainersData.map((coach) => (
            <div
              key={coach.id}
              className="min-w-[300px] sm:min-w-[340px] md:min-w-[360px] snap-start bg-[#13141C] border border-white/10 rounded-3xl overflow-hidden hover:border-[var(--theme-primary)]/70 transition-all duration-300 flex flex-col group shadow-2xl hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.95),0_0_25px_var(--theme-glow)]"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-[#07070A]">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.12]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13141C] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 backdrop-blur px-2.5 py-1 rounded-full border border-white/20 text-amber-400 text-xs font-bold shadow">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>5.0</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-black text-white uppercase mb-1 group-hover:text-[var(--theme-primary)] transition-colors">
                  {coach.name}
                </h3>
                <span className="text-xs font-bold text-[var(--theme-secondary)] uppercase tracking-wider mb-2">
                  {coach.title}
                </span>
                <p className="text-xs text-cool-gray-300 mb-4 font-body leading-relaxed">
                  Chuyên môn: <span className="text-white font-semibold">{coach.specialty}</span>
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {coach.credentials.map((cred, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-cool-gray-300 font-bold uppercase"
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-cool-gray-400 font-medium">
                    {coach.clients}
                  </span>
                  <button
                    onClick={() => onSelectCoach(coach.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-black text-[var(--theme-primary)] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Đặt Lịch Tập</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

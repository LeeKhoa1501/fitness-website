import React, { useState } from 'react';
import { facilitiesData } from '../data/fitnessData';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function FacilitiesShowcase({ onOpenFreePass }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="facilities" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative overflow-hidden">
      
      {/* Dynamic Ambient Spotlight */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-3 shadow-[0_0_15px_var(--theme-glow)]">
              <Sparkles className="w-3.5 h-3.5" /> Không Gian &amp; Thiết Bị 5 Sao Đỉnh Cao
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              TIỆN ÍCH TẬP LUYỆN <span className="text-[var(--theme-primary)]">QUỐC TẾ</span>
            </h2>
          </div>
          <p className="text-cool-gray-300 text-sm sm:text-base max-w-md leading-relaxed font-body">
            Hơn 2.000m² mỗi câu lạc bộ được chia thành các phân khu chuyên biệt với 100% trang thiết bị nhập khẩu nguyên chiếc từ Mỹ &amp; Ý.
          </p>
        </div>

        {/* Interactive Full-Width Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Tabs List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {facilitiesData.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white border-white/40 shadow-2xl shadow-[var(--theme-glow)] scale-[1.02]'
                      : 'bg-[#13141C] text-cool-gray-300 border-white/10 hover:border-[var(--theme-primary)]/40 hover:bg-[#181A24]'
                  }`}
                >
                  <span className={`text-[10px] font-heading font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block ${
                    isActive ? 'bg-black/30 text-white' : 'bg-[var(--theme-primary)]/15 text-[var(--theme-primary)] border border-[var(--theme-primary)]/30'
                  }`}>
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-black uppercase mb-1">{item.title}</h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${
                    isActive ? 'text-white/95' : 'text-cool-gray-400'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: High-Res Dynamic Spotlight Display (7 cols) */}
          <div className="lg:col-span-7 bg-[#13141C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative min-h-[460px] flex flex-col justify-between p-8 group">
            <img
              key={activeIdx}
              src={facilitiesData[activeIdx].image}
              alt={facilitiesData[activeIdx].title}
              className="absolute inset-0 w-full h-full object-cover filter contrast-[1.12] brightness-[0.9] group-hover:scale-105 transition-transform duration-700 animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-black/40 to-transparent"></div>

            <div className="relative z-10 flex justify-between items-start">
              <span className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur border border-white/20 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider">
                {facilitiesData[activeIdx].tag}
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-2">
                {facilitiesData[activeIdx].title}
              </h3>
              <p className="text-sm text-cool-gray-200 max-w-lg mb-6 leading-relaxed">
                {facilitiesData[activeIdx].desc}
              </p>

              <button
                onClick={onOpenFreePass}
                className="inline-flex items-center gap-2 px-6 py-3.5 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-lg cursor-pointer"
              >
                <span>Đăng Ký Tham Quan Cơ Sở</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { allServicesDetailed } from '../data/fitnessData';
import { Layers, CheckCircle2, ArrowRight, Sparkles, Flame, ShieldCheck, Dumbbell } from 'lucide-react';

export default function ServicesView({ onOpenFreePass }) {
  const [selectedServiceId, setSelectedServiceId] = useState('fitness');

  const selectedService = allServicesDetailed.find(s => s.id === selectedServiceId) || allServicesDetailed[0];

  return (
    <div className="w-full pt-28 pb-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Layers className="w-4 h-4" /> Hệ Sinh Thái Dịch Vụ Thể Thao Toàn Diện
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white uppercase">
            8 BỘ MÔN TẬP LUYỆN <span className="text-[var(--theme-primary)]">CHUẨN QUỐC TẾ</span>
          </h1>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Từ Fitness 24/7, Yoga trị liệu, Zumba sôi động, Group X Les Mills, Boxing sàn đấu đến Căng cơ phục hồi PNF và Đo quét InBody 3D chính xác 99%.
          </p>
        </div>

        {/* 8 Services Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-14">
          {allServicesDetailed.map((srv) => {
            const isSelected = selectedServiceId === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`p-3.5 rounded-2xl text-xs font-heading font-black uppercase tracking-wider transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer border ${
                  isSelected
                    ? 'btn-vibrant-primary shadow-xl shadow-[var(--theme-glow)] scale-105'
                    : 'bg-[#13141C] text-cool-gray-300 border-white/10 hover:border-white/30 hover:bg-[#181924]'
                }`}
              >
                <span className="leading-tight">{srv.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Spotlight */}
        <div className="bg-[#13141C] border border-[var(--theme-primary)]/40 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Image (6 cols) */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[480px]">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover filter contrast-[1.12] brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur border border-white/20 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider">
                {selectedService.tag}
              </div>
            </div>

            {/* Right Details (6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-black uppercase text-[var(--theme-secondary)] tracking-wider block mb-2">
                  Dịch Vụ Nổi Bật:
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4 leading-tight">
                  {selectedService.title}
                </h2>
                <p className="text-sm text-cool-gray-300 leading-relaxed font-body mb-6">
                  {selectedService.description}
                </p>

                {/* Benefits list */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {selectedService.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <a
                  href="#free-pass"
                  onClick={onOpenFreePass}
                  className="px-8 py-4 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-xl flex items-center gap-2 cursor-pointer"
                >
                  <span>TẬP THỬ BỘ MÔN NÀY 7 NGÀY MIỄN PHÍ</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 8 Services Grid Matrix */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-white uppercase">TỔNG QUAN TẤT CẢ 8 DỊCH VỤ</h3>
          <p className="text-xs text-cool-gray-400 mt-1">Được tích hợp sẵn và không giới hạn trong gói Citizen All-Access</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allServicesDetailed.map((srv) => (
            <div
              key={srv.id}
              onClick={() => {
                setSelectedServiceId(srv.id);
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="bg-[#13141C] border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-[var(--theme-primary)]/60 transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.12]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13141C] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 text-[var(--theme-primary)] text-[10px] font-black uppercase border border-white/20">
                  {srv.tag}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-base font-black text-white uppercase mb-2 group-hover:text-[var(--theme-primary)] transition-colors">
                  {srv.title}
                </h4>
                <p className="text-xs text-cool-gray-300 line-clamp-2 leading-relaxed mb-4 font-body">
                  {srv.description}
                </p>
                <span className="text-[11px] font-black text-[var(--theme-secondary)] mt-auto flex items-center gap-1">
                  Xem chi tiết &amp; quyền lợi →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { Building, Dumbbell, Gauge, Award, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

export default function BrandTrust() {
  const enterpriseClients = [
    { name: 'VINGROUP', tag: 'Đối tác chiến lược' },
    { name: 'FPT SOFTWARE', tag: '10.000+ Cán bộ NV' },
    { name: 'VIETTEL TELECOM', tag: 'Chương trình Sức Khỏe' },
    { name: 'TECHCOMBANK', tag: 'Executive Wellness' },
    { name: 'SAMSUNG VIETNAM', tag: 'Phòng gym nội bộ' },
    { name: 'SHOPEE & SEA', tag: 'Gói Hội viên Elite' },
  ];

  const equipmentCertifications = [
    { name: 'TECHNOGYM AI BIOSTRENGTH', icon: Dumbbell },
    { name: 'HAMMER STRENGTH OLYMPIC', icon: Gauge },
    { name: 'NASM & CSCS USA CERTIFIED', icon: Award },
    { name: 'ELEIKO SWEDEN COMPETITION', icon: ShieldCheck },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-y border-white/10 py-16 relative overflow-hidden shadow-2xl">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--theme-glow),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">
        
        {/* Row 1: Enterprise Corporate Clients */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="text-xs sm:text-sm font-heading font-black uppercase tracking-widest text-[var(--theme-primary)] flex items-center gap-2 drop-shadow-[0_0_12px_var(--theme-glow)]">
              <Building className="w-4 h-4" /> ĐỐI TÁC THỂ LỰC CỦA 500+ TẬP ĐOÀN LỚN:
            </span>
            <span className="text-xs text-cool-gray-300 font-medium">
              Chính sách phúc lợi sức khỏe &amp; thể lực chuẩn quốc tế
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {enterpriseClients.map((client, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#13141C] border border-white/10 hover:border-[var(--theme-primary)]/70 flex flex-col items-center justify-center text-center transition-all duration-300 group shadow-lg hover:scale-105"
              >
                <span className="text-sm font-heading font-black text-white group-hover:text-[var(--theme-primary)] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-cool-gray-400 mt-1 font-medium">{client.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Equipment & Standards */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <span className="text-xs font-heading font-black uppercase tracking-wider text-white text-center lg:text-left flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[var(--theme-primary)]" />
            HỆ THỐNG THIẾT BỊ 100% NHẬP KHẨU NGUYÊN CHIẾC:
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {equipmentCertifications.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-[#13141C] border border-white/10 flex items-center gap-2 text-xs font-heading font-bold text-cool-gray-300 shadow"
                >
                  <Icon className="w-3.5 h-3.5 text-[var(--theme-secondary)]" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

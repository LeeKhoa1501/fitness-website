import React from 'react';
import { servicesData } from '../data/fitnessData';
import { Clock, Gauge, ArrowRight, Layers, Flame, Award, Dumbbell } from 'lucide-react';

export default function ServicesGrid({ onOpenFreePass }) {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#0B1022] via-[#101733] to-[#090E1F] border-b border-white/15 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Layers className="w-3.5 h-3.5" /> Hệ Thống Đào Tạo Chuyên Sâu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white uppercase">
            Chương Trình Huấn Luyện{' '}
            <span className="text-[var(--theme-primary)]">
              Đa Dạng &amp; Khoa Học
            </span>
          </h2>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Mỗi giáo án được thiết kế chuẩn y học thể thao, đáp ứng từ nhu cầu nâng cao năng suất doanh nghiệp đến vận động viên đỉnh cao.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-[#10162B] border border-white/15 rounded-3xl overflow-hidden hover:border-[var(--theme-primary)]/60 transition-all duration-300 flex flex-col shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_25px_var(--theme-glow)]"
            >
              {/* Image Thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <span className="absolute top-3.5 left-3.5 z-20 px-3 py-1 rounded-full bg-black/85 backdrop-blur border border-white/20 text-[var(--theme-primary)] text-[10px] font-heading font-black uppercase tracking-wider shadow">
                  {service.category}
                </span>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.12]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10162B] via-transparent to-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-black text-white uppercase mb-2 group-hover:text-[var(--theme-primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-cool-gray-300 leading-relaxed mb-5 flex-grow font-body">
                  {service.description}
                </p>

                {/* Metadata Row */}
                <div className="flex items-center justify-between pt-3.5 border-t border-white/10 text-xs text-cool-gray-200 mb-5 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--theme-secondary)]" />
                    {service.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                    {service.intensity}
                  </span>
                </div>

                {/* CTA Link */}
                <a
                  href="#free-pass"
                  onClick={onOpenFreePass}
                  className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-white/5 group-hover:bg-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider text-white transition-all shadow"
                >
                  <span>Đăng ký trải nghiệm</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

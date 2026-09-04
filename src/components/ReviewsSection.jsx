import React from 'react';
import { reviewsData } from '../data/fitnessData';
import { Star, Quote, MessageSquare } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[var(--theme-glow-sec)] rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <MessageSquare className="w-3.5 h-3.5" /> Đánh Giá Từ Hội Viên Thực Tế
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white uppercase">
            Họ Nói Gì Về{' '}
            <span className="text-[var(--theme-primary)]">
              KINETIC.PRO
            </span>
          </h2>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Hơn 15.000 hội viên cá nhân và 500+ doanh nghiệp đã chuyển đổi vóc dáng và nâng cao hiệu suất làm việc mỗi ngày.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#13141C] border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative group hover:border-[var(--theme-primary)]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.95),0_0_25px_var(--theme-glow)]"
            >
              <Quote className="w-10 h-10 text-[var(--theme-primary)]/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-cool-gray-300 italic mb-8 font-body leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[var(--theme-primary)]/50 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-black text-white uppercase">{item.name}</h4>
                  <p className="text-xs text-[var(--theme-secondary)] font-semibold">{item.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

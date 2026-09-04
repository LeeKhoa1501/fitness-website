import React, { useState } from 'react';
import { weeklyClassSchedule } from '../data/fitnessData';
import { Calendar, Clock, Flame, UserCheck, MapPin, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ClassSchedule({ onOpenFreePass, onShowToast }) {
  const [selectedDay, setSelectedDay] = useState("Thứ Hai");

  const currentDaySchedule = weeklyClassSchedule.find(d => d.day === selectedDay) || weeklyClassSchedule[0];

  const handleBookClass = (className, time) => {
    if (onShowToast) {
      onShowToast(`Đặt chỗ thành công lớp "${className}" lúc ${time} (${selectedDay})! Chuyên viên sẽ giữ chỗ cho bạn.`);
    }
  };

  return (
    <section id="schedule" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Calendar className="w-4 h-4" /> Lịch Lớp Học Tương Tác Trong Tuần
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white uppercase">
            LỊCH TẬP <span className="text-[var(--theme-primary)]">YOGA • GROUP X • ZUMBA</span>
          </h2>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Hơn 120 lớp học bản quyền mỗi tuần từ sáng sớm đến tối muộn. Chọn ngày và đặt chỗ nhanh để giữ vị trí đẹp nhất trong studio cùng Master Trainer.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#101117] border border-white/10 shadow-2xl">
            {weeklyClassSchedule.map((d) => (
              <button
                key={d.day}
                onClick={() => setSelectedDay(d.day)}
                className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-heading font-black uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedDay === d.day
                    ? 'btn-vibrant-primary shadow-lg'
                    : 'text-cool-gray-300 hover:text-white'
                }`}
              >
                {d.day}
              </button>
            ))}
          </div>
        </div>

        {/* Classes List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {currentDaySchedule.classes.map((c, idx) => (
            <div
              key={idx}
              className="bg-[#13141C] border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-2xl hover:border-[var(--theme-primary)]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.95),0_0_30px_var(--theme-glow)] group"
            >
              <div>
                {/* Time & Level Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1C26] text-[var(--theme-secondary)] font-numbers font-black text-xs border border-white/10">
                    <Clock className="w-3.5 h-3.5" />
                    {c.time}
                  </span>
                  <span className="text-[10px] font-black uppercase text-cool-gray-400 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10">
                    {c.level}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white uppercase mb-2 group-hover:text-[var(--theme-primary)] transition-colors leading-tight">
                  {c.name}
                </h3>

                {/* Coach & Room Info */}
                <div className="space-y-1.5 text-xs text-cool-gray-300 mb-6 font-body">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                    <span className="font-bold text-white">{c.coach}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[var(--theme-secondary)]" />
                    <span>{c.room}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Metadata & Book Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="flex items-center gap-1 text-xs font-numbers font-black text-[var(--theme-primary)]">
                  <Flame className="w-3.5 h-3.5" />
                  {c.burn}
                </span>

                <button
                  onClick={() => handleBookClass(c.name, c.time)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[var(--theme-primary)] text-white text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer shadow"
                >
                  Đặt Chỗ Lớp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free pass banner */}
        <div className="p-8 rounded-3xl bg-[#13141C] border border-[var(--theme-primary)]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[var(--theme-primary)]/20 flex items-center justify-center text-[var(--theme-primary)] shrink-0 border border-[var(--theme-primary)]/40">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-white uppercase">Chưa là hội viên KINETIC.PRO?</h4>
              <p className="text-xs text-cool-gray-300 font-body">Đăng ký nhận thẻ tập 7 ngày miễn phí để tham gia tất cả lớp học trong tuần!</p>
            </div>
          </div>

          <a
            href="#free-pass"
            onClick={onOpenFreePass}
            className="inline-flex items-center gap-2 px-6 py-3.5 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shrink-0 shadow-lg cursor-pointer"
          >
            <span>Đăng Ký Tham Gia Miễn Phí</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

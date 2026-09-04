import React from 'react';
import ClassSchedule from '../components/ClassSchedule';
import { Calendar, Clock, Flame, Sparkles, ArrowRight } from 'lucide-react';

export default function ScheduleView({ onOpenFreePass, onShowToast }) {
  return (
    <div className="w-full pt-28 pb-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Calendar className="w-4 h-4" /> Lịch Tập Bản Quyền 7 Ngày
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white uppercase">
            LỊCH LỚP HỌC <span className="text-[var(--theme-primary)]">TOÀN HỆ THỐNG</span>
          </h1>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Xem lịch chi tiết và đặt chỗ trước cho các lớp Yoga, Zumba, BodyPump, BodyCombat, Boxing và Căng cơ phục hồi cùng Master Coach.
          </p>
        </div>

        {/* Schedule Component */}
        <ClassSchedule onOpenFreePass={onOpenFreePass} onShowToast={onShowToast} />

      </div>
    </div>
  );
}

import React from 'react';
import TrainersGrid from '../components/TrainersGrid';
import { UserCheck, ArrowRight } from 'lucide-react';

export default function TrainersView({ onSelectCoach, onOpenFreePass }) {
  return (
    <div className="w-full pt-28 pb-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <UserCheck className="w-4 h-4" /> Đội Ngũ Huấn Luyện Viên Quốc Tế
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white uppercase">
            MASTER COACH <span className="text-[var(--theme-primary)]">1-KÈM-1</span>
          </h1>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            100% Huấn luyện viên cá nhân sở hữu chứng chỉ y học thể thao quốc tế, cam kết đồng hành sát sao và bảo đảm kết quả chuyển đổi vóc dáng cho bạn.
          </p>
        </div>

        {/* Trainers Grid */}
        <TrainersGrid onSelectCoach={onSelectCoach} />

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-[#13141C] border border-[var(--theme-primary)]/40 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase mb-4">
            ĐĂNG KÝ BUỔI TEST THỂ TRẠNG VÀ TẬP KÈM RIÊNG 1-1 MIỄN PHÍ
          </h2>
          <p className="text-sm text-cool-gray-300 max-w-xl mx-auto mb-8 font-body">
            Được phân tích chỉ số InBody 770 chi tiết và nhận phác đồ dinh dưỡng Macro cá nhân hóa từ Master Coach.
          </p>
          <a
            href="#free-pass"
            onClick={onOpenFreePass}
            className="inline-flex items-center gap-2 px-9 py-4 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-xl cursor-pointer"
          >
            <span>ĐẶT LỊCH TEST THỂ TRẠNG NGAY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}

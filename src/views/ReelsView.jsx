import React from 'react';
import WorkoutReels from '../components/WorkoutReels';
import { Film, Trophy, Sparkles, ArrowRight } from 'lucide-react';

export default function ReelsView({ onSelectReel, onOpenFreePass }) {
  return (
    <div className="w-full pt-28 pb-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Film className="w-4 h-4" /> Thư Viện Video Rèn Luyện Thượng Lưu
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white uppercase">
            VIDEO CLIP <span className="text-[var(--theme-primary)]">LUYỆN TẬP ĐỈNH CAO</span>
          </h1>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Trực tiếp theo dõi kỹ thuật chuẩn thi đấu, giáo án bùng nổ năng lượng và cảm nhận phong thái thể hình đẳng cấp cùng Master Coach KINETIC.PRO.
          </p>
        </div>

        {/* Video Reels Hub */}
        <WorkoutReels onSelectReel={onSelectReel} onOpenFreePass={onOpenFreePass} />

      </div>
    </div>
  );
}

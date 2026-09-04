import React, { useState } from 'react';
import { workoutPlansData } from '../data/fitnessData';
import { 
  BookOpen, Dumbbell, Flame, Clock, CheckCircle2, ArrowRight, Download, 
  Sparkles, Target, Zap, ShieldCheck, ChevronRight, UserCheck
} from 'lucide-react';

export default function WorkoutPlansExplorer({ onOpenFreePass, onShowToast }) {
  const [activePlanId, setActivePlanId] = useState('hypertrophy-split');

  const currentPlan = workoutPlansData.find(p => p.id === activePlanId) || workoutPlansData[0];

  const handleDownloadPlan = () => {
    if (onShowToast) {
      onShowToast(`Đã xuất và lưu giáo án "${currentPlan.name}" chuẩn PDF về thiết bị thành công!`);
    }
  };

  return (
    <section id="plans" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative overflow-hidden">
      
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <BookOpen className="w-4 h-4" /> Thư Viện Giáo Án &amp; Phác Đồ Huấn Luyện Chuẩn Y Học
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white uppercase">
            GIÁO ÁN BÀI TẬP <span className="text-[var(--theme-primary)]">CHUYÊN SÂU</span>
          </h2>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Khám phá chi tiết phác đồ rèn luyện thể chất chuẩn khoa học: số hiệp (Sets), số lần (Reps), thời gian nghỉ (Rest) và nhịp độ chuyển động (Tempo 3-1-1-0).
          </p>
        </div>

        {/* Modern Pill Tabs Selector */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#101117] border border-white/10 shadow-2xl">
            {workoutPlansData.map((plan) => {
              const isSelected = activePlanId === plan.id;
              return (
                <button
                  key={plan.id}
                  onClick={() => setActivePlanId(plan.id)}
                  className={`px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-heading font-black uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    isSelected
                      ? 'btn-vibrant-primary shadow-xl shadow-[var(--theme-glow)] scale-[1.02]'
                      : 'text-cool-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Dumbbell className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[var(--theme-primary)]'}`} />
                  <span>{plan.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Program Hero Spotlight Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#14151E] via-[#101118] to-[#0A0B0F] border border-[var(--theme-primary)]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full bg-[var(--theme-primary)] text-white text-[10px] font-heading font-black uppercase tracking-wider shadow">
                  {currentPlan.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#181924] text-[var(--theme-secondary)] text-[10px] font-numbers font-black border border-white/10">
                  {currentPlan.frequency} • {currentPlan.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold">
                  Cấp độ: {currentPlan.level}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-2">
                {currentPlan.name}
              </h3>
              <p className="text-sm text-cool-gray-300 max-w-2xl font-body leading-relaxed">
                {currentPlan.targetGoal}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleDownloadPlan}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer shadow"
              >
                <Download className="w-4 h-4 text-[var(--theme-secondary)]" />
                <span>Tải Giáo Án (PDF)</span>
              </button>

              <a
                href="#free-pass"
                onClick={onOpenFreePass}
                className="inline-flex items-center gap-2 px-6 py-3.5 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-xl cursor-pointer"
              >
                <span>Tập Cùng Master Coach</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Visual Exercise Cards Grid (Modern Workout Card Deck) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-heading font-black uppercase tracking-wider text-[var(--theme-secondary)] flex items-center gap-2">
              <Zap className="w-4 h-4" /> Danh Sách Động Tác Chuỗi ({currentPlan.exercises.length} Bài Tập):
            </span>
            <span className="text-xs text-cool-gray-400 font-medium">Phác đồ chuẩn hóa theo số hiệp và nhịp độ chuyển động</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPlan.exercises.map((ex, idx) => (
              <div
                key={idx}
                className="bg-[#13141C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-[var(--theme-primary)]/70 transition-all duration-300 flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.95),0_0_30px_var(--theme-glow)]"
              >
                {/* Photo with Number & Muscle Target Badge */}
                <div className="relative h-56 overflow-hidden bg-[#07070A]">
                  <img
                    src={ex.image}
                    alt={ex.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-[1.12] brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13141C] via-transparent to-transparent"></div>

                  {/* Sequence Number Chip */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] flex items-center justify-center text-white font-numbers font-black text-xs shadow-lg shadow-[var(--theme-glow)]">
                    0{idx + 1}
                  </div>

                  {/* Target Muscle Chip */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-white/20 text-[var(--theme-primary)] text-[10px] font-heading font-black uppercase tracking-wider">
                    {ex.target}
                  </div>
                </div>

                {/* Exercise Body Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-base font-black text-white uppercase mb-4 group-hover:text-[var(--theme-primary)] transition-colors leading-tight min-h-[44px]">
                    {ex.name}
                  </h4>

                  {/* 4 Telemetry Metrics (Sets, Reps, Rest, Tempo) */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    <div className="p-2.5 rounded-xl bg-[#09090D] border border-white/5 text-center">
                      <span className="text-[9px] font-bold text-cool-gray-400 uppercase block">Số Hiệp</span>
                      <span className="text-xs font-numbers font-black text-white">{ex.sets}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#09090D] border border-white/5 text-center">
                      <span className="text-[9px] font-bold text-cool-gray-400 uppercase block">Số Lần</span>
                      <span className="text-xs font-numbers font-black text-[var(--theme-primary)]">{ex.reps}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#09090D] border border-white/5 text-center">
                      <span className="text-[9px] font-bold text-cool-gray-400 uppercase block">Nghỉ</span>
                      <span className="text-xs font-numbers font-black text-[var(--theme-secondary)]">{ex.rest}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#09090D] border border-white/5 text-center">
                      <span className="text-[9px] font-bold text-cool-gray-400 uppercase block">Tempo</span>
                      <span className="text-xs font-numbers font-black text-white">{ex.tempo}</span>
                    </div>
                  </div>

                  {/* Coach Form Tips */}
                  <div className="mt-auto pt-3 border-t border-white/10 text-xs text-cool-gray-300 font-body">
                    <span className="text-[10px] font-black uppercase text-[var(--theme-primary)] block mb-1">
                      💡 Mẹo Căn Form:
                    </span>
                    <p className="text-[11px] leading-relaxed line-clamp-3 text-cool-gray-300">
                      {ex.tips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

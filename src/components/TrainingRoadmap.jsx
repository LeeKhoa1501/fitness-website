import React, { useState } from 'react';
import { Activity, Compass, Dumbbell, LineChart, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function TrainingRoadmap({ onOpenFreePass }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'ĐÁNH GIÁ THỂ TRẠNG & INBODY 3D',
      subtitle: 'Phân Tích Y Học Thể Thao Chuẩn Xác 99%',
      desc: 'Quét 40+ chỉ số thể hình bằng máy InBody 770 chuyên dụng: tỷ lệ mỡ nội tạng, khối lượng cơ từng nhóm, lượng nước tế bào và kiểm tra tầm vận động khớp (FMS) để phát hiện lệch cơ.',
      metrics: ['Đo chỉ số BMR & TDEE', 'Quét mỡ nội tạng 3D', 'Kiểm tra độ linh hoạt cột sống & khớp'],
      duration: 'Buổi 1 (45 Phút)',
      icon: Activity,
      tag: 'BƯỚC ĐẦU TIÊN'
    },
    {
      step: '02',
      title: 'THIẾT KẾ GIÁO ÁN & MACRO DINH DƯỠNG',
      subtitle: 'Phác Đồ Độc Bản Cho Từng Cá Nhân',
      desc: 'Master Coach tính toán chu kỳ tập luyện (Periodization), phân bổ bài tập tăng cơ/giảm mỡ theo mục tiêu cùng thực đơn dinh dưỡng Macro (Protein/Carb/Fat) phù hợp với công việc và sở thích ẩm thực.',
      metrics: ['Giáo án chia nhóm cơ khoa học', 'Bảng tính Calo & Macro cá nhân', 'Lộ trình rõ ràng từng tuần'],
      duration: 'Buổi 2 (30 Phút)',
      icon: Compass,
      tag: 'HOÁCH ĐỊNH CHIẾN LƯỢC'
    },
    {
      step: '03',
      title: 'HUẤN LUYỆN 1-1 & TĂNG TẢI LŨY TIẾN',
      subtitle: 'Kèm Sát Kỹ Thuật • Tuyệt Đối An Toàn',
      desc: 'Tập luyện trực tiếp cùng Huấn luyện viên đạt chuẩn NASM/CSCS Hoa Kỳ. Chỉnh chuẩn xác từng độ mở khớp gối, góc cùi chỏ và áp dụng nguyên lý Tăng Tải Lũy Tiến (Progressive Overload) để cơ bắp liên tục phát triển.',
      metrics: ['100% Form chuẩn không chấn thương', 'Tối ưu áp lực cơ học lên nhóm cơ đích', 'Bảo hiểm thể lực an toàn'],
      duration: 'Tuần 1 - Tuần 8',
      icon: Dumbbell,
      tag: 'TÔI LUYỆN THỂ LỰC'
    },
    {
      step: '04',
      title: 'TÁI ĐÁNH GIÁ & ĐO LƯỜNG KẾT QUẢ',
      subtitle: 'Cam Kết Vóc Dáng Biến Đổi Theo Tuần',
      desc: 'Kiểm tra InBody định kỳ mỗi 14 ngày để so sánh biểu đồ phát triển cơ bắp, mức giảm mỡ. Điều chỉnh cường độ tập luyện và tăng độ khó để phá vỡ các ngưỡng chững cân (Plateau).',
      metrics: ['Báo cáo biểu đồ InBody 14 ngày', 'Tối ưu hóa thực đơn dinh dưỡng mới', 'Cam kết kết quả bằng văn bản'],
      duration: 'Mỗi 2 Tuần',
      icon: LineChart,
      tag: 'CHUYỂN ĐỔI BỀN VỮNG'
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#10121A] to-[#07080B] border-b border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Compass className="w-3.5 h-3.5" /> Phương Pháp Khoa Học Chuẩn Y Học Thể Thao
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            LỘ TRÌNH TẬP LUYỆN <span className="text-[var(--theme-primary)]">CÁ NHÂN HÓA</span>
          </h2>
          <p className="text-cool-gray-300 text-sm sm:text-base leading-relaxed font-body">
            Quy trình 4 bước bài bản giúp bạn không bị bỡ ngỡ, hạn chế 100% chấn thương và đạt vóc dáng mơ ước trong thời gian ngắn nhất.
          </p>
        </div>

        {/* 4-Step Interactive Horizontal Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {steps.map((item, idx) => {
            const isActive = activeStep === idx;
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-[#181B28] to-[#12141E] border-[var(--theme-primary)] shadow-2xl shadow-[var(--theme-glow)] scale-[1.02]'
                    : 'bg-[#13141C] border-white/10 hover:border-white/25 hover:bg-[#181A24]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className={`font-numbers text-2xl font-black ${
                    isActive ? 'text-[var(--theme-primary)]' : 'text-cool-gray-500'
                  }`}>
                    {item.step}
                  </span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[var(--theme-primary)] text-white shadow-lg' : 'bg-white/5 text-cool-gray-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-heading font-black uppercase tracking-wider text-[var(--theme-secondary)] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-sm font-black text-white uppercase line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-[#13141C] border border-[var(--theme-primary)]/40 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[var(--theme-primary)] text-white text-[11px] font-heading font-black uppercase tracking-wider">
                  BƯỚC {steps[activeStep].step}
                </span>
                <span className="text-xs text-cool-gray-400 font-semibold">
                  Thời lượng: {steps[activeStep].duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-2">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm font-semibold text-[var(--theme-secondary)] uppercase tracking-wide mb-4">
                {steps[activeStep].subtitle}
              </p>
              <p className="text-sm sm:text-base text-cool-gray-300 leading-relaxed mb-6 font-body">
                {steps[activeStep].desc}
              </p>

              <div className="space-y-3 mb-8">
                {steps[activeStep].metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-3 text-xs sm:text-sm text-white font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[var(--theme-primary)] shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenFreePass}
                className="inline-flex items-center gap-2 px-7 py-3.5 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-lg cursor-pointer"
              >
                <span>Đăng Ký Khảo Sát Thể Trạng Miễn Phí</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Metric Showcase (4 cols) */}
            <div className="lg:col-span-4 bg-[#090A0E] border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-inner">
              <div className="w-20 h-20 rounded-2xl bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 flex items-center justify-center text-[var(--theme-primary)] mb-4 shadow-[0_0_20px_var(--theme-glow)]">
                {React.createElement(steps[activeStep].icon, { className: "w-10 h-10" })}
              </div>
              <h4 className="text-base font-black text-white uppercase mb-1">
                KẾT QUẢ ĐẠT ĐƯỢC
              </h4>
              <p className="text-xs text-cool-gray-400 max-w-xs mb-4">
                100% hội viên được giám sát số đo và điều chỉnh cường độ liên tục mỗi tuần.
              </p>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-numbers font-bold text-white">
                Độ Hài Lòng: <span className="text-[var(--theme-primary)]">99.6%</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

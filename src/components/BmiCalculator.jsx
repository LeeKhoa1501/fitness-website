import React, { useState } from 'react';
import { Calculator, Cpu, Dumbbell, Flame, Activity, UserCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function BmiCalculator({ onOpenFreePass, onShowToast }) {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(26);
  const [gender, setGender] = useState('male');
  const [goal, setGoal] = useState('muscle');

  // Calculation Logic
  const heightM = height / 100;
  const bmi = heightM > 0 ? (weight / (heightM * heightM)).toFixed(1) : '22.9';

  const getBmiStatus = () => {
    const num = parseFloat(bmi);
    if (num < 18.5) {
      return {
        status: 'Thiếu cân (Cần tăng khối cơ)',
        advice: 'Tập trung dinh dưỡng thặng dư calo lành mạnh kết hợp giáo án tăng khối lượng cơ bắp chuyên sâu.',
        program: 'Lean Muscle & Hypertrophy Max',
        intensity: 'Cường độ: 3 - 4 buổi/tuần • Tập trung tạ nặng'
      };
    } else if (num >= 18.5 && num < 25) {
      return {
        status: 'Bình thường (Lý tưởng)',
        advice: 'Chỉ số cơ thể chuẩn! Phù hợp tăng cơ săn chắc và nâng cao hiệu suất vận động toàn diện.',
        program: goal === 'fatloss' ? 'HIIT & Metabolic Burn' : 'Hypertrophy Muscle & Strength',
        intensity: 'Cường độ: 4 - 5 buổi/tuần • Thời lượng: 60 - 75 phút'
      };
    } else if (num >= 25 && num < 30) {
      return {
        status: 'Thừa cân nhẹ (Cần đốt mỡ)',
        advice: 'Phù hợp phác đồ kết hợp rèn luyện sức mạnh và cardio ngắt quãng cường độ cao (HIIT).',
        program: 'Athletic Conditioning & HIIT Burn',
        intensity: 'Cường độ: 4 buổi/tuần • Đốt mỡ tối đa'
      };
    } else {
      return {
        status: 'Béo phì (Cần HLV 1-kèm-1)',
        advice: 'Nên có sự giám sát của HLV cá nhân để bảo vệ khớp xương và thiết lập thâm hụt calo an toàn.',
        program: '1-on-1 Personalized Coaching',
        intensity: 'Cường độ: 3 - 5 buổi/tuần • Kèm phác đồ Macro'
      };
    }
  };

  const currentResult = getBmiStatus();

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (onShowToast) {
      onShowToast('Đã tính toán BMI & tối ưu hóa lộ trình tập luyện thành công!');
    }
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Calculator className="w-3.5 h-3.5" /> Công Nghệ Phân Tích Thể Trạng AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white uppercase">
            Tính Chỉ Số Thể Trạng &amp;{' '}
            <span className="text-[var(--theme-primary)]">
              Gợi Ý Giáo Án
            </span>
          </h2>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Nhập số đo cơ bản để nhận ngay phân tích BMI chuẩn y học và phác đồ tập luyện tối ưu dành riêng cho bạn.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#13141C] border border-[var(--theme-primary)]/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
            
            {/* Input Form (7 cols) */}
            <form onSubmit={handleAnalyze} className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-black uppercase tracking-wider text-cool-gray-200 mb-2">
                    Chiều cao (cm)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      min="120"
                      max="230"
                      className="w-full bg-[#09090D] border border-white/15 rounded-xl px-4 py-3.5 text-white font-numbers font-black text-base focus:border-[var(--theme-primary)] outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--theme-primary)]">
                      cm
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-black uppercase tracking-wider text-cool-gray-200 mb-2">
                    Cân nặng (kg)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      min="35"
                      max="200"
                      className="w-full bg-[#09090D] border border-white/15 rounded-xl px-4 py-3.5 text-white font-numbers font-black text-base focus:border-[var(--theme-primary)] outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--theme-primary)]">
                      kg
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-black uppercase tracking-wider text-cool-gray-200 mb-2">
                    Độ tuổi
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      min="14"
                      max="80"
                      className="w-full bg-[#09090D] border border-white/15 rounded-xl px-4 py-3.5 text-white font-numbers font-black text-base focus:border-[var(--theme-primary)] outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-cool-gray-400">
                      Tuổi
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-black uppercase tracking-wider text-cool-gray-200 mb-2">
                    Giới tính
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full bg-[#09090D] border border-white/15 rounded-xl px-4 py-3.5 text-white text-base focus:border-[var(--theme-primary)] outline-none transition-all"
                  >
                    <option value="male">Nam giới</option>
                    <option value="female">Nữ giới</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-black uppercase tracking-wider text-cool-gray-200 mb-3">
                  Mục tiêu thể hình ưu tiên
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'muscle', label: 'Tăng cơ săn chắc', icon: Dumbbell },
                    { id: 'fatloss', label: 'Giảm mỡ nhanh', icon: Flame },
                    { id: 'endurance', label: 'Tăng thể lực & Tim', icon: Activity },
                    { id: 'pt', label: 'HLV kèm riêng 1-1', icon: UserCheck },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = goal === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setGoal(item.id)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-sm font-heading font-bold transition-all text-left ${
                          isSelected
                            ? 'btn-vibrant-primary shadow-lg'
                            : 'bg-[#09090D] border-white/10 text-cool-gray-300 hover:border-white/30'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-cool-gray-400'}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 btn-vibrant-primary text-sm uppercase tracking-wider rounded-xl cursor-pointer shadow-xl"
              >
                <Cpu className="w-5 h-5" />
                <span>Phân Tích &amp; Tối Ưu Lộ Trình</span>
              </button>
            </form>

            {/* Results Panel (5 cols) */}
            <div className="lg:col-span-5 bg-[#09090D] border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-2xl">
              <div className="text-center pb-6 border-b border-white/10">
                <div className="w-28 h-28 rounded-full border-4 border-[var(--theme-primary)] mx-auto mb-4 flex flex-col items-center justify-center bg-[var(--theme-primary)]/10 shadow-[0_0_30px_var(--theme-glow)]">
                  <span className="font-numbers text-3xl font-black text-white leading-none">
                    {bmi}
                  </span>
                  <span className="text-[10px] text-[var(--theme-primary)] font-black uppercase tracking-wider mt-1">
                    BMI Index
                  </span>
                </div>
                <h3 className="text-lg font-black text-white uppercase mb-1.5">{currentResult.status}</h3>
                <p className="text-xs text-cool-gray-300 leading-relaxed max-w-xs mx-auto">
                  {currentResult.advice}
                </p>
              </div>

              <div className="py-6">
                <span className="text-[11px] font-heading font-black uppercase tracking-wider text-[var(--theme-secondary)] block mb-3">
                  Giáo án đề xuất tối ưu:
                </span>
                <div className="bg-[#13141C] border border-[var(--theme-primary)]/40 rounded-xl p-4 flex items-start gap-3 shadow-lg">
                  <CheckCircle2 className="w-5 h-5 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-black text-white mb-0.5">{currentResult.program}</div>
                    <div className="text-xs text-cool-gray-300">{currentResult.intensity}</div>
                  </div>
                </div>
              </div>

              <a
                href="#free-pass"
                onClick={onOpenFreePass}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 btn-vibrant-primary text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform cursor-pointer"
              >
                <span>Đăng Ký Tập Thử Giáo Án Này</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

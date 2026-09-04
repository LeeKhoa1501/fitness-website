import React, { useState } from 'react';
import { Gift, CheckCircle2, Send, Sparkles, Trophy } from 'lucide-react';

export default function FreePassForm({ onShowToast }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('lm81');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Chúc mừng ${fullName}! Đăng ký thẻ tập 7 ngày thành công. Chuyên viên sẽ gọi trong 15 phút!`);
      setFullName('');
      setPhone('');
    }, 600);
  };

  return (
    <section id="free-pass" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-[#13141C] border border-[var(--theme-primary)]/40 rounded-3xl p-8 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Ambient lighting inside CTA */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--theme-glow)] rounded-full blur-[160px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)] text-white text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-lg shadow-[var(--theme-glow)]">
                <Gift className="w-3.5 h-3.5 fill-current" /> Ưu Đãi Độc Quyền Tháng Này
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                Nhận Thẻ Tập Thử 7 Ngày{' '}
                <span className="text-[var(--theme-primary)]">Hoàn Toàn Miễn Phí</span>
              </h2>

              <p className="text-cool-gray-200 text-sm sm:text-base leading-relaxed mb-6 max-w-lg font-body">
                Trải nghiệm 100% tiện ích phòng tập 5 sao, xông hơi Sauna đá muối, hơn 120 lớp GroupX và 01 buổi định hướng tập luyện riêng cùng Huấn luyện viên cá nhân.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[var(--theme-primary)] shrink-0" />
                  <span>Miễn phí 100% - Không bắt buộc ký hợp đồng dài hạn</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[var(--theme-primary)] shrink-0" />
                  <span>Tặng voucher phân tích Macro dinh dưỡng InBody trị giá 500.000₫</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[var(--theme-primary)] shrink-0" />
                  <span>Kích hoạt ngay trong ngày tại câu lạc bộ gần bạn nhất</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 bg-[#09090D] border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-black text-white uppercase mb-2">ĐĂNG KÝ NHẬN THẺ</h3>
              <p className="text-xs text-cool-gray-400 mb-6 font-body">
                Chuyên viên sẽ liên hệ gửi thẻ và giữ lịch test thể trạng trong vòng 15 phút.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-heading font-black uppercase text-cool-gray-300 mb-1.5">
                    Họ và Tên
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#13141C] border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[var(--theme-primary)] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-black uppercase text-cool-gray-300 mb-1.5">
                    Số Điện Thoại (Zalo)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0901 234 567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#13141C] border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[var(--theme-primary)] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-black uppercase text-cool-gray-300 mb-1.5">
                    Chọn Câu Lạc Bộ Gần Bạn
                  </label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full bg-[#13141C] border border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[var(--theme-primary)] outline-none transition-colors"
                  >
                    <option value="lm81">KINETIC Landmark 81 (TP.HCM)</option>
                    <option value="diamond">KINETIC Diamond Plaza Quận 1 (TP.HCM)</option>
                    <option value="crescent">KINETIC Crescent Mall Quận 7 (TP.HCM)</option>
                    <option value="batrieu">KINETIC Vincom Bà Triệu (Hà Nội)</option>
                    <option value="lotte">KINETIC Lotte Center (Hà Nội)</option>
                    <option value="danang">KINETIC Riverside (Đà Nẵng)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 btn-vibrant-primary text-xs uppercase tracking-wider font-heading font-black rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'ĐANG XỬ LÝ...' : 'KÍCH HOẠT THẺ TẬP THỬ 7 NGÀY'}</span>
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

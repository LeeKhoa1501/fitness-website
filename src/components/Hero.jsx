import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, CheckCircle2, Flame, Gift, Sparkles, MapPin, Clock, HeartPulse, Activity, Trophy, Shield, Dumbbell } from 'lucide-react';

export default function Hero({ onOpenFreePass, onSelectReel }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      brandKicker: "HỆ THỐNG THỂ HÌNH THƯỢNG LƯU • FORGED IN STEEL",
      mainTitle: "TRÁI TIM",
      highlightTitle: "THÉP",
      subTitle: "BẢN LĨNH CHIẾN BINH",
      description: "Thánh đường rèn luyện thể chất & ý chí đỉnh cao mở cửa 24/7. Trải nghiệm không gian tạ đúc Eleiko Thụy Điển, máy AI Technogym và khu phục hồi Sauna đá muối chuẩn quốc tế.",
      primaryCta: "KÍCH HOẠT VÉ TẬP 7 NGÀY",
      secondaryCta: "TÌM PHÒNG TẬP GẦN BẠN",
      promoTag: "ƯU ĐÃI THÁNG NÀY: TẶNG 30 NGÀY TẬP + PHÁC ĐỒ INBODY 3D",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
      telemetryBpm: "152 BPM",
      telemetryZone: "Zone 4 • Rèn Thể Lực Thép",
      telemetryKcal: "890 kcal",
      membersOnline: "3.500+",
      kpis: ["Mở cửa 24/7 toàn quốc", "100% Master Coach Quốc Tế", "120+ Lớp GroupX/Tuần"]
    },
    {
      id: 2,
      brandKicker: "GIẢI PHÁP THỂ LỰC DOANH NGHIỆP & TẬP ĐOÀN",
      mainTitle: "ĐỘI NGŨ",
      highlightTitle: "TINH ANH",
      subTitle: "NÂNG TẦM HIỆU SUẤT",
      description: "Chương trình chăm sóc sức khỏe toàn diện được hơn 500+ tập đoàn lớn (Vingroup, FPT, Viettel, Techcombank) lựa chọn. Giảm 42% stress và nâng cao 38% năng suất làm việc.",
      primaryCta: "NHẬN TƯ VẤN DOANH NGHIỆP",
      secondaryCta: "XEM HỒ SƠ NĂNG LỰC",
      promoTag: "CHIẾT KHẤU ĐẾN 40% DÀNH CHO ĐOÀN DOANH NGHIỆP",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
      telemetryBpm: "99.4%",
      telemetryZone: "KPI Sức Khỏe Đạt Chuẩn",
      telemetryKcal: "+38% Hiệu Suất",
      membersOnline: "500+ Tập Đoàn",
      kpis: ["Xuất hóa đơn VAT DN", "Báo cáo KPI sức khỏe", "HLV kèm đoàn riêng"]
    },
    {
      id: 3,
      brandKicker: "HUẤN LUYỆN VIÊN CÁ NHÂN 1-KÈM-1 (1-ON-1 PT)",
      mainTitle: "BỨT PHÁ",
      highlightTitle: "VÓC DÁNG",
      subTitle: "CAM KẾT KẾT QUẢ",
      description: "Phác đồ tăng cơ, giảm mỡ chuyên sâu thiết kế theo thể trạng từng cá nhân. 100% Huấn luyện viên đạt chuẩn NASM & CSCS Hoa Kỳ, cam kết hiệu quả rõ rệt sau 8 tuần.",
      primaryCta: "ĐẶT LỊCH TEST THỂ TRẠNG",
      secondaryCta: "XEM KẾT QUẢ HỘI VIÊN",
      promoTag: "TẶNG 02 BUỔI KÈM RIÊNG KHI ĐĂNG KÝ HỘI VIÊN HÔM NAY",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop",
      telemetryBpm: "100%",
      telemetryZone: "Master Coach Quốc Tế",
      telemetryKcal: "-12kg Mỡ",
      membersOnline: "15.000+ Học Viên",
      kpis: ["100% Master Coach", "Thực đơn Macro Y Khoa", "Theo dõi InBody hàng tuần"]
    }
  ];

  // Auto slide every 6.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[var(--bg-darkest)] pt-0">
      
      {/* Dynamic Animated Radiant Spotlights */}
      <div className="absolute top-0 left-1/4 w-[750px] h-[550px] bg-[var(--theme-glow)] rounded-full blur-[170px] pointer-events-none z-10 animate-float-smooth"></div>
      <div className="absolute bottom-10 right-10 w-[650px] h-[500px] bg-red-600/20 rounded-full blur-[160px] pointer-events-none z-10 animate-float-smooth delay-1000"></div>

      {/* Full-bleed 100vw Panoramic Slider */}
      <div className="relative w-full min-h-[700px] lg:min-h-[820px] flex items-center">
        
        {/* Full-width Background Image Layer */}
        <div className="absolute inset-0 w-full h-full">
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.mainTitle}
            className="w-full h-full object-cover object-[75%_center] lg:object-[80%_center] filter contrast-[1.18] brightness-[0.88] transition-all duration-1000 animate-fadeIn"
          />
          
          {/* Multi-Tier Cinema Contrast Gradient Mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-darkest)] via-[var(--bg-darkest)]/95 md:via-[var(--bg-darkest)]/85 to-transparent lg:w-3/5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darkest)] via-transparent to-[var(--bg-darkest)]/60"></div>
          
          {/* Bottom Fade Transition */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[var(--bg-darkest)] to-transparent z-10"></div>
        </div>

        {/* 3D Radiant Flowing Ribbons (SVG Animation) */}
        <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
          <svg
            className="w-full h-full opacity-90 transition-all duration-1000"
            viewBox="0 0 1440 780"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-50 180 C 350 -20, 580 460, 980 240 C 1240 100, 1420 360, 1600 260"
              stroke="url(#vibrantRibbon1)"
              strokeWidth="52"
              strokeLinecap="round"
              className="drop-shadow-[0_0_40px_var(--theme-glow)] animate-pulse"
            />
            <path
              d="M-80 240 C 320 40, 560 500, 960 300 C 1220 160, 1400 420, 1580 320"
              stroke="url(#vibrantRibbon2)"
              strokeWidth="22"
              strokeLinecap="round"
              className="drop-shadow-[0_0_25px_var(--theme-glow-sec)]"
            />
            <defs>
              <linearGradient id="vibrantRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--theme-primary)" stopOpacity="0.1" />
                <stop offset="40%" stopColor="var(--theme-primary)" stopOpacity="0.95" />
                <stop offset="85%" stopColor="#E2E8F0" stopOpacity="0.7" />
                <stop offset="100%" stopColor="var(--theme-accent)" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="vibrantRibbon2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.95" />
                <stop offset="50%" stopColor="var(--theme-primary)" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 flex flex-col justify-center items-start text-left">
          
          {/* Top Brand Badge with Iron Heart Logo */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#151720] border border-white/20 p-0.5 shadow-lg overflow-hidden shrink-0">
              <img src="/iron-heart-logo.jpg" alt="IRON HEART" className="w-full h-full object-cover" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--theme-primary)] to-[#991B1B] text-white font-heading font-black text-xs tracking-wider uppercase shadow-lg shadow-[var(--theme-glow)] shimmer-effect border border-white/20">
              <Gift className="w-3.5 h-3.5 fill-current" />
              <span>{slide.promoTag}</span>
            </div>
          </div>

          {/* Brand Kicker with Pulsating Crimson Indicator */}
          <div className="text-xs sm:text-sm font-heading font-black uppercase tracking-widest text-slate-300 mb-2 flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[var(--theme-primary)] animate-ping inline-block"></span>
            <span>{slide.brandKicker}</span>
          </div>

          {/* Mega Display Headline */}
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black italic uppercase tracking-tight text-white leading-[1.03] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] font-heading">
              {slide.mainTitle}{' '}
              <span className="not-italic font-black text-[var(--theme-primary)] drop-shadow-[0_0_35px_var(--theme-glow)]">
                {slide.highlightTitle}
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-metallic-chrome mt-1 font-heading drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              {slide.subTitle}
            </h2>
          </div>

          {/* Description Sub-heading */}
          <p className="text-sm sm:text-base lg:text-lg text-cool-gray-200 max-w-xl leading-relaxed mb-8 font-body drop-shadow-md">
            {slide.description}
          </p>

          {/* Action Buttons with Shimmer & Glow */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={onOpenFreePass}
              className="inline-flex items-center justify-center gap-3 px-9 py-4 btn-vibrant-primary text-sm sm:text-base uppercase tracking-wider rounded-xl cursor-pointer shimmer-effect shadow-xl"
            >
              <span>{slide.primaryCta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#clubs"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-[var(--theme-primary)] font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all duration-300 backdrop-blur-xl shadow-xl cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[var(--theme-primary)]" />
              <span>{slide.secondaryCta}</span>
            </a>
          </div>

          {/* Live Telemetry & Biometrics HUD Widgets */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/15">
            {/* Pulse Rate */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#12131A]/95 border border-white/20 shadow-xl backdrop-blur-md">
              <HeartPulse className="w-5 h-5 text-rose-500 animate-heartbeat-fast shrink-0" />
              <div>
                <span className="text-xs font-numbers font-black text-white block leading-none">{slide.telemetryBpm}</span>
                <span className="text-[10px] text-slate-300 font-bold uppercase">{slide.telemetryZone}</span>
              </div>
            </div>

            {/* Calories Burned */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#12131A]/95 border border-white/20 shadow-xl backdrop-blur-md">
              <Flame className="w-5 h-5 text-amber-400 animate-bounce shrink-0" />
              <div>
                <span className="text-xs font-numbers font-black text-white block leading-none">{slide.telemetryKcal}</span>
                <span className="text-[10px] text-cool-gray-300 font-bold uppercase">Tiêu Hao Buổi Tập</span>
              </div>
            </div>

            {/* Active Members Online Ticker */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#12131A]/95 border border-white/20 shadow-xl backdrop-blur-md">
              <Activity className="w-5 h-5 text-[var(--theme-primary)] animate-pulse shrink-0" />
              <div>
                <span className="text-xs font-numbers font-black text-white block leading-none">{slide.membersOnline}</span>
                <span className="text-[10px] text-cool-gray-300 font-bold uppercase">Chiến Binh Đang Luyện Tập</span>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 shadow-2xl">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === idx
                  ? 'w-9 h-2.5 bg-[var(--theme-primary)] shadow-[0_0_15px_var(--theme-glow)]'
                  : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Left & Right Slider Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/80 border border-white/20 items-center justify-center text-white hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)] transition-all shadow-2xl backdrop-blur-xl cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/80 border border-white/20 items-center justify-center text-white hover:text-[var(--theme-primary)] hover:border-[var(--theme-primary)] transition-all shadow-2xl backdrop-blur-xl cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      </div>

      {/* Quick Brand Bar */}
      <div className="bg-[#0A0B0E] border-y border-white/10 py-4 px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-heading font-black text-cool-gray-300 uppercase tracking-wider">
          <div className="flex items-center gap-2 text-white">
            <Clock className="w-4 h-4 text-[var(--theme-primary)] animate-pulse" />
            <span className="text-[var(--theme-primary)] font-black">MỞ CỬA 24/7 TOÀN BỘ HỆ THỐNG IRON HEART</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>• 100% SÀN TẠ OLYMPIC ELEIKO &amp; MÁY TECHNOGYM AI</span>
            <span>• 120+ LỚP GROUPX LES MILLS / TUẦN</span>
            <span>• SAUNA ĐÁ MUỐI HIMALAYA MIỄN PHÍ</span>
          </div>
          <button onClick={onOpenFreePass} className="text-white hover:text-[var(--theme-primary)] font-black flex items-center gap-1.5 transition-colors cursor-pointer">
            <span>KÍCH HOẠT THẺ TẬP NGAY</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
          </button>
        </div>
      </div>

    </section>
  );
}

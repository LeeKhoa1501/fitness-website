import React from 'react';
import { Dumbbell, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Sparkles, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-[var(--theme-primary)]/40 pt-20 pb-12 relative overflow-hidden">
      
      {/* Ambient glow in footer */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[var(--theme-glow)] rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#hero" className="flex items-center gap-3.5 font-heading font-black text-2xl tracking-tight text-white mb-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[#151720] border border-white/25 shadow-xl shadow-[var(--theme-glow)] group-hover:scale-105 transition-transform p-0.5 overflow-hidden flex items-center justify-center">
                <img
                  src="/iron-heart-logo.jpg"
                  alt="IRON HEART GYM"
                  className="w-full h-full object-cover filter contrast-[1.15]"
                />
              </div>
              <span className="font-black uppercase tracking-wider">
                IRON <span className="text-[var(--theme-primary)]">HEART</span>
              </span>
            </a>

            <p className="text-xs text-cool-gray-300 leading-relaxed max-w-sm mb-6 font-body">
              Hệ thống phòng tập thể hình &amp; Yoga 24/7 chuẩn 5 sao hàng đầu Việt Nam. Nơi ý chí và thể lực được tôi luyện thành thép: <span className="text-white font-bold">FORGED IN STEEL • POWERED BY HEART</span>.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-[#13141C] border border-white/10 flex items-center justify-center text-cool-gray-200 hover:bg-[var(--theme-primary)] hover:text-white transition-all shadow" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#13141C] border border-white/10 flex items-center justify-center text-cool-gray-200 hover:bg-[var(--theme-primary)] hover:text-white transition-all shadow" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#13141C] border border-white/10 flex items-center justify-center text-cool-gray-200 hover:bg-[var(--theme-primary)] hover:text-white transition-all shadow" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs Col (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-heading font-black uppercase tracking-wider text-white mb-4">
              Chương Trình
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-cool-gray-300 font-medium">
              <a href="#services" className="hover:text-[var(--theme-primary)] transition-colors">Tập tự do 24/7</a>
              <a href="#services" className="hover:text-[var(--theme-primary)] transition-colors">1-on-1 PT Coaching</a>
              <a href="#services" className="hover:text-[var(--theme-primary)] transition-colors">120+ Lớp GroupX</a>
              <a href="#services" className="hover:text-[var(--theme-primary)] transition-colors">Olympic Lifting</a>
              <a href="#services" className="hover:text-[var(--theme-primary)] transition-colors">Doanh Nghiệp B2B</a>
            </div>
          </div>

          {/* Quick Links Col (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-heading font-black uppercase tracking-wider text-white mb-4">
              Hệ Thống
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-cool-gray-300 font-medium">
              <a href="#clubs" className="hover:text-[var(--theme-primary)] transition-colors">Danh sách phòng tập</a>
              <a href="#facilities" className="hover:text-[var(--theme-primary)] transition-colors">Tiện ích 5 sao</a>
              <a href="#pricing" className="hover:text-[var(--theme-primary)] transition-colors">Bảng giá hội viên</a>
              <a href="#trainers" className="hover:text-[var(--theme-primary)] transition-colors">Đội ngũ HLV Thép</a>
              <a href="#faq" className="hover:text-[var(--theme-primary)] transition-colors">Hỏi đáp &amp; Quy định</a>
            </div>
          </div>

          {/* Contacts Col (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-heading font-black uppercase tracking-wider text-white mb-4">
              Trụ Sở &amp; Hotline 24/7
            </h4>
            <div className="space-y-3 text-xs text-cool-gray-300 font-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                <span>Tầng 3-4, Vincom Center Landmark 81, P. 22, Q. Bình Thạnh, TP.HCM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--theme-primary)] shrink-0" />
                <span className="font-numbers font-bold text-white">Hotline: 1900 888 999 (24/7)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--theme-primary)] shrink-0" />
                <span>contact@ironheartgym.vn</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[var(--theme-secondary)] shrink-0" />
                <span className="text-slate-300 font-bold">Mở cửa 24/7 tất cả các ngày trong năm</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cool-gray-400">
          <div>
            © {new Date().getFullYear()} IRON HEART GYM &amp; ATHLETICS ENTERPRISE. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Hóa đơn VAT Doanh nghiệp</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

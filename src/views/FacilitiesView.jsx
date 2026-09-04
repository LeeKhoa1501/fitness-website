import React from 'react';
import FacilitiesShowcase from '../components/FacilitiesShowcase';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FacilitiesView({ onOpenFreePass }) {
  const specs = [
    { label: "Tổng Diện Tích Mỗi CLB", value: "2.500m² - 4.000m²", desc: "Không gian mở trần cao chuẩn quốc tế" },
    { label: "Hệ Thống Máy Tập", value: "100% Technogym & Eleiko", desc: "Nhập khẩu nguyên chiếc từ Ý và Thụy Điển" },
    { label: "Lớp Học Bản Quyền", value: "120+ Lớp / Tuần", desc: "Les Mills, Zumba, Vinyasa Yoga, Spinning" },
    { label: "Tiện Ích Phục Hồi", value: "Sauna Đá Muối & Cryo", desc: "Bể bơi 4 mùa, bồn sục Jacuzzi nóng lạnh" },
  ];

  return (
    <div className="w-full pt-28 pb-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Sparkles className="w-4 h-4" /> Chuẩn Mực Thể Hình Thượng Lưu 5 Sao
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white uppercase">
            KHÔNG GIAN &amp; TIỆN ÍCH <span className="text-[var(--theme-primary)]">ĐẲNG CẤP</span>
          </h1>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Được kiến tạo theo tiêu chuẩn thể hình thế giới, mỗi mét vuông tại KINETIC.PRO đều mang đến trải nghiệm tập luyện xa hoa, riêng tư và truyền cảm hứng bất tận.
          </p>
        </div>

        {/* Specs Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((s, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[#13141C] border border-white/10 shadow-xl">
              <span className="text-xs text-[var(--theme-secondary)] font-bold uppercase tracking-wider block mb-1">{s.label}</span>
              <div className="text-xl font-black text-white uppercase mb-1">{s.value}</div>
              <p className="text-xs text-cool-gray-400 font-body">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Showcase component */}
        <FacilitiesShowcase onOpenFreePass={onOpenFreePass} />

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-[#13141C] border border-[var(--theme-primary)]/40 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase mb-4">
            TRẢI NGHIỆM TIỆN ÍCH 5 SAO MIỄN PHÍ HÔM NAY
          </h2>
          <p className="text-sm text-cool-gray-300 max-w-xl mx-auto mb-8 font-body">
            Nhận vé tập thử 7 ngày miễn phí toàn bộ dịch vụ, sử dụng khu Sauna đá muối và bơi lội không giới hạn.
          </p>
          <a
            href="#free-pass"
            onClick={onOpenFreePass}
            className="inline-flex items-center gap-2 px-9 py-4 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-xl cursor-pointer"
          >
            <span>KÍCH HOẠT VÉ TẬP 7 NGÀY</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}

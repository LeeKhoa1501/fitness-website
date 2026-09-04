import React from 'react';
import PricingSection from '../components/PricingSection';
import { Tags } from 'lucide-react';

export default function PricingView({ onOpenFreePass }) {
  const comparisonMatrix = [
    { feature: "Thời gian tập luyện trong ngày", classic: "06:00 - 22:00", citizen: "24/7 Không Giới Hạn", vip: "24/7 Không Giới Hạn" },
    { feature: "Số lượng chi nhánh ra vào", classic: "01 Chi nhánh đăng ký", citizen: "Toàn bộ chi nhánh toàn quốc", vip: "Toàn bộ chi nhánh + VIP Lounge" },
    { feature: "Sử dụng khu tạ Olympic & Máy AI", classic: "Có", citizen: "Có", vip: "Có" },
    { feature: "120+ Lớp GroupX & Yoga Les Mills", classic: "Không", citizen: "Không giới hạn", vip: "Không giới hạn + Đặt chỗ ưu tiên" },
    { feature: "Xông hơi Sauna đá muối & Jacuzzi", classic: "Không", citizen: "Có", vip: "Có + Cryotherapy -110°C" },
    { feature: "Buổi tập kèm riêng 1-on-1 PT", classic: "Không", citizen: "Tặng 02 buổi", vip: "Tặng 06 buổi / Tháng" },
    { feature: "Dẫn theo bạn bè tập cùng miễn phí", classic: "Không", citizen: "Không", vip: "01 Người / Ngày" },
    { feature: "Đo InBody 770 & Kế hoạch Macro", classic: "1 lần / Quý", citizen: "Hàng tháng", vip: "Hàng tuần" },
    { feature: "Bảo lưu gói tập miễn phí", classic: "Không", citizen: "Tối đa 60 ngày", vip: "Tối đa 90 ngày" },
  ];

  return (
    <div className="w-full pt-28 pb-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Tags className="w-4 h-4" /> Bảng Giá Minh Bạch &amp; Đặc Quyền Hội Viên
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white uppercase">
            BẢNG GIÁ <span className="text-[var(--theme-primary)]">HỘI VIÊN &amp; DOANH NGHIỆP</span>
          </h1>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Lựa chọn gói tập phù hợp với mục tiêu thể lực của bạn. 100% minh bạch, không chi phí ẩn, hỗ trợ xuất hóa đơn VAT đầy đủ cho doanh nghiệp.
          </p>
        </div>

        {/* Pricing Cards Section */}
        <PricingSection onOpenFreePass={onOpenFreePass} />

        {/* Full Feature Comparison Matrix */}
        <div className="mt-16 bg-[#13141C] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-x-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white uppercase">SO SÁNH CHI TIẾT ĐẶC QUYỀN CÁC GÓI</h2>
            <p className="text-xs text-cool-gray-300 mt-1">Xem đầy đủ quyền lợi của từng hạng thẻ hội viên</p>
          </div>

          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-cool-gray-400 font-heading font-black uppercase tracking-wider">
                <th className="py-4 px-4">Quyền Lợi Hội Viên</th>
                <th className="py-4 px-4 text-center">Gói Classic Pass</th>
                <th className="py-4 px-4 text-center text-[var(--theme-primary)] font-black">Gói Citizen All-Access</th>
                <th className="py-4 px-4 text-center text-amber-400 font-black">Gói Executive VIP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 font-body">
              {comparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">{row.feature}</td>
                  <td className="py-3.5 px-4 text-center text-cool-gray-300">{row.classic}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-white bg-[var(--theme-primary)]/5">{row.citizen}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-amber-300">{row.vip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

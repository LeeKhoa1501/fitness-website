import React from 'react';
import { Scale, Check, X, Minus, Sparkles, Trophy, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CompetitorComparison({ onOpenFreePass }) {
  const comparisonData = [
    {
      feature: 'Thời gian mở cửa',
      ironHeart: 'Mở cửa 24/7 (365 ngày xuyên lễ)',
      competitorA: 'Giới hạn 06:00 - 22:00',
      competitorB: 'Giới hạn 06:00 - 21:00 (Nghỉ lễ)',
      isHighlight: true,
    },
    {
      feature: 'Hệ thống thiết bị máy tập',
      ironHeart: '100% Eleiko Thụy Điển & Technogym AI Biostrength',
      competitorA: 'Thiết bị thường hỗn hợp',
      competitorB: 'Máy cũ hoặc tự gia công',
      isHighlight: false,
    },
    {
      feature: 'Lớp học nhóm GroupX & Yoga',
      ironHeart: '120+ Lớp/Tuần bản quyền Les Mills & Yoga Bay',
      competitorA: 'Ít lớp (Tính thêm phí lớp Hot)',
      competitorB: 'Không có hoặc rất ít',
      isHighlight: false,
    },
    {
      feature: 'Khu phục hồi Sauna & Cryo Spa',
      ironHeart: 'Sauna đá muối Himalaya & Bể ngâm lạnh Cryo -110°C',
      competitorA: 'Chỉ có phòng xông hơi khô cơ bản',
      competitorB: 'Không có khu vực phục hồi',
      isHighlight: true,
    },
    {
      feature: 'Đội ngũ Huấn luyện viên (PT)',
      ironHeart: '100% Chứng chỉ Quốc Tế NASM / CSCS Hoa Kỳ',
      competitorA: 'Chứng chỉ nội bộ không đồng đều',
      competitorB: 'PT tự do, không kiểm định',
      isHighlight: false,
    },
    {
      feature: 'Đo quét InBody 770 Scan 3D',
      ironHeart: 'Miễn phí định kỳ không giới hạn + Tư vấn Macro',
      competitorA: 'Thu phí 200.000₫/lần sau lần đầu',
      competitorB: 'Chỉ có cân điện tử gia đình',
      isHighlight: false,
    },
    {
      feature: 'Chính sách gói tập & Hợp đồng',
      ironHeart: 'Linh hoạt theo tháng, không ràng buộc, hoàn tiền',
      competitorA: 'Ép ký hợp đồng dài hạn 3 - 5 năm',
      competitorB: 'Ràng buộc điều khoản phức tạp',
      isHighlight: true,
    },
    {
      feature: 'Ứng dụng di động (Mobile App)',
      ironHeart: 'Mở cửa FaceID, đặt lịch lớp & theo dõi bài tập AI',
      competitorA: 'Dùng thẻ từ nhựa, dễ mất',
      competitorB: 'Ghi sổ tay truyền thống',
      isHighlight: false,
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-[#07080B] via-[#0F1118] to-[#0B0B0F] border-b border-white/10 relative overflow-hidden">
      
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Scale className="w-3.5 h-3.5" /> Bảng Ma Trận So Sánh Trực Diện
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            TẠI SAO CHỌN <span className="text-[var(--theme-primary)]">IRON HEART PRO</span>
          </h2>
          <p className="text-cool-gray-300 text-sm sm:text-base leading-relaxed font-body">
            Minh bạch từng tiêu chuẩn dịch vụ, chất lượng trang thiết bị và quyền lợi hội viên so với các mô hình phòng tập trên thị trường.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-[#13141C] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-white/15 bg-[#090A0E]">
                  <th className="p-6 text-xs sm:text-sm font-heading font-black text-cool-gray-400 uppercase tracking-wider w-1/3">
                    Tiêu Chí Đánh Giá
                  </th>
                  <th className="p-6 text-xs sm:text-sm font-heading font-black text-white uppercase tracking-wider w-1/3 bg-gradient-to-r from-[var(--theme-primary)]/20 to-[var(--theme-primary)]/5 border-x border-[var(--theme-primary)]/40 relative">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[var(--theme-primary)]" />
                      <span className="text-[var(--theme-primary)]">IRON HEART PRO</span>
                    </div>
                  </th>
                  <th className="p-6 text-xs sm:text-sm font-heading font-black text-cool-gray-300 uppercase tracking-wider w-1/6">
                    Phòng Tập Chuỗi Lớn Khác
                  </th>
                  <th className="p-6 text-xs sm:text-sm font-heading font-black text-cool-gray-400 uppercase tracking-wider w-1/6">
                    Phòng Gym Bình Dân
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-white/[0.03] ${
                      row.isHighlight ? 'bg-white/[0.015]' : ''
                    }`}
                  >
                    {/* Feature Title */}
                    <td className="p-6 font-bold text-white font-heading">
                      {row.feature}
                    </td>

                    {/* IRON HEART PRO Column */}
                    <td className="p-6 font-bold text-white bg-[var(--theme-primary)]/[0.06] border-x border-[var(--theme-primary)]/30">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                        <span>{row.ironHeart}</span>
                      </div>
                    </td>

                    {/* Competitor A */}
                    <td className="p-6 text-cool-gray-300">
                      <div className="flex items-start gap-2.5">
                        <Minus className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{row.competitorA}</span>
                      </div>
                    </td>

                    {/* Competitor B */}
                    <td className="p-6 text-cool-gray-400">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.competitorB}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Table Bottom Footer CTA Bar */}
          <div className="bg-[#090A0E] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div>
              <h4 className="text-base font-black text-white uppercase">
                Trải nghiệm sự khác biệt ngay hôm nay!
              </h4>
              <p className="text-xs text-cool-gray-400">
                Nhận thẻ tập 07 ngày miễn phí toàn quyền sử dụng tất cả tiện ích 5 sao.
              </p>
            </div>
            <button
              onClick={onOpenFreePass}
              className="inline-flex items-center gap-2 px-6 py-3 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-lg cursor-pointer shrink-0"
            >
              <span>Nhận Vé Trải Nghiệm 7 Ngày</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { pricingPlans } from '../data/fitnessData';
import { Tags, Check, X, Crown, Sparkles } from 'lucide-react';

export default function PricingSection({ onOpenFreePass }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <Tags className="w-3.5 h-3.5" /> Gói Hội Viên &amp; Doanh Nghiệp
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white uppercase">
            Bảng Giá{' '}
            <span className="text-[var(--theme-primary)]">
              Minh Bạch &amp; Hấp Dẫn
            </span>
          </h2>
          <p className="text-cool-gray-300 text-base leading-relaxed font-body">
            Hỗ trợ xuất hóa đơn VAT doanh nghiệp, tích hợp toàn bộ tiện ích phòng gym 5 sao, sauna đá muối và InBody 770.
          </p>
        </div>

        {/* Pricing Toggle Monthly / Yearly */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            onClick={() => setIsYearly(false)}
            className={`text-sm font-heading font-black uppercase cursor-pointer transition-colors ${
              !isYearly ? 'text-white' : 'text-cool-gray-400 hover:text-white'
            }`}
          >
            Theo Tháng
          </span>

          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 bg-[#101117] rounded-full border border-white/20 p-1 relative transition-colors focus:outline-none shadow-inner cursor-pointer"
            aria-label="Toggle Billing Frequency"
          >
            <div
              className={`w-5 h-5 rounded-full shadow-lg transition-transform duration-300 ${
                isYearly ? 'translate-x-8 bg-[var(--theme-primary)] shadow-[0_0_12px_var(--theme-primary)]' : 'translate-x-0 bg-white'
              }`}
            ></div>
          </button>

          <span
            onClick={() => setIsYearly(true)}
            className={`text-sm font-heading font-black uppercase cursor-pointer flex items-center gap-2 transition-colors ${
              isYearly ? 'text-white' : 'text-cool-gray-400 hover:text-white'
            }`}
          >
            Theo Năm (Tiết kiệm 20%)
            <span className="px-2 py-0.5 rounded-full bg-[var(--theme-primary)] text-[10px] text-white font-black">
              -20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#181A26] to-[#11131C] border-2 border-[var(--theme-primary)] shadow-2xl shadow-[var(--theme-glow)] scale-105 z-20'
                    : 'bg-[#13141C] border border-white/10 hover:border-white/20 shadow-xl'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white text-xs font-heading font-black tracking-wider uppercase shadow-lg shadow-[var(--theme-glow)] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    Lựa Chọn Phổ Biến Nhất
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-heading font-black uppercase tracking-widest text-[var(--theme-secondary)]">
                      {plan.badge}
                    </span>
                    {plan.id === 'vip' && <Crown className="w-5 h-5 text-amber-400" />}
                  </div>

                  <h3 className="text-xl font-black text-white uppercase mb-2">{plan.name}</h3>
                  <p className="text-xs text-cool-gray-300 min-h-[36px] mb-6 font-body leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-numbers text-4xl font-black text-white">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-xs font-bold text-cool-gray-400">VNĐ / Tháng</span>
                    </div>
                    <span className="text-[11px] text-[var(--theme-secondary)] font-semibold mt-1 block">
                      {isYearly ? 'Thanh toán trọn gói hàng năm (Tiết kiệm 20%)' : 'Thanh toán linh hoạt từng tháng'}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs leading-relaxed">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-cool-gray-600 shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`${
                            feature.included ? 'text-white' : 'text-cool-gray-400'
                          } ${feature.bold ? 'font-bold' : ''}`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenFreePass}
                  className={`w-full py-4 rounded-xl text-xs uppercase tracking-wider font-heading font-black transition-all cursor-pointer ${
                    isPopular
                      ? 'btn-vibrant-primary shadow-xl'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Đăng Ký Gói Tập Ngay
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

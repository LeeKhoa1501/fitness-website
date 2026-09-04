import React, { useState } from 'react';
import { faqData } from '../data/fitnessData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <HelpCircle className="w-3.5 h-3.5" /> Giải Đáp Thắc Mắc
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            CÂU HỎI <span className="text-[var(--theme-primary)]">THƯỜNG GẶP</span>
          </h2>
          <p className="text-cool-gray-300 text-sm sm:text-base leading-relaxed font-body">
            Những thông tin cần biết trước khi bắt đầu hành trình tập luyện tại KINETIC.PRO.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#13141C] border border-white/10 rounded-2xl overflow-hidden transition-colors shadow-lg"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-black text-white uppercase pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[var(--theme-primary)]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-cool-gray-300 leading-relaxed font-body border-t border-white/5 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

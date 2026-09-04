import React, { useState } from 'react';
import { Award, Flame, TrendingDown, TrendingUp, Star, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

export default function BeforeAfterShowcase({ onOpenFreePass }) {
  const [activeTab, setActiveTab] = useState('all');

  const transformations = [
    {
      id: 1,
      name: 'Nguyễn Hoàng Nam',
      age: 32,
      role: 'Giám Đốc Kinh Doanh (Techcombank)',
      category: 'men',
      duration: '12 Tuần',
      coach: 'Master Coach Michael Evans',
      goal: 'Giảm mỡ nội tạng & Tăng cơ nạc',
      stats: {
        weight: { before: '86.5 kg', after: '72.0 kg', change: '-14.5 kg' },
        bodyfat: { before: '28.5%', after: '12.8%', change: '-15.7%' },
        muscle: { before: '32.0 kg', after: '36.2 kg', change: '+4.2 kg' },
        waist: { before: '96 cm', after: '79 cm', change: '-17 cm' }
      },
      quote: 'Công việc bận rộn khiến tôi từng nghĩ mình không thể có cơ bụng 6 múi. Phác đồ khoa học và chế độ ăn Macro của HLV Michael đã thay đổi hoàn toàn cuộc sống của tôi.',
      beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Trần Mai Phương',
      age: 28,
      role: 'Trưởng Phòng Marketing (FPT)',
      category: 'women',
      duration: '8 Tuần',
      coach: 'Master Coach Elena Rostova',
      goal: 'Siết eo thon & Tăng size vòng 3',
      stats: {
        weight: { before: '62.0 kg', after: '54.0 kg', change: '-8.0 kg' },
        bodyfat: { before: '29.2%', after: '18.4%', change: '-10.8%' },
        waist: { before: '78 cm', after: '62 cm', change: '-16 cm' },
        glutes: { before: '88 cm', after: '94 cm', change: '+6 cm' }
      },
      quote: 'Sau 8 tuần tập luyện kết hợp Yoga và tạ tại Iron Heart, vóc dáng tôi săn chắc rõ rệt, lưng hết gù mỏi và năng lượng làm việc lúc nào cũng tràn trề!',
      beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Lê Tuấn Kiệt',
      age: 25,
      role: 'Kỹ Sư Phần Mềm (Shopee)',
      category: 'men',
      duration: '16 Tuần',
      coach: 'Kiện Tướng Trần Quốc Bảo',
      goal: 'Tăng cân nạc & Sức mạnh bùng nổ',
      stats: {
        weight: { before: '58.0 kg', after: '71.5 kg', change: '+13.5 kg' },
        bodyfat: { before: '14.0%', after: '11.5%', change: '-2.5%' },
        muscle: { before: '27.8 kg', after: '36.8 kg', change: '+9.0 kg' },
        benchPress: { before: '40 kg', after: '115 kg', change: '+75 kg' }
      },
      quote: 'Từ một người gầy gò hay ốm vặt, giờ tôi tự tin với khung vai rộng và sức mạnh nâng tạ Olympic gấp đôi trọng lượng cơ thể.',
      beforeImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop',
    }
  ];

  const filteredList = activeTab === 'all' 
    ? transformations 
    : transformations.filter(t => t.category === activeTab);

  return (
    <section id="transformations" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#10121A] to-[#07080B] border-b border-white/10 relative overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[500px] bg-[var(--theme-glow)] rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
              <Award className="w-3.5 h-3.5" /> Minh Chứng Kết Quả Thực Tế (Social Proof)
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              KẾT QUẢ BIẾN ĐỔI <span className="text-[var(--theme-primary)]">VÓC DÁNG THẬT</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#13141C] border border-white/10">
            {[
              { id: 'all', label: 'TẤT CẢ' },
              { id: 'men', label: 'NAM GIỚI' },
              { id: 'women', label: 'NỮ GIỚI' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'btn-vibrant-primary shadow-lg'
                    : 'text-cool-gray-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="bg-[#13141C] border border-white/10 rounded-3xl overflow-hidden hover:border-[var(--theme-primary)]/60 transition-all duration-300 flex flex-col group shadow-2xl"
            >
              {/* Image Split Header (Before & After) */}
              <div className="relative h-64 grid grid-cols-2 overflow-hidden">
                <div className="relative h-full border-r border-black/40">
                  <span className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur text-[10px] font-heading font-black uppercase text-cool-gray-300 border border-white/15">
                    TRƯỚC
                  </span>
                  <img
                    src={item.beforeImg}
                    alt={`${item.name} Before`}
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-90 grayscale-[30%]"
                  />
                </div>
                <div className="relative h-full">
                  <span className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-[var(--theme-primary)] text-[10px] font-heading font-black uppercase text-white shadow-lg">
                    SAU {item.duration}
                  </span>
                  <img
                    src={item.afterImg}
                    alt={`${item.name} After`}
                    className="w-full h-full object-cover filter contrast-[1.18]"
                  />
                </div>
              </div>

              {/* Transformation Info */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-black text-white uppercase">{item.name}</h3>
                  <span className="text-xs text-cool-gray-400 font-bold">{item.age} Tuổi</span>
                </div>
                <p className="text-xs text-[var(--theme-secondary)] font-semibold mb-4">{item.role}</p>

                {/* Metrics Table Grid */}
                <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-[#090A0E] border border-white/10 mb-6">
                  {Object.entries(item.stats).map(([key, val], sIdx) => {
                    const labelMap = {
                      weight: 'Cân nặng',
                      bodyfat: 'Tỷ lệ mỡ',
                      muscle: 'Khối lượng cơ',
                      waist: 'Vòng bụng/eo',
                      glutes: 'Vòng 3',
                      benchPress: 'Sức mạnh Bench'
                    };
                    const isPositive = val.change.startsWith('+') && key !== 'waist' && key !== 'bodyfat';
                    return (
                      <div key={sIdx} className="p-2 rounded-xl bg-[#13141C] border border-white/5">
                        <span className="text-[10px] text-cool-gray-400 block font-medium">
                          {labelMap[key] || key}
                        </span>
                        <div className="flex items-baseline justify-between mt-0.5">
                          <span className="text-xs font-numbers font-black text-white">{val.after}</span>
                          <span className={`text-[10px] font-numbers font-bold ${
                            val.change.startsWith('-') ? 'text-emerald-400' : 'text-[var(--theme-primary)]'
                          }`}>
                            {val.change}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs text-cool-gray-300 italic mb-6 font-body leading-relaxed flex-grow">
                  "{item.quote}"
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-cool-gray-400">
                    <UserCheck className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                    <span>HLV: <span className="text-white font-semibold">{item.coach}</span></span>
                  </div>
                  <button
                    onClick={onOpenFreePass}
                    className="text-xs font-heading font-black text-[var(--theme-primary)] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Xem Phác Đồ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

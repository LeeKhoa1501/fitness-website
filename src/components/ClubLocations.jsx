import React, { useState } from 'react';
import { clubLocations } from '../data/fitnessData';
import { MapPin, Phone, ArrowRight, Star, Clock, CheckCircle2, Navigation, ExternalLink, Sparkles } from 'lucide-react';

export default function ClubLocations({ onOpenFreePass }) {
  const [selectedCity, setSelectedCity] = useState("TP. Hồ Chí Minh");
  const [selectedBranchId, setSelectedBranchId] = useState("lm81");

  const currentCityData = clubLocations.find(c => c.city === selectedCity) || clubLocations[0];
  
  // Find current active branch for map
  const allBranches = clubLocations.flatMap(c => c.branches);
  const activeBranch = allBranches.find(b => b.id === selectedBranchId) || currentCityData.branches[0];

  const handleSelectCity = (cityName) => {
    setSelectedCity(cityName);
    const newCity = clubLocations.find(c => c.city === cityName);
    if (newCity && newCity.branches.length > 0) {
      setSelectedBranchId(newCity.branches[0].id);
    }
  };

  return (
    <section id="clubs" className="py-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/40 text-[var(--theme-primary)] text-xs font-heading font-black uppercase tracking-wider mb-4 shadow-[0_0_15px_var(--theme-glow)]">
            <MapPin className="w-3.5 h-3.5" /> Hệ Thống Câu Lạc Bộ Toàn Quốc &amp; Bản Đồ Vị Trí
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            TÌM CÂU LẠC BỘ <span className="text-[var(--theme-primary)]">GẦN BẠN NHẤT</span>
          </h2>
          <p className="text-cool-gray-300 text-sm sm:text-base leading-relaxed font-body">
            Hệ thống phòng tập cao cấp tọa lạc tại các vị trí đắc địa trung tâm thương mại và tòa tháp biểu tượng, mở cửa liên tục 24/7.
          </p>
        </div>

        {/* City Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#101117] border border-white/10 shadow-2xl">
            {clubLocations.map((loc) => (
              <button
                key={loc.city}
                onClick={() => handleSelectCity(loc.city)}
                className={`px-7 py-3 rounded-xl text-xs sm:text-sm font-heading font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCity === loc.city
                    ? 'btn-vibrant-primary shadow-lg'
                    : 'text-cool-gray-300 hover:text-white'
                }`}
              >
                {loc.city}
              </button>
            ))}
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {currentCityData.branches.map((branch) => {
            const isSelected = activeBranch.id === branch.id;
            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`bg-[#13141C] border rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group shadow-2xl cursor-pointer hover:-translate-y-2 ${
                  isSelected
                    ? 'border-[var(--theme-primary)] shadow-[0_20px_40px_rgba(0,0,0,0.95),0_0_25px_var(--theme-glow)]'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/85 backdrop-blur text-[var(--theme-secondary)] text-[10px] font-heading font-black uppercase tracking-wider border border-white/20">
                    <Clock className="w-3 h-3 inline-block mr-1" />
                    {branch.hours}
                  </span>
                  
                  {isSelected && (
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[var(--theme-primary)] text-white text-[10px] font-heading font-black uppercase tracking-wider shadow-lg animate-pulse">
                      Đang Xem Bản Đồ
                    </span>
                  )}

                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.12]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13141C] via-transparent to-transparent"></div>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-white uppercase mb-2 group-hover:text-[var(--theme-primary)] transition-colors">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-cool-gray-300 mb-6 leading-relaxed flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </p>

                  {/* Features Badges */}
                  <div className="space-y-2 mb-8 mt-auto pt-4 border-t border-white/10">
                    {branch.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-cool-gray-300 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--theme-secondary)] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-1.5 text-xs font-numbers font-bold text-white hover:text-[var(--theme-primary)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                      <span>{branch.phone}</span>
                    </a>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenFreePass();
                      }}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[var(--theme-primary)] text-white text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer shadow"
                    >
                      Tập Thử Tại Đây
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Google Maps Live Explorer Box */}
        <div className="bg-[#13141C] border border-[var(--theme-primary)]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[var(--theme-primary)]/20 border border-[var(--theme-primary)]/40 flex items-center justify-center text-[var(--theme-primary)] shrink-0">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[var(--theme-secondary)] block">
                  Bản Đồ Chỉ Đường Trực Tiếp (Google Maps):
                </span>
                <h3 className="text-xl font-black text-white uppercase">{activeBranch.name}</h3>
                <p className="text-xs text-cool-gray-300">{activeBranch.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={activeBranch.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-heading font-black uppercase tracking-wider transition-all shadow"
              >
                <ExternalLink className="w-4 h-4 text-[var(--theme-secondary)]" />
                <span>Mở Trên Ứng Dụng Google Maps</span>
              </a>

              <button
                onClick={onOpenFreePass}
                className="inline-flex items-center gap-2 px-6 py-3 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-lg cursor-pointer"
              >
                <span>Nhận Vé Tập 7 Ngày</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Embedded Google Maps Frame */}
          <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/15 relative bg-[#09090D] shadow-inner">
            <iframe
              title={`Google Map - ${activeBranch.name}`}
              src={activeBranch.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

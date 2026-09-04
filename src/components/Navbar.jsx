import React, { useState, useEffect, useRef } from 'react';
import { useTheme, themes } from '../context/ThemeContext';
import { 
  Shield, Phone, Ticket, Palette, Menu, X, ChevronDown, Sparkles, Dumbbell,
  Layers, Calendar, Film, BookOpen, MapPin, Award, Tags, UserCheck, ChevronRight
} from 'lucide-react';

export default function Navbar({ currentView, onNavigate, onOpenFreePass }) {
  const { currentTheme, setCurrentTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hierarchical Navigation Tree with Sub-Navs
  const navStructure = [
    {
      id: 'home',
      label: 'TRANG CHỦ',
      type: 'direct',
    },
    {
      id: 'training-group',
      label: 'TẬP LUYỆN & DỊCH VỤ',
      type: 'dropdown',
      childIds: ['services', 'schedule', 'plans', 'reels'],
      children: [
        {
          id: 'services',
          label: '8 BỘ MÔN BẢN QUYỀN',
          desc: 'Yoga, Zumba, GroupX, PT 1-1, Boxing, Căng cơ, InBody, Gym',
          icon: Layers,
          badge: 'Hot'
        },
        {
          id: 'schedule',
          label: 'LỊCH LỚP HỌC 7 NGÀY',
          desc: '120+ Lớp GroupX, Yoga, Zumba cập nhật hàng tuần',
          icon: Calendar,
          badge: 'Live'
        },
        {
          id: 'plans',
          label: 'GIÁO ÁN BÀI TẬP',
          desc: 'Phác đồ khoa học: Sets, Reps, Tempo & Tải PDF',
          icon: BookOpen,
        },
        {
          id: 'reels',
          label: 'CLIP LUYỆN TẬP HD',
          desc: 'Thư viện video hướng dẫn form chuẩn Master Coach',
          icon: Film,
        }
      ]
    },
    {
      id: 'facilities-group',
      label: 'HỆ THỐNG & TIỆN ÍCH',
      type: 'dropdown',
      childIds: ['clubs', 'facilities'],
      children: [
        {
          id: 'clubs',
          label: 'CÂU LẠC BỘ & GOOGLE MAPS',
          desc: 'Tra cứu chi nhánh toàn quốc TP.HCM, Hà Nội, Đà Nẵng 24/7',
          icon: MapPin,
        },
        {
          id: 'facilities',
          label: 'TIỆN ÍCH 5 SAO THƯỢNG LƯU',
          desc: 'Sàn tạ Eleiko, Technogym AI, Sauna đá muối & Bể bơi',
          icon: Sparkles,
        }
      ]
    },
    {
      id: 'trainers',
      label: 'HUẤN LUYỆN VIÊN',
      type: 'direct',
    },
    {
      id: 'pricing',
      label: 'BẢNG GIÁ',
      type: 'direct',
    },
  ];

  const handleNavClick = (viewId) => {
    onNavigate(viewId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (groupId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(groupId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08090D] border-b border-[var(--theme-primary)]/40 shadow-[0_10px_35px_rgba(0,0,0,0.95),0_0_25px_var(--theme-glow)] h-[78px]' 
        : 'bg-[#0C0D12] border-b border-white/10 h-[84px]'
    } flex items-center`}>
      
      {/* Top glowing crimson & steel accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[var(--theme-primary)] via-white/80 to-[var(--theme-accent)] opacity-90 pointer-events-none"></div>

      <div className="w-full px-4 lg:px-10 flex items-center justify-between">
        
        {/* Brand Logo: Official IRON HEART GYM 3D Emblem */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 font-heading font-black tracking-tight text-white group cursor-pointer text-left shrink-0"
        >
          {/* Logo 3D Crest Badge */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2A2E3D] via-[#151821] to-[#07080B] p-0.5 border border-white/25 shadow-xl shadow-[var(--theme-glow)] group-hover:scale-105 group-hover:border-[var(--theme-primary)] transition-all overflow-hidden flex items-center justify-center">
            <img
              src="/iron-heart-logo.jpg"
              alt="IRON HEART GYM"
              className="w-full h-full object-cover filter contrast-[1.15]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xl sm:text-2xl font-black text-white tracking-wider uppercase font-heading drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                IRON <span className="text-[var(--theme-primary)]">HEART</span>
              </span>
              <span className="px-1.5 py-0.5 rounded-md bg-gradient-to-r from-[var(--theme-primary)] to-[#B91C1C] text-white text-[10px] font-black uppercase shadow-md border border-white/20">
                GYM 24/7
              </span>
            </div>
            <span className="text-[8.5px] font-heading font-black text-slate-300 tracking-[0.2em] uppercase mt-1 flex items-center gap-1">
              <Dumbbell className="w-2.5 h-2.5 text-[var(--theme-primary)] inline" />
              FORGED IN STEEL • POWERED BY HEART
            </span>
          </div>
        </button>

        {/* Compact Desktop Navigation with Sub-Nav Dropdowns */}
        <nav className="hidden lg:flex items-center gap-2 p-1.5 rounded-2xl bg-[#08090D] border border-white/10 shadow-inner">
          {navStructure.map((item) => {
            if (item.type === 'direct') {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'btn-vibrant-primary shadow-lg shadow-[var(--theme-glow)] scale-[1.02]'
                      : 'text-cool-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            // Dropdown Menu Item
            const isGroupActive = item.childIds.includes(currentView);
            const isOpen = activeDropdown === item.id;

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => {
                    handleNavClick(item.children[0].id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-black uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isGroupActive
                      ? 'btn-vibrant-primary shadow-lg shadow-[var(--theme-glow)] scale-[1.02]'
                      : 'text-cool-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Sub-Nav Panel (100% Solid Opacity - No Transparency) */}
                {isOpen && (
                  <div
                    className="absolute left-0 top-full pt-3 w-80 z-50 animate-fadeIn"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-[#13141C] opacity-100 border border-white/20 rounded-2xl p-3 shadow-2xl relative overflow-hidden">
                      
                      {/* Dropdown top glowing stripe */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)]"></div>

                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 py-1.5 mb-1 flex items-center justify-between border-b border-white/10">
                        <span>{item.label}</span>
                        <Sparkles className="w-3 h-3 text-[var(--theme-primary)]" />
                      </div>

                      <div className="space-y-1">
                        {item.children.map((sub) => {
                          const isSubActive = currentView === sub.id;
                          const Icon = sub.icon;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => handleNavClick(sub.id)}
                              className={`w-full flex items-start gap-3 p-2.5 rounded-xl transition-all text-left cursor-pointer group opacity-100 ${
                                isSubActive
                                  ? 'bg-[var(--theme-primary)]/20 border border-[var(--theme-primary)]/60 shadow-md'
                                  : 'bg-[#181A24] hover:bg-[#202330] border border-white/5'
                              }`}
                            >
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isSubActive
                                  ? 'bg-[var(--theme-primary)] text-white shadow-lg shadow-[var(--theme-glow)]'
                                  : 'bg-[#232736] text-[var(--theme-secondary)] group-hover:bg-[var(--theme-primary)] group-hover:text-white'
                              }`}>
                                <Icon className="w-4 h-4" />
                              </div>

                              <div className="flex-grow">
                                <div className="flex items-center justify-between gap-1">
                                  <span className={`text-xs font-heading font-black uppercase tracking-wider ${
                                    isSubActive ? 'text-white' : 'text-cool-gray-200 group-hover:text-white'
                                  }`}>
                                    {sub.label}
                                  </span>
                                  {sub.badge && (
                                    <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase bg-[var(--theme-primary)] text-white">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10.5px] text-cool-gray-400 group-hover:text-cool-gray-300 font-body leading-tight mt-0.5 line-clamp-1">
                                  {sub.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions & Live Color Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Live Theme Color Switcher Button */}
          <div className="relative">
            <button
              onClick={() => setPaletteOpen(!paletteOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#151720] hover:bg-[#1C1E2A] border border-[var(--theme-primary)]/40 text-xs font-heading font-black text-white transition-all cursor-pointer shadow-lg shadow-[var(--theme-glow)]"
              title="Chọn màu sắc giao diện"
            >
              <Palette className="w-4 h-4 text-[var(--theme-primary)]" />
              <span className="hidden sm:inline text-xs">Màu Sắc</span>
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>

            {/* Dropdown Menu (100% Solid Opacity) */}
            {paletteOpen && (
              <div className="absolute right-0 top-12 w-64 bg-[#151720] opacity-100 border border-white/20 rounded-2xl p-2.5 shadow-2xl z-50 animate-fadeIn">
                <div className="text-[10px] font-black uppercase text-cool-gray-400 px-3 py-1.5 border-b border-white/10 mb-1.5 flex items-center justify-between">
                  <span>Chọn Tone Màu Nổi Bật:</span>
                  <Sparkles className="w-3 h-3 text-[var(--theme-primary)]" />
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setCurrentTheme(t.id);
                      setPaletteOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-heading font-bold transition-all text-left cursor-pointer mb-1 ${
                      currentTheme === t.id
                        ? 'bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white shadow-lg'
                        : 'text-cool-gray-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{t.name}</span>
                    <span
                      className="w-4 h-4 rounded-full border-2 border-white shadow-md shrink-0"
                      style={{ backgroundColor: t.primaryColor }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="tel:1900888999"
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-numbers font-black text-white hover:border-[var(--theme-primary)] transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
            <span>1900 888 999</span>
          </a>

          <button
            onClick={onOpenFreePass}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 btn-vibrant-primary text-xs font-heading font-black uppercase tracking-wider rounded-xl shadow-lg cursor-pointer shimmer-effect"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">TẬP THỬ 7 NGÀY</span>
            <span className="sm:hidden">TẬP THỬ</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[var(--theme-primary)] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Categorized Sub-Navs (100% Solid Opacity) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[78px] left-0 right-0 bg-[#08090D] opacity-100 border-b border-[var(--theme-primary)]/30 px-6 py-6 flex flex-col gap-3 shadow-2xl animate-fadeIn max-h-[82vh] overflow-y-auto z-50">
          {navStructure.map((item) => {
            if (item.type === 'direct') {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-heading font-black uppercase py-2.5 px-4 rounded-xl text-left transition-colors ${
                    isActive
                      ? 'btn-vibrant-primary'
                      : 'text-cool-gray-200 hover:text-[var(--theme-primary)] bg-[#151720]'
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            // Mobile Group
            return (
              <div key={item.id} className="bg-[#13141C] opacity-100 rounded-2xl p-3 border border-white/10 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-[var(--theme-primary)] px-2 block">
                  {item.label}
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {item.children.map((sub) => {
                    const isSubActive = currentView === sub.id;
                    const Icon = sub.icon;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleNavClick(sub.id)}
                        className={`flex items-center gap-2.5 p-2.5 rounded-xl text-left transition-colors text-xs font-bold uppercase ${
                          isSubActive
                            ? 'btn-vibrant-primary'
                            : 'text-cool-gray-300 hover:text-white bg-[#1A1C28]'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0 text-[var(--theme-secondary)]" />
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <a
            href="tel:1900888999"
            className="flex items-center gap-2 text-sm font-numbers font-bold text-cool-gray-200 py-2 pt-4 border-t border-white/10"
          >
            <Phone className="w-4 h-4 text-[var(--theme-primary)]" />
            <span>Hotline: 1900 888 999 (24/7)</span>
          </a>
        </div>
      )}
    </header>
  );
}

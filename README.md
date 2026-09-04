# KINETIC FITNESS - DỰ ÁN REACT.JS HOÀN CHỈNH

Dự án giao diện Landing Page Fitness B2C hiện đại xây dựng hoàn chỉnh bằng **React 18 + Vite + Tailwind CSS + Lucide React**.

---

## 🚀 Cách Chạy Dự Án

### 1. Cài đặt thư viện (nếu cần):
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Server):
```bash
npm run dev
```
Trình duyệt sẽ tự động mở tại địa chỉ: `http://localhost:3000`

### 3. Build đóng gói cho Production:
```bash
npm run build
```

---

## 📁 Cấu Trúc Mã Nguồn React

```
fitness-website/
├── index.html                 # Template HTML chính của Vite
├── package.json               # Cấu hình scripts & dependencies
├── vite.config.js             # Cấu hình Vite & Port 3000
├── tailwind.config.js         # Design tokens màu Electric Blue & 4-point spacing
├── postcss.config.js
├── src/
│   ├── main.jsx               # Entry point ứng dụng React
│   ├── App.jsx                # Component App tổng hợp & Quản lý Modal/Toast
│   ├── index.css              # Tailwind base, utilities, glassmorphism & scrollbar
│   ├── data/
│   │   └── fitnessData.js     # Dữ liệu 6 gói tập, 4 HLV, bảng giá, reviews, FAQs
│   └── components/
│       ├── Navbar.jsx         # Sticky Navbar mờ kính, ScrollSpy & Drawer Mobile
│       ├── Hero.jsx           # Hero banner VĐV thể hình, stats badges & CTA
│       ├── BrandTrust.jsx     # Logo đối tác Technogym, Hammer Strength, NASM...
│       ├── ServicesGrid.jsx   # Lưới 6 chương trình tập chuyên sâu
│       ├── BmiCalculator.jsx  # Bộ tính BMI & gợi ý lộ trình tương tác real-time
│       ├── TrainersGrid.jsx   # Thẻ hồ sơ Master Trainer & Đặt lịch HLV
│       ├── PricingSection.jsx # Bảng giá chuyển đổi Tháng / Năm (giảm 20%)
│       ├── ReviewsSection.jsx # Đánh giá học viên & biến đổi thể hình
│       ├── FreePassForm.jsx   # Form đăng ký thẻ tập 7 ngày miễn phí
│       ├── FaqSection.jsx     # Accordion câu hỏi thường gặp
│       ├── Footer.jsx         # Footer 24/7, hotline, cơ sở & mạng xã hội
│       ├── BookingModal.jsx   # Modal popup đặt lịch hẹn HLV
│       └── Toast.jsx          # Thông báo Toast notification tương tác
```

---

## 🎨 Hệ Thống Design System
- **Tone màu chủ đạo**: Electric Blue (`#0066FF`, `#00D2FF`), Matte Black (`#07090E`, `#0B0E15`, `#121722`), Cool Gray (`#1D2533`, `#293448`, `#7E8EA6`), Crisp White (`#FFFFFF`).
- **Typography**: `Roboto` cho nội dung văn bản & `Inter` cho số liệu thống kê (`tabular-nums`), bảng giá và tiêu đề.
- **Hệ thống khoảng cách**: Chuẩn **4-point grid** xuyên suốt toàn bộ components.

import React, { useState } from 'react';
import { X, CalendarCheck, Check } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, coachName, onShowToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [timeSlot, setTimeSlot] = useState('evening');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    onClose();
    if (onShowToast) {
      onShowToast(`Đã đặt lịch hẹn tư vấn cùng HLV ${coachName || 'chuyên nghiệp'} thành công!`);
    }
    setName('');
    setPhone('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-base/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-dark-card border border-cool-gray-700 rounded-3xl p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-cool-gray-400 hover:text-white transition-colors"
          aria-label="Đóng Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <CalendarCheck className="w-6 h-6 text-electric-cyan" />
          <h3 className="text-xl font-bold text-white">Đặt Lịch Huấn Luyện Viên</h3>
        </div>
        <p className="text-xs text-cool-gray-400 mb-6">
          Chọn khung giờ phù hợp để HLV liên hệ tư vấn lộ trình riêng cho bạn.
        </p>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cool-gray-300 mb-1.5">
              Huấn luyện viên phụ trách
            </label>
            <input
              type="text"
              readOnly
              value={coachName || 'HLV Chuyên Nghiệp'}
              className="w-full bg-dark-card-hover border border-cool-gray-700 rounded-lg px-4 py-3 text-electric-cyan font-bold text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cool-gray-300 mb-1.5">
              Họ và tên của bạn
            </label>
            <input
              type="text"
              required
              placeholder="Nhập họ và tên..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-cool-gray-900 border border-cool-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-electric-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cool-gray-300 mb-1.5">
              Số điện thoại
            </label>
            <input
              type="tel"
              required
              placeholder="Nhập số điện thoại nhận lịch hẹn..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-cool-gray-900 border border-cool-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-electric-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cool-gray-300 mb-1.5">
              Khung giờ bạn có thể tập
            </label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full bg-cool-gray-900 border border-cool-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-electric-blue outline-none"
            >
              <option value="morning">Sáng sớm (06:00 - 09:00)</option>
              <option value="noon">Buổi trưa (11:30 - 13:30)</option>
              <option value="evening">Buổi tối (17:30 - 20:30)</option>
              <option value="flexible">Linh hoạt theo ngày</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-electric-blue hover:bg-electric-blue-hover text-white font-heading font-bold rounded-lg shadow-electric hover:shadow-cyan-glow transition-all duration-200 mt-2"
          >
            <Check className="w-4 h-4" />
            <span>Xác Nhận Đặt Lịch Tư Vấn</span>
          </button>
        </form>
      </div>
    </div>
  );
}

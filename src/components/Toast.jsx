import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-dark-card border border-electric-cyan rounded-xl px-5 py-4 text-white shadow-2xl shadow-cyan-glow/40 animate-slideUp">
      <CheckCircle className="w-5 h-5 text-electric-cyan shrink-0" />
      <span className="text-sm font-heading font-semibold">{message}</span>
    </div>
  );
}

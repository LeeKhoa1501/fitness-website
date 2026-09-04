import React from 'react';
import WorkoutPlansExplorer from '../components/WorkoutPlansExplorer';

export default function PlansView({ onOpenFreePass, onShowToast }) {
  return (
    <div className="w-full pt-28 pb-24 bg-gradient-to-b from-[#0B0B0F] via-[#101118] to-[#07070A] min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <WorkoutPlansExplorer onOpenFreePass={onOpenFreePass} onShowToast={onShowToast} />
      </div>
    </div>
  );
}

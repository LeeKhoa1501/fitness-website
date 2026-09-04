import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import ScheduleView from './views/ScheduleView';
import ReelsView from './views/ReelsView';
import PlansView from './views/PlansView';
import FacilitiesView from './views/FacilitiesView';
import ClubsView from './views/ClubsView';
import PricingView from './views/PricingView';
import TrainersView from './views/TrainersView';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VideoModal from './components/VideoModal';
import Toast from './components/Toast';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState('');
  const [selectedReel, setSelectedReel] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
  };

  const handleSelectCoach = (coachName) => {
    setSelectedCoach(coachName);
    setModalOpen(true);
  };

  const handleSelectReel = (reel) => {
    setSelectedReel(reel);
    setVideoModalOpen(true);
  };

  const handleOpenFreePass = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('free-pass');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('free-pass');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'services':
        return (
          <ServicesView
            onOpenFreePass={handleOpenFreePass}
          />
        );
      case 'schedule':
        return (
          <ScheduleView
            onOpenFreePass={handleOpenFreePass}
            onShowToast={showToast}
          />
        );
      case 'reels':
        return (
          <ReelsView
            onSelectReel={handleSelectReel}
            onOpenFreePass={handleOpenFreePass}
          />
        );
      case 'plans':
        return (
          <PlansView
            onOpenFreePass={handleOpenFreePass}
            onShowToast={showToast}
          />
        );
      case 'facilities':
        return (
          <FacilitiesView
            onOpenFreePass={handleOpenFreePass}
          />
        );
      case 'clubs':
        return (
          <ClubsView
            onOpenFreePass={handleOpenFreePass}
          />
        );
      case 'pricing':
        return (
          <PricingView
            onOpenFreePass={handleOpenFreePass}
          />
        );
      case 'trainers':
        return (
          <TrainersView
            onSelectCoach={handleSelectCoach}
            onOpenFreePass={handleOpenFreePass}
          />
        );
      case 'home':
      default:
        return (
          <HomeView
            onOpenFreePass={handleOpenFreePass}
            onSelectCoach={handleSelectCoach}
            onSelectReel={handleSelectReel}
            onShowToast={showToast}
            onNavigate={(viewId) => setCurrentView(viewId)}
          />
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-cool-gray-300 w-full overflow-x-hidden">
        {/* Sticky Full-width Navbar with Multi-View Controller */}
        <Navbar
          currentView={currentView}
          onNavigate={(viewId) => setCurrentView(viewId)}
          onOpenFreePass={handleOpenFreePass}
        />

        {/* Dynamic Dedicated View Container */}
        <main className="flex-grow w-full">
          {renderActiveView()}
        </main>

        {/* Full-width Corporate Footer */}
        <Footer />

        {/* Trainer Booking Modal */}
        <BookingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          coachName={selectedCoach}
          onShowToast={showToast}
        />

        {/* Cinematic Video Reel Player Modal */}
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          reel={selectedReel}
        />

        {/* Toast Notification */}
        <Toast
          message={toastMessage}
          isVisible={toastVisible}
          onClose={() => setToastVisible(false)}
        />
      </div>
    </ThemeProvider>
  );
}

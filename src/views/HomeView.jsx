import React from 'react';
import Hero from '../components/Hero';
import TrainingRoadmap from '../components/TrainingRoadmap';
import FacilitiesShowcase from '../components/FacilitiesShowcase';
import CompetitorComparison from '../components/CompetitorComparison';
import TrainersGrid from '../components/TrainersGrid';
import BeforeAfterShowcase from '../components/BeforeAfterShowcase';
import ServicesGrid from '../components/ServicesGrid';
import ClassSchedule from '../components/ClassSchedule';
import WorkoutReels from '../components/WorkoutReels';
import WorkoutPlansExplorer from '../components/WorkoutPlansExplorer';
import BmiCalculator from '../components/BmiCalculator';
import ClubLocations from '../components/ClubLocations';
import PricingSection from '../components/PricingSection';
import ReviewsSection from '../components/ReviewsSection';
import BrandTrust from '../components/BrandTrust';
import FreePassForm from '../components/FreePassForm';
import FaqSection from '../components/FaqSection';

export default function HomeView({ 
  onOpenFreePass, 
  onSelectCoach, 
  onSelectReel, 
  onShowToast,
  onNavigate 
}) {
  return (
    <div className="w-full bg-[var(--bg-main)] animate-fadeIn">
      {/* 1. Hero Banner: Determined Athlete Sweating During Heavy Weightlifting */}
      <Hero
        onOpenFreePass={onOpenFreePass}
        onSelectReel={onSelectReel}
      />

      {/* 2. Personalized Training Roadmap Section (4-Step Scientific Framework) */}
      <TrainingRoadmap onOpenFreePass={onOpenFreePass} />

      {/* 3. Clean Gym Facility Grid (Free-weights, Cardio, Technogym AI, Recovery) */}
      <FacilitiesShowcase onOpenFreePass={onOpenFreePass} />

      {/* 4. Structured Competitor Comparison Matrix Table */}
      <CompetitorComparison onOpenFreePass={onOpenFreePass} />

      {/* 5. Horizontal Scrolling Personal Trainer Profile Cards */}
      <TrainersGrid onSelectCoach={onSelectCoach} />

      {/* 6. Before-and-After Social Proof with Body Composition Metrics */}
      <BeforeAfterShowcase onOpenFreePass={onOpenFreePass} />

      {/* 7. 8-in-1 Signature Services & 7-Day Class Schedule */}
      <ServicesGrid onOpenFreePass={onOpenFreePass} />
      <ClassSchedule
        onOpenFreePass={onOpenFreePass}
        onShowToast={onShowToast}
      />

      {/* 8. Cinematic Workout Video Reels Hub & Workout Plans */}
      <WorkoutReels
        onSelectReel={onSelectReel}
        onOpenFreePass={onOpenFreePass}
      />
      <WorkoutPlansExplorer
        onOpenFreePass={onOpenFreePass}
        onShowToast={onShowToast}
      />

      {/* 9. AI Body Telemetry & BMI Calculator */}
      <BmiCalculator
        onOpenFreePass={onOpenFreePass}
        onShowToast={onShowToast}
      />

      {/* 10. Multi-City Club Locator with Interactive Google Maps */}
      <ClubLocations onOpenFreePass={onOpenFreePass} />

      {/* 11. Clear Membership Pricing Table with Monthly/Yearly Toggle */}
      <PricingSection onOpenFreePass={onOpenFreePass} />

      {/* 12. Enterprise Brand Trust & Testimonials */}
      <ReviewsSection />
      <BrandTrust />

      {/* 13. Minimalist Lead Generation 7-Day Free Pass Form */}
      <FreePassForm onShowToast={onShowToast} />

      {/* 14. Frequently Asked Questions */}
      <FaqSection />
    </div>
  );
}

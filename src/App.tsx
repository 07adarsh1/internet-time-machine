import React from 'react';
import { TimeMachineProvider, useTimeMachine } from './context/TimeMachineContext';
import { LandingPage } from './components/landing/LandingPage';
import { MorphingNavbar } from './components/chrome/MorphingNavbar';
import { CRTOverlay } from './components/chrome/CRTOverlay';
import { CursorTrail } from './components/chrome/CursorTrail';
import { TimeScrubber } from './components/timeline/TimeScrubber';
import { GraveyardModal } from './components/graveyard/GraveyardModal';
import { SurpriseModal } from './components/surprise/SurpriseModal';

// Era Views
import { Era1995 } from './components/eras/Era1995';
import { Era2000 } from './components/eras/Era2000';
import { Era2005 } from './components/eras/Era2005';
import { Era2010 } from './components/eras/Era2010';
import { Era2015 } from './components/eras/Era2015';
import { Era2020 } from './components/eras/Era2020';
import { Era2026 } from './components/eras/Era2026';

const MainPortal: React.FC = () => {
  const { viewMode, currentEra } = useTimeMachine();

  // If on landing page, display the 3D Morphing Hardware Rig experience
  if (viewMode === 'landing') {
    return (
      <>
        <LandingPage />
        <GraveyardModal />
        <SurpriseModal />
      </>
    );
  }

  // Otherwise, render the active era playground
  const renderActiveEra = () => {
    switch (currentEra) {
      case 1995:
        return <Era1995 />;
      case 2000:
        return <Era2000 />;
      case 2005:
        return <Era2005 />;
      case 2010:
        return <Era2010 />;
      case 2015:
        return <Era2015 />;
      case 2020:
        return <Era2020 />;
      case 2026:
        return <Era2026 />;
      default:
        return <Era1995 />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-purple-500 selection:text-white transition-all duration-300">
      <MorphingNavbar />
      <main className="flex-1">
        {renderActiveEra()}
      </main>
      <footer className="sticky bottom-0 z-30 shadow-2xl">
        <TimeScrubber />
      </footer>
      <CRTOverlay />
      <CursorTrail />
      <GraveyardModal />
      <SurpriseModal />
    </div>
  );
};

export default function App() {
  return (
    <TimeMachineProvider>
      <MainPortal />
    </TimeMachineProvider>
  );
}
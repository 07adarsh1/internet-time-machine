import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { EraYear } from '../types/timeMachine';
import { ERAS_ORDER } from '../data/erasData';
import { sound } from '../utils/audioSynth';

export type ViewMode = 'landing' | 'timeline';

interface TimeMachineContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  currentEra: EraYear;
  setEra: (year: EraYear) => void;
  continuousIndex: number;
  setContinuousIndex: (idx: number) => void;
  nextEra: () => void;
  prevEra: () => void;
  bootEra: (year?: EraYear) => void;
  returnToLanding: () => void;
  isDialUpMode: boolean;
  toggleDialUpMode: () => void;
  isCRTMode: boolean;
  toggleCRTMode: () => void;
  isMuted: boolean;
  toggleMute: () => void;
  isAutoPlaying: boolean;
  toggleAutoPlay: () => void;
  isTransitioning: boolean;
  isBooting: boolean;
  openGraveyard: boolean;
  setOpenGraveyard: (open: boolean) => void;
  openSurprise: boolean;
  setOpenSurprise: (open: boolean) => void;
}

const TimeMachineContext = createContext<TimeMachineContextType | undefined>(undefined);

export const TimeMachineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [currentEra, setCurrentEraState] = useState<EraYear>(1995);
  const [continuousIndex, setContinuousIndexState] = useState<number>(0.0);
  const [isDialUpMode, setIsDialUpMode] = useState<boolean>(false);
  const [isCRTMode, setIsCRTMode] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isBooting, setIsBooting] = useState<boolean>(false);
  const [openGraveyard, setOpenGraveyard] = useState<boolean>(false);
  const [openSurprise, setOpenSurprise] = useState<boolean>(false);

  // Set continuous scrub index (0.0 to 6.0)
  const setContinuousIndex = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(ERAS_ORDER.length - 1, idx));
    setContinuousIndexState(clamped);
    const nearestEraIdx = Math.round(clamped);
    const nearestYear = ERAS_ORDER[nearestEraIdx];
    if (nearestYear !== currentEra) {
      setCurrentEraState(nearestYear);
      sound.playDialTick(400 + nearestEraIdx * 90);
    }
  }, [currentEra]);

  const setEra = useCallback((year: EraYear) => {
    if (year === currentEra) return;
    const targetIdx = ERAS_ORDER.indexOf(year);
    if (targetIdx !== -1) {
      setContinuousIndexState(targetIdx);
    }
    setIsTransitioning(true);

    if (year === 1995) sound.playRetroClick();
    else if (year === 2000) sound.playDialUp();
    else if (year === 2005) sound.playMsnNudge();
    else if (year === 2010) sound.playCameraClick();
    else if (year === 2015) sound.playMaterialPop();
    else if (year === 2020 || year === 2026) sound.playSpatialGlow();

    setTimeout(() => {
      setCurrentEraState(year);
      setTimeout(() => setIsTransitioning(false), 300);
    }, isDialUpMode ? 1200 : 250);
  }, [currentEra, isDialUpMode]);

  // Boot sequence: camera dive into screen
  const bootEra = useCallback((year?: EraYear) => {
    const target = year || currentEra;
    sound.playPowerOnDegauss();
    setIsBooting(true);

    setTimeout(() => {
      setEra(target);
      setViewMode('timeline');
      setIsBooting(false);
    }, 1100);
  }, [currentEra, setEra]);

  const returnToLanding = useCallback(() => {
    sound.playRetroClick();
    setViewMode('landing');
  }, []);

  const nextEra = useCallback(() => {
    const idx = ERAS_ORDER.indexOf(currentEra);
    if (idx < ERAS_ORDER.length - 1) {
      setEra(ERAS_ORDER[idx + 1]);
    }
  }, [currentEra, setEra]);

  const prevEra = useCallback(() => {
    const idx = ERAS_ORDER.indexOf(currentEra);
    if (idx > 0) {
      setEra(ERAS_ORDER[idx - 1]);
    }
  }, [currentEra, setEra]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') nextEra();
      if (e.key === 'ArrowLeft') prevEra();
      if (e.key === 'Enter' && viewMode === 'landing') bootEra();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextEra, prevEra, viewMode, bootEra]);

  // Auto evolution loop
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      const idx = ERAS_ORDER.indexOf(currentEra);
      const nextIndex = (idx + 1) % ERAS_ORDER.length;
      setEra(ERAS_ORDER[nextIndex]);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentEra, setEra]);

  const toggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  return (
    <TimeMachineContext.Provider
      value={{
        viewMode,
        setViewMode,
        currentEra,
        setEra,
        continuousIndex,
        setContinuousIndex,
        nextEra,
        prevEra,
        bootEra,
        returnToLanding,
        isDialUpMode,
        toggleDialUpMode: () => setIsDialUpMode((prev) => !prev),
        isCRTMode,
        toggleCRTMode: () => setIsCRTMode((prev) => !prev),
        isMuted,
        toggleMute,
        isAutoPlaying,
        toggleAutoPlay: () => setIsAutoPlaying((prev) => !prev),
        isTransitioning,
        isBooting,
        openGraveyard,
        setOpenGraveyard,
        openSurprise,
        setOpenSurprise,
      }}
    >
      {children}
    </TimeMachineContext.Provider>
  );
};

export const useTimeMachine = () => {
  const context = useContext(TimeMachineContext);
  if (!context) throw new Error('useTimeMachine must be used within TimeMachineProvider');
  return context;
};
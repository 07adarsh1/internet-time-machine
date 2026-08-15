import React from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { ERAS_DATA } from '../../data/erasData';
import { Volume2, VolumeX, Tv, Wifi, Sparkles, Skull, Play, Pause, Monitor } from 'lucide-react';

export const MorphingNavbar: React.FC = () => {
  const {
    currentEra,
    returnToLanding,
    isMuted,
    toggleMute,
    isCRTMode,
    toggleCRTMode,
    isDialUpMode,
    toggleDialUpMode,
    isAutoPlaying,
    toggleAutoPlay,
    setOpenGraveyard,
    setOpenSurprise,
  } = useTimeMachine();

  const eraInfo = ERAS_DATA[currentEra];

  const getNavStyles = () => {
    switch (currentEra) {
      case 1995:
        return 'bg-[#c0c0c0] text-black border-b-4 border-r-4 border-white border-t-4 border-l-4 border-gray-800 font-raw shadow-none';
      case 2000:
        return 'bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-yellow-300 border-b-4 border-pink-500 font-early2000 shadow-[0_0_15px_rgba(255,0,128,0.5)]';
      case 2005:
        return 'bg-gradient-to-b from-[#e3f2fd] to-[#90caf9] text-[#0d47a1] border-b border-[#1565c0] font-web2 shadow-md';
      case 2010:
        return 'bg-gradient-to-b from-[#4c669f] via-[#3b5998] to-[#192f6a] text-white border-b border-[#112244] font-skeuo shadow-[0_4px_10px_rgba(0,0,0,0.3)]';
      case 2015:
        return 'bg-[#009688] text-white border-none font-flat shadow-[0_2px_5px_rgba(0,0,0,0.2)]';
      case 2020:
        return 'bg-[#0d1117]/90 text-gray-100 border-b border-gray-800 backdrop-blur-md font-bento shadow-lg';
      case 2026:
        return 'bg-black/40 text-white border-b border-white/10 backdrop-blur-2xl font-future shadow-[0_8px_32px_rgba(139,92,246,0.15)]';
    }
  };

  const getButtonClass = () => {
    switch (currentEra) {
      case 1995:
        return 'bg-[#c0c0c0] px-2 py-1 text-xs border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 active:border-t-gray-800 active:border-l-gray-800 text-black font-pixel';
      case 2000:
        return 'bg-black text-cyan-300 px-3 py-1 text-xs border border-pink-500 hover:bg-pink-600 hover:text-white transition';
      case 2005:
        return 'bg-gradient-to-b from-white to-[#cfd8dc] text-[#1565c0] border border-[#90a4ae] px-3 py-1 text-xs rounded shadow hover:brightness-105 active:scale-95';
      case 2010:
        return 'bg-gradient-to-b from-[#3a5795] to-[#2b4170] text-white px-3 py-1.5 text-xs rounded-md border border-[#1d2f53] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] font-bold';
      case 2015:
        return 'bg-white text-[#009688] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm shadow hover:shadow-md transition';
      case 2020:
        return 'bg-[#21262d] hover:bg-[#30363d] text-gray-200 px-3 py-1.5 text-xs rounded-lg border border-gray-700 transition flex items-center gap-1.5';
      case 2026:
        return 'bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 text-xs rounded-full border border-white/20 backdrop-blur-lg transition-all duration-300 flex items-center gap-1.5';
    }
  };

  return (
    <header className={`sticky top-0 z-40 px-4 py-3 transition-colors duration-500 ${getNavStyles()}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Brand & Return to 3D Rig Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={returnToLanding}
            className={`${getButtonClass()} flex items-center gap-1.5 font-bold`}
            title="Return to 3D Hardware Rig Studio"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>3D Rig Studio</span>
          </button>

          <div>
            <h1 className="text-xs md:text-sm font-black tracking-tight leading-none">
              YEAR {currentEra} — {eraInfo.title}
            </h1>
            <p className="text-[10px] opacity-80 leading-tight">
              Hardware: {eraInfo.hardware.deviceName}
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2">
          <button onClick={() => setOpenGraveyard(true)} className={getButtonClass()}>
            <Skull className="w-3.5 h-3.5 inline mr-1" />
            <span className="hidden sm:inline">Graveyard</span>
          </button>

          <button onClick={() => setOpenSurprise(true)} className={getButtonClass()}>
            <Sparkles className="w-3.5 h-3.5 inline mr-1" />
            <span className="hidden sm:inline">Surprise Me</span>
          </button>

          <button onClick={toggleDialUpMode} className={`${getButtonClass()} ${isDialUpMode ? 'ring-2 ring-amber-400 font-bold' : 'opacity-70'}`}>
            <Wifi className="w-3.5 h-3.5 inline mr-1" />
            <span className="hidden md:inline">56k Dial-Up</span>
          </button>

          <button onClick={toggleCRTMode} className={`${getButtonClass()} ${isCRTMode ? 'ring-2 ring-emerald-400 font-bold' : 'opacity-70'}`}>
            <Tv className="w-3.5 h-3.5 inline mr-1" />
            <span className="hidden md:inline">CRT Mode</span>
          </button>

          <button onClick={toggleAutoPlay} className={`${getButtonClass()} ${isAutoPlaying ? 'bg-amber-600 text-white' : ''}`}>
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 inline mr-1" /> : <Play className="w-3.5 h-3.5 inline mr-1" />}
            <span className="hidden sm:inline">{isAutoPlaying ? 'Pause' : 'Auto Evolve'}</span>
          </button>

          <button onClick={toggleMute} className={getButtonClass()}>
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
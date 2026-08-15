import React, { useState } from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { ERAS_DATA } from '../../data/erasData';
import { Volume2, VolumeX, Tv, Wifi, Sparkles, Skull, Play, Pause, Monitor, Code2, Disc, Radio, Menu, X } from 'lucide-react';

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
    setOpenDevTools,
    setOpenTimeCapsule,
    setOpenAudioVault,
  } = useTimeMachine();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const eraInfo = ERAS_DATA[currentEra];

  const getNavStyles = () => {
    switch (currentEra) {
      case 1995:
        return 'bg-[#c0c0c0] text-black border-b-4 border-r-4 border-white border-t-4 border-l-4 border-gray-800 font-raw';
      case 2000:
        return 'bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-yellow-300 border-b-4 border-pink-500 font-early2000';
      case 2005:
        return 'bg-gradient-to-b from-[#e3f2fd] to-[#90caf9] text-[#0d47a1] border-b border-[#1565c0] font-web2';
      case 2010:
        return 'bg-gradient-to-b from-[#4c669f] via-[#3b5998] to-[#192f6a] text-white border-b border-[#112244] font-skeuo';
      case 2015:
        return 'bg-[#009688] text-white border-none font-flat';
      case 2020:
        return 'bg-[#0d1117]/90 text-gray-100 border-b border-gray-800 backdrop-blur-md font-bento';
      case 2026:
        return 'bg-black/50 text-white border-b border-white/10 backdrop-blur-2xl font-future';
    }
  };

  const getButtonClass = () => {
    switch (currentEra) {
      case 1995:
        return 'bg-[#c0c0c0] px-2 py-1 text-xs border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 active:border-t-gray-800 active:border-l-gray-800 text-black font-pixel';
      case 2000:
        return 'bg-black text-cyan-300 px-2.5 py-1 text-xs border border-pink-500 hover:bg-pink-600 hover:text-white transition';
      case 2005:
        return 'bg-gradient-to-b from-white to-[#cfd8dc] text-[#1565c0] border border-[#90a4ae] px-2.5 py-1 text-xs rounded shadow';
      case 2010:
        return 'bg-gradient-to-b from-[#3a5795] to-[#2b4170] text-white px-2.5 py-1 text-xs rounded-md border border-[#1d2f53] font-bold';
      case 2015:
        return 'bg-white text-[#009688] px-2.5 py-1 text-xs font-semibold uppercase rounded-sm shadow';
      case 2020:
        return 'bg-[#21262d] hover:bg-[#30363d] text-gray-200 px-2.5 py-1 text-xs rounded-lg border border-gray-700 transition';
      case 2026:
        return 'bg-white/10 hover:bg-white/20 text-white px-3 py-1 text-xs rounded-full border border-white/20 backdrop-blur-lg transition';
    }
  };

  return (
    <header className={`sticky top-0 z-40 px-3 sm:px-4 py-2.5 transition-colors duration-500 ${getNavStyles()}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Brand & Studio Return */}
        <div className="flex items-center gap-2">
          <button
            onClick={returnToLanding}
            className={`${getButtonClass()} flex items-center gap-1 font-bold whitespace-nowrap`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="text-[11px] sm:text-xs">3D Studio</span>
          </button>

          <div className="hidden sm:block">
            <h1 className="text-xs font-black tracking-tight leading-none truncate max-w-[160px] md:max-w-none">
              YEAR {currentEra} — {eraInfo.title}
            </h1>
          </div>
        </div>

        {/* Desktop Controls (Hidden on mobile < 1024px) */}
        <div className="hidden lg:flex items-center gap-1.5">
          <button onClick={() => setOpenDevTools(true)} className={getButtonClass()}>
            <Code2 className="w-3.5 h-3.5 inline mr-1 text-blue-400" />
            <span>View Source</span>
          </button>

          <button onClick={() => setOpenTimeCapsule(true)} className={getButtonClass()}>
            <Disc className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
            <span>ID Capsule</span>
          </button>

          <button onClick={() => setOpenAudioVault(true)} className={getButtonClass()}>
            <Radio className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
            <span>Audio Vault</span>
          </button>

          <button onClick={() => setOpenGraveyard(true)} className={getButtonClass()}>
            <Skull className="w-3.5 h-3.5 inline mr-1" />
            <span>Graveyard</span>
          </button>

          <button onClick={() => setOpenSurprise(true)} className={getButtonClass()}>
            <Sparkles className="w-3.5 h-3.5 inline mr-1" />
            <span>Surprise</span>
          </button>

          <button onClick={toggleDialUpMode} className={`${getButtonClass()} ${isDialUpMode ? 'ring-2 ring-amber-400 font-bold' : 'opacity-70'}`}>
            <Wifi className="w-3.5 h-3.5 inline mr-1" />
            <span>56k</span>
          </button>

          <button onClick={toggleCRTMode} className={`${getButtonClass()} ${isCRTMode ? 'ring-2 ring-emerald-400 font-bold' : 'opacity-70'}`}>
            <Tv className="w-3.5 h-3.5 inline mr-1" />
            <span>CRT</span>
          </button>

          <button onClick={toggleAutoPlay} className={`${getButtonClass()} ${isAutoPlaying ? 'bg-amber-600 text-white' : ''}`}>
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 inline mr-1" /> : <Play className="w-3.5 h-3.5 inline mr-1" />}
            <span>{isAutoPlaying ? 'Pause' : 'Auto'}</span>
          </button>

          <button onClick={toggleMute} className={getButtonClass()}>
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Mobile Action Bar */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button onClick={toggleMute} className={getButtonClass()} title="Toggle Sound">
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${getButtonClass()} flex items-center gap-1 font-bold`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="text-[11px]">Menu</span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 pt-2 border-t border-black/20 grid grid-cols-2 gap-1.5 animate-fadeIn text-xs">
          <button
            onClick={() => { setOpenDevTools(true); setMobileMenuOpen(false); }}
            className={`${getButtonClass()} text-left py-2 flex items-center gap-1.5`}
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>View Source</span>
          </button>

          <button
            onClick={() => { setOpenTimeCapsule(true); setMobileMenuOpen(false); }}
            className={`${getButtonClass()} text-left py-2 flex items-center gap-1.5`}
          >
            <Disc className="w-3.5 h-3.5 text-amber-400" />
            <span>ID Capsule</span>
          </button>

          <button
            onClick={() => { setOpenAudioVault(true); setMobileMenuOpen(false); }}
            className={`${getButtonClass()} text-left py-2 flex items-center gap-1.5`}
          >
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            <span>Audio Vault</span>
          </button>

          <button
            onClick={() => { setOpenGraveyard(true); setMobileMenuOpen(false); }}
            className={`${getButtonClass()} text-left py-2 flex items-center gap-1.5`}
          >
            <Skull className="w-3.5 h-3.5 text-purple-400" />
            <span>Graveyard</span>
          </button>

          <button
            onClick={() => { setOpenSurprise(true); setMobileMenuOpen(false); }}
            className={`${getButtonClass()} text-left py-2 flex items-center gap-1.5`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Surprise Me</span>
          </button>

          <button
            onClick={() => { toggleCRTMode(); setMobileMenuOpen(false); }}
            className={`${getButtonClass()} text-left py-2 flex items-center gap-1.5 ${isCRTMode ? 'ring-2 ring-emerald-400' : ''}`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>CRT: {isCRTMode ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => { toggleDialUpMode(); setMobileMenuOpen(false); }}
            className={`${getButtonClass()} text-left py-2 flex items-center gap-1.5 ${isDialUpMode ? 'ring-2 ring-amber-400' : ''}`}
          >
            <Wifi className="w-3.5 h-3.5" />
            <span>56k Mode</span>
          </button>

          <button
            onClick={() => { toggleAutoPlay(); setMobileMenuOpen(false); }}
            className={`${getButtonClass()} text-left py-2 flex items-center gap-1.5 ${isAutoPlaying ? 'bg-amber-600 text-white' : ''}`}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>Auto Evolve</span>
          </button>
        </div>
      )}
    </header>
  );
};
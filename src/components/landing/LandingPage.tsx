import React, { useState } from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { ERAS_ORDER, ERAS_DATA } from '../../data/erasData';
import { HardwareRigCanvas } from './HardwareRigCanvas';
import { Power, Skull, Sparkles, Volume2, VolumeX, ArrowRight, Disc, HardDrive, Cpu, Code2, Radio, Menu, X } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const {
    currentEra,
    continuousIndex,
    setContinuousIndex,
    bootEra,
    setOpenGraveyard,
    setOpenSurprise,
    setOpenDevTools,
    setOpenTimeCapsule,
    setOpenAudioVault,
    isMuted,
    toggleMute,
    isBooting,
  } = useTimeMachine();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeData = ERAS_DATA[currentEra];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContinuousIndex(parseFloat(e.target.value));
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#e4e4e7] flex flex-col justify-between selection:bg-amber-500 selection:text-black font-bento overflow-x-hidden">
      
      {/* 1. Archival Editorial Header */}
      <header className="px-4 sm:px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <div className="text-[9px] sm:text-[11px] font-mono tracking-widest text-amber-400 uppercase">
            ARCHIVAL HARDWARE RIG • 1995 — 2026
          </div>
          <h1 className="text-lg sm:text-2xl font-black tracking-tight text-white font-raw">
            The Internet Time Machine
          </h1>
        </div>

        {/* Desktop Feature Launchers */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setOpenDevTools(true)}
            className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>View Source</span>
          </button>

          <button
            onClick={() => setOpenTimeCapsule(true)}
            className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5"
          >
            <Disc className="w-3.5 h-3.5 text-amber-400" />
            <span>ID Capsule</span>
          </button>

          <button
            onClick={() => setOpenAudioVault(true)}
            className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5"
          >
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            <span>Audio Vault</span>
          </button>

          <button
            onClick={() => setOpenGraveyard(true)}
            className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5"
          >
            <Skull className="w-3.5 h-3.5 text-purple-400" />
            <span>Graveyard</span>
          </button>

          <button
            onClick={() => setOpenSurprise(true)}
            className="px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Surprise</span>
          </button>

          <button
            onClick={toggleMute}
            className="p-2 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            onClick={toggleMute}
            className="p-2 rounded-lg text-xs bg-white/5 border border-white/10"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 flex items-center gap-1"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>Tools</span>
          </button>
        </div>
      </header>

      {/* Mobile Tools Dropdown on Landing */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#16161a] border-b border-white/10 p-3 grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={() => { setOpenDevTools(true); setMobileMenuOpen(false); }}
            className="p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>View Source</span>
          </button>

          <button
            onClick={() => { setOpenTimeCapsule(true); setMobileMenuOpen(false); }}
            className="p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5"
          >
            <Disc className="w-3.5 h-3.5 text-amber-400" />
            <span>ID Capsule</span>
          </button>

          <button
            onClick={() => { setOpenAudioVault(true); setMobileMenuOpen(false); }}
            className="p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5"
          >
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            <span>Audio Vault</span>
          </button>

          <button
            onClick={() => { setOpenGraveyard(true); setMobileMenuOpen(false); }}
            className="p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5"
          >
            <Skull className="w-3.5 h-3.5 text-purple-400" />
            <span>Graveyard</span>
          </button>

          <button
            onClick={() => { setOpenSurprise(true); setMobileMenuOpen(false); }}
            className="col-span-2 p-2 bg-white/5 rounded-lg text-left flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Surprise Me Roulette</span>
          </button>
        </div>
      )}

      {/* 2. Main 3D Canvas + Telemetry */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-3 sm:px-4 py-2">
        <HardwareRigCanvas />

        {/* Boot Trigger Button */}
        <div className="mt-[-10px] sm:mt-[-20px] z-10 text-center">
          <button
            onClick={() => bootEra()}
            disabled={isBooting}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-2xl active:scale-95 ${
              isBooting
                ? 'bg-amber-400 text-black animate-pulse'
                : 'bg-white text-black hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]'
            }`}
          >
            <Power className="w-4 h-4" />
            <span>{isBooting ? `Booting Year ${currentEra}...` : `Turn On Year ${currentEra}`}</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>

        {/* Hardware Specs Grid (Responsive columns) */}
        <div className="max-w-4xl w-full grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mt-4 text-[11px] sm:text-xs font-mono">
          <div className="p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-gray-500 block text-[9px] sm:text-[10px]">CHASSIS & ARCHITECTURE</span>
            <strong className="text-gray-200 block truncate">{activeData.hardware.deviceName}</strong>
            <span className="text-gray-400 text-[10px] sm:text-[11px] block truncate">{activeData.hardware.chassisMaterial}</span>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-gray-500 block text-[9px] sm:text-[10px]">DISPLAY MATRIX</span>
            <strong className="text-gray-200 block truncate">{activeData.hardware.displayType}</strong>
            <span className="text-gray-400 text-[10px] sm:text-[11px] block truncate">{activeData.hardware.resolution}</span>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-gray-500 block text-[9px] sm:text-[10px]">PARADIGM & TECH</span>
            <strong className="text-gray-200 block truncate">{activeData.paradigm}</strong>
            <span className="text-gray-400 text-[10px] sm:text-[11px] block truncate">{activeData.keyTech.slice(0, 2).join(', ')}</span>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-gray-500 block text-[9px] sm:text-[10px]">PHYSICAL MEDIA PROP</span>
            <strong className="text-amber-300 block truncate flex items-center gap-1">
              <Disc className="w-3 h-3 shrink-0" />
              <span className="truncate">{activeData.hardware.secondaryPropName}</span>
            </strong>
            <span className="text-gray-400 text-[10px] sm:text-[11px] block truncate">{activeData.hardware.secondaryPropDesc}</span>
          </div>
        </div>
      </main>

      {/* 3. Continuous Timeline Scrubber */}
      <footer className="bg-[#111114] border-t border-white/10 px-4 sm:px-6 py-4 z-20">
        <div className="max-w-5xl mx-auto space-y-2.5">
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1 truncate">
              <Cpu className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <strong className="hidden sm:inline">SCRUB TIMELINE:</strong>
              <span className="sm:hidden font-bold">SCRUB:</span>
              <span className="truncate hidden sm:inline">Transform hardware & web</span>
            </span>
            <span className="text-amber-400 font-bold shrink-0">
              Year {currentEra}
            </span>
          </div>

          <div className="relative py-1">
            <input
              type="range"
              min="0"
              max={ERAS_ORDER.length - 1}
              step="0.01"
              value={continuousIndex}
              onChange={handleSliderChange}
              className="w-full h-3 sm:h-2 bg-gray-800 rounded-lg appearance-none cursor-ew-resize accent-amber-400 focus:outline-none touch-pan-x"
            />
          </div>

          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono overflow-x-auto pb-1 scrollbar-none">
            {ERAS_ORDER.map((year, idx) => {
              const isActive = Math.round(continuousIndex) === idx;
              return (
                <button
                  key={year}
                  onClick={() => setContinuousIndex(idx)}
                  className={`px-1.5 py-1 rounded transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 font-bold scale-110 underline bg-white/5'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>
      </footer>

    </div>
  );
};
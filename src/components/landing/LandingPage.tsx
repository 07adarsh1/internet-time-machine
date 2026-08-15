import React from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { ERAS_ORDER, ERAS_DATA } from '../../data/erasData';
import { HardwareRigCanvas } from './HardwareRigCanvas';
import { Power, Skull, Sparkles, Volume2, VolumeX, ArrowRight, Disc, HardDrive, Cpu } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const {
    currentEra,
    continuousIndex,
    setContinuousIndex,
    bootEra,
    setOpenGraveyard,
    setOpenSurprise,
    isMuted,
    toggleMute,
    isBooting,
  } = useTimeMachine();

  const activeData = ERAS_DATA[currentEra];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContinuousIndex(parseFloat(e.target.value));
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#e4e4e7] flex flex-col justify-between selection:bg-amber-500 selection:text-black font-bento">
      
      {/* 1. Archival Editorial Header */}
      <header className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-amber-400 uppercase">
            ARCHIVAL HARDWARE RIG • 1995 — 2026
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-white font-raw">
            The Internet Time Machine
          </h1>
        </div>

        {/* Supporting Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpenGraveyard(true)}
            className="px-3.5 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5"
          >
            <Skull className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">Graveyard</span>
          </button>

          <button
            onClick={() => setOpenSurprise(true)}
            className="px-3.5 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Surprise Me</span>
          </button>

          <button
            onClick={toggleMute}
            className="p-2 rounded-lg text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </header>

      {/* 2. Main 3D Hardware Canvas + Editorial Telemetry */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-4">
        
        {/* 3D Hardware Viewport */}
        <HardwareRigCanvas />

        {/* Boot Overlay Trigger Button */}
        <div className="mt-[-20px] z-10 text-center space-y-3">
          <button
            onClick={() => bootEra()}
            disabled={isBooting}
            className={`px-8 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-2xl active:scale-95 ${
              isBooting
                ? 'bg-amber-400 text-black animate-pulse'
                : 'bg-white text-black hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]'
            }`}
          >
            <Power className="w-4 h-4" />
            <span>{isBooting ? `Booting Year ${currentEra}...` : `Turn On Year ${currentEra}`}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Hardware Specs Floating Telemetry */}
        <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-xs font-mono">
          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-gray-500 block text-[10px]">CHASSIS & ARCHITECTURE</span>
            <strong className="text-gray-200 block truncate">{activeData.hardware.deviceName}</strong>
            <span className="text-gray-400 text-[11px] block truncate">{activeData.hardware.chassisMaterial}</span>
          </div>

          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-gray-500 block text-[10px]">DISPLAY MATRIX</span>
            <strong className="text-gray-200 block truncate">{activeData.hardware.displayType}</strong>
            <span className="text-gray-400 text-[11px] block truncate">{activeData.hardware.resolution}</span>
          </div>

          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-gray-500 block text-[10px]">PARADIGM & TECH</span>
            <strong className="text-gray-200 block truncate">{activeData.paradigm}</strong>
            <span className="text-gray-400 text-[11px] block truncate">{activeData.keyTech.slice(0, 2).join(', ')}</span>
          </div>

          <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
            <span className="text-gray-500 block text-[10px]">PHYSICAL MEDIA PROP</span>
            <strong className="text-amber-300 block truncate flex items-center gap-1">
              <Disc className="w-3 h-3" />
              {activeData.hardware.secondaryPropName}
            </strong>
            <span className="text-gray-400 text-[11px] block truncate">{activeData.hardware.secondaryPropDesc}</span>
          </div>
        </div>
      </main>

      {/* 3. The Continuous Hardware Timeline Scrubber */}
      <footer className="bg-[#111114] border-t border-white/10 px-6 py-5 z-20">
        <div className="max-w-5xl mx-auto space-y-3">
          
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <strong>SCRUB TIMELINE:</strong> Watch both the physical hardware & internet experience morph
            </span>
            <span className="text-amber-400 font-bold">
              Year {currentEra} ({activeData.hardware.resolution})
            </span>
          </div>

          {/* Continuous Range Slider */}
          <div className="relative py-1">
            <input
              type="range"
              min="0"
              max={ERAS_ORDER.length - 1}
              step="0.01"
              value={continuousIndex}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-ew-resize accent-amber-400 focus:outline-none"
            />
          </div>

          {/* Era Step Labels */}
          <div className="flex justify-between items-center text-xs font-mono">
            {ERAS_ORDER.map((year, idx) => {
              const isActive = Math.round(continuousIndex) === idx;
              return (
                <button
                  key={year}
                  onClick={() => setContinuousIndex(idx)}
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 font-bold scale-110 underline'
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
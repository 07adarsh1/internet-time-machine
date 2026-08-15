import React from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { ERAS_ORDER, ERAS_DATA } from '../../data/erasData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TimeScrubber: React.FC = () => {
  const { currentEra, setEra, prevEra, nextEra } = useTimeMachine();

  const getScrubberStyles = () => {
    switch (currentEra) {
      case 1995:
        return 'bg-[#c0c0c0] border-t-2 border-b-2 border-t-white border-b-gray-800 text-black font-raw';
      case 2000:
        return 'bg-black text-yellow-300 border-t-2 border-b-2 border-pink-500 font-early2000';
      case 2005:
        return 'bg-gradient-to-r from-[#e1f5fe] to-[#b3e5fc] text-[#0277bd] border-t border-b border-[#81d4fa] font-web2';
      case 2010:
        return 'bg-[#2d4373] text-white border-t border-b border-[#1a2846] font-skeuo shadow-inner';
      case 2015:
        return 'bg-white text-gray-800 border-t border-b border-gray-200 font-flat shadow-sm';
      case 2020:
        return 'bg-[#161b22] text-gray-200 border-t border-b border-gray-800 font-bento';
      case 2026:
        return 'bg-black/60 text-white border-t border-b border-white/10 backdrop-blur-xl font-future';
    }
  };

  return (
    <div className={`py-4 px-4 transition-all duration-300 ${getScrubberStyles()}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Navigation Step Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevEra}
            disabled={currentEra === ERAS_ORDER[0]}
            className="p-1.5 rounded disabled:opacity-30 hover:bg-black/10 active:scale-95 transition"
            title="Previous Era (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-xs uppercase font-mono tracking-wider font-bold">Timeline Portal</span>
          <button
            onClick={nextEra}
            disabled={currentEra === ERAS_ORDER[ERAS_ORDER.length - 1]}
            className="p-1.5 rounded disabled:opacity-30 hover:bg-black/10 active:scale-95 transition"
            title="Next Era (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Era Badges / Steps */}
        <div className="flex items-center gap-2 md:gap-4 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none">
          {ERAS_ORDER.map((year) => {
            const isActive = currentEra === year;
            const data = ERAS_DATA[year];

            return (
              <button
                key={year}
                onClick={() => setEra(year)}
                className={`relative px-3 py-1.5 text-xs md:text-sm font-bold transition-all duration-300 rounded whitespace-nowrap ${
                  isActive
                    ? 'scale-110 shadow-lg ring-2 ring-offset-2 ring-indigo-500'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
                style={{
                  backgroundColor: isActive ? data.vibeColor : undefined,
                  color: isActive ? (year === 1995 || year === 2005 ? '#000' : '#fff') : undefined,
                }}
              >
                {year}
                {isActive && (
                  <span className="absolute -top-2 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Era Paradigm Tag */}
        <div className="text-xs font-mono opacity-80 text-center md:text-right">
          <strong>Paradigm:</strong> {ERAS_DATA[currentEra].paradigm}
        </div>
      </div>
    </div>
  );
};
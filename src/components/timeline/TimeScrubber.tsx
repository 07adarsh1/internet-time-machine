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
        return 'bg-black/80 text-white border-t border-b border-white/10 backdrop-blur-xl font-future';
    }
  };

  return (
    <div className={`py-2.5 sm:py-3 px-3 sm:px-4 transition-all duration-300 ${getScrubberStyles()}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Navigation Step Arrows */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={prevEra}
            disabled={currentEra === ERAS_ORDER[0]}
            className="p-1 rounded disabled:opacity-30 hover:bg-black/10 active:scale-95 transition"
            title="Previous Era (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextEra}
            disabled={currentEra === ERAS_ORDER[ERAS_ORDER.length - 1]}
            className="p-1 rounded disabled:opacity-30 hover:bg-black/10 active:scale-95 transition"
            title="Next Era (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Era Badges (Horizontally scrollable on mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto py-1 scrollbar-none">
          {ERAS_ORDER.map((year) => {
            const isActive = currentEra === year;
            const data = ERAS_DATA[year];

            return (
              <button
                key={year}
                onClick={() => setEra(year)}
                className={`relative px-2.5 sm:px-3 py-1 text-xs md:text-sm font-bold transition-all duration-300 rounded whitespace-nowrap ${
                  isActive
                    ? 'scale-105 shadow-md ring-2 ring-indigo-500 font-black'
                    : 'opacity-60 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: isActive ? data.vibeColor : undefined,
                  color: isActive ? (year === 1995 || year === 2005 ? '#000' : '#fff') : undefined,
                }}
              >
                {year}
              </button>
            );
          })}
        </div>

        {/* Current Year Paradigm (Hidden on small mobile) */}
        <div className="hidden md:block text-xs font-mono opacity-80 text-right shrink-0">
          <strong>Paradigm:</strong> {ERAS_DATA[currentEra].paradigm}
        </div>
      </div>
    </div>
  );
};
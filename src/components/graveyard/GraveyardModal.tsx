import React, { useState, useEffect } from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { GRAVEYARD_ITEMS } from '../../data/graveyardData';
import { sound } from '../../utils/audioSynth';
import { X, Flame } from 'lucide-react';

export const GraveyardModal: React.FC = () => {
  const { openGraveyard, setOpenGraveyard } = useTimeMachine();
  const [respects, setRespects] = useState<Record<string, number>>({});

  // Initialize respects counter from memory/initial
  useEffect(() => {
    const initial: Record<string, number> = {};
    GRAVEYARD_ITEMS.forEach((item) => {
      initial[item.id] = item.initialRespects;
    });
    setRespects(initial);
  }, []);

  if (!openGraveyard) return null;

  const payRespect = (id: string) => {
    sound.playRespectChime();
    setRespects((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[88vh] bg-gradient-to-b from-gray-900 to-black text-gray-100 border border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-800 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🪦</span>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
                The Internet Graveyard
              </h2>
              <p className="text-xs text-gray-400">
                Honoring the fallen digital giants who shaped how we browse today.
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpenGraveyard(false)}
            className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tombstones Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {GRAVEYARD_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white/[0.03] border border-white/10 hover:border-purple-500/40 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-800">
                    {item.years}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-300 italic mt-1 mb-2">
                  "{item.epitaph}"
                </p>
                <div className="text-[11px] text-gray-400 bg-black/40 p-2 rounded-lg border border-white/5">
                  <strong className="text-red-400">Cause of Demise:</strong> {item.causeOfDeath}
                </div>
              </div>

              {/* Pay Respects Button */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">
                  {respects[item.id] || item.initialRespects} candles lit
                </span>
                <button
                  onClick={() => payRespect(item.id)}
                  className="bg-white/10 hover:bg-purple-600/30 text-white px-3 py-1 text-xs rounded-lg font-semibold border border-white/20 hover:border-purple-400 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light Candle (F)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
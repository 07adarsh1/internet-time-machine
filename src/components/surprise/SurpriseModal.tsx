import React, { useState } from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { SURPRISE_FACTS } from '../../data/surprisesData';
import { sound } from '../../utils/audioSynth';
import { X, Sparkles, Shuffle } from 'lucide-react';

export const SurpriseModal: React.FC = () => {
  const { openSurprise, setOpenSurprise, setEra } = useTimeMachine();
  const [factIndex, setFactIndex] = useState(0);

  if (!openSurprise) return null;

  const currentFact = SURPRISE_FACTS[factIndex];

  const rollRoulette = () => {
    sound.playSpatialGlow();
    const nextIdx = Math.floor(Math.random() * SURPRISE_FACTS.length);
    setFactIndex(nextIdx);
  };

  const jumpToEra = () => {
    setEra(currentFact.year);
    setOpenSurprise(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-gray-900 via-indigo-950 to-black text-white border border-indigo-500/30 rounded-3xl shadow-2xl p-6 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => setOpenSurprise(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Internet History Roulette • Year {currentFact.year}</span>
        </div>

        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-3">
          {currentFact.headline}
        </h3>

        {/* Story Body */}
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          {currentFact.story}
        </p>

        {/* Trivia Box */}
        <div className="bg-indigo-900/30 border border-indigo-500/20 p-3 rounded-xl text-xs text-indigo-200 mb-4 italic">
          💡 <strong>Nostalgia Trivia:</strong> {currentFact.trivia}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={rollRoulette}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold border border-white/20 transition flex items-center gap-1.5 active:scale-95"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Spin Roulette Again</span>
          </button>

          <button
            onClick={jumpToEra}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-lg active:scale-95"
          >
            Travel to {currentFact.year} →
          </button>
        </div>

      </div>
    </div>
  );
};
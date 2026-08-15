import React, { useState, useEffect } from 'react';
import { sound } from '../../utils/audioSynth';

export const Era2015: React.FC = () => {
  const [vineProgress, setVineProgress] = useState(0);
  const [isLooping, setIsLooping] = useState(true);

  // 6-second vine loop timer
  useEffect(() => {
    if (!isLooping) return;
    const interval = setInterval(() => {
      setVineProgress((p) => {
        if (p >= 100) {
          sound.playMaterialPop();
          return 0;
        }
        return p + 2;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [isLooping]);

  return (
    <div className="min-h-[75vh] p-4 md:p-8 font-flat bg-[#f5f5f5] text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Flat Material Header */}
        <div className="bg-[#009688] text-white p-6 rounded-none shadow-md text-center">
          <span className="text-xs font-bold uppercase tracking-widest opacity-90 block mb-1">
            Material Design & 6-Second Comedy
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            The Flat Social Era (2015)
          </h1>
          <p className="text-xs md:text-sm mt-1 opacity-90">
            Zero Gradients • Pastel Palettes • Vine Loops • Floating Action Buttons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 6-Second Vine Simulator */}
          <div className="bg-[#00b488] text-white p-4 rounded-none shadow-lg flex flex-col justify-between h-96">
            <div className="flex items-center justify-between border-b border-white/20 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black">🍇</span>
                <span className="font-bold tracking-tight text-lg">Vine Player</span>
              </div>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded font-mono">
                6.0s Looper
              </span>
            </div>

            {/* Video Box Canvas */}
            <div className="bg-black/90 rounded h-56 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
              <div className="text-3xl mb-2">🕺💃</div>
              <p className="text-sm font-bold text-emerald-300">
                "Do it for the Vine! I ain't gonna do it..."
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Loop count: 2,419,012 loops
              </p>

              {/* Progress Bar (0 to 100% in 6 seconds) */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black">
                <div
                  className="h-full bg-[#00e676] transition-all duration-100"
                  style={{ width: `${vineProgress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setIsLooping(!isLooping)}
                className="bg-white text-[#00b488] px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded shadow hover:bg-gray-100 transition active:scale-95"
              >
                {isLooping ? 'Pause Loop' : 'Play Loop'}
              </button>
              <span className="text-xs font-bold">❤️ 840K Revines</span>
            </div>
          </div>

          {/* Material Cards & FAB */}
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-none shadow hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#e91e63] text-white flex items-center justify-center font-bold text-sm">
                  #
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Trending Hashtags (2015)</h4>
                  <p className="text-xs text-gray-500">Global trends</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {['#TheDress', '#SquadGoals', '#IceBucketChallenge', '#LoveWins', '#TBT'].map((tag) => (
                  <span
                    key={tag}
                    onClick={() => sound.playMaterialPop()}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded cursor-pointer transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-none shadow hover:shadow-md transition">
              <h4 className="font-bold text-gray-900 text-sm mb-1">Design Axiom: Flatness</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Physical textures were erased. Drop shadows were replaced with paper z-index elevations. Touch targets grew, and animations became snappy 60fps spring transitions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
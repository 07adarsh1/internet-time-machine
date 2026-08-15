import React, { useState } from 'react';
import { sound } from '../../utils/audioSynth';

export const Era2020: React.FC = () => {
  const [isPlayingLofi, setIsPlayingLofi] = useState(true);

  return (
    <div className="min-h-[75vh] p-4 md:p-8 font-bento bg-[#0d1117] text-gray-200">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Bento Grid Header */}
        <div className="bg-[#161b22] border border-gray-800 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              REMOTE WORK & DISCORD ERA
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white">
              The Connected Grid (2020)
            </h1>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              Dark Mode Default • Lo-Fi Study Streams • Zoom Grids • Bento Card Architecture
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Lo-Fi Beats Audio Visualizer Widget */}
          <div className="md:col-span-2 bg-[#161b22] border border-gray-800 p-5 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎧</span>
                <div>
                  <h3 className="font-bold text-white text-sm">lofi hip hop radio - beats to study/relax to</h3>
                  <p className="text-xs text-gray-400">Lofi Girl Stream Simulator</p>
                </div>
              </div>
              <button
                onClick={() => {
                  sound.playRetroClick();
                  setIsPlayingLofi(!isPlayingLofi);
                }}
                className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-3 py-1 text-xs rounded-lg font-semibold transition"
              >
                {isPlayingLofi ? 'Pause Stream' : 'Play Beats'}
              </button>
            </div>

            {/* Visualizer Bar Graphic */}
            <div className="h-28 bg-[#0d1117] rounded-xl flex items-end justify-center gap-1.5 p-4 border border-gray-800/80">
              {[40, 75, 55, 90, 60, 30, 85, 95, 70, 45, 60, 80, 50, 65, 90, 40].map((h, i) => (
                <div
                  key={i}
                  className={`w-3 bg-gradient-to-t from-indigo-600 to-purple-400 rounded-t transition-all duration-300 ${
                    isPlayingLofi ? 'animate-pulse' : 'h-2 opacity-30'
                  }`}
                  style={{ height: isPlayingLofi ? `${h}%` : '8px' }}
                />
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
              <span>● 48,912 listening now</span>
              <span>☕ study session: 2h 45m</span>
            </div>
          </div>

          {/* Zoom Simulator Tile */}
          <div className="bg-[#161b22] border border-gray-800 p-4 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2">
              <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Daily Standup (Zoom)
              </h4>
              <span className="text-[10px] text-gray-400">4 in call</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-3">
              {['You (Muted)', 'Alex (Screen Sharing)', 'Dev Lead', 'Product Mgr'].map((name, i) => (
                <div key={i} className="bg-[#0d1117] border border-gray-800 rounded-lg p-2 text-center text-xs flex flex-col items-center justify-center h-16">
                  <span className="text-base">👤</span>
                  <span className="text-[10px] text-gray-300 truncate w-full">{name}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => sound.playSpatialGlow()}
              className="w-full bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-semibold py-1.5 rounded-lg transition"
            >
              "You're On Mute!"
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
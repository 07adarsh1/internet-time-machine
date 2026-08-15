import React, { useState } from 'react';
import { sound } from '../../utils/audioSynth';

export const Era2000: React.FC = () => {
  const [score, setScore] = useState(0);
  const [bubbleX, setBubbleX] = useState(50);
  const [bubbleY, setBubbleY] = useState(50);

  const popBubble = () => {
    sound.playRetroClick();
    setScore((s) => s + 1);
    setBubbleX(Math.floor(Math.random() * 70) + 15);
    setBubbleY(Math.floor(Math.random() * 60) + 20);
  };

  return (
    <div
      className="min-h-[75vh] p-3 sm:p-6 md:p-8 font-early2000 text-yellow-300 overflow-x-hidden"
      style={{
        backgroundColor: '#000033',
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ff00ff 1px, #000022 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px',
      }}
    >
      <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">

        {/* Marquee Banner */}
        <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 p-0.5 sm:p-1 border-2 sm:border-4 border-dashed border-cyan-400">
          <div className="overflow-hidden whitespace-nowrap bg-black py-1">
            <div className="inline-block animate-marquee text-xs sm:text-sm font-bold text-yellow-300 tracking-wider">
              🔥 WELCOME TO THE YEAR 2000 MILLENNIUM PORTAL! FLASH 4.0 ENABLED! PETS.COM IPO SURGES! Y2K SURVIVORS UNITE! 🔥
            </div>
          </div>
        </div>

        {/* Flash-style Hero Header */}
        <div className="text-center py-4 sm:py-6 border-2 sm:border-4 border-pink-500 bg-black/80 rounded-2xl shadow-[0_0_25px_rgba(255,0,255,0.6)]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            ⚡ MEGA-PORTAL 2000 ⚡
          </h1>
          <p className="text-cyan-400 text-xs sm:text-sm mt-1 sm:mt-2 font-mono">
            ★ Optimized for Internet Explorer 5.5 @ 1024x768 ★
          </p>
        </div>

        {/* Interactive Flash Mini Game */}
        <div className="border-2 sm:border-4 border-cyan-400 bg-black/90 p-3 sm:p-4 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.4)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-cyan-500 pb-2 mb-3 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">🎮</span>
              <div>
                <h3 className="text-xs sm:text-base font-bold text-pink-400">FLASH MINI-GAME: Pop The Dot-Com IPO!</h3>
                <p className="text-[10px] sm:text-xs text-gray-300 font-mono">Tap the soaring bubble before market closes!</p>
              </div>
            </div>
            <div className="bg-pink-600 text-white font-mono px-2.5 py-1 rounded text-xs font-bold self-start sm:self-auto">
              Valuation: ${score * 100}M
            </div>
          </div>

          <div className="relative h-48 sm:h-64 border-2 border-dashed border-pink-500 bg-gradient-to-b from-blue-950 to-black overflow-hidden rounded cursor-crosshair">
            <button
              onClick={popBubble}
              style={{ top: `${bubbleY}%`, left: `${bubbleX}%` }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-300 to-pink-500 text-black font-black text-[11px] sm:text-xs px-2.5 py-1.5 rounded-full border border-white animate-bounce shadow-[0_0_15px_#ff00ff] active:scale-125 transition touch-manipulation"
            >
              💸 PetsOnline.com 🚀
            </button>
          </div>
        </div>

        {/* 2000s Web Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="border-2 border-yellow-400 p-3 bg-black/70 rounded">
            <h4 className="text-cyan-300 font-bold border-b border-yellow-400 pb-1 mb-2 text-xs sm:text-sm">💾 TOP MP3s (Napster)</h4>
            <ul className="text-[11px] sm:text-xs space-y-1 text-gray-200 font-mono">
              <li>1. Eiffel 65 - Blue (Da Ba Dee)</li>
              <li>2. Blink-182 - All The Small Things</li>
              <li>3. Britney Spears - Oops!... I Did It Again</li>
            </ul>
          </div>

          <div className="border-2 border-pink-400 p-3 bg-black/70 rounded">
            <h4 className="text-pink-300 font-bold border-b border-pink-400 pb-1 mb-2 text-xs sm:text-sm">📟 ICQ STATUS</h4>
            <div className="text-[11px] sm:text-xs font-mono text-green-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
              UIN: 84920194 (Online - "Winamp Playing")
            </div>
          </div>

          <div className="border-2 border-green-400 p-3 bg-black/70 rounded">
            <h4 className="text-green-300 font-bold border-b border-green-400 pb-1 mb-2 text-xs sm:text-sm">🌐 WEB RING</h4>
            <p className="text-[11px] sm:text-xs text-gray-300">Proud node of the Cyber Millennium Ring (#42)</p>
          </div>
        </div>

      </div>
    </div>
  );
};
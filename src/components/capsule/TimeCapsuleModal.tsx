import React, { useState, useRef } from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { ERAS_ORDER } from '../../data/erasData';
import { EraYear } from '../../types/timeMachine';
import { sound } from '../../utils/audioSynth';
import { X, Download, Sparkles, RefreshCw } from 'lucide-react';

export const TimeCapsuleModal: React.FC = () => {
  const { openTimeCapsule, setOpenTimeCapsule, currentEra } = useTimeMachine();
  const [selectedYear, setSelectedYear] = useState<EraYear>(currentEra);
  const [nickname, setNickname] = useState('CyberSurfer_99');
  const [statusMessage, setStatusMessage] = useState('Surfing the Information Superhighway 🌐');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (!openTimeCapsule) return null;

  const generateAndDownload = () => {
    sound.playCameraClick();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = (canvas.width = 700);
    const h = (canvas.height = 420);

    // 1995: Netscape Explorer Certificate
    if (selectedYear === 1995) {
      ctx.fillStyle = '#d4d0c8';
      ctx.fillRect(0, 0, w, h);
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#000080';
      ctx.strokeRect(10, 10, w - 20, h - 20);

      ctx.fillStyle = '#000080';
      ctx.font = 'bold 28px "Times New Roman", serif';
      ctx.textAlign = 'center';
      ctx.fillText('CERTIFIED WORLD WIDE WEB EXPLORER', w / 2, 60);

      ctx.fillStyle = '#333333';
      ctx.font = 'italic 16px "Times New Roman", serif';
      ctx.fillText('This document certifies that the cyber-traveler:', w / 2, 100);

      ctx.fillStyle = '#000000';
      ctx.font = 'bold 36px "Times New Roman", serif';
      ctx.fillText(`[ ${nickname.toUpperCase()} ]`, w / 2, 160);

      ctx.font = '16px "Courier New", monospace';
      ctx.fillStyle = '#000080';
      ctx.fillText(`Status: "${statusMessage}"`, w / 2, 220);
      ctx.fillText('Dial-up Speed: 28.8 Kbps • Netscape 1.1 Verified', w / 2, 260);

      // Gold Seal
      ctx.beginPath();
      ctx.arc(w / 2, 340, 45, 0, Math.PI * 2);
      ctx.fillStyle = '#d4af37';
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('OFFICIAL 1995', w / 2, 345);
    }
    // 2005: MSN Messenger Buddy Profile Card
    else if (selectedYear === 2005) {
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#e3f2fd');
      grad.addColorStop(1, '#90caf9');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#0288d1';
      ctx.fillRect(0, 0, w, 50);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px Tahoma, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('💬 MSN Messenger 7.5 — Contact Card', 25, 33);

      ctx.fillStyle = '#0d47a1';
      ctx.font = 'bold 32px Tahoma, sans-serif';
      ctx.fillText(nickname, 40, 110);

      ctx.fillStyle = '#e65100';
      ctx.font = 'italic 18px Tahoma, sans-serif';
      ctx.fillText(`(Offline / "${statusMessage}")`, 40, 150);

      ctx.fillStyle = '#333333';
      ctx.font = '16px Tahoma, sans-serif';
      ctx.fillText('🎶 Top Song: Linkin Park - In The End (128kbps)', 40, 200);
      ctx.fillText('★ Top 8 MySpace Position: #1 Best Friend', 40, 235);
      ctx.fillText('⚡ Nudges Sent: 420 • Emoticon Pack: MSN Plus! Gold', 40, 270);

      ctx.fillStyle = '#1565c0';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('>>> OFFICIAL 2005 WEB 2.0 TIME CAPSULE <<<', 40, 360);
    }
    // 2026: Spatial Neural Passport
    else {
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, w, h);

      const aurora = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, 300);
      aurora.addColorStop(0, 'rgba(139, 92, 246, 0.3)');
      aurora.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = aurora;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.strokeRect(20, 20, w - 40, h - 40);

      ctx.fillStyle = '#8b5cf6';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('SPATIAL AGENT CITIZEN PASSPORT • 2026', 45, 60);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 34px sans-serif';
      ctx.fillText(nickname, 45, 120);

      ctx.fillStyle = '#a1a1aa';
      ctx.font = '16px sans-serif';
      ctx.fillText(`Intent: "${statusMessage}"`, 45, 170);
      ctx.fillText(`Era Node: Year ${selectedYear} Synchronized`, 45, 210);
      ctx.fillText('Neural Stream Latency: 0.2ms Synapse Active', 45, 245);

      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('● VERIFIED AUTONOMOUS NODE #8492-X', 45, 330);
    }

    // Trigger PNG Download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `time_capsule_${selectedYear}_${nickname}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn font-bento">
      <div className="relative w-full max-w-xl bg-[#121214] text-white border border-white/10 rounded-3xl shadow-2xl p-6 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold">Nostalgia Time Capsule Card</h3>
          </div>
          <button
            onClick={() => setOpenTimeCapsule(false)}
            className="p-1.5 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Configuration Form */}
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-gray-400 mb-1 font-mono">1. Select Card Era Style:</label>
            <div className="grid grid-cols-4 gap-2">
              {[1995, 2005, 2015, 2026].map((yr) => (
                <button
                  key={yr}
                  onClick={() => {
                    sound.playRetroClick();
                    setSelectedYear(yr as EraYear);
                  }}
                  className={`py-1.5 rounded-lg border font-bold transition ${
                    selectedYear === yr
                      ? 'bg-amber-400 text-black border-amber-400'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-1 font-mono">2. Your Cyber Handle / Nickname:</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="e.g. Neo_Matrix_2000"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1 font-mono">3. Custom Status / Bio:</label>
            <input
              type="text"
              value={statusMessage}
              onChange={(e) => setStatusMessage(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="e.g. Surfing cyberspace @ 56k"
            />
          </div>
        </div>

        {/* Hidden Canvas for High-Resolution Export */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={generateAndDownload}
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-black px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg flex items-center gap-2 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Generate & Download PNG Card</span>
          </button>
        </div>

      </div>
    </div>
  );
};
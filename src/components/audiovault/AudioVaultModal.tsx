import React, { useState } from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { DEAD_SOUNDS, DeadSoundItem } from '../../data/audioVaultData';
import { sound } from '../../utils/audioSynth';
import { X, Play, Radio, Disc } from 'lucide-react';

export const AudioVaultModal: React.FC = () => {
  const { openAudioVault, setOpenAudioVault } = useTimeMachine();
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);

  if (!openAudioVault) return null;

  const playSoundItem = (item: DeadSoundItem) => {
    setActiveSoundId(item.id);

    switch (item.synthKey) {
      case 'aol':
        sound.playAOLMail();
        break;
      case 'icq':
        sound.playICQUhOh();
        break;
      case 'win95':
        sound.playWin95Sound();
        break;
      case 'winXP':
        sound.playWinXPSound();
        break;
      case 'skype':
        sound.playSkypeRing();
        break;
      case 'ipodClick':
        sound.playIpodClick();
        break;
      case 'dialup':
        sound.playDialUp();
        break;
      case 'nudge':
        sound.playMsnNudge();
        break;
    }

    setTimeout(() => setActiveSoundId(null), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn font-bento">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#18181b] to-[#09090b] text-white border border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Walkman Cassette Header */}
        <div className="px-6 py-5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Radio className="w-6 h-6 text-amber-400" />
            <div>
              <h3 className="text-lg font-black tracking-tight">The Dead Web Audio Vault</h3>
              <p className="text-xs text-gray-400">Playable synthesized audio relics from the dial-up and desktop era.</p>
            </div>
          </div>
          <button
            onClick={() => setOpenAudioVault(false)}
            className="p-1.5 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sound List */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {DEAD_SOUNDS.map((item) => {
            const isPlaying = activeSoundId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => playSoundItem(item)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isPlaying
                    ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] scale-102'
                    : 'bg-white/[0.03] border-white/5 hover:border-amber-400/40 hover:bg-white/[0.06]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
                      {item.year}
                    </span>
                    <span className="text-xs font-bold text-gray-200 group-hover:text-amber-300 transition">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    {item.description}
                  </p>
                </div>

                <button
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-3 transition shadow ${
                    isPlaying
                      ? 'bg-amber-400 text-black animate-pulse'
                      : 'bg-white/10 text-white group-hover:bg-amber-400 group-hover:text-black'
                  }`}
                >
                  {isPlaying ? <Disc className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
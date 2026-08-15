import React, { useState } from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';
import { SOURCE_CODE_DATA } from '../../data/sourceCodeData';
import { sound } from '../../utils/audioSynth';
import { X, Code2, Copy, Check, Info } from 'lucide-react';

export const DevToolsModal: React.FC = () => {
  const { openDevTools, setOpenDevTools, currentEra } = useTimeMachine();
  const [copied, setCopied] = useState(false);

  if (!openDevTools) return null;

  const data = SOURCE_CODE_DATA[currentEra];

  const handleCopy = () => {
    sound.playRetroClick();
    navigator.clipboard.writeText(data.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-mono">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1e1e1e] text-[#d4d4d4] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Title Bar (VS Code / Vintage Editor Style) */}
        <div className="px-4 py-3 bg-[#252526] border-b border-[#333333] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>devtools_source_{currentEra}.{data.language === 'html' ? 'html' : data.language === 'css' ? 'css' : 'ts'}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs flex items-center gap-1.5 transition active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Code'}</span>
            </button>

            <button
              onClick={() => setOpenDevTools(false)}
              className="p-1 text-gray-400 hover:text-white rounded bg-white/5 hover:bg-white/10 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Historical Commentary Banner */}
        <div className="p-4 bg-[#2d2d30] border-b border-[#3e3e42] text-xs flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <div>
            <strong className="text-white block mb-0.5">{data.title}</strong>
            <p className="text-gray-400 leading-relaxed">{data.historicalContext}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {data.techHighlights.map((t, idx) => (
                <span key={idx} className="bg-black/40 text-blue-300 border border-blue-900/50 px-2 py-0.5 rounded text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Code Canvas Body */}
        <div className="flex-1 p-4 overflow-y-auto bg-[#1e1e1e] text-xs leading-relaxed">
          <pre className="text-[#9cdcfe] font-mono whitespace-pre-wrap selection:bg-[#264f78]">
            <code>{data.code}</code>
          </pre>
        </div>

      </div>
    </div>
  );
};
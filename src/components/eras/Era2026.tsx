import React, { useState } from 'react';
import { sound } from '../../utils/audioSynth';
import { Sparkles, Bot, Cpu, ArrowRight } from 'lucide-react';

export const Era2026: React.FC = () => {
  const [promptInput, setPromptInput] = useState('');
  const [agentLogs, setAgentLogs] = useState<string[]>([
    "Agent #1: Synthesized 3D neural mesh viewport for user preferences.",
    "Agent #2: Optimized local transformer weights to 0.4ms latency.",
    "Agent #3: Autonomous context negotiation completed."
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSynthesize = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    sound.playSpatialGlow();
    setIsGenerating(true);

    setTimeout(() => {
      setAgentLogs((prev) => [
        `Agent Copilot: Generated dynamic UI block for: "${promptInput}"`,
        ...prev
      ]);
      setPromptInput('');
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="min-h-[75vh] p-4 md:p-8 font-future bg-black text-white relative overflow-hidden">
      {/* Background Aurora Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-6 relative z-10">

        {/* Spatial Header */}
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-center shadow-[0_8px_32px_rgba(139,92,246,0.15)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            THE AGENTIC WEB (2026)
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-indigo-400 bg-clip-text text-transparent">
            Ambient Neural Canvas
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            Interfaces synthesize in real-time. No static DOM — pure intent-driven computing and multi-agent collaboration.
          </p>
        </div>

        {/* Interactive Generative Sandbox */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Prompt Engine Box */}
          <div className="md:col-span-2 p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-purple-400" />
                  <h3 className="font-bold text-white text-base">Copilot Intent Synthesizer</h3>
                </div>
                <span className="text-xs text-purple-400 font-mono bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800">
                  Model: GPT-5 / Claude-4 Hybrid
                </span>
              </div>

              {/* Agent Log Terminal */}
              <div className="bg-black/60 border border-white/10 rounded-2xl p-4 font-mono text-xs text-gray-300 space-y-2 h-44 overflow-y-auto">
                {agentLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400">⚡</span>
                    <span>{log}</span>
                  </div>
                ))}
                {isGenerating && (
                  <div className="text-cyan-400 animate-pulse flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    <span>Synthesizing components from neural weights...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Prompt Input Form */}
            <form onSubmit={handleSynthesize} className="mt-4 flex gap-2">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Ask the 2026 agent to synthesize a feature..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-future"
              />
              <button
                type="submit"
                disabled={isGenerating}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)] flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
              >
                <span>Synthesize</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Autonomous Agent Status Widget */}
          <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Live Agent Telemetry
              </h4>
              <div className="space-y-3 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="text-gray-400">Agent Bandwidth</div>
                  <div className="text-white font-mono font-bold text-sm">4.2 TB/s Neural Stream</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="text-gray-400">Spatial Latency</div>
                  <div className="text-emerald-400 font-mono font-bold text-sm">0.2 ms Direct Synapse</div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <span className="text-[10px] text-gray-500 font-mono">
                Decentralized Web Node #8921-X
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
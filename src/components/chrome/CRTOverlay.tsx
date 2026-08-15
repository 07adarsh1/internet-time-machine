import React from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';

export const CRTOverlay: React.FC = () => {
  const { isCRTMode, isTransitioning } = useTimeMachine();

  if (!isCRTMode && !isTransitioning) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Scanline background lines */}
      {isCRTMode && (
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)',
            backgroundSize: '100% 4px',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)',
          }}
        />
      )}

      {/* Vignette & CRT Curve simulation */}
      {isCRTMode && (
        <div className="absolute inset-0 border-[8px] md:border-[16px] border-black/80 rounded-3xl" />
      )}

      {/* Warp Glitch during transition */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] animate-pulse flex items-center justify-center">
          <div className="bg-black/90 text-green-400 font-mono px-6 py-3 rounded-lg border border-green-500 shadow-2xl flex items-center gap-3">
            <span className="animate-spin text-xl">⏳</span>
            <span className="tracking-widest uppercase font-bold text-sm">
              WARPING TIMELINE...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
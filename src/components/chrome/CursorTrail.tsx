import React, { useEffect, useState } from 'react';
import { useTimeMachine } from '../../context/TimeMachineContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
}

export const CursorTrail: React.FC = () => {
  const { currentEra } = useTimeMachine();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (currentEra !== 2000) {
      setParticles([]);
      return;
    }

    const sparkleChars = ['✨', '⭐', '💫', '✦', '★'];
    let counter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      counter++;
      if (counter % 3 !== 0) return; // throttle

      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        char: sparkleChars[Math.floor(Math.random() * sparkleChars.length)],
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [currentEra]);

  if (currentEra !== 2000) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-xs animate-ping"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};
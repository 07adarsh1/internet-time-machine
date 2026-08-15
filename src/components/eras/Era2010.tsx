import React, { useState } from 'react';
import { sound } from '../../utils/audioSynth';

export const Era2010: React.FC = () => {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [flashActive, setFlashActive] = useState(false);

  const toggleLike = () => {
    sound.playCameraClick();
    if (hasLiked) {
      setLikes((l) => l - 1);
      setHasLiked(false);
    } else {
      setLikes((l) => l + 1);
      setHasLiked(true);
    }
  };

  const triggerCameraFlash = () => {
    sound.playCameraClick();
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 200);
  };

  return (
    <div className="min-h-[75vh] p-4 md:p-8 font-skeuo bg-[#2c3e50] text-gray-100 relative">
      {/* Camera White Flash Simulator */}
      {flashActive && <div className="fixed inset-0 bg-white z-50 pointer-events-none transition-opacity duration-200" />}

      <div className="max-w-4xl mx-auto space-y-6">

        {/* Skeuomorphic Header */}
        <div
          className="p-6 rounded-2xl border-4 border-[#1a252f] text-center shadow-2xl"
          style={{
            background: 'linear-gradient(to bottom, #4a6984 0%, #354b60 50%, #20303e 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 24px rgba(0,0,0,0.6)',
          }}
        >
          <div className="inline-block bg-[#1f2d3d] border border-[#40566e] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-300 mb-2 shadow-inner">
            iPhone 4 & iPad 1 Era
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Skeuomorphic Reality (2010)
          </h1>
          <p className="text-xs md:text-sm text-gray-300 mt-1">
            Beveled glass • Stitched Leather • Realistic Shadows • Glossy Aqua Badges
          </p>
        </div>

        {/* Early Social Post Simulator */}
        <div
          className="p-6 rounded-xl border border-gray-400 bg-[#f7f7f7] text-gray-900 shadow-xl"
          style={{
            boxShadow: '0 4px 15px rgba(0,0,0,0.35)',
          }}
        >
          {/* Post Header */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-3">
            <div className="w-12 h-12 bg-gradient-to-b from-[#5b7ea6] to-[#3b5998] rounded-md border-2 border-white shadow flex items-center justify-center text-white text-xl font-bold">
              f
            </div>
            <div>
              <h3 className="font-bold text-[#3b5998] text-base">Mark W. via iPhone 4</h3>
              <p className="text-xs text-gray-500">October 14, 2010 • Cupertino, CA • 📍 Checked In</p>
            </div>
          </div>

          {/* Post Body */}
          <p className="my-4 text-sm leading-relaxed text-gray-800">
            Just unboxed the new iPhone with the Retina Display! The pixels are literally invisible. Playing Angry Birds and listening to my iTunes library with Cover Flow. Steve Jobs did it again! 📱✨
          </p>

          {/* Realistic Photo Frame Card */}
          <div className="border-4 border-white p-2 bg-gradient-to-b from-gray-200 to-gray-400 rounded shadow-md mb-4 flex flex-col items-center">
            <div className="w-full h-44 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded flex items-center justify-center text-white font-bold text-sm">
              [ 📸 Early HDR Camera Preview ]
            </div>
            <button
              onClick={triggerCameraFlash}
              className="mt-2 bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 text-gray-800 text-xs px-4 py-1 rounded-full font-bold shadow hover:brightness-105 active:scale-95"
            >
              ⚡ Test Camera Shutter Flash
            </button>
          </div>

          {/* Skeuomorphic Glass Like Button */}
          <div className="flex items-center justify-between border-t border-gray-300 pt-3">
            <button
              onClick={toggleLike}
              className={`px-4 py-1.5 rounded text-xs font-bold border transition active:scale-95 shadow ${
                hasLiked
                  ? 'bg-gradient-to-b from-[#5b7ea6] to-[#2c4270] text-white border-[#1c2c4d]'
                  : 'bg-gradient-to-b from-white to-[#e0e0e0] text-gray-800 border-gray-400 hover:brightness-105'
              }`}
            >
              👍 {hasLiked ? 'Liked!' : 'Like'} ({likes})
            </button>

            <span className="text-xs text-gray-500 font-medium">
              18 Comments • 4 Shares
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
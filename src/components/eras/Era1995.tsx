import React, { useState } from 'react';
import { sound } from '../../utils/audioSynth';

export const Era1995: React.FC = () => {
  const [visitorCount] = useState<number>(42891);
  const [guestEntries, setGuestEntries] = useState<string[]>([
    "Dave from Ohio: Cool site! Bookmarked in Netscape 1.1.",
    "WebSurfer_95: Best personal homepage on the World Wide Web! Keep it up!",
    "Sarah: Hi! Testing my 14.4k modem from university lab."
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleAddGuestbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    sound.playRetroClick();
    setGuestEntries([`${name}: ${message}`, ...guestEntries]);
    setName('');
    setMessage('');
  };

  return (
    <div className="bg-[#c0c0c0] text-black font-raw min-h-[70vh] p-4 md:p-8">
      <div className="max-w-4xl mx-auto border-4 border-t-white border-l-white border-b-gray-800 border-r-gray-800 p-6 bg-[#c0c0c0] shadow-md">
        
        {/* Under Construction Banner */}
        <div className="text-center py-3 border-2 border-black mb-6 bg-yellow-200">
          <span className="text-xl">⚠️</span>
          <strong className="text-red-700 text-lg md:text-xl font-bold uppercase tracking-wider mx-2">
            *** UNDER CONSTRUCTION - BEST VIEWED IN NETSCAPE NAVIGATOR 800x600 ***
          </strong>
          <span className="text-xl">⚠️</span>
        </div>

        {/* Page Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-bold font-raw text-blue-900 mb-2">
            Welcome to the CyberZone (1995)
          </h1>
          <p className="text-sm italic">"The Information Superhighway Starts Here!"</p>
          <hr className="my-4 border-t-2 border-gray-600 border-b-2 border-white" />
        </div>

        {/* Classic 2-column Raw HTML Table layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Navigation Sidebar Table */}
          <div className="border-2 border-t-white border-l-white border-b-black border-r-black p-3 bg-[#d4d0c8]">
            <h3 className="font-bold text-center border-b border-black pb-1 mb-2 bg-[#000080] text-white">
              NAVIGATION
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-blue-800 underline font-bold">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); sound.playRetroClick(); }}>About Me</a></li>
              <li><a href="#links" onClick={(e) => { e.preventDefault(); sound.playRetroClick(); }}>Cool Links</a></li>
              <li><a href="#guestbook" onClick={(e) => { e.preventDefault(); sound.playRetroClick(); }}>Sign Guestbook</a></li>
              <li><a href="#email" onClick={(e) => { e.preventDefault(); sound.playRetroClick(); }}>Mailto: Webmaster</a></li>
            </ul>

            <div className="mt-6 text-center border border-black p-2 bg-black text-green-400 font-pixel text-xs">
              <p>VISITOR HIT COUNTER:</p>
              <div className="text-lg font-bold tracking-widest bg-gray-900 border border-green-700 py-1 mt-1">
                [ 00{visitorCount} ]
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-6">
            <div className="border-2 border-t-black border-l-black border-b-white border-r-white p-4 bg-white">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Welcome to My Personal Homepage</h2>
              <p className="text-sm leading-relaxed mb-3">
                Hello cyber-traveler! You have reached my node on the global Internet. I am building this site using raw HTML tags like <code>&lt;table&gt;</code>, <code>&lt;center&gt;</code>, and <code>&lt;font color="red"&gt;</code>.
              </p>
              <p className="text-sm leading-relaxed">
                Please do not steal my animated GIFs without asking permission via email first!
              </p>
            </div>

            {/* Interactive Guestbook Component */}
            <div className="border-2 border-t-white border-l-white border-b-black border-r-black p-4 bg-[#d4d0c8]">
              <h3 className="font-bold text-sm bg-[#000080] text-white px-2 py-1 mb-3">
                📖 SIGN MY GUESTBOOK (Interactive)
              </h3>
              
              <form onSubmit={handleAddGuestbook} className="space-y-3 mb-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Your Cyber Nickname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-t-black border-l-black border-b-white border-r-white px-2 py-1 text-xs flex-1 bg-white font-pixel"
                  />
                  <input
                    type="text"
                    placeholder="Leave a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-2 border-t-black border-l-black border-b-white border-r-white px-2 py-1 text-xs flex-2 bg-white font-pixel"
                  />
                  <button
                    type="submit"
                    className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black px-4 py-1 text-xs font-bold active:border-t-black active:border-l-black"
                  >
                    Submit Entry
                  </button>
                </div>
              </form>

              {/* Guestbook List */}
              <div className="space-y-2 max-h-40 overflow-y-scroll border border-black p-2 bg-white text-xs">
                {guestEntries.map((entry, idx) => (
                  <div key={idx} className="border-b border-gray-300 pb-1">
                    • {entry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Web Ring */}
        <div className="mt-8 border-2 border-black p-3 text-center text-xs bg-yellow-100">
          <p className="font-bold mb-1">[ Member of the Sci-Fi & Coding WebRing ]</p>
          <div className="flex justify-center gap-4 text-blue-800 underline">
            <a href="#prev" onClick={(e) => { e.preventDefault(); sound.playRetroClick(); }}>&lt;&lt; Prev Site</a>
            <a href="#random" onClick={(e) => { e.preventDefault(); sound.playRetroClick(); }}>[ Random Site ]</a>
            <a href="#next" onClick={(e) => { e.preventDefault(); sound.playRetroClick(); }}>Next Site &gt;&gt;</a>
          </div>
        </div>

      </div>
    </div>
  );
};
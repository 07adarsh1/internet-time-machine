import React, { useState } from 'react';
import { sound } from '../../utils/audioSynth';

interface ChatMessage {
  sender: 'me' | 'bot';
  text: string;
  time: string;
}

export const Era2005: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: 'Hey there! Welcome to MSN Messenger 7.5! Type anything or click Nudge!', time: '4:15 PM' },
    { sender: 'me', text: 'Hey! Did you hear the new Green Day album?', time: '4:16 PM' },
    { sender: 'bot', text: 'Yeah, Boulevard of Broken Dreams is on repeat on my iPod Mini! 🎧', time: '4:16 PM' },
  ]);
  const [inputText, setInputText] = useState('');
  const [isNudging, setIsNudging] = useState(false);

  const botReplies = [
    "haha totally! check out my myspace profile later!",
    "brb mom is yelling to get off the internet for landline :/",
    "lol rawr xD",
    "Did you see that video on that new site called YouTube?",
    "add me on your top 8 or we are not friends haha"
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sound.playRetroClick();

    const userMsg: ChatMessage = {
      sender: 'me',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      sound.playMsnNudge();
      const reply: ChatMessage = {
        sender: 'bot',
        text: botReplies[Math.floor(Math.random() * botReplies.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 900);
  };

  const triggerNudge = () => {
    sound.playMsnNudge();
    setIsNudging(true);
    setTimeout(() => setIsNudging(false), 600);
  };

  return (
    <div className={`min-h-[75vh] p-3 sm:p-6 md:p-8 font-web2 bg-gradient-to-b from-[#e3f2fd] via-[#bbdefb] to-[#90caf9] text-gray-800 overflow-x-hidden ${isNudging ? 'animate-nudge' : ''}`}>
      <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">

        {/* Header */}
        <div className="text-center bg-white/90 p-3 sm:p-4 rounded-xl border border-blue-300 shadow-md">
          <div className="inline-block bg-gradient-to-b from-orange-400 to-amber-500 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 shadow">
            BETA 2.0
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black bg-gradient-to-b from-[#0288d1] to-[#01579b] bg-clip-text text-transparent">
            The Social Web (2005)
          </h1>
          <p className="text-[11px] sm:text-xs text-gray-600 mt-1">
            MSN Messenger 7.5 • MySpace Music • Aqua Glass
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

          {/* MSN Simulator */}
          <div className="md:col-span-2 bg-gradient-to-b from-[#eaf2fb] to-[#d6e5f7] border-2 border-[#6593cf] rounded-t-lg shadow-xl overflow-hidden flex flex-col h-[380px] sm:h-[440px]">
            <div className="bg-gradient-to-r from-[#4b7fc4] via-[#5c8ed6] to-[#4b7fc4] px-3 py-1.5 flex items-center justify-between text-white text-xs font-bold border-b border-[#2b5fa4]">
              <div className="flex items-center gap-1.5 truncate">
                <span>💬</span>
                <span className="truncate">SmarterBot (Online)</span>
              </div>
              <span className="w-2.5 h-2.5 bg-[#e57373] rounded-sm shrink-0"></span>
            </div>

            <div className="bg-[#f0f6fc] px-2.5 py-1.5 border-b border-[#b9d1ea] flex items-center justify-between text-xs gap-2">
              <div className="flex items-center gap-2 truncate">
                <span className="text-base">👤</span>
                <div className="truncate">
                  <div className="font-bold text-[#0d47a1] text-[11px] sm:text-xs truncate">xX_Sk8erBoi_2005_Xx</div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 italic truncate">🎶 Listening to: Mr. Brightside</div>
                </div>
              </div>
              <button
                onClick={triggerNudge}
                className="bg-gradient-to-b from-[#ffecb3] to-[#ffd54f] border border-[#ffb300] active:scale-95 text-[#e65100] font-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded shadow shrink-0"
              >
                💥 NUDGE!
              </button>
            </div>

            <div className="flex-1 p-3 overflow-y-auto bg-white space-y-1.5 text-xs">
              {messages.map((msg, idx) => (
                <div key={idx} className={msg.sender === 'me' ? 'text-blue-900' : 'text-purple-900'}>
                  <span className="font-bold">
                    {msg.sender === 'me' ? 'You' : 'SmarterBot'} ({msg.time}):{' '}
                  </span>
                  <span>{msg.text}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-2 bg-[#eaf2fb] border-t border-[#b9d1ea] flex gap-1.5">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type message or :-)"
                className="flex-1 border border-[#7ba4d5] rounded px-2.5 py-1.5 text-xs bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-b from-[#42a5f5] to-[#1976d2] text-white px-3 py-1 text-xs font-bold rounded shadow active:scale-95"
              >
                Send
              </button>
            </form>
          </div>

          {/* MySpace Widget */}
          <div className="bg-white border-2 border-[#1565c0] rounded p-3 sm:p-4 shadow-lg text-xs space-y-3">
            <div className="bg-[#003399] text-white p-1.5 text-center font-bold text-xs">
              ★ MySpace Music Player ★
            </div>
            
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded">
              <div className="w-10 h-10 bg-gray-300 flex items-center justify-center text-lg font-bold shrink-0">
                🎧
              </div>
              <div className="truncate">
                <strong className="text-blue-800 block truncate">Fall Out Boy</strong>
                <p className="text-[10px] text-gray-600 truncate">Sugar, We're Goin Down</p>
                <span className="text-[9px] text-green-700 font-bold block mt-0.5">▶ Playing (128kbps)</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-700 border-b pb-1 mb-1.5 text-xs">
                Tom's Top 8 Friends
              </h4>
              <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
                {['Tom', 'Sarah', 'Alex', 'EmoKid', 'Jess', 'Gamer', 'Mia', 'Cat'].map((f, i) => (
                  <div key={i} className="border p-1 bg-gray-50 rounded">
                    <div className="w-6 h-6 bg-blue-100 mx-auto rounded flex items-center justify-center font-bold text-blue-700">
                      {f[0]}
                    </div>
                    <span className="truncate block mt-0.5">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
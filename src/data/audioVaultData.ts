export interface DeadSoundItem {
  id: string;
  name: string;
  year: string;
  category: string;
  description: string;
  synthKey: 'aol' | 'icq' | 'win95' | 'winXP' | 'skype' | 'ipodClick' | 'dialup' | 'nudge';
}

export const DEAD_SOUNDS: DeadSoundItem[] = [
  {
    id: "aol-mail",
    name: "AOL 'You've Got Mail!'",
    year: "1997",
    category: "Dial-up Era",
    description: "Voice of Elwood Edwards that gave millions of early web users their daily dopamine rush.",
    synthKey: "aol",
  },
  {
    id: "icq-uhoh",
    name: "ICQ 'Uh-Oh!'",
    year: "1998",
    category: "Instant Messenger",
    description: "The playful two-tone horn that signaled your school friend signed on with their 7-digit UIN.",
    synthKey: "icq",
  },
  {
    id: "win95-start",
    name: "Windows 95 Startup Chime",
    year: "1995",
    category: "Operating System",
    description: "Composed by ambient music pioneer Brian Eno on a Macintosh computer.",
    synthKey: "win95",
  },
  {
    id: "winxp-start",
    name: "Windows XP Bliss Chime",
    year: "2001",
    category: "Operating System",
    description: "The uplifting 4-chord orchestral fanfare of the Luna Blue desktop generation.",
    synthKey: "winXP",
  },
  {
    id: "msn-nudge",
    name: "MSN Messenger Nudge & Alert",
    year: "2005",
    category: "Instant Messenger",
    description: "The explosive screen-shaking sound that forced anyone with their speakers turned up to jump.",
    synthKey: "nudge",
  },
  {
    id: "skype-ring",
    name: "Classic Skype Incoming Ring",
    year: "2006",
    category: "VoIP Call",
    description: "The bouncy, cheerful marimba ringtone of our first cross-continent video calls.",
    synthKey: "skype",
  },
  {
    id: "dialup-handshake",
    name: "56k Dial-Up Modem Screech",
    year: "1995-2003",
    category: "Hardware",
    description: "The high-frequency carrier negotiation screech that connected humanity to cyberspace.",
    synthKey: "dialup",
  },
  {
    id: "ipod-click",
    name: "iPod Classic Click-Wheel Rattle",
    year: "2004",
    category: "Hardware",
    description: "The tactile piezo mechanical click generated inside the chassis as you spun the wheel.",
    synthKey: "ipodClick",
  },
];
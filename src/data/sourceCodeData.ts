import { EraYear } from '../types/timeMachine';

export interface SourceSnippet {
  year: EraYear;
  title: string;
  language: string;
  code: string;
  historicalContext: string;
  techHighlights: string[];
}

export const SOURCE_CODE_DATA: Record<EraYear, SourceSnippet> = {
  1995: {
    year: 1995,
    title: "Raw HTML 2.0 & Inline Table Layouts",
    language: "html",
    code: `<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<HTML>
<HEAD>
  <TITLE>Welcome to CyberZone '95</TITLE>
</HEAD>
<BODY BGCOLOR="#C0C0C0" TEXT="#000000" LINK="#0000FF" VLINK="#800080">
  <CENTER>
    <H1><FONT COLOR="#000080" FACE="Times New Roman">CYBERZONE '95</FONT></H1>
    <MARQUEE BEHAVIOR="SCROLL" DIRECTION="LEFT">*** BEST VIEWED IN NETSCAPE NAVIGATOR AT 800x600 RESOLUTION ***</MARQUEE>
    <HR WIDTH="80%">
  </CENTER>

  <TABLE BORDER="3" CELLPADDING="5" CELLSPACING="2" WIDTH="100%" BGCOLOR="#D4D0C8">
    <TR>
      <!-- Navigation Column -->
      <TD WIDTH="25%" VALIGN="TOP" BGCOLOR="#FFFFFF">
        <B><FONT SIZE="2">EXPLORE:</FONT></B><BR>
        <A HREF="about.html">&#187; About Webmaster</A><BR>
        <A HREF="guestbook.cgi">&#187; Sign Guestbook</A><BR>
        <A HREF="mailto:webmaster@cyberzone.com">&#187; Send Mailto</A>
      </TD>

      <!-- Main Body -->
      <TD WIDTH="75%" VALIGN="TOP">
        <H3>Welcome to the Information Superhighway!</H3>
        <P>You are visitor number <IMG SRC="/cgi-bin/counter.pl?id=95" ALT="Counter"></P>
        <CENTER><IMG SRC="under_construction.gif" ALT="Under Construction"></CENTER>
      </TD>
    </TR>
  </TABLE>
</BODY>
</HTML>`,
    historicalContext: "Before CSS was supported, all visual layouts were created using nested <table> elements, uppercase tag conventions, and inline <font> wrappers. Stylesheets did not exist yet.",
    techHighlights: ["HTML 2.0", "Nested <table> grids", "Inline <font> tags", "<marquee> element", "Perl CGI counters"]
  },
  2000: {
    year: 2000,
    title: "Macromedia Flash Embedding & Framesets",
    language: "html",
    code: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<HTML>
<HEAD>
  <TITLE>Mega-Portal 2000 | Flash Golden Age</TITLE>
  <SCRIPT LANGUAGE="JavaScript">
    <!--
    function openPopup(url) {
      window.open(url, 'win', 'width=640,height=480,scrollbars=yes');
    }
    // -->
  </SCRIPT>
</HEAD>

<!-- The Classic Frameset Era -->
<FRAMESET ROWS="80,*" FRAMEBORDER="NO" BORDER="0" FRAMESPACING="0">
  <FRAME SRC="top_nav.html" NAME="topFrame" SCROLLING="NO" NORESIZE>
  <FRAME SRC="main_content.html" NAME="mainFrame">
</FRAMESET>

<!-- Main Flash Embed Wrapper -->
<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,2,0"
        WIDTH="550" HEIGHT="400">
  <PARAM NAME="movie" VALUE="intro_animation.swf">
  <PARAM NAME="quality" VALUE="high">
  <PARAM NAME="bgcolor" VALUE="#000033">
  <EMBED SRC="intro_animation.swf" QUALITY="high" BGCOLOR="#000033"
         WIDTH="550" HEIGHT="400" TYPE="application/x-shockwave-flash"
         PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">
  </EMBED>
</OBJECT>
</HTML>`,
    historicalContext: "The turn of the millennium was dominated by Macromedia Flash movies embedded via dual <object> and <embed> tags to satisfy both Internet Explorer and Netscape. Framesets split the browser into multiple sub-pages.",
    techHighlights: ["Macromedia Flash 4 SWF", "Dual <object>/<embed> tags", "<frameset> architectures", "JavaScript popup windows"]
  },
  2005: {
    year: 2005,
    title: "Web 2.0, CSS Floats & jQuery AJAX",
    language: "javascript",
    code: `/* Web 2.0 Clearfix & Glossy Badge Stylesheet */
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.glossy-btn {
  background: url('/img/button_gloss_sprite.png') 0 0 repeat-x;
  border: 1px solid #1565c0;
  color: #ffffff;
  font-family: Tahoma, Verdana, sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  float: left;
  padding: 6px 14px;
}

/* Early jQuery AJAX & MSN Nudge Logic */
$(document).ready(function() {
  $('#send-nudge-btn').click(function(e) {
    e.preventDefault();
    
    // Asynchronous JavaScript and XML (AJAX)
    $.ajax({
      type: 'POST',
      url: '/api/msn/nudge.php',
      data: { user: 'xX_Sk8erBoi_Xx', action: 'nudge' },
      dataType: 'json',
      success: function(response) {
        // Violently shake viewport
        $('#chat-window').effect('shake', { times: 3, distance: 8 }, 400);
        new Audio('/sounds/nudge.wav').play();
      }
    });
  });
});`,
    historicalContext: "Web 2.0 introduced AJAX (no more full-page reloads!) and CSS float-based layouts. Developers relied on CSS sprite images for gradients and jQuery to smooth over browser quirks.",
    techHighlights: ["AJAX asynchronous requests", "jQuery DOM manipulation", "PNG sprite backgrounds", "CSS float clearfix hacks"]
  },
  2010: {
    year: 2010,
    title: "CSS3 Gradients, Skeuomorphism & Media Queries",
    language: "css",
    code: `/* Skeuomorphic Glass & Stitched Leather (iOS 4 / early Facebook) */
.skeuo-card {
  background: -webkit-gradient(linear, left top, left bottom,
              color-stop(0%, #f7f7f7),
              color-stop(100%, #e0e0e0));
  border: 1px solid #b3b3b3;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8),
                      0 4px 12px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8),
              0 4px 12px rgba(0, 0, 0, 0.3);
}

.aqua-button {
  background: -webkit-linear-gradient(top, #4a6984 0%, #354b60 50%, #20303e 100%);
  border: 1px solid #1a252f;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

/* The Dawn of Responsive Web Design */
@media screen and (max-width: 768px) {
  .skeuo-container {
    width: 100% !important;
    padding: 10px;
  }
}`,
    historicalContext: "Vendor prefixes (-webkit-, -moz-) exploded alongside CSS3 gradients, inset drop shadows, and Ethan Marcotte's seminal concept of Responsive Web Design for the iPhone 4.",
    techHighlights: ["CSS3 vendor prefixes", "Skeuomorphic inset shadows", "-webkit-linear-gradient", "Early Media Queries"]
  },
  2015: {
    year: 2015,
    title: "React Class Components & Flexbox Layouts",
    language: "javascript",
    code: `import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingVines } from '../actions/vineActions';

// React 0.14 Class Component
class VineFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { isLooping: true, activeIndex: 0 };
    this.handleTap = this.handleTap.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchTrendingVines());
  }

  handleTap() {
    this.setState((prevState) => ({ isLooping: !prevState.isLooping }));
  }

  render() {
    const { vines, loading } = this.props;
    if (loading) return <div className="material-spinner" />;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header className="material-appbar" style={{ elevation: 4 }}>
          <h1>Vine 6-Second Feed</h1>
        </header>
        {vines.map(vine => (
          <article key={vine.id} className="flat-card" onClick={this.handleTap}>
            <video src={vine.videoUrl} loop={this.state.isLooping} autoPlay />
          </article>
        ))}
      </div>
    );
  }
}

export default connect(state => ({ vines: state.vines.list }))(VineFeed);`,
    historicalContext: "The SPAs (Single Page Applications) revolution took over. React class components with lifecycle methods (`componentDidMount`), Redux store architectures, and pure Flexbox layouts replaced older jQuery workflows.",
    techHighlights: ["React Class Components", "Redux State Store", "CSS Flexbox", "Material Design Paper Z-Index"]
  },
  2020: {
    year: 2020,
    title: "TypeScript, Tailwind Utility Soup & React Hooks",
    language: "typescript",
    code: `import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';

interface DiscordUser {
  id: string;
  username: string;
  status: 'online' | 'idle' | 'dnd';
  listeningTo?: string;
}

export const BentoStudyLounge: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [users, setUsers] = useState<DiscordUser[]>([]);

  useEffect(() => {
    const socket = new WebSocket('wss://api.time-machine.io/live');
    socket.onmessage = (event) => setUsers(JSON.parse(event.data));
    return () => socket.close();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Bento Visualizer Card */}
      <div className="md:col-span-2 bg-[#161b22] border border-gray-800/80 rounded-2xl p-6 backdrop-blur-md shadow-2xl flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-indigo-400">#lofi-beats-24-7</span>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all active:scale-95"
        >
          {isPlaying ? 'Pause Stream' : 'Play Lo-Fi'}
        </button>
      </div>
    </div>
  );
};`,
    historicalContext: "The pandemic era popularized pure TypeScript, Tailwind CSS utility classes, Next.js full-stack architectures, and OLED dark-mode bento layouts.",
    techHighlights: ["TypeScript Interfaces", "Tailwind CSS Utilities", "React Hooks (useState/useEffect)", "WebSockets WebRTC"]
  },
  2026: {
    year: 2026,
    title: "Agentic Prompt Graphs & Neural Vector Streaming",
    language: "typescript",
    code: `import { createAgentPipeline, type NeuralCanvasIntent } from '@spatial/agent-engine';

// Intention-Driven Dynamic UI Engine
export const synthesizeSpatialView = async (intent: NeuralCanvasIntent) => {
  const agentMesh = await createAgentPipeline({
    localWeights: 'gpt-5-spatial-mini',
    synapseLatencyLimitMs: 0.4,
    runtime: 'edge-neural-wasm',
  });

  // Agent dynamically negotiates schema and renders DOM nodes
  const dynamicStream = await agentMesh.generateComponentTree({
    prompt: intent.userQuery,
    spatialDepth: intent.displayMetrics.depthZ,
    autoHapticFeedback: true,
  });

  return {
    status: 'synthesized_at_runtime',
    neuralMeshNode: dynamicStream.render(),
    telemetry: { inferenceLatency: '0.2ms direct' },
  };
};`,
    historicalContext: "Websites are no longer static DOM trees written by humans; they are intention-driven interfaces synthesized on-the-fly by local AI agents responding to human context.",
    techHighlights: ["Autonomous Agent Pipelines", "Intent-Driven UI Synthesis", "Neural Vector Rendering", "Spatial Micro-Haptics"]
  }
};
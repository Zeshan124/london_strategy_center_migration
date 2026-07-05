'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';

// SDK constants — sourced from env vars
const API_URL = process.env.NEXT_PUBLIC_HEYGEN_API_URL || 'https://api.liveavatar.com';
const API_KEY = process.env.NEXT_PUBLIC_HEYGEN_API_KEY || '';
const AVATAR_ID = process.env.NEXT_PUBLIC_HEYGEN_AVATAR_ID || '';
const VOICE_ID = process.env.NEXT_PUBLIC_HEYGEN_VOICE_ID || '';
const CONTEXT_ID = process.env.NEXT_PUBLIC_HEYGEN_CONTEXT_ID || '';
const LANGUAGE = process.env.NEXT_PUBLIC_HEYGEN_LANGUAGE || 'en';

// Phase state machine
const PHASE = {
  IDLE: 'idle',
  STARTING: 'starting',
  CONNECTED: 'connected',
  ERROR: 'error',
  ENDED: 'ended',
};

function AvatarSession({ onEnd }) {
  const sessionRef = useRef(null);
  const videoRef = useRef(null);
  const [phase, setPhase] = useState(PHASE.IDLE);
  const [error, setError] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isAvatarTalking, setIsAvatarTalking] = useState(false);
  const [isUserTalking, setIsUserTalking] = useState(false);
  const [isStreamReady, setIsStreamReady] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [quality, setQuality] = useState('UNKNOWN');
  const keepAliveRef = useRef(null);

  const appendMessage = useCallback((sender, text, id) => {
    setMessages(prev => {
      const last = prev[prev.length - 1];
      if (id && last?.id === id && last.sender === sender) {
        return [...prev.slice(0, -1), { ...last, text: last.text + text }];
      }
      return [...prev, { id: id || Date.now().toString(), sender, text }];
    });
  }, []);

  const startSession = useCallback(async () => {
    setPhase(PHASE.STARTING);
    setError('');
    try {
      // 1. Get session token directly from HeyGen (no server proxy — static export)
      const tokenRes = await fetch(`${API_URL}/v1/sessions/token`, {
        method: 'POST',
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mode: 'FULL',
          avatar_id: AVATAR_ID,
          avatar_persona: {
            voice_id: VOICE_ID,
            context_id: CONTEXT_ID,
            language: LANGUAGE,
          },
          is_sandbox: false,
        }),
      });

      if (!tokenRes.ok) {
        const err = await tokenRes.json().catch(() => ({}));
        throw new Error(err.message || `Token request failed: ${tokenRes.status}`);
      }

      const { data } = await tokenRes.json();
      const sessionToken = data.session_token;

      // 2. Dynamically import SDK (browser-only)
      const { LiveAvatarSession, SessionEvent, AgentEventsEnum, VoiceChatEvent, ConnectionQuality } =
        await import('@heygen/liveavatar-web-sdk');

      // 3. Create session instance
      const session = new LiveAvatarSession(sessionToken, {
        voiceChat: true,
        apiUrl: API_URL,
      });
      sessionRef.current = session;

      // 4. Wire events
      session.on(SessionEvent.SESSION_STATE_CHANGED, (state) => {
        if (state === 'CONNECTED') setPhase(PHASE.CONNECTED);
        if (state === 'DISCONNECTED') {
          clearInterval(keepAliveRef.current);
          setPhase(PHASE.ENDED);
          setIsStreamReady(false);
        }
      });

      session.on(SessionEvent.SESSION_STREAM_READY, () => {
        setIsStreamReady(true);
        if (videoRef.current) session.attach(videoRef.current);
      });

      session.on(SessionEvent.SESSION_CONNECTION_QUALITY_CHANGED, (q) => {
        setQuality(q);
      });

      session.on(AgentEventsEnum.AVATAR_SPEAK_STARTED, () => setIsAvatarTalking(true));
      session.on(AgentEventsEnum.AVATAR_SPEAK_ENDED, () => setIsAvatarTalking(false));
      session.on(AgentEventsEnum.USER_SPEAK_STARTED, () => setIsUserTalking(true));
      session.on(AgentEventsEnum.USER_SPEAK_ENDED, () => setIsUserTalking(false));

      session.on(AgentEventsEnum.USER_TRANSCRIPTION, (evt) => {
        appendMessage('user', evt.text, evt.event_id);
      });
      session.on(AgentEventsEnum.AVATAR_TRANSCRIPTION, (evt) => {
        appendMessage('avatar', evt.text, evt.event_id);
      });

      session.voiceChat.on(VoiceChatEvent.MUTED, () => setIsMuted(true));
      session.voiceChat.on(VoiceChatEvent.UNMUTED, () => setIsMuted(false));

      // 5. Start session
      await session.start();

      // 6. Keep alive every 25s
      keepAliveRef.current = setInterval(() => {
        session.keepAlive().catch(() => {});
      }, 25000);

    } catch (err) {
      console.error('Avatar session error:', err);
      setError(err.message || 'Failed to start avatar session.');
      setPhase(PHASE.ERROR);
    }
  }, [appendMessage]);

  const stopSession = useCallback(() => {
    clearInterval(keepAliveRef.current);
    sessionRef.current?.stop().catch(() => {});
    sessionRef.current?.removeAllListeners?.();
    sessionRef.current = null;
    setPhase(PHASE.ENDED);
    setIsStreamReady(false);
  }, []);

  const toggleMute = useCallback(() => {
    if (!sessionRef.current) return;
    if (isMuted) {
      sessionRef.current.voiceChat.unmute().catch(() => {});
    } else {
      sessionRef.current.voiceChat.mute().catch(() => {});
    }
  }, [isMuted]);

  const interrupt = useCallback(() => {
    sessionRef.current?.interrupt();
  }, []);

  const sendMessage = useCallback((e) => {
    e.preventDefault();
    if (!inputText.trim() || !sessionRef.current) return;
    sessionRef.current.message(inputText.trim());
    appendMessage('user', inputText.trim(), null);
    setInputText('');
  }, [inputText, appendMessage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(keepAliveRef.current);
      sessionRef.current?.removeAllListeners?.();
    };
  }, []);

  const qualityColor = quality === 'GOOD' ? 'bg-green-500' : quality === 'BAD' ? 'bg-red-500' : 'bg-gray-400';

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-28">

        {/* Idle state */}
        {phase === PHASE.IDLE && (
          <div className="text-center max-w-2xl">
            <div className="w-24 h-24 rounded-full bg-[#0E2253] border-2 border-white/20 flex items-center justify-center mx-auto mb-6 text-5xl">
              🧠
            </div>
            <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-3">London Strategy Centre · AI Advisor</p>
            <h1 className="text-3xl sm:text-4xl font-light text-white mb-4">Live Conversation with Your AI Advisor</h1>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              A real-time AI video advisor powered by HeyGen. The avatar will appear on screen, speak to you, and listen to your voice. Ask anything about AI strategy, cyber security, venture evaluation, or LSC's services.
            </p>

            {/* How it works */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left max-w-xl mx-auto">
              {[
                { icon: '🎤', title: 'Your Microphone', desc: 'Speak naturally — no camera needed. The advisor hears you and responds.' },
                { icon: '📹', title: 'AI Avatar Video', desc: 'A live AI avatar appears on screen and speaks back to you in real time.' },
                { icon: '💬', title: 'Or Type Instead', desc: 'Prefer to type? Use the text input below the video to send messages.' },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs font-bold text-white mb-1">{item.title}</p>
                  <p className="text-[11px] text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-white/30 mb-6">Your browser will ask for microphone permission — please allow it to speak with the advisor.</p>

            <button
              onClick={startSession}
              className="px-12 py-4 bg-white text-[#0E2253] font-bold rounded-xl hover:bg-white/90 transition-colors text-sm uppercase tracking-widest"
            >
              🎤 Start Live Conversation →
            </button>
          </div>
        )}

        {/* Starting */}
        {phase === PHASE.STARTING && (
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-6" />
            <p className="text-white/60 text-sm">Connecting to your AI advisor…</p>
          </div>
        )}

        {/* Error */}
        {phase === PHASE.ERROR && (
          <div className="text-center max-w-md">
            <p className="text-red-400 text-sm mb-2 font-semibold">Failed to connect</p>
            <p className="text-white/50 text-xs mb-8 leading-relaxed">{error}</p>
            <button onClick={() => setPhase(PHASE.IDLE)} className="px-8 py-3 bg-white text-[#0E2253] font-bold rounded-xl text-sm uppercase tracking-widest">
              Try Again
            </button>
          </div>
        )}

        {/* Ended */}
        {phase === PHASE.ENDED && (
          <div className="text-center max-w-md">
            <p className="text-white/70 text-base mb-6">Session ended.</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => { setMessages([]); setPhase(PHASE.IDLE); }}
                className="px-8 py-3 bg-white text-[#0E2253] font-bold rounded-xl text-sm uppercase tracking-widest"
              >
                Start New Session
              </button>
            </div>
          </div>
        )}

        {/* Connected */}
        {(phase === PHASE.CONNECTED || phase === PHASE.STARTING) && phase !== PHASE.IDLE && (
          <div className={`w-full max-w-5xl ${phase === PHASE.STARTING ? 'hidden' : 'flex'} flex-col lg:flex-row gap-6`}>

            {/* Video panel */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Status bar */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isStreamReady ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                  <span className="text-xs text-white/50 font-mono">
                    {isStreamReady ? (isAvatarTalking ? 'SPEAKING' : 'LIVE') : 'LOADING'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${qualityColor}`} title={`Connection: ${quality}`} />
                  <span className="text-[10px] text-white/30 font-mono uppercase">{quality}</span>
                </div>
              </div>

              {/* Video */}
              <div className="relative bg-black rounded-2xl overflow-hidden aspect-video">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ opacity: isStreamReady ? 1 : 0, transition: 'opacity 0.5s' }}
                />
                {!isStreamReady && (
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                    <div className="w-12 h-12 border-4 border-white/10 border-t-white/60 rounded-full animate-spin" />
                    <p className="text-white/40 text-xs">Avatar loading — please wait…</p>
                  </div>
                )}
                {/* Avatar label */}
                {isStreamReady && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-white/60" />
                    <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">LSC AI Advisor</span>
                  </div>
                )}
                {/* Talking indicators */}
                {isAvatarTalking && (
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#0E2253]/80 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] text-white font-bold uppercase tracking-wider">Speaking</span>
                  </div>
                )}
                {isUserTalking && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white font-bold uppercase tracking-wider">🎤 Listening to you…</span>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 justify-center">
                <button
                  onClick={toggleMute}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    isMuted
                      ? 'bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500/30'
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  {isMuted ? '🔇 Unmute' : '🎤 Mute'}
                </button>
                <button
                  onClick={interrupt}
                  disabled={!isAvatarTalking}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-30 transition-all"
                >
                  ⏸ Interrupt
                </button>
                <button
                  onClick={stopSession}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500/30 transition-all"
                >
                  ✕ End Session
                </button>
              </div>

              {/* Text input */}
              <form onSubmit={sendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message…"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="px-5 py-3 bg-white text-[#0E2253] font-bold rounded-xl text-sm hover:bg-white/90 transition-colors disabled:opacity-40"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Transcript panel */}
            {messages.length > 0 && (
              <div className="lg:w-80 flex flex-col">
                <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-3 px-1">Conversation</p>
                <div className="flex-1 overflow-y-auto space-y-3 max-h-[500px] pr-1">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`rounded-xl px-4 py-3 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-white/10 text-white ml-4'
                          : 'bg-[#0E2253]/60 border border-[#0E2253] text-white/80 mr-4'
                      }`}
                    >
                      <p className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${msg.sender === 'user' ? 'text-white/40' : 'text-blue-400/60'}`}>
                        {msg.sender === 'user' ? 'You' : 'LSC Advisor'}
                      </p>
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function AvatarClient() {
  return <AvatarSession />;
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Mic, MicOff, PhoneOff } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_HEYGEN_API_URL || "https://api.liveavatar.com";
const API_KEY = process.env.NEXT_PUBLIC_HEYGEN_API_KEY || "";
const AVATAR_ID = process.env.NEXT_PUBLIC_HEYGEN_AVATAR_ID || "";
const VOICE_ID = process.env.NEXT_PUBLIC_HEYGEN_VOICE_ID || "";
const CONTEXT_ID = process.env.NEXT_PUBLIC_HEYGEN_CONTEXT_ID || "";
const LANGUAGE = process.env.NEXT_PUBLIC_HEYGEN_LANGUAGE || "en";

const PHASE = { STARTING: "starting", CONNECTED: "connected", ERROR: "error" };

export default function DigitalAvatarModal({ isOpen, onClose, userName }) {
  const sessionRef = useRef(null);
  const videoRef = useRef(null);
  const keepAliveRef = useRef(null);

  const [phase, setPhase] = useState(PHASE.STARTING);
  const [error, setError] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [isStreamReady, setIsStreamReady] = useState(false);
  const [isAvatarTalking, setIsAvatarTalking] = useState(false);
  const [isUserTalking, setIsUserTalking] = useState(false);
  const [inputText, setInputText] = useState("");
  const [sessionEnded, setSessionEnded] = useState(false);

  const stopSession = useCallback(() => {
    clearInterval(keepAliveRef.current);
    sessionRef.current?.stop().catch(() => {});
    sessionRef.current?.removeAllListeners?.();
    sessionRef.current = null;
  }, []);

  const handleEndSession = useCallback(() => {
    stopSession();
    setSessionEnded(true);
    setTimeout(() => {
      onClose();
      setSessionEnded(false);
      setPhase(PHASE.STARTING);
      setIsStreamReady(false);
      setError("");
    }, 300);
  }, [stopSession, onClose]);

  // Start HeyGen session whenever modal opens
  useEffect(() => {
    if (!isOpen) return;
    setPhase(PHASE.STARTING);
    setError("");
    setIsStreamReady(false);
    setIsAvatarTalking(false);
    setIsUserTalking(false);
    setInputText("");

    let cancelled = false;

    (async () => {
      try {
        const tokenRes = await fetch(`${API_URL}/v1/sessions/token`, {
          method: "POST",
          headers: { "X-API-KEY": API_KEY, "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: "FULL",
            avatar_id: AVATAR_ID,
            avatar_persona: { voice_id: VOICE_ID, context_id: CONTEXT_ID, language: LANGUAGE },
            is_sandbox: false,
          }),
        });

        if (!tokenRes.ok) {
          const err = await tokenRes.json().catch(() => ({}));
          throw new Error(err.message || `Token request failed: ${tokenRes.status}`);
        }

        const { data } = await tokenRes.json();
        if (cancelled) return;

        const { LiveAvatarSession, SessionEvent, AgentEventsEnum, VoiceChatEvent } =
          await import("@heygen/liveavatar-web-sdk");

        if (cancelled) return;

        const session = new LiveAvatarSession(data.session_token, {
          voiceChat: true,
          apiUrl: API_URL,
        });
        sessionRef.current = session;

        session.on(SessionEvent.SESSION_STATE_CHANGED, (state) => {
          if (state === "CONNECTED") setPhase(PHASE.CONNECTED);
          if (state === "DISCONNECTED") {
            clearInterval(keepAliveRef.current);
            setIsStreamReady(false);
            onClose();
          }
        });

        session.on(SessionEvent.SESSION_STREAM_READY, () => {
          setIsStreamReady(true);
          if (videoRef.current) session.attach(videoRef.current);
        });

        session.on(AgentEventsEnum.AVATAR_SPEAK_STARTED, () => setIsAvatarTalking(true));
        session.on(AgentEventsEnum.AVATAR_SPEAK_ENDED, () => setIsAvatarTalking(false));
        session.on(AgentEventsEnum.USER_SPEAK_STARTED, () => setIsUserTalking(true));
        session.on(AgentEventsEnum.USER_SPEAK_ENDED, () => setIsUserTalking(false));

        session.voiceChat.on(VoiceChatEvent.MUTED, () => setIsMuted(true));
        session.voiceChat.on(VoiceChatEvent.UNMUTED, () => setIsMuted(false));

        await session.start();
        if (cancelled) { session.stop().catch(() => {}); return; }

        keepAliveRef.current = setInterval(() => {
          session.keepAlive().catch(() => {});
        }, 25000);

      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Failed to connect to advisor.");
          setPhase(PHASE.ERROR);
        }
      }
    })();

    return () => { cancelled = true; };
  }, [isOpen, onClose]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(keepAliveRef.current);
      sessionRef.current?.removeAllListeners?.();
    };
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") handleEndSession(); };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, handleEndSession]);

  const toggleMute = () => {
    if (!sessionRef.current) return;
    if (isMuted) {
      sessionRef.current.voiceChat.unmute().catch(() => {});
    } else {
      sessionRef.current.voiceChat.mute().catch(() => {});
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !sessionRef.current) return;
    sessionRef.current.message(inputText.trim());
    setInputText("");
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[200] flex flex-col bg-black transition-opacity duration-300 ${sessionEnded ? "opacity-0" : "opacity-100"}`}>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#0E2253] shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isStreamReady ? "bg-green-400 animate-pulse" : "bg-gray-400"}`} />
            <span className={`text-xs font-semibold tracking-wider uppercase ${isStreamReady ? "text-green-400" : "text-white/40"}`}>
              {isStreamReady ? (isAvatarTalking ? "Speaking" : "Live") : "Connecting…"}
            </span>
          </span>
          <div className="w-px h-4 bg-white/20" />
          <div>
            <p className="text-white font-bold text-sm leading-tight">LSC Digital Consultant</p>
            {userName && <p className="text-blue-200 text-xs">Welcome, {userName}</p>}
          </div>
        </div>
        <button onClick={handleEndSession} className="text-white/70 hover:text-white transition-colors p-1">
          <X size={20} />
        </button>
      </div>

      {/* Video area */}
      <div className="flex-1 relative bg-black overflow-hidden">
        {phase === PHASE.STARTING && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
            <div className="w-14 h-14 border-4 border-white/10 border-t-white/60 rounded-full animate-spin" />
            <p className="text-white/50 text-sm">Connecting to your LSC advisor…</p>
          </div>
        )}

        {phase === PHASE.ERROR && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 px-6 text-center">
            <p className="text-red-400 font-semibold">Failed to connect</p>
            <p className="text-white/40 text-sm max-w-sm">{error}</p>
            <button onClick={handleEndSession} className="px-6 py-2.5 bg-white text-[#0E2253] font-bold rounded-xl text-sm">
              Close
            </button>
          </div>
        )}

        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-contain"
          style={{ opacity: isStreamReady ? 1 : 0, transition: "opacity 0.5s" }}
        />

        {isUserTalking && (
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-white font-bold uppercase tracking-wider">🎤 Listening…</span>
          </div>
        )}
        {isAvatarTalking && (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#0E2253]/80 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] text-white font-bold uppercase tracking-wider">Speaking</span>
          </div>
        )}
      </div>

      {/* Text input */}
      <form onSubmit={sendMessage} className="flex gap-2 px-4 py-3 bg-[#0E2253]/80 shrink-0">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Or type a message…"
          className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="px-4 py-2 bg-white text-[#0E2253] font-bold rounded-xl text-sm hover:bg-white/90 transition-colors disabled:opacity-40"
        >
          Send
        </button>
      </form>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 px-6 py-4 bg-[#0E2253] shrink-0">
        <button
          onClick={toggleMute}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
            isMuted ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button
          onClick={handleEndSession}
          className="flex flex-col items-center gap-1 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-medium transition-all duration-200"
        >
          <PhoneOff size={20} />
          End Session
        </button>
      </div>
    </div>
  );
}

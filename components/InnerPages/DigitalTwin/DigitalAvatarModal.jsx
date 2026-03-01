"use client";

import { useState, useEffect } from "react";
import { X, Mic, MicOff, PhoneOff } from "lucide-react";

/**
 * DigitalAvatarModal
 *
 * Renders an in-page full-screen overlay containing the HeyGen LiveAvatar.
 * The avatar is embedded via iframe so it works immediately.
 *
 * When you install @heygen/liveavatar-web-sdk and set up <LiveAvatarProvider>
 * (see ./context.js), replace the iframe with the SDK's video component and
 * wire the mute / unmute / stop callbacks through the useVoiceChat() hook.
 *
 * Props:
 *   isOpen    {boolean}  — controls visibility
 *   onClose   {function} — called when the session ends
 *   userName  {string}   — shown in the welcome header
 */
export default function DigitalAvatarModal({ isOpen, onClose, userName }) {
  const [isMuted, setIsMuted] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);

  // Reset state whenever the modal is opened
  useEffect(() => {
    if (isOpen) {
      setIsMuted(false);
      setSessionEnded(false);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleEndSession();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleEndSession = () => {
    setSessionEnded(true);
    setTimeout(() => onClose(), 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col bg-black transition-opacity duration-300 ${
        sessionEnded ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#0E2253] shrink-0">
        <div className="flex items-center gap-3">
          {/* Live indicator */}
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-semibold tracking-wider uppercase">
              Live
            </span>
          </span>
          <div className="w-px h-4 bg-white/20" />
          <div>
            <p className="text-white font-bold text-sm leading-tight">
              LSC Digital Consultant
            </p>
            {userName && (
              <p className="text-blue-200 text-xs">Welcome, {userName}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleEndSession}
          aria-label="Close avatar session"
          className="text-white/70 hover:text-white transition-colors p-1"
        >
          <X size={20} />
        </button>
      </div>

      {/* ── Avatar iframe ── */}
      <div className="flex-1 relative">
        <iframe
          src="https://liveavatar-web-sdk-demo-ten.vercel.app/"
          className="w-full h-full border-0"
          allow="camera; microphone; autoplay; display-capture"
          allowFullScreen
          title="LSC Digital Consultant Avatar"
        />
      </div>

      {/* ── Controls bar ── */}
      <div className="flex items-center justify-center gap-6 px-6 py-4 bg-[#0E2253]/95 shrink-0">
        {/* Mute / Unmute */}
        <button
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
            isMuted
              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
          {isMuted ? "Unmute" : "Mute"}
        </button>

        {/* End session */}
        <button
          onClick={handleEndSession}
          aria-label="End session"
          className="flex flex-col items-center gap-1 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-medium transition-all duration-200"
        >
          <PhoneOff size={20} />
          End Session
        </button>
      </div>
    </div>
  );
}

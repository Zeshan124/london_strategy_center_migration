"use client";

import { useCallback, useMemo, useState } from "react";
import { useLiveAvatarContext } from "./context";
import { VoiceChatState } from "@heygen/liveavatar-web-sdk";

/**
 * useVoiceChat — controls the HeyGen LiveAvatar voice-chat session.
 *
 * Requirements before use:
 *   1. Install the SDK:  npm install @heygen/liveavatar-web-sdk
 *   2. Wrap your component tree with <LiveAvatarProvider> from ./context
 *
 * Usage:
 *   const { start, stop, mute, unmute, isActive, isMuted } = useVoiceChat();
 */
export const useVoiceChat = () => {
  const {
    sessionRef,
    isMuted,
    voiceChatState,
    isUserTalking,
    isAvatarTalking,
  } = useLiveAvatarContext();

  const [error, setError] = useState(null);

  const mute = useCallback(async () => {
    return await sessionRef.current.voiceChat.mute();
  }, [sessionRef]);

  const unmute = useCallback(async () => {
    return await sessionRef.current.voiceChat.unmute();
  }, [sessionRef]);

  const start = useCallback(async () => {
    setError(null);
    try {
      return await sessionRef.current.voiceChat.start();
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "Failed to start voice chat";
      console.warn("Voice chat start failed:", message);
      setError(message);
    }
  }, [sessionRef]);

  const stop = useCallback(() => {
    setError(null);
    return sessionRef.current.voiceChat.stop();
  }, [sessionRef]);

  const isLoading = useMemo(
    () => voiceChatState === VoiceChatState.STARTING,
    [voiceChatState]
  );

  const isActive = useMemo(
    () => voiceChatState === VoiceChatState.ACTIVE,
    [voiceChatState]
  );

  const startPushToTalk = useCallback(async () => {
    return await sessionRef.current.voiceChat.startPushToTalk();
  }, [sessionRef]);

  const stopPushToTalk = useCallback(async () => {
    return await sessionRef.current.voiceChat.stopPushToTalk();
  }, [sessionRef]);

  return {
    mute,
    unmute,
    start,
    stop,
    isLoading,
    isActive,
    isMuted,
    isUserTalking,
    isAvatarTalking,
    startPushToTalk,
    stopPushToTalk,
    error,
  };
};

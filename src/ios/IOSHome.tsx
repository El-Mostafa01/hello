import { useState } from "react";
import { Toaster } from "sonner";
import "./theme.css";
import StatusBar from "./StatusBar";
import LockScreen from "./LockScreen";
import HomeScreen from "./HomeScreen";
import ControlCenter from "./ControlCenter";
import AppSheet from "./AppSheet";
import type { AppDef } from "./apps";

/** The whole iOS-glass phone experience, hosted inside a responsive device frame. */
export default function IOSHome() {
  const [locked, setLocked] = useState(true);
  const [activeApp, setActiveApp] = useState<AppDef | null>(null);
  const [controlCenter, setControlCenter] = useState(false);

  return (
    <div className="ios-root grid min-h-screen place-items-center bg-[#0b0b10] p-0 sm:p-6">
      {/* Device frame: edge-to-edge on phones, floating mockup on desktop */}
      <div
        className="relative overflow-hidden bg-black shadow-2xl
                   h-[100dvh] w-full max-w-none rounded-none
                   sm:h-[860px] sm:w-[400px] sm:max-w-[400px] sm:rounded-[52px] sm:border-[10px] sm:border-black
                   sm:ring-1 sm:ring-white/10"
      >
        {/* Wallpaper */}
        <div className="wallpaper">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
        </div>

        {/* Screen content */}
        <div className="relative z-10 flex h-full flex-col">
          {!locked && (
            <>
              <StatusBar />
              {/* Dynamic-island-ish pill */}
              <div className="pointer-events-none flex justify-center pt-1">
                <div className="h-7 w-24 rounded-full bg-black/85" />
              </div>
              <div className="min-h-0 flex-1">
                <HomeScreen onOpen={setActiveApp} />
              </div>
            </>
          )}
        </div>

        {locked && <LockScreen onUnlock={() => setLocked(false)} />}

        {/* Control Center open tab (top-right) — only on home screen */}
        {!locked && !activeApp && !controlCenter && (
          <button
            onClick={() => setControlCenter(true)}
            aria-label="Open Control Center"
            className="absolute right-0 top-0 z-20 h-16 w-24"
          >
            <span className="anim-hint absolute right-6 top-3 h-1 w-8 rounded-full bg-white/50" />
          </button>
        )}

        {controlCenter && <ControlCenter onClose={() => setControlCenter(false)} />}
        {activeApp && <AppSheet app={activeApp} onClose={() => setActiveApp(null)} />}
      </div>

      <Toaster position="top-center" richColors />
    </div>
  );
}

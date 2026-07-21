import { useState } from "react";
import {
  Airplay,
  Cloud,
  Sun,
  BellOff,
  Play,
  Camera,
  Bookmark,
  Settings,
} from "../icons";

interface Props {
  onClose: () => void;
}

interface Toggle {
  id: string;
  label: string;
  Icon: React.ElementType;
  onColor: string;
}

const TOGGLES: Toggle[] = [
  { id: "airplane", label: "Airplane", Icon: Airplay, onColor: "#ff9500" },
  { id: "wifi", label: "Wi-Fi", Icon: Cloud, onColor: "#0a84ff" },
  { id: "bt", label: "Bluetooth", Icon: Bookmark, onColor: "#0a84ff" },
  { id: "silent", label: "Silent", Icon: BellOff, onColor: "#ff375f" },
];

/** iOS Control Center: frosted panel with glass toggle tiles + sliders. */
export default function ControlCenter({ onClose }: Props) {
  const [on, setOn] = useState<Record<string, boolean>>({ wifi: true, bt: true });
  const [brightness, setBrightness] = useState(72);

  const tile = (t: Toggle) => {
    const active = !!on[t.id];
    return (
      <button
        key={t.id}
        onClick={() => setOn((s) => ({ ...s, [t.id]: !s[t.id] }))}
        className="press glass flex flex-col items-center justify-center gap-1 rounded-[22px] py-4"
      >
        <div
          className="grid h-11 w-11 place-items-center rounded-full transition-colors"
          style={{ background: active ? t.onColor : "rgba(255,255,255,0.18)" }}
        >
          <t.Icon className="h-5 w-5 text-white" />
        </div>
        <span className="text-[11px] font-medium text-white/85">{t.label}</span>
      </button>
    );
  };

  return (
    <div
      className="absolute inset-0 z-40 flex flex-col p-4"
      style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(2px)" }}
      onClick={onClose}
    >
      <div className="anim-down space-y-3" onClick={(e) => e.stopPropagation()}>
        <div className="grid grid-cols-4 gap-3">{TOGGLES.map(tile)}</div>

        {/* Now playing */}
        <div className="glass glass-sheen relative flex items-center gap-3 rounded-[24px] p-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600">
            <Play className="h-6 w-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-semibold text-white">Glass Dreams</p>
            <p className="truncate text-[13px] text-white/70">Moiyh · SCINC</p>
          </div>
          <Camera className="h-5 w-5 text-white/80" />
        </div>

        {/* Brightness slider */}
        <div className="glass relative flex items-center overflow-hidden rounded-[24px]">
          <div
            className="absolute inset-y-0 left-0 bg-white/85"
            style={{ width: `${brightness}%` }}
          />
          <Sun className="relative z-10 ml-4 h-6 w-6 text-black/60" />
          <input
            type="range"
            min={5}
            max={100}
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="relative z-10 h-16 w-full cursor-pointer opacity-0"
            aria-label="Brightness"
          />
        </div>

        <div className="flex justify-center pt-1">
          <button
            onClick={onClose}
            className="glass press flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-medium text-white"
          >
            <Settings className="h-4 w-4" /> Close Control Center
          </button>
        </div>
      </div>
    </div>
  );
}

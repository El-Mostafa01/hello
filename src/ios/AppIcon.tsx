import type { AppDef } from "./apps";

interface Props {
  app: AppDef;
  onOpen: (app: AppDef) => void;
  showLabel?: boolean;
  size?: number;
}

/** A single glass app icon with iOS-style squircle + badge. */
export default function AppIcon({ app, onOpen, showLabel = true, size = 60 }: Props) {
  const { Icon, gradient, fg = "#ffffff", label, badge } = app;
  return (
    <button
      onClick={() => onOpen(app)}
      className="press flex flex-col items-center gap-1.5 focus:outline-none"
      aria-label={label}
    >
      <div className="relative">
        <div
          className="glass-sheen relative grid place-items-center overflow-hidden"
          style={{
            width: size,
            height: size,
            borderRadius: "var(--ios-radius-app)",
            background: gradient,
            boxShadow:
              "0 8px 20px -6px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          <Icon style={{ width: size * 0.5, height: size * 0.5, color: fg }} />
        </div>
        {badge ? (
          <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff3b30] px-1 text-[11px] font-bold text-white shadow-md ring-2 ring-black/10">
            {badge}
          </span>
        ) : null}
      </div>
      {showLabel && (
        <span
          className="max-w-[74px] truncate text-[12px] font-medium text-white"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.55)" }}
        >
          {label}
        </span>
      )}
    </button>
  );
}

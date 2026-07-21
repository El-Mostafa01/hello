import { useEffect, useState } from "react";

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 10);
    return () => clearInterval(t);
  }, []);
  return now;
}

export function formatTime(d: Date) {
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m}`;
}

export function formatDate(d: Date) {
  return d.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

/** Slim iOS status bar (top of the screen). */
export default function StatusBar({ dark = false }: { dark?: boolean }) {
  const now = useClock();
  const color = dark ? "#fff" : "#fff";
  return (
    <div
      className="flex items-center justify-between px-7 pt-2.5 text-[15px] font-semibold select-none"
      style={{ color }}
    >
      <span className="min-w-[54px]">{formatTime(now)}</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          {[3, 6, 9, 12].map((h, i) => (
            <rect key={i} x={i * 4.5} y={12 - h} width="3" height={h} rx="1" fill={color} />
          ))}
        </svg>
        {/* wifi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M8.5 2.2C11 2.2 13.3 3.2 15 4.9l-1.4 1.5C12.2 5 10.4 4.2 8.5 4.2S4.8 5 3.4 6.4L2 4.9C3.7 3.2 6 2.2 8.5 2.2Z" fill={color} />
          <path d="M8.5 6.1c1.3 0 2.5.5 3.4 1.4l-1.5 1.5c-.5-.5-1.2-.8-1.9-.8s-1.4.3-1.9.8L5.1 7.5C6 6.6 7.2 6.1 8.5 6.1Z" fill={color} />
          <circle cx="8.5" cy="10.2" r="1.4" fill={color} />
        </svg>
        {/* battery */}
        <div className="flex items-center gap-1">
          <div
            className="relative rounded-[4px] border-[1.2px]"
            style={{ width: 24, height: 12, borderColor: color, opacity: 0.9 }}
          >
            <div
              className="absolute left-[1.5px] top-[1.5px] bottom-[1.5px] rounded-[2px]"
              style={{ width: "78%", background: color }}
            />
          </div>
          <div style={{ width: 1.5, height: 4, background: color, borderRadius: 2, opacity: 0.6 }} />
        </div>
      </div>
    </div>
  );
}

export { useClock };

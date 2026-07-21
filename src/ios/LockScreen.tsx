import StatusBar, { formatTime, formatDate, useClock } from "./StatusBar";
import { Bell, Chat, Mail } from "../icons";

interface Props {
  onUnlock: () => void;
}

const NOTIFS = [
  { Icon: Mail, app: "Mail", time: "now", title: "Design review", body: "The new glass icons look 🔥" },
  { Icon: Chat, app: "Messages", time: "9:41", title: "Moiyh", body: "Home screen is ready to install." },
  { Icon: Bell, app: "Reminders", time: "8:30", title: "Today", body: "Make the Pixel feel like iOS ✨" },
];

/** iOS lock screen: giant clock, notifications, and swipe-up-to-open hint. */
export default function LockScreen({ onUnlock }: Props) {
  const now = useClock();
  return (
    <div className="absolute inset-0 z-30 flex flex-col" onClick={onUnlock}>
      <StatusBar dark />

      {/* Clock */}
      <div className="mt-8 text-center text-white">
        <p className="text-[17px] font-medium" style={{ textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
          {formatDate(now)}
        </p>
        <p
          className="-mt-2 text-[92px] font-semibold leading-none tracking-tight"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,.35)" }}
        >
          {formatTime(now)}
        </p>
      </div>

      {/* Notifications */}
      <div className="mt-auto space-y-2.5 px-4 pb-4">
        {NOTIFS.map((n, i) => (
          <div
            key={i}
            className="glass-dark anim-fade-up flex items-start gap-3 rounded-[20px] p-3"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15">
              <n.Icon className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-semibold uppercase tracking-wide text-white/70">
                  {n.app}
                </span>
                <span className="text-[12px] text-white/50">{n.time}</span>
              </div>
              <p className="truncate text-[15px] font-semibold text-white">{n.title}</p>
              <p className="truncate text-[14px] text-white/75">{n.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe hint + home indicator */}
      <div className="flex flex-col items-center gap-4 pb-4">
        <p className="anim-hint text-[13px] font-medium text-white/80">Swipe up to open</p>
        <div className="h-1.5 w-32 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

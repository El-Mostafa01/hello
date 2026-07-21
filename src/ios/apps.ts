import * as Icons from "../icons";

export interface AppDef {
  id: string;
  label: string;
  Icon: React.ElementType;
  /** CSS gradient for the icon tile background */
  gradient: string;
  /** icon glyph color */
  fg?: string;
  badge?: number;
}

const g = (from: string, to: string, dir = "160deg") =>
  `linear-gradient(${dir}, ${from}, ${to})`;

/** Home-screen apps (first "page"), mapped onto the repo's own icon set. */
export const APPS: AppDef[] = [
  { id: "facetime", label: "FaceTime", Icon: Icons.Camera, gradient: g("#34d16b", "#0f9d58") },
  { id: "calendar", label: "Calendar", Icon: Icons.CalendarDays, gradient: g("#ffffff", "#f1f1f4"), fg: "#ff3b30" },
  { id: "photos", label: "Photos", Icon: Icons.Image02, gradient: g("#fef08a", "#ec4899", "135deg") },
  { id: "camera", label: "Camera", Icon: Icons.Camera, gradient: g("#3a3a3c", "#1c1c1e") },
  { id: "maps", label: "Maps", Icon: Icons.Map, gradient: g("#7ee08a", "#2f9e63") },
  { id: "clock", label: "Clock", Icon: Icons.Clock, gradient: g("#1c1c1e", "#000000"), fg: "#ffffff" },
  { id: "weather", label: "Weather", Icon: Icons.Cloud, gradient: g("#4a9eff", "#1e63c9") },
  { id: "notes", label: "Notes", Icon: Icons.NoteEdit, gradient: g("#fff2b0", "#fbd44d"), fg: "#3a2f00" },
  { id: "wallet", label: "Wallet", Icon: Icons.CreditCard01, gradient: g("#2c2c2e", "#0a0a0a"), fg: "#ffffff" },
  { id: "health", label: "Health", Icon: Icons.Heart01, gradient: g("#ffffff", "#f1f1f4"), fg: "#ff2d55" },
  { id: "books", label: "Books", Icon: Icons.BookOpen, gradient: g("#ff9a3d", "#ff5e3a") },
  { id: "podcasts", label: "Podcasts", Icon: Icons.Headphones, gradient: g("#c264ff", "#8a2be2") },
  { id: "files", label: "Files", Icon: Icons.Folder, gradient: g("#4aa8ff", "#0a6fe0") },
  { id: "reminders", label: "Reminders", Icon: Icons.CalendarCheck, gradient: g("#ffffff", "#f1f1f4"), fg: "#ff9500" },
  { id: "globe", label: "Explore", Icon: Icons.Globe, gradient: g("#3ad1c6", "#1493c9") },
  { id: "tv", label: "TV", Icon: Icons.MonitorPlay, gradient: g("#1c1c1e", "#000000"), fg: "#ffffff" },
  { id: "icons", label: "SCINC Icons", Icon: Icons.MoreGridBig, gradient: g("#a78bfa", "#6d28d9") },
  { id: "bell", label: "Alerts", Icon: Icons.BellRing, gradient: g("#ff5e62", "#ff2d55") },
  { id: "airplay", label: "AirPlay", Icon: Icons.Airplay, gradient: g("#5b8cff", "#3a5bd9") },
  { id: "bookmark", label: "Saved", Icon: Icons.Bookmark, gradient: g("#ff9a3d", "#f5563a") },
];

/** Dock apps (persistent bottom row). */
export const DOCK: AppDef[] = [
  { id: "phone", label: "Phone", Icon: Icons.Phone, gradient: g("#4bd964", "#0f9d58") },
  { id: "messages", label: "Messages", Icon: Icons.Chat, gradient: g("#4bd964", "#12c04a"), badge: 3 },
  { id: "mail", label: "Mail", Icon: Icons.Mail, gradient: g("#4aa8ff", "#1069e0"), badge: 12 },
  { id: "music", label: "Music", Icon: Icons.Play, gradient: g("#fb6f8d", "#fa2b56") },
];

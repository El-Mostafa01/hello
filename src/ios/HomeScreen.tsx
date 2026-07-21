import { useState } from "react";
import { APPS, DOCK, type AppDef } from "./apps";
import AppIcon from "./AppIcon";
import { SearchMagnifyingGlass } from "../icons";

interface Props {
  onOpen: (app: AppDef) => void;
}

/** iOS home screen: search pill, app grid, page dots, and frosted dock. */
export default function HomeScreen({ onOpen }: Props) {
  const [query, setQuery] = useState("");

  const visible = query
    ? APPS.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()))
    : APPS;

  return (
    <div className="anim-fade-up flex h-full flex-col px-6 pt-3">
      {/* Search / Spotlight pill */}
      <div className="mx-auto mb-6 w-full max-w-sm">
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2.5">
          <SearchMagnifyingGlass className="h-4 w-4 text-white/80" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent text-[15px] text-white placeholder-white/60 focus:outline-none"
          />
        </div>
      </div>

      {/* App grid */}
      <div className="no-scrollbar flex-1 overflow-y-auto">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-x-4 gap-y-6 pb-4">
          {visible.map((app) => (
            <AppIcon key={app.id} app={app} onOpen={onOpen} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-white/70">No apps found</p>
        )}
      </div>

      {/* Page dots */}
      <div className="flex justify-center gap-1.5 py-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      </div>

      {/* Dock */}
      <div className="mx-auto mb-3 w-full max-w-md">
        <div className="glass flex items-center justify-around rounded-[30px] px-3 py-3">
          {DOCK.map((app) => (
            <AppIcon key={app.id} app={app} onOpen={onOpen} showLabel={false} size={58} />
          ))}
        </div>
      </div>
    </div>
  );
}

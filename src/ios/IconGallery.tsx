import { useState } from "react";
import { createRoot } from "react-dom/client";
import { toast } from "sonner";
import * as Icons from "../icons";
import { SearchMagnifyingGlass } from "../icons";

interface IconEntry {
  name: string;
  Component: React.ElementType;
}

/** The original SCINC icon library, presented as an "app" inside the phone. */
export default function IconGallery() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<IconEntry | null>(null);

  const filtered = Object.entries(Icons)
    .filter(([name]) => name.toLowerCase().includes(query.toLowerCase()))
    .map(([name, Component]) => ({ name, Component }));

  const copyJSX = async (name: string) => {
    try {
      await navigator.clipboard.writeText(`<${name} />`);
      toast.success("JSX copied!", { duration: 1400 });
    } catch {
      toast.error("Unable to copy JSX");
    }
  };

  const copySVG = async (Component: React.ElementType) => {
    try {
      const temp = document.createElement("div");
      const root = createRoot(temp);
      root.render(<Component className="w-6 h-6 text-black" />);
      await new Promise((r) => setTimeout(r, 50));
      const svgNode = temp.querySelector("svg");
      if (!svgNode) throw new Error("No SVG");
      const svgCode = new XMLSerializer().serializeToString(svgNode);
      await navigator.clipboard.writeText(svgCode);
      root.unmount();
      temp.remove();
      toast.success("SVG copied!", { duration: 1400 });
    } catch {
      toast.error("Unable to copy SVG");
    }
  };

  return (
    <div className="flex h-full flex-col bg-[#f2f2f7] text-gray-900">
      <div className="px-5 pb-3 pt-2">
        <h1 className="text-[34px] font-bold tracking-tight">Icons</h1>
        <p className="text-[15px] text-gray-500">430 icons · Made by Moiyh</p>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-black/[0.06] px-3 py-2">
          <SearchMagnifyingGlass className="h-4 w-4 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search icons"
            className="w-full bg-transparent text-[16px] focus:outline-none"
          />
        </div>
      </div>

      <div className="no-scrollbar grid flex-1 grid-cols-4 gap-3 overflow-y-auto px-5 pb-6">
        {filtered.map(({ name, Component }) => (
          <button
            key={name}
            onClick={() => setSelected({ name, Component })}
            className="press flex flex-col items-center gap-1.5 rounded-2xl bg-white p-3 shadow-sm"
          >
            <Component className="h-6 w-6 text-gray-800" />
            <span className="max-w-full truncate text-[10px] text-gray-500">{name}</span>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-4 mt-8 text-center text-gray-400">No icons match.</p>
        )}
      </div>

      {selected && (
        <div
          className="absolute inset-0 z-10 flex items-end justify-center bg-black/40 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="anim-pop w-full rounded-3xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-2xl bg-violet-100">
              <selected.Component className="h-10 w-10 text-gray-900" />
            </div>
            <h2 className="text-center text-lg font-semibold">{selected.name}</h2>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => copySVG(selected.Component)}
                className="press flex-1 rounded-xl bg-black py-3 text-sm font-medium text-white"
              >
                Copy SVG
              </button>
              <button
                onClick={() => copyJSX(selected.name)}
                className="press flex-1 rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-800"
              >
                Copy JSX
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

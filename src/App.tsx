import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import mob from "../public/mob.png"
import { Toaster, toast } from "sonner";
import "./App.css";
import * as Icons from "./icons";

interface IconEntry {
  name: string;
  Component: React.ElementType;
}

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<IconEntry | null>(null);

  const filteredIcons = Object.entries(Icons)
    .filter(([name]) => name.toLowerCase().includes(query.toLowerCase()))
    .map(([name, Component]) => ({ name, Component }));

  const copyJSX = async (name: string) => {
    try {
      await navigator.clipboard.writeText(`<${name} />`);
      toast.success(" JSX copied!", {
        duration: 1500,
      });
    } catch {
      toast.error("⚠️ Unable to copy JSX");
    }
  };

  const copySVG = async (Component: any) => {
    try {
      const temp = document.createElement("div");
      const root = createRoot(temp);
      root.render(<Component className="w-6 h-6 text-black" />);
      await new Promise((r) => setTimeout(r, 50));
      const svgNode = temp.querySelector("svg");
      if (!svgNode) throw new Error("No SVG found");

      const svgCode = new XMLSerializer().serializeToString(svgNode);
      await navigator.clipboard.writeText(svgCode);

      root.unmount();
      temp.remove();

      toast.success(" SVG copied!", {
        duration: 1500,
      });
    } catch {
      toast.error("⚠️ Unable to copy SVG");
    }
  };

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <div className="min-h-screen rounded-2xl  text-gray-900 flex flex-col items-center pb-20">
      <img
        src={mob}
        className="absolute z-0 inset-0 h-[300px] w-full object-cover"
      />
      <header className="z-55 w-full py-12 text-center space-y-3">
        <h1 className="text-6xl pointer-events-none font-black tracking-tight text-gray-900">
          SCINC ICONS
        </h1>
        <p className="text-gray-500 text-lg font-regular">
          Made by a Designer, Used by Developers.
        </p>
      </header>
      <div className="sticky top-4 z-40 w-full max-w-2xl mb-10  backdrop-blur-sm rounded-2xl shadow-sm">
        <input
          type="text"
          placeholder="Search icons..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-2xl text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all placeholder-gray-400"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
          >
            ✕
          </button>
        )}
      </div>
      <section className="w-full max-w-6xl grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-5 px-6">
        {filteredIcons.map(({ name, Component }) => (
          <button
            key={name}
            onClick={() => setSelected({ name, Component })}
            className="group flex flex-col items-center gap-2 bg-violet-100/30 rounded-2xl p-4 border border-gray-200 shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:scale-[1.03] transition-all"
          >
            <Component className="w-6 h-6 text-black group-hover:text-gray-700 transition-colors" />
            <p className="text-xs text-gray-500 group-hover:text-gray-700 truncate max-w-[70px] text-center">
              {name}
            </p>
          </button>
        ))}
      </section>
      {filteredIcons.length === 0 && (
        <p className="mt-12 text-gray-400">No icons match your search.</p>
      )}
      {selected && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative p-8 flex flex-col items-center animate-[fadeIn_0.25s_ease-out]">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="bg-violet-100/30 rounded-2xl p-5 mb-5">
              <selected.Component className="w-16 h-16 text-black" />
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              {selected.name}
            </h2>
            <p className="text-sm text-gray-500 mb-6">Icon component preview</p>

            <div className="flex gap-4">
              <button
                onClick={() => copySVG(selected.Component)}
                className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:opacity-90 transition-all"
              >
                Copy SVG
              </button>
              <button
                onClick={() => copyJSX(selected.name)}
                className="px-5 py-2.5 bg-gray-100 text-gray-800 rounded-xl text-sm font-medium hover:bg-gray-200 transition-all"
              >
                Copy JSX
              </button>
            </div>
          </div>
        </div>
      )}
      <p className="mt-12 text-center font-light">Made by 💜 REM</p>
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}


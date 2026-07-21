import type { AppDef } from "./apps";
import IconGallery from "./IconGallery";
import { ArrowLeftMd } from "../icons";

interface Props {
  app: AppDef;
  onClose: () => void;
}

/** Full-screen "opened app". The Icons app shows the real gallery;
 *  every other app gets a tasteful glass placeholder screen. */
export default function AppSheet({ app, onClose }: Props) {
  return (
    <div className="anim-pop absolute inset-0 z-50 overflow-hidden rounded-[44px] bg-black">
      {app.id === "icons" ? (
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-hidden pt-2">
            <IconGallery />
          </div>
        </div>
      ) : (
        <div className="relative flex h-full flex-col" style={{ background: app.gradient }}>
          <div className="absolute inset-0 opacity-30" style={{ background: app.gradient, filter: "blur(40px)" }} />
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div
              className="glass-sheen relative grid h-24 w-24 place-items-center rounded-[26px]"
              style={{ background: app.gradient, boxShadow: "0 12px 30px -8px rgba(0,0,0,.5)" }}
            >
              <app.Icon style={{ width: 48, height: 48, color: app.fg ?? "#fff" }} />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold" style={{ textShadow: "0 2px 8px rgba(0,0,0,.4)" }}>
                {app.label}
              </h1>
              <p className="mt-1 max-w-[240px] text-[15px] text-white/80">
                This is a demo screen. Swap it for the real {app.label} experience.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back pill + home indicator */}
      <button
        onClick={onClose}
        className="glass-dark press absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full py-2 pl-2 pr-3 text-[14px] font-medium text-white"
      >
        <ArrowLeftMd className="h-4 w-4" /> Home
      </button>
      <div className="absolute inset-x-0 bottom-2 flex justify-center" onClick={onClose}>
        <div className="press h-1.5 w-32 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

# SCINC iOS-Glass — an iOS 18 look for your Pixel

A **liquid-glass, iOS 18–style home screen** built with React + Vite + Tailwind,
using the SCINC icon library. It runs in the browser and installs on a Pixel
(or any Android phone) as a **PWA** — "Add to Home screen" launches it
full-screen, no address bar, like a native app.

> **Reality check:** Android/Pixel can't have its *entire* OS re-skinned to iOS
> without rooting. This is the closest no-root approach that produces something
> you actually install and use: a full-screen iOS-glass launcher/home experience.
> For theming the real system UI too, pair it with a launcher (Nova / Launcher iOS)
> — see *"Make the whole phone match"* below.

## What's inside

- **Lock screen** — giant iOS clock, live date, frosted notification stack, swipe-up hint.
- **Home screen** — glass "squircle" app icons with gradients & badges, Spotlight search, page dots, frosted dock, dynamic-island pill.
- **Control Center** — frosted toggle tiles (Wi-Fi/Bluetooth/etc.), now-playing card, working brightness slider — with real `backdrop-blur` over the home screen.
- **App open/close** — tap any icon for a full-screen app view; the **SCINC Icons** app embeds the original 430-icon library (search + copy SVG/JSX).
- **PWA** — installable, full-screen `standalone`, offline-capable via a service worker, with generated maskable app icons.

Everything glassy uses genuine `backdrop-filter: blur() saturate()` with layered
specular highlights, plus an animated gradient-blob wallpaper.

## Run it

```bash
npm install
npm run dev          # open the printed http://localhost:5173
```

Production build / local preview:

```bash
npx vite build
npx vite preview     # serves the built PWA on http://localhost:4173
```

## Install on your Pixel

1. Deploy the built `dist/` to any HTTPS host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
   *(A PWA must be served over HTTPS to be installable.)*
2. On the Pixel, open the URL in **Chrome**.
3. Menu **⋮ → Add to Home screen → Install**.
4. Launch it from the home screen — it opens full-screen as **iOS-Glass**.

> Testing on your local Wi-Fi instead? Run `npm run dev -- --host` and open the
> Network URL on the phone. Install prompts still need HTTPS, so a deployed
> build is the reliable path.

## Make the whole phone match (optional, no root)

To push the iOS feel onto the *actual* Android system UI:

1. **Launcher:** install *Nova Launcher* (or a dedicated "Launcher iOS 18" app).
2. **Icon pack:** apply an iOS-style pack, or export glyphs from the SCINC Icons app here.
3. **Wallpaper:** use a blurred gradient like the one in this app.
4. **Widgets:** *KWGT* for glass clock/weather widgets.
5. Pin this PWA to the dock for the glass Control-Center / lock-screen feel.

## Project layout

```
src/ios/
  IOSHome.tsx       # orchestrator: device frame, wallpaper, screen routing
  LockScreen.tsx    # clock + notifications + swipe hint
  HomeScreen.tsx    # search, app grid, dock, page dots
  ControlCenter.tsx # frosted toggles, now-playing, brightness
  AppSheet.tsx      # full-screen opened-app view
  IconGallery.tsx   # the original SCINC icon library, as an "app"
  AppIcon.tsx       # a single glass squircle icon
  StatusBar.tsx     # live clock + signal/wifi/battery
  apps.ts           # app + dock definitions (icon -> gradient mapping)
  theme.css         # glass utilities, wallpaper, motion
scripts/
  gen-pwa-icons.py  # regenerates the PWA app icons in /public
```

Regenerate the app icons any time with `python3 scripts/gen-pwa-icons.py`.

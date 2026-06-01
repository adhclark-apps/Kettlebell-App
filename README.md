# Iron & Function — Kettlebell PWA

Your personal kettlebell training app. Works on iPhone as a home screen app.

## Files in this folder
- `index.html` — the entire app
- `manifest.json` — makes it installable as a PWA
- `sw.js` — service worker for offline support
- `icon-192.png` — app icon (home screen)
- `icon-512.png` — app icon (splash screen)

---

## Deploy to GitHub Pages (first time)

1. Go to github.com and sign in
2. Click the **+** button → **New repository**
3. Name it `kettlebell` (or anything you like)
4. Set to **Public**, click **Create repository**
5. Click **uploading an existing file**
6. Drag ALL 5 files from this folder into the upload area
7. Click **Commit changes**
8. Go to **Settings** → **Pages** → under Source, select **main** branch → **Save**
9. Your app will be live at: `https://YOUR-USERNAME.github.io/kettlebell`

---

## Connect to Netlify (auto-deploy on every update)

1. Go to netlify.com and sign in with GitHub
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** → select your `kettlebell` repo
4. Leave all settings as default → **Deploy site**
5. Done — Netlify auto-deploys every time you update files on GitHub

---

## Install on your iPhone

1. Open your app URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share** button (box with arrow)
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add**
5. The app icon appears on your home screen — tap to launch full screen

---

## Updating the app in the future

1. Get updated files from Claude
2. Go to your GitHub repo
3. Click the file you want to update → click the pencil ✏️ icon → paste new code → Commit
   OR drag-and-drop new files to replace old ones
4. Netlify auto-publishes within 30 seconds
5. Pull down to refresh the app on your phone to get the update

---

## Features
- ✅ 4-session A/B training program
- ✅ ▶ WATCH buttons — YouTube tutorials for every exercise
- ✅ ⏱ REST TIMER — 60/90/120s with visual ring countdown + vibration
- ✅ 📋 WORKOUT LOG — tap to log sessions, stored on your device
- ✅ 📈 PROGRESS TRACKER — session counts, phase indicator, completion bar
- ✅ 🗺️ PLAN page — full program details, progression map, equipment guide
- ✅ Works fully offline after first load
- ✅ iPhone home screen installable (no App Store needed)

# Dad + Kids Bank Fishing Dashboard — v1.2.0

A phone-first static fishing dashboard built for bank fishing around Kingwood / north Houston.

## What it does
- Select a fishing location.
- Select Today, Tomorrow, Saturday or Sunday.
- Toggle Morning (5–10 AM) or Evening (5–10 PM).
- Automatically clips the suggested fishing window to the actual park/access window.
- Pulls forecast temperature, wind and rain probability from Open-Meteo.
- Generates a simple family-fishing score.
- Auto brightness/display mode: daylight UI in brighter conditions and dim low-light UI before/after daylight, with Bright/Dim manual overrides.
- Three practical bank-fishing start areas for every location: Start Here, Try Next, Backup.
- Shows target fish, first bait, where to cast and a kid-success plan.
- Includes a local-only memory log stored in the phone/browser.
- Works as a simple installable web app after deployment.

## Deploy to GitHub Pages
1. Create a new GitHub repository, for example `dad-kids-bank-fishing`.
2. Upload all files from this folder to the root of the repository.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select your default branch (usually `main`) and `/ (root)`.
6. Save.
7. After GitHub publishes the site, open the Pages URL on your phone.
8. On iPhone: Share → **Add to Home Screen**. On Android/Chrome: menu → **Add to Home screen / Install app**.

## Auto brightness note
A normal web page cannot change the phone's hardware brightness slider. This feature changes the dashboard itself for outdoor daylight vs low-light use. Auto mode uses sunrise/sunset when available and falls back to local time; tap the display button to force Bright or Dim.

## Design notes
The fishing score is intentionally a practical family-trip heuristic, not a prediction of fish behavior. It weighs usable access time, wind, rain and temperature. Seasonal fish guidance is handled separately so white bass do not overpower better kid targets outside the spring run.

## Current locations
- River Grove Park
- Alexander Deussen Park
- Stubblefield Lake Recreation Area
- Lake Livingston State Park
- Huntsville State Park / Lake Raven
- Lake Houston Wilderness Park

## Data / source notes
Official reference links are embedded in the app. Park hours and access can change; posted signs and official notices win.

Weather: Open-Meteo (no API key required).


## Memory storage and backup
The Memory Log uses the browser's `localStorage` for the deployed site's web address. Memories are not committed to GitHub and are not automatically synced to other devices. They normally survive normal refreshes and dashboard updates at the same URL, but clearing site/browser data, changing domains, or removing app/browser data can erase them.

Use **Export Memories** in the dashboard to download a JSON backup periodically.

## v1.2 trip-decision features
- Best 90-minute fishing block inside the chosen morning/evening and park-access window.
- Simple family safety override for thunderstorm risk, extreme heat, strong wind/gusts and very high rain probability.
- “What I'd do right now” card with kid rig, Dad rig, casting target and move rule.
- Forecast refresh timestamp and manual refresh control.
- Navigation search buttons on Start Here / Try Next / Backup bank areas.
- Memory fields for fish caught, kid rating and whether a photo was taken.

# Dad + Kids Bank Fishing Dashboard

A phone-first static fishing dashboard built for bank fishing around Kingwood / north Houston.

## What it does
- Select a fishing location.
- Select Today, Tomorrow, Saturday or Sunday.
- Toggle Morning (5–10 AM) or Evening (5–10 PM).
- Automatically clips the suggested fishing window to the actual park/access window.
- Pulls forecast temperature, wind and rain probability from Open-Meteo.
- Generates a simple family-fishing score.
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

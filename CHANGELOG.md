# Changelog

## v1.2.0 — 2026-09-01
### Added
- Best 90-minute fishing window inside the selected morning/evening and actual park-access window.
- “What I’d do right now” card with where to start, kid rig, Dad rig, casting direction and 15–20 minute move rule.
- Kid safety override for forecast thunderstorm risk, extreme feels-like heat, strong wind/gusts and very high rain probability.
- Forecast-updated timestamp and manual Refresh control.
- Navigation buttons for Start Here, Try Next and Backup bank areas.
- Memory fields for fish caught, kid rating and whether a photo was taken.
- Export Memories button that downloads a JSON backup of the locally stored memory log.

### Improved
- Seasonal access-hour logic remains location-aware, including Alexander Deussen Park’s winter/summer closing-time change.
- Forecast request now includes apparent temperature, weather code and wind gusts while keeping the UI compact.
- Fishing recommendations continue to favor simple high-probability kid bites rather than adding boat-style complexity.
- Offline/service-worker cache bumped for the V1.2 deployment.

## v1.1.1 — 2026-09-01
### Fixed
- Corrected light-mode text contrast across paragraphs, kid-plan steps, checklists, access notes, best-spot metadata, badges and footer text.
- Updated the fishing-score ring track and center to follow the active display theme.
- Improved placeholder contrast in Bright mode.
- Bumped the offline/service-worker cache so phones receive the corrected stylesheet after deployment.

## v1.1.0 — 2026-09-01
### Added
- Auto brightness/display control with Auto, Bright and Dim modes.
- Auto mode uses sunrise/sunset when available for the selected location on Today, with a time-of-day fallback.
- Three concise bank-fishing starting areas for every location: Start Here, Try Next and Backup.
- Each bank area includes why to fish it, likely targets and a simple casting instruction.

### Improved
- Alexander Deussen Park now uses official seasonal hours: 6 AM–9 PM March–October and 6 AM–7 PM November–February.
- River Grove access window now reflects the typical later Friday/weekend closing pattern in the planner.
- Kept the interface intentionally simple and phone-first.

## v1.0.0 — 2026-09-01
### Added
- Initial phone-first Dad + Kids Bank Fishing dashboard.
- Six bank-fishing locations around Kingwood / north Houston.
- Morning-only (5–10 AM) and evening-only (5–10 PM) planning.
- Access-hour clipping so closed parks are not treated as usable fishing time.
- Live Open-Meteo forecast integration for temperature, wind and rain probability.
- Family-fishing score.
- Season-aware white bass guidance.
- Kid-success plans that pivot to bluegill, catfish, crappie or bass when appropriate.
- One-bank-bag packing checklist.
- Local browser memory log for catches, funny quotes and trip memories.
- GitHub Pages / install-to-phone support.
- Subtle version display in dashboard/footer.

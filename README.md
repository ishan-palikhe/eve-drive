# Eve Drive

A lightweight, landscape-friendly personal driving dashboard PWA for the BYD Sealion 6.

## Deploy

GitHub Pages is configured through the workflow in `.github/workflows/pages.yml`. In the repository settings, set Pages source to **GitHub Actions** if it is not already selected.

## Install on Android

1. Open the published Pages URL in Chrome on the Galaxy phone.
2. Open Chrome menu → **Install app** (or **Add to Home screen**).
3. Launch Eve Drive from the home screen.

## Current limitations

- This is a dashboard launcher, not a vehicle integration. It does not read BYD battery, speed, range, climate, or other vehicle telemetry.
- The map panel is a visual placeholder; destination search opens Google Maps.
- Music opens YouTube Music; playback controls and track metadata are not integrated.
- Weather and phone tiles are guidance/placeholders, not live services.
- Screen mirroring to the car is handled separately by ScreenOnAuto; Eve Drive itself does not install on the BYD head unit.

No analytics, account, or backend are used.
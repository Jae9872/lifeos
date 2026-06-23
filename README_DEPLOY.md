# Jae Life OS — deploy to Azure

This folder is a complete static web app (PWA). Exercise GIFs load on first
online open and are cached by the service worker, so the app then works fully
offline. Sessions sync to your Google Sheet via the URL set in Settings.

## Option A — Azure Static Web Apps (recommended, free tier)
1. Install the CLI:  npm i -g @azure/static-web-apps-cli
2. Log in:  swa login
3. From this folder:  swa deploy ./ --env production
   (or push this folder to a GitHub repo and create a Static Web App in the
    Azure Portal pointing app location "/" with no build step.)

## Option B — Azure Storage static website (simplest, no CLI)
1. Create a Storage account > Static website > Enabled. Index doc: index.html
2. Upload ALL files in this folder to the $web container (Portal > Upload).
3. Open the primary endpoint URL.

## After deploy
- Open the app once while online so the GIFs cache for offline use.
- On iPhone: Share > Add to Home Screen. On Android: Install app.
- Set your Google Sheet sync URL in the app's Settings (gear icon).

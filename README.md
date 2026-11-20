# Join Desktop (fixed fork)

An official desktop app for [Join by Joaoapps](https://joaoapps.com/join/) built in [Electron](https://www.electronjs.org/).

Learn more about it [here](https://joaoapps.com/join/desktop/).

Download the Join app [here](https://play.google.com/store/apps/details?id=com.joaomgcd.join).

---

## Why this fork exists

Since mid-2024 the Google sign-in of Join Desktop fails in every browser with:

> *This request contains scopes that cannot be requested together.*

The reason: signing in used to redirect through the **Join website**, and that sign-in requests a combination of Google OAuth scopes Google no longer allows in a single request. This was never fixable in a browser setting – it had to be fixed in the app.

### What this fork changes

- **Sign-in now talks to Google directly.** Join Desktop builds its own Google OAuth request (basic profile + Drive app-folder scope, `access_type=offline` for a refresh token) and opens it in your default browser. The response lands on the app's built-in local server, exactly like before – just without the broken detour through the Join website.
- The redirect URI used for the token exchange is now taken from the actual sign-in request instead of being hard-coded.
- A broken, empty `code_challenge` parameter was removed from the web sign-in helper.
- Build tooling: electron-builder pinned to a working version, Windows targets are now `portable` (single exe) and `nsis` (installer). Version bumped to 1.1.4 so it won't be "updated" back to the broken upstream release.

## Downloads

Build it yourself or grab the latest exe from this fork's **Releases** page (`join_portable.exe` = single file without installation, `Join.Desktop.Setup.*.exe` = installer). Every push to `master` automatically builds a fresh release via GitHub Actions (`.github/workflows/build.yml`).

## Using your own Google OAuth client (optional)

By default the app still uses Joaoapps' original OAuth client. If you prefer your own credentials, create an **OAuth client of type "Desktop app"** in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) (no redirect URI configuration needed – loopback redirects are allowed implicitly) and put a file named

```
oauth.client.json
```

with this content into the app's user data folder (`%APPDATA%\Join Desktop\` on Windows):

```json
{
  "client_id": "your-client-id.apps.googleusercontent.com",
  "client_secret": "your-client-secret"
}
```

Restart Join Desktop and sign in again.

## Building

```bash
npm install --legacy-peer-deps --ignore-scripts
npx electron-builder build --win portable nsis --publish never
```

The finished files end up in `dist/`.

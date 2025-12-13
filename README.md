# Jimmy Glasscock — EPK (React + Vite)

A mobile-first, dark-mode electronic press kit site for **Jimmy Glasscock**.

## Quick start
```bash
npm install
npm run dev
```

## Add your hero video + poster
Put files here:
- `public/media/hero.mp4` (your looping stand-up montage)
- `public/media/hero.jpg` (poster fallback)

Tip: If you export video, H.264 MP4 is the safest format for phones.

## Add photos
1) Drop photos into `public/photos/`
2) List their filenames in `src/App.tsx` inside `PHOTO_FILENAMES`

## Deploy to GitHub Pages (root domain)
To deploy to `https://jimmyglasscock.github.io/`, your repo must be named:
- `jimmyglasscock.github.io`

This project includes a GitHub Actions workflow to build + deploy automatically.

### Steps
1. Create the repo `jimmyglasscock.github.io`
2. Push this code to `main`
3. In GitHub: **Settings → Pages → Source: GitHub Actions**

After that, every `git push` deploys.

## Customize copy
Open `src/App.tsx` and edit the text in the Hero + Bio sections.

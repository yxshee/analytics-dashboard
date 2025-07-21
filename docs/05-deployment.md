# Deployment (React)

## Build
From the `code/` directory:

```sh
npm run build
```

Artifacts are output to `code/dist`.

## Vercel
- Project root: `code`
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: default is fine; ensure a fallback to `/index.html` for client-side navigation.

## Netlify
- Base directory: `code`
- Build command: `npm run build`
- Publish directory: `dist`
- Add a `_redirects` file with `/* /index.html 200` for SPA routing if needed.

## Custom Domain
Attach your domain via your hosting provider and point it to the deployed app.

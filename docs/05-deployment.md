# Deployment (React)

## Build
From the `code/` directory:

```sh
npm run build
```

Artifacts are output to `code/dist`.

## Vercel (Recommended)

The project includes a `vercel.json` configuration file for easy deployment:

```json
{
  "buildCommand": "cd code && npm run build",
  "outputDirectory": "./code/dist",
  "installCommand": "cd code && npm install"
}
```

### Deploy Steps:
1. Connect your GitHub repository to Vercel
2. Vercel auto-detects the configuration
3. Deploy automatically on every push to main

### Manual Deploy:
```sh
npm i -g vercel
vercel --prod
```

## Netlify
- Base directory: `code`
- Build command: `npm run build`
- Publish directory: `dist`
- Add a `_redirects` file with `/* /index.html 200` for SPA routing if needed.

## Custom Domain
Attach your domain via your hosting provider and point it to the deployed app.

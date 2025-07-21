# 🚀 Vercel Deployment Guide

## Quick Deploy

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yxshee/admybrand-dashboard)

### Option 2: Manual Deployment

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy from GitHub**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings from `vercel.json`

3. **Deploy from CLI** (if you have Vercel CLI)
   ```bash
   vercel --prod
   ```

## Configuration

The project is configured via `vercel.json`:

```json
{
  "buildCommand": "cd code && npm run build",
  "outputDirectory": "./code/dist", 
  "installCommand": "cd code && npm install",
  "devCommand": "cd code && npm run dev"
}
```

## Environment Variables

No environment variables are required for this project. All data is mocked/simulated.

## Custom Domain

1. In your Vercel dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow Vercel's DNS configuration instructions

## Troubleshooting

### Build Fails
- Ensure Node.js version is 18+ in Vercel settings
- Check that all dependencies in `code/package.json` are correct

### 404 on Refresh
- The `vercel.json` includes SPA rewrites to handle client-side routing
- All routes fallback to `/index.html`

### Performance
- Static assets are cached for 1 year via headers in `vercel.json`
- Security headers are applied (Content-Type-Options, Frame-Options, XSS-Protection)

## Build Logs

If deployment fails, check the build logs in your Vercel dashboard for specific error messages.

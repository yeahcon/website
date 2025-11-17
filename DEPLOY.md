# Deployment Instructions

## GitHub Pages Deployment

Your portfolio is now configured for static export and GitHub Pages deployment.

### Steps to Deploy:

1. **Push to GitHub:**
   \`\`\`bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   \`\`\`

2. **Build the static site locally:**
   \`\`\`bash
   npm install
   npm run export
   \`\`\`
   This creates an `out` folder with your static site.

3. **Deploy to GitHub Pages:**
   
   **Option A: Using a gh-pages branch**
   \`\`\`bash
   npm install -g gh-pages
   gh-pages -d out
   \`\`\`

   **Option B: Manual deployment**
   - Copy contents of `out` folder
   - Push to `gh-pages` branch
   - Enable GitHub Pages in repo settings

4. **Enable GitHub Pages:**
   - Go to your repo settings on GitHub
   - Navigate to "Pages" section
   - Select `gh-pages` branch as source
   - Your site will be live at: `https://yourusername.github.io/repo-name`

## Alternative: Vercel (Recommended)

For the easiest deployment with full Next.js features:
- Click the "Publish" button in v0
- Or connect your GitHub repo at vercel.com
- Automatic deployments on every push
- Free custom domain support

## Digital Ocean App Platform

1. Connect your GitHub repository
2. Digital Ocean auto-detects Next.js
3. Set build command: `npm run build`
4. Set run command: `npm start`
5. Deploy (requires server environment, not static)

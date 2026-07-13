# Portfolio Website - Shivam Sonawane

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a dynamic video background, smooth animations, and a beautiful UI showcasing projects, skills, experience, and more.

## 🚀 Technologies Used

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)

## 🛠️ Local Development

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📦 Deploy to GitHub Pages

This guide will walk you through deploying your portfolio to GitHub Pages.

### Method 1: Using GitHub Actions (Recommended)

This method automatically deploys your site whenever you push to the main branch.

#### Step 1: Update Vite Configuration

The `vite.config.ts` file needs to be configured with your repository name. Update the `base` property:

```typescript
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/your-repo-name/' : '/',
  // ... rest of config
}));
```

Replace `your-repo-name` with your actual GitHub repository name.

#### Step 2: Create GitHub Actions Workflow

1. Create the following directory structure in your project:
```
.github/
  workflows/
    deploy.yml
```

2. Create `deploy.yml` file with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Change to 'master' if your default branch is master

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the changes

#### Step 4: Push Your Code

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

GitHub Actions will automatically build and deploy your site. Your portfolio will be available at:
```
https://yourusername.github.io/your-repo-name/
```

### Method 2: Manual Deployment

If you prefer to deploy manually:

#### Step 1: Update Vite Config

Update `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/your-repo-name/' : '/',
  // ... rest of config
}));
```

#### Step 2: Build the Project

```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

#### Step 3: Deploy to GitHub Pages

**Option A: Using gh-pages branch**

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

**Option B: Using GitHub Pages branch**

1. Build the project:
```bash
npm run build
```

2. Create a new branch called `gh-pages`:
```bash
git checkout -b gh-pages
```

3. Copy contents of `dist` folder to root:
```bash
# On Windows PowerShell
Copy-Item -Path dist\* -Destination . -Recurse -Force

# On Mac/Linux
cp -r dist/* .
```

4. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. In GitHub repository settings, set source to `gh-pages` branch

### Method 3: Using GitHub CLI

1. Build the project:
```bash
npm run build
```

2. Deploy using GitHub CLI:
```bash
gh pages deploy dist --branch gh-pages
```

## 🔧 Troubleshooting

### Issue: Assets not loading correctly

**Solution**: Make sure the `base` path in `vite.config.ts` matches your repository name exactly (case-sensitive).

### Issue: 404 errors on page refresh

**Solution**: This is normal for single-page applications. GitHub Pages doesn't support client-side routing by default. Consider:
- Using hash routing (`#`) instead of browser routing
- Adding a `404.html` file that redirects to `index.html`

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
      location.replace('/your-repo-name/');
    </script>
  </head>
  <body></body>
</html>
```

### Issue: Video not playing

**Solution**: Ensure your video file (`animation.mov`) is included in the build. Large video files might need to be hosted externally (e.g., on a CDN) for better performance.

## 📝 Custom Domain Setup

1. Add a `CNAME` file in the `public` folder with your domain:
```
yourdomain.com
```

2. Configure DNS records:
   - Type: `CNAME`
   - Name: `www` (or `@` for root domain)
   - Value: `yourusername.github.io`

3. In GitHub repository settings → Pages, add your custom domain

## 🎨 Customization

- Update personal information in component files
- Modify colors in `src/index.css`
- Replace video background in `src/assets/animation.mov`
- Update project data in respective section components

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Shivam Sonawane**
- GitHub: [@ShivamSonawane2003](https://github.com/ShivamSonawane2003)
- LinkedIn: [shivam-sonawane](https://in.linkedin.com/in/shivam-sonawane-582b48346)
- Email: sasonawane2003@gmail.com

---

Made with ❤️ by Shivam Sonawane

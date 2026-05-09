# Deployment Guide: Green Build Edu

This document outlines the steps to deploy the **EcoNirmithi Green Building Encyclopedia** to professional hosting environments.

## Prerequisites
1.  A GitHub repository containing the project code.
2.  An account on a hosting provider (Vercel, Netlify, or GitHub Pages).

---

## Option 1: Vercel (Recommended)
Vercel is the easiest platform for Vite + React applications.

1.  **Push to GitHub**: Ensure your latest changes are pushed.
2.  **Import Project**: Log in to [Vercel](https://vercel.com) and click **"Add New" > "Project"**.
3.  **Connect GitHub**: Select your `green` repository.
4.  **Configure**:
    - **Framework Preset**: Vite.
    - **Build Command**: `npm run build`.
    - **Output Directory**: `dist`.
5.  **Deploy**: Click **"Deploy"**. Your site will be live on a `*.vercel.app` domain within seconds.

---

## Option 2: Netlify
1.  Log in to [Netlify](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2.  **Connect GitHub**: Authorize and select the repository.
3.  **Site Settings**:
    - **Branch to deploy**: `main` (or `master`).
    - **Build command**: `npm run build`.
    - **Publish directory**: `dist`.
4.  **Deploy**: Click **"Deploy site"**.

---

## Option 3: GitHub Pages
1.  **Install gh-pages**: `npm install gh-pages --save-dev`.
2.  **Modify package.json**:
    - Add `"homepage": "https://<your-username>.github.io/<repo-name>"` at the top level.
    - Add `"predeploy": "npm run build"` to `scripts`.
    - Add `"deploy": "gh-pages -d dist"` to `scripts`.
3.  **Deploy**: Run `npm run deploy` in your terminal.

---

## Critical Post-Deployment Notes

### React Router Fix (Vercel/Netlify)
Since this app uses `react-router-dom`, you need a rewrite rule to handle refreshing on sub-pages (like `/materials`).

**For Vercel**: Create a `vercel.json` in the root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**For Netlify**: Create a `_redirects` file in the `public/` directory:
```text
/* /index.html 200
```

---

> [!TIP]
> Ensure all images in `src/assets/` are included in the build by referencing them via `import` statements (already implemented in the encyclopedia pages).

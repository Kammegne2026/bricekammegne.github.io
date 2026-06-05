# Kammegne Tcheugam Brice — Academic Website (v2)

Academic website styled after the Wowchemy/Hugo Academic template (as seen on huyukuan.github.io).

## File Structure

```
index.html
assets/
  css/style.css
  js/main.js
  photo.jpg        ← profile photo
CV2026.pdf         ← add your CV here (optional, linked in nav)
README.md
```

## Deploy on GitHub Pages

1. Create a repo named `<username>.github.io`
2. Upload all files keeping the structure above
3. Go to **Settings → Pages**, select `main` branch → **Save**
4. Live at `https://<username>.github.io` within minutes

## Customise

- **Add DOI / preprint links**: In each `.pub-entry`, duplicate a `.plink-btn` and set `href` to the DOI or arXiv URL.
- **Update news**: Edit the `<ul class="news-list">` in the biography section.
- **CV link**: Place your PDF as `CV2026.pdf` in the root — it's already linked in the nav.
- **Colors**: Change `--blue` and related variables at the top of `style.css`.

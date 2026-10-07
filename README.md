# SP-Mem project website

This directory contains the standalone website for *What to Remember, What to Reveal: Privacy-Aware Memory for Conversational Agents*. It is intentionally separate from the SP-Mem implementation repository.

**Project website:** <https://sp-mem.github.io/>

The site is plain static HTML, CSS, and JavaScript. It has no package-manager dependency and no compile or bundle step.

## Start the local preview

Python 3 is the only requirement. From PowerShell:

```powershell
cd <path-to>\sp-mem.github.io
.\start-local.ps1
```

Then open <http://127.0.0.1:4174/>. The server binds only to `127.0.0.1`.

Alternative command:

```powershell
python -m http.server 4174 --bind 127.0.0.1
```

Stop the preview with `Ctrl+C` in the PowerShell window that started it.

## Continue editing later

1. Open the repository root in your editor.
2. Run `.\start-local.ps1`.
3. Open <http://127.0.0.1:4174/> and refresh after saving.

## Where to edit

- `index.html`: all visible paper content, section order, and the native HTML Table 4 values.
- `static/css/sp-mem.css`: SP-Mem-specific responsive layout for figures, tables, and the citation copy UI.
- `static/vendor/tokenflow/`: the exact TokenFlow/Bulma assets used at runtime, copied to a Pages-safe path.
- `_tokenflow-source/`: the downloaded TokenFlow template snapshot retained for provenance and comparison; the live page does not load files from this directory.
- `scripts/results-data.js`: official links, BibTeX, and the retained Figure 4 source values.
- `scripts/app.js`: link binding, figure lightboxes, and citation copying.
- `assets/images/`: the local SP-Mem paper figures, including the pure-vector `upu-results.svg` extracted from the arXiv source figure.
- `assets/fonts/`: local Google Sans and Noto Sans files.
- `TO_CONFIRM.md`: author-side items that are intentionally not displayed on the website.
- `SOURCE_NOTICE.md`: TokenFlow source, attribution, and licensing notes.

## GitHub Pages

The website is deployed at <https://sp-mem.github.io/> with the manual-only workflow in `.github/workflows/pages.yml`. Pushing the repository does not redeploy the site by itself; updates are published only after the workflow is started manually. The workflow publishes only `index.html`, `assets/`, `scripts/`, and `static/`.

See [DEPLOYMENT.md](DEPLOYMENT.md) for repository setup, authentication, Pages settings, and the final manual deployment step.

## Design boundary

The first section keeps TokenFlow’s original Bulma hierarchy and its `publication-title`, `publication-authors`, `publication-links`, and dark rounded-button styling. SP-Mem-specific CSS does not recolor or restyle that desktop header. The only header-specific addition is a responsive font-size adjustment for narrow phone screens.

The TokenFlow video, author, paper, demo, comparison, and analytics content is not included in the live SP-Mem page.


# GitHub Pages deployment

## Project and build model

- **Website source root:** the repository root
- **Framework:** static HTML with Bulma-based CSS and vanilla JavaScript
- **Dependency installation:** none
- **Build command:** none
- **Local preview:** `python -m http.server 4174 --bind 127.0.0.1`
- **Published files:** `index.html`, `assets/`, `scripts/`, `static/`, and `.nojekyll`

All browser resources use repository-relative URLs, so the site works both at a user Pages root and below a project path such as `https://<owner>.github.io/<repository>/`. The live page does not depend on `_tokenflow-source/`, `preview/`, or files outside this directory.

## Local deployment safeguards

The workflow in `.github/workflows/pages.yml` has only a `workflow_dispatch` trigger. It will not publish on `push`. When deployment is eventually requested, it assembles a clean `_site` artifact and excludes local screenshots, author notes, documentation, and the template source snapshot from the public website artifact.

## Create the independent repository

The intended private repository is `sp-mem/sp-mem.github.io`. If it does not yet exist, create it as an empty private repository without initializing a README, `.gitignore`, or license because those files already exist locally.

After the repository exists, run these commands from the website directory:

```powershell
cd <path-to>\sp-mem.github.io
git remote add origin https://github.com/sp-mem/sp-mem.github.io.git
git remote -v
```

Do not add the SP-Mem implementation repository as this website's remote.

## Authentication

This machine has Git Credential Manager configured and currently lists the GitHub account `Jensassss`. An HTTPS push should use the system credential manager and may open a browser if reauthentication is required.

If the stored login is no longer valid, authenticate through the browser without sending a password or token in chat:

```powershell
git credential-manager github login
```

Alternatively, install GitHub CLI and use its browser flow:

```powershell
winget install --id GitHub.cli
gh auth login --web --git-protocol https
gh auth status
```

## Enable and run Pages later

These steps intentionally remain undone until public deployment is approved:

1. Push the standalone website repository.
2. Open the new repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Open **Actions → Deploy GitHub Pages → Run workflow**.
5. Verify the reported Pages URL and all resource links.

The workflow is manual, so completing steps 1–3 does not publish until step 4 is explicitly run.

## Items to confirm before publication

- Confirm that `sp-mem/sp-mem.github.io` remains private until publication is approved.
- Whether the bundled `assets/fonts/google-sans-latin.woff2` may be redistributed publicly; replace it with a confirmed distributable font if needed.
- Final proceedings metadata and any citation update.

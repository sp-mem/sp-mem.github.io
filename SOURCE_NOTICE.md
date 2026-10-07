# Template source and attribution

The layout foundation in this directory was downloaded from:

- TokenFlow project page: <https://diffusion-tokenflow.github.io/>
- TokenFlow page source: <https://github.com/diffusion-TokenFlow/diffusion-TokenFlow.github.io>
- Original academic project page template: <https://github.com/eliahuhorwitz/Academic-project-page-template>

The original TokenFlow `index.html`, README, CSS, JavaScript, Font Awesome bundle, and small header images are preserved under `_tokenflow-source/`. Large TokenFlow research videos and paper-specific media were intentionally excluded because they are not used by SP-Mem.

The unchanged template files required by the live page are copied under `static/vendor/tokenflow/`. This avoids relying on an underscore-prefixed runtime path when the site is published with GitHub Pages. The copies retain the same bytes as the corresponding files in `_tokenflow-source/`.

Snapshot date: 2026-10-04. TokenFlow `main` commit at the time of download: `34d7f5670021982794d563111c34aef3b2642b01`.

The live SP-Mem `index.html` removes TokenFlow’s paper text, authors, paper links, video sections, comparison material, and tracking placeholders. The footer retains visible source attribution.

The TokenFlow page footer states that the website is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/). This attribution and license link are retained in the adapted page footer.

SP-Mem Figure 4 (`assets/images/upu-results.svg`) was converted directly from the vector-only `figures/UPU_bar_chart_gpt.pdf` contained in the arXiv 2608.16551 source package. The SVG contains vector paths only and no embedded raster image. Table 4 values in `index.html` were transcribed from the same arXiv source package.


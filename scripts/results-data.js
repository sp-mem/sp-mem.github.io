window.SP_MEM_SITE = {
  links: {
    paper: "https://arxiv.org/pdf/2608.16551",
    arxiv: "https://arxiv.org/abs/2608.16551",
    code: "https://github.com/Jensassss/SP-Mem"
  },

  citation: `@misc{wang2026whatrememberreveal,
  title         = {What to Remember, What to Reveal: Privacy-Aware Memory for Conversational Agents},
  author        = {Wang, Wenjie and Si, Wenhe and Xu, Xinyue and Xu, Yue},
  year          = {2026},
  eprint        = {2608.16551},
  archivePrefix = {arXiv}
}`,

  // Paper Figure 4 source values, retained for future editing. The live page uses
  // the original vector artwork extracted from the arXiv source PDF.
  upuSourceData: {
    tasks: ["Mixed-denied", "Privacy-only-denied", "Preference-only"],
    series: {
      "Full-context": [4.89, 1.00, 16.00],
      "Zep": [3.16, 3.25, 2.37],
      "Mem0": [3.42, 8.62, 1.74],
      "MemOS": [2.79, 4.50, 2.22],
      "SP-Mem": [1.21, 1.12, 0.33]
    }
  }
};

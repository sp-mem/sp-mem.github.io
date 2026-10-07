(function () {
  "use strict";

  const site = window.SP_MEM_SITE;
  if (!site) {
    return;
  }

  document.querySelectorAll("[data-project-link]").forEach((link) => {
    const key = link.dataset.projectLink;
    if (!site.links[key]) return;
    link.href = site.links[key];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const citationCode = document.getElementById("citation-code");
  const copyButton = document.getElementById("copy-citation");
  const copyStatus = document.getElementById("copy-status");
  citationCode.textContent = site.citation;

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    if (!copied) throw new Error("Copy command was unavailable.");
  }

  async function copyCitation() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(site.citation);
        } catch (clipboardError) {
          fallbackCopy(site.citation);
        }
      } else {
        fallbackCopy(site.citation);
      }
      copyButton.querySelector("span").textContent = "Copied";
      copyStatus.textContent = "BibTeX copied to clipboard.";
      window.setTimeout(() => {
        copyButton.querySelector("span").textContent = "Copy";
        copyStatus.textContent = "";
      }, 2200);
    } catch (error) {
      copyStatus.textContent = "Automatic copy was unavailable. Select the citation text and copy it manually.";
    }
  }

  copyButton.addEventListener("click", copyCitation);

  const lightbox = document.getElementById("figure-lightbox");
  const lightboxImage = document.getElementById("figure-lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const figureZoomButtons = Array.from(document.querySelectorAll("[data-figure-src]"));
  let lastFigureTrigger = null;

  function openFigureLightbox(trigger) {
    lastFigureTrigger = trigger;
    lightboxImage.src = trigger.dataset.figureSrc;
    lightboxImage.alt = trigger.dataset.figureAlt || "Enlarged paper figure";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    window.requestAnimationFrame(() => lightboxClose.focus());
  }

  function closeFigureLightbox() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    lightboxImage.removeAttribute("src");
    if (lastFigureTrigger) lastFigureTrigger.focus();
  }

  figureZoomButtons.forEach((button) => {
    button.addEventListener("click", () => openFigureLightbox(button));
  });

  lightboxClose.addEventListener("click", closeFigureLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeFigureLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeFigureLightbox();
  });

  const navLinks = Array.from(document.querySelectorAll(".subnav a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function updateActiveNav() {
    const nav = document.querySelector(".subnav");
    const position = window.scrollY + (nav ? nav.offsetHeight : 0) + 100;
    let active = sections[0];
    sections.forEach((section) => {
      if (section.offsetTop <= position) active = section;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", Boolean(active) && link.getAttribute("href") === `#${active.id}`);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("hashchange", updateActiveNav);
  updateActiveNav();

  const footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = "2026";
})();

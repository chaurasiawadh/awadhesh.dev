/**
 * Navbar Component
 * Handles page navigation, active link highlighting, and hash deep-links
 */

export class Navbar {
  constructor() {
    // Inline script in index.html already binds navigation for file:// / preview fallbacks
    if (window.__portfolioNavBound) {
      return;
    }

    this.navigationLinks = document.querySelectorAll('[data-nav-link]');
    this.pages = document.querySelectorAll('[data-page]');
    this.validPages = new Set(['about', 'resume', 'portfolio', 'contact']);
    this.init();
  }

  init() {
    this.navigationLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const targetPage = link.dataset.navLink;
        this.navigateToPage(targetPage, true);
      });
    });

    // Support hash deep-links: /#resume, /#portfolio, etc.
    const openFromHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (this.validPages.has(hash)) {
        this.navigateToPage(hash, false);
      }
    };

    window.addEventListener('hashchange', openFromHash);
    openFromHash();
  }

  navigateToPage(targetPage, updateHash = true) {
    if (!this.validPages.has(targetPage)) {
      return;
    }

    this.pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add('active');
        try {
          window.scrollTo(0, 0);
        } catch {
          // jsdom may not implement scrollTo
        }
      } else {
        page.classList.remove('active');
      }
    });

    this.navigationLinks.forEach((link) => {
      if (link.dataset.navLink === targetPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (updateHash) {
      const nextHash = `#${targetPage}`;
      if (window.location.hash !== nextHash) {
        history.replaceState(null, '', nextHash);
      }
    }
  }
}

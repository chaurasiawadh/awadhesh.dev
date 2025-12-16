/**
 * Navbar Component
 * Handles page navigation and active link highlighting
 */

export class Navbar {
  constructor() {
    this.navigationLinks = document.querySelectorAll('[data-nav-link]');
    this.pages = document.querySelectorAll('[data-page]');
    this.init();
  }

  init() {
    this.navigationLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const targetPage = link.dataset.navLink;
        this.navigateToPage(targetPage);
      });
    });
  }

  navigateToPage(targetPage) {
    this.pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add('active');
        window.scrollTo(0, 0);
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
  }
}

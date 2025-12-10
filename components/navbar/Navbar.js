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
    this.navigationLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        const targetPage = link.innerHTML.toLowerCase();
        this.navigateToPage(targetPage, index);
      });
    });
  }

  navigateToPage(targetPage, _linkIndex) {
    this.pages.forEach((page, pageIndex) => {
      if (page.dataset.page === targetPage) {
        page.classList.add('active');
        this.navigationLinks[pageIndex].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        page.classList.remove('active');
        this.navigationLinks[pageIndex].classList.remove('active');
      }
    });
  }
}

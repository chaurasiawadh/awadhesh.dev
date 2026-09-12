/**
 * Sidebar Component
 * Handles sidebar toggle functionality for mobile/desktop
 */

export class Sidebar {
  constructor() {
    // Inline script in index.html already binds the toggle for reliability
    if (window.__portfolioSidebarBound) {
      return;
    }

    this.sidebar = document.querySelector('[data-sidebar]');
    this.sidebarBtn = document.querySelector('[data-sidebar-btn]');
    this.init();
  }

  init() {
    if (this.sidebarBtn && this.sidebar) {
      this.sidebarBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.toggle();
      });
    }
  }

  toggle() {
    this.sidebar.classList.toggle('active');
    const isOpen = this.sidebar.classList.contains('active');
    this.sidebarBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    this.sidebarBtn.setAttribute('aria-label', isOpen ? 'Hide contacts' : 'Show contacts');
  }
}

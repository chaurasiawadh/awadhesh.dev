/**
 * Sidebar Component
 * Handles sidebar toggle functionality for mobile/desktop
 */

export class Sidebar {
  constructor() {
    this.sidebar = document.querySelector('[data-sidebar]');
    this.sidebarBtn = document.querySelector('[data-sidebar-btn]');
    this.init();
  }

  init() {
    if (this.sidebarBtn && this.sidebar) {
      this.sidebarBtn.addEventListener('click', () => {
        this.toggle();
      });
    }
  }

  toggle() {
    this.sidebar.classList.toggle('active');
  }
}

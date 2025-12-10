/**
 * @jest-environment jsdom
 */

import { Sidebar } from './Sidebar';

describe('Sidebar Component', () => {
  let sidebar;

  beforeEach(() => {
    // Set up DOM
    document.body.innerHTML = `
      <aside class="sidebar" data-sidebar>
        <button data-sidebar-btn>Toggle</button>
      </aside>
    `;
    sidebar = new Sidebar();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should initialize with sidebar element', () => {
    expect(sidebar.sidebar).toBeTruthy();
    expect(sidebar.sidebarBtn).toBeTruthy();
  });

  test('should toggle sidebar active class when button is clicked', () => {
    const toggleBtn = document.querySelector('[data-sidebar-btn]');
    const sidebarElement = document.querySelector('[data-sidebar]');

    expect(sidebarElement.classList.contains('active')).toBe(false);

    toggleBtn.click();
    expect(sidebarElement.classList.contains('active')).toBe(true);

    toggleBtn.click();
    expect(sidebarElement.classList.contains('active')).toBe(false);
  });

  test('should handle missing elements gracefully', () => {
    document.body.innerHTML = '';
    expect(() => new Sidebar()).not.toThrow();
  });
});

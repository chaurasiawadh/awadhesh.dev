/**
 * @jest-environment jsdom
 */

import { Navbar } from './Navbar';

describe('Navbar Component', () => {
  let navbar;

  beforeEach(() => {
    document.body.innerHTML = `
      <nav>
        <button data-nav-link>About</button>
        <button data-nav-link>Resume</button>
        <button data-nav-link>Portfolio</button>
      </nav>
      <article class="active" data-page="about">About Content</article>
      <article data-page="resume">Resume Content</article>
      <article data-page="portfolio">Portfolio Content</article>
    `;
    navbar = new Navbar();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should initialize with navigation links and pages', () => {
    expect(navbar.navigationLinks.length).toBe(3);
    expect(navbar.pages.length).toBe(3);
  });

  test('should navigate to clicked page', () => {
    const resumeLink = document.querySelectorAll('[data-nav-link]')[1];
    const resumePage = document.querySelector('[data-page="resume"]');
    const aboutPage = document.querySelector('[data-page="about"]');

    resumeLink.click();

    expect(resumePage.classList.contains('active')).toBe(true);
    expect(aboutPage.classList.contains('active')).toBe(false);
  });

  test('should highlight active navigation link', () => {
    const links = document.querySelectorAll('[data-nav-link]');
    const portfolioLink = links[2];

    portfolioLink.click();

    expect(portfolioLink.classList.contains('active')).toBe(true);
    expect(links[0].classList.contains('active')).toBe(false);
    expect(links[1].classList.contains('active')).toBe(false);
  });
});

/**
 * @jest-environment jsdom
 */

import { Navbar } from './Navbar';

describe('Navbar Component', () => {
  let navbar;

  beforeEach(() => {
    window.scrollTo = () => {};
    window.__portfolioNavBound = false;
    document.body.innerHTML = `
      <nav>
        <button data-nav-link="about">About</button>
        <button data-nav-link="resume">Resume</button>
        <button data-nav-link="portfolio">Portfolio</button>
      </nav>
      <article class="active" data-page="about">About Content</article>
      <article data-page="resume">Resume Content</article>
      <article data-page="portfolio">Portfolio Content</article>
    `;
    window.history.replaceState(null, '', '/');
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

  test('should open page from URL hash', () => {
    window.location.hash = '#portfolio';
    window.dispatchEvent(new HashChangeEvent('hashchange'));

    expect(document.querySelector('[data-page="portfolio"]').classList.contains('active')).toBe(
      true,
    );
    expect(document.querySelector('[data-page="about"]').classList.contains('active')).toBe(false);
  });
});

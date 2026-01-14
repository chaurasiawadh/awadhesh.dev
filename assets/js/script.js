/**
 * Main Application Entry Point
 * Imports and initializes all components
 */

import { Sidebar } from '../../components/sidebar/Sidebar.js';
import { Navbar } from '../../components/navbar/Navbar.js';
import { ProjectFilter } from '../../components/portfolio/ProjectFilter.js';
import { ExperienceCalculator } from '../../components/resume/ExperienceCalculator.js';
import { ContactForm } from '../../components/contact/ContactForm.js';
import { Modal } from '../../components/shared/Modal.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Utility function to toggle elements
  window.elementToggleFunc = function (elem) {
    elem.classList.toggle('active');
  };

  // Initialize components
  new Sidebar();
  new Navbar();
  new ProjectFilter();
  new ExperienceCalculator();
  new ContactForm();
  new Modal();

  // Map skeleton loader
  const mapIframe = document.querySelector('.mapbox iframe');
  const skeletonLoader = document.querySelector('.map-skeleton-loader');

  if (mapIframe && skeletonLoader) {
    mapIframe.addEventListener('load', function () {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        skeletonLoader.classList.add('hidden');
      }, 300);
    });
  }

  // Portfolio image skeleton loaders
  const portfolioImages = document.querySelectorAll('.project-img img');

  portfolioImages.forEach(img => {
    const figure = img.closest('.project-img');

    if (img.complete) {
      // Image already loaded (from cache)
      figure.classList.add('loaded');
    } else {
      // Wait for image to load
      img.addEventListener('load', function () {
        setTimeout(() => {
          figure.classList.add('loaded');
        }, 200);
      });

      // Handle error case
      img.addEventListener('error', function () {
        figure.classList.add('loaded');
      });
    }
  });

  console.log('Portfolio app initialized');
});

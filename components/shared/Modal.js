/**
 * Modal Component
 * Handles testimonials modal (preserved for future use)
 */

export class Modal {
  constructor() {
    this.modalContainer = document.querySelector('[data-modal-container]');
    this.modalCloseBtn = document.querySelector('[data-modal-close-btn]');
    this.overlay = document.querySelector('[data-overlay]');
    this.testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
    this.init();
  }

  init() {
    // Only initialize if all required elements exist
    if (!this.modalContainer || !this.modalCloseBtn || !this.overlay) {
      return;
    }

    this.modalImg = document.querySelector('[data-modal-img]');
    this.modalTitle = document.querySelector('[data-modal-title]');
    this.modalText = document.querySelector('[data-modal-text]');

    // Add click event to all testimonial items
    this.testimonialsItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.openModal(item);
      });
    });

    // Add click event to close button and overlay
    this.modalCloseBtn.addEventListener('click', () => this.toggleModal());
    this.overlay.addEventListener('click', () => this.toggleModal());
  }

  openModal(item) {
    if (this.modalImg) {
      const avatarSrc = item.querySelector('[data-testimonials-avatar]')?.src || '';
      const avatarAlt = item.querySelector('[data-testimonials-avatar]')?.alt || '';
      this.modalImg.src = avatarSrc;
      this.modalImg.alt = avatarAlt;
    }

    if (this.modalTitle) {
      const title = item.querySelector('[data-testimonials-title]')?.innerHTML || '';
      this.modalTitle.innerHTML = title;
    }

    if (this.modalText) {
      const text = item.querySelector('[data-testimonials-text]')?.innerHTML || '';
      this.modalText.innerHTML = text;
    }

    this.toggleModal();
  }

  toggleModal() {
    this.modalContainer.classList.toggle('active');
    this.overlay.classList.toggle('active');
  }
}

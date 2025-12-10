/**
 * ContactForm Component
 * Handles contact form submission with WhatsApp integration and geolocation
 */

import { Toast } from '../shared/Toast.js';

export class ContactForm {
  constructor() {
    this.form = document.querySelector('[data-form]');
    this.toast = new Toast();
    this.init();
  }

  init() {
    if (!this.form) return;

    this.inputs = this.form.querySelectorAll('[data-form-input]');
    this.submitBtn = this.form.querySelector('[data-form-btn]');
    this.submitBtnText = this.submitBtn ? this.submitBtn.querySelector('span') : null;

    // Form validation
    this.inputs.forEach((input) => {
      input.addEventListener('input', () => this.checkFormValidity());
    });

    // Form submission
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleSubmit();
    });
  }

  checkFormValidity() {
    const isValid = Array.from(this.inputs).every((input) => input.value.trim() !== '');
    if (this.submitBtn) this.submitBtn.disabled = !isValid;
  }

  async handleSubmit() {
    if (!this.submitBtn || !this.submitBtnText) {
      console.error('Submit button or text element not found');
      return;
    }

    const originalText = this.submitBtnText.textContent;

    try {
      this.submitBtn.disabled = true;
      this.submitBtnText.textContent = 'Sending...';

      const formData = new FormData(this.form);
      const fullname = formData.get('fullname');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      let locationInfo = 'Location: Not Shared';

      try {
        // Attempt to get user location with a 5-second timeout
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 5000,
          });
        });
        const { latitude, longitude } = position.coords;
        locationInfo = `Location: https://www.google.com/maps?q=${latitude},${longitude}`;
      } catch (locError) {
        console.warn('Location access denied or timed out:', locError);
      }

      const whatsappMessage = `New Contact Request via Portfolio:

Name: ${fullname}
Email: ${email}
Subject: ${subject}
${locationInfo}

Message: ${message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919936169852?text=${encodedMessage}`;
      console.log('Redirecting to:', whatsappUrl);

      window.open(whatsappUrl, '_blank');

      // Simulate success since we can't track cross-origin open
      this.toast.show('Redirecting to WhatsApp...', true);
      this.form.reset();
      this.checkFormValidity();
    } catch (error) {
      console.error('Error handling form submission:', error);
      this.toast.show('An error occurred. Please try again.', false);
    } finally {
      this.submitBtn.disabled = false;
      this.submitBtnText.textContent = originalText;
    }
  }
}

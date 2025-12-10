'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener('click', function () {
    elementToggleFunc(sidebar);
  });
}

// testimonials variables
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// Only initialize modal if all required elements exist
if (modalContainer && modalCloseBtn && overlay) {
  const modalImg = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalText = document.querySelector('[data-modal-text]');

  // modal toggle function
  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  // add click event to all modal items
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
      if (modalImg) {
        modalImg.src = this.querySelector('[data-testimonials-avatar]')?.src || '';
        modalImg.alt = this.querySelector('[data-testimonials-avatar]')?.alt || '';
      }
      if (modalTitle) {
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]')?.innerHTML || '';
      }
      if (modalText) {
        modalText.innerHTML = this.querySelector('[data-testimonials-text]')?.innerHTML || '';
      }
      testimonialsModalFunc();
    });
  }

  // add click event to modal close button and overlay
  modalCloseBtn.addEventListener('click', testimonialsModalFunc);
  overlay.addEventListener('click', testimonialsModalFunc);
}

// custom select variables
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

if (select) {
  select.addEventListener('click', function () {
    elementToggleFunc(this);
  });
}

// add event to all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    if (select) elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'all') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
};

// add event to all filter buttons for large screen
let lastClickedBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    const targetPage = this.innerHTML.toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add('active');
        navigationLinks[j].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove('active');
        navigationLinks[j].classList.remove('active');
      }
    }
  });
}

// experience-calculator.js

document.addEventListener('DOMContentLoaded', () => {

  function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate === 'present' ? new Date() : new Date(endDate);

    let startYear = start.getFullYear();
    let startMonth = start.getMonth(); // 0-indexed (Jan = 0)
    let endYear = end.getFullYear();
    let endMonth = end.getMonth();

    let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1; // +1 to make it inclusive

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let duration = '';
    if (years > 0) {
      duration += `${years} yr${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
      if (duration) duration += ', ';
      duration += `${months} mo${months > 1 ? 's' : ''}`;
    }
    return duration;
  }


  function updateDurations() {
    const timelineItems = document.querySelectorAll(".timeline-item span[data-start-date]")
    timelineItems.forEach((item) => {
      const startDate = item.getAttribute('data-start-date')
      const endDate = item.getAttribute('data-end-date')
      const durationElement = item.querySelector(".duration")

      if (durationElement) {
        const duration = calculateDuration(startDate, endDate)
        durationElement.textContent = duration
      } else if (endDate === "present") {
        const duration = calculateDuration(startDate, "present")
        item.textContent = `${item.textContent.split("â€”")[0]} â€” Present â€¢ ${duration}`
      }
    })
  }

  // Initial update
  updateDurations()

  // Update durations every minute
  setInterval(updateDurations, 60000)
})

// toasttt

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-form]');
  if (!form) return;

  const inputs = form.querySelectorAll('[data-form-input]');
  const submitBtn = form.querySelector('[data-form-btn]');
  const submitBtnText = submitBtn ? submitBtn.querySelector('span') : null;
  const toast = document.getElementById('toast');

  function checkFormValidity() {
    const isValid = Array.from(inputs).every((input) => input.value.trim() !== '');
    if (submitBtn) submitBtn.disabled = !isValid;
  }

  inputs.forEach((input) => {
    input.addEventListener('input', checkFormValidity);
  });

  function showToast(message, isSuccess) {
    if (!toast) return;
    toast.innerHTML = `
      <div class="toast__icon">
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z" fill="#fff"></path>
        </svg>
      </div>
      <div class="toast__title">${message}</div>
      <div class="toast__close">
        <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#fff"></path>
        </svg>
      </div>
    `;
    toast.className = `toast ${isSuccess ? 'success' : 'error'} show`;
    setTimeout(() => {
      toast.className = 'toast';
    }, 3000);

    const closeBtn = toast.querySelector('.toast__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        toast.className = 'toast';
      });
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Contact form submitted');

    if (!submitBtn || !submitBtnText) {
      console.error('Submit button or text element not found');
      return;
    }

    const originalText = submitBtnText.textContent;

    try {
      submitBtn.disabled = true;
      submitBtnText.textContent = 'Sending...';

      const formData = new FormData(form);
      const fullname = formData.get('fullname');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      let locationInfo = 'Location: Not Shared';

      try {
        // Attempt to get user location with a 5-second timeout
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 5000
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
      showToast('Redirecting to WhatsApp...', true);
      form.reset();
      checkFormValidity();
    } catch (error) {
      console.error('Error handling form submission:', error);
      showToast('An error occurred. Please try again.', false);
    } finally {
      submitBtn.disabled = false;
      submitBtnText.textContent = originalText;
    }
  });
});
# Component Documentation

This document describes all JavaScript components in the portfolio application, their responsibilities, and their public APIs.

## Architecture Overview

The application uses a modular component architecture with vanilla JavaScript ES6 modules. All components are initialized in `assets/js/script.js` when the DOM is ready.

## Component List

### 1. Sidebar Component

**Location**: `components/sidebar/Sidebar.js`

**Responsibility**: Manages the sidebar toggle functionality for mobile and desktop viewports.

**Public API**:

```javascript
class Sidebar {
  constructor()  // Auto-initializes event listeners
  toggle()       // Toggles sidebar visibility
}
```

**Usage**:

```javascript
import { Sidebar } from './components/sidebar/Sidebar.js';
const sidebar = new Sidebar(); // Auto-initializes
```

**Dependencies**: None

**DOM Requirements**:

- Element with `[data-sidebar]` attribute
- Element with `[data-sidebar-btn]` attribute

---

### 2. Navbar Component

**Location**: `components/navbar/Navbar.js`

**Responsibility**: Handles page navigation between sections (About, Resume, Portfolio, Contact) and manages active link highlighting.

**Public API**:

```javascript
class Navbar {
  constructor()                            // Auto-initializes event listeners
  navigateToPage(targetPage, linkIndex)   // Navigate to a specific page
}
```

**Usage**:

```javascript
import { Navbar } from './components/navbar/Navbar.js';
const navbar = new Navbar(); // Auto-initializes
```

**Dependencies**: None

**DOM Requirements**:

- Elements with `[data-nav-link]` attribute
- Elements with `[data-page]` attribute

**Behavior**:

- Adds `.active` class to the selected page and nav link
- Removes `.active` class from other pages/links
- Scrolls to top on navigation

---

### 3. ProjectFilter Component

**Location**: `components/portfolio/ProjectFilter.js`

**Responsibility**: Filters portfolio projects by category (All, Applications, Web Development, UI/UX). Provides both mobile select dropdown and desktop button filters.

**Public API**:

```javascript
class ProjectFilter {
  constructor()            // Auto-initializes event listeners
  toggleSelect()           // Toggles mobile dropdown
  filter(selectedValue)    // Filters projects by category
}
```

**Usage**:

```javascript
import { ProjectFilter } from './components/portfolio/ProjectFilter.js';
const filter = new ProjectFilter(); // Auto-initializes
```

**Dependencies**: None

**DOM Requirements**:

- Element with `[data-select]` attribute (mobile dropdown)
- Elements with `[data-select-item]` attribute
- Element with `[data-selecct-value]` attribute (value display)
- Elements with `[data-filter-btn]` attribute (desktop buttons)
- Elements with `[data-filter-item]` attribute (project items with `data-category`)

**Behavior**:

- Shows/hides projects based on `data-category` attribute
- Maintains last clicked button state
- Syncs mobile dropdown with desktop button selection

---

### 4. ExperienceCalculator Component

**Location**: `components/resume/ExperienceCalculator.js`

**Responsibility**: Calculates and displays duration for experience timeline items. Auto-updates "present" roles every minute.

**Public API**:

```javascript
class ExperienceCalculator {
  constructor()                                  // Auto-initializes
  calculateDuration(startDate, endDate)          // Calculates duration string
  updateDurations()                               // Updates all timeline durations
}
```

**Usage**:

```javascript
import { ExperienceCalculator } from './components/resume/ExperienceCalculator.js';
const calc = new ExperienceCalculator(); // Auto-initializes and starts interval
```

**Dependencies**: None

**DOM Requirements**:

- Timeline items with `[data-start-date]` and `[data-end-date]` attributes
- Optional `.duration` element for displaying calculated duration

**Behavior**:

- Calculates years and months from start to end date
- Handles "present" end date as current date
- Updates every 60 seconds for ongoing roles
- Formats as "X yrs, Y mos" or "X yr, Y mo"

---

### 5. ContactForm Component

**Location**: `components/contact/ContactForm.js`

**Responsibility**: Handles contact form validation, submission, and WhatsApp redirection with optional geolocation.

**Public API**:

```javascript
class ContactForm {
  constructor()           // Auto-initializes
  checkFormValidity()     // Validates form inputs
  handleSubmit()          // Processes form submission (async)
}
```

**Usage**:

```javascript
import { ContactForm } from './components/contact/ContactForm.js';
const form = new ContactForm(); // Auto-initializes
```

**Dependencies**:

- `Toast` (from `../shared/Toast.js`)

**DOM Requirements**:

- Form with `[data-form]` attribute
- Inputs with `[data-form-input]` attribute
- Submit button with `[data-form-btn]` attribute
- Span inside submit button for button text
- Element with `id="toast"` for notifications

**Behavior**:

- Disables submit button until all fields are filled
- Attempts to get user's geolocation (with 5s timeout)
- Formats message for WhatsApp
- Opens WhatsApp in new tab
- Shows success toast and resets form

---

### 6. Toast Component

**Location**: `components/shared/Toast.js`

**Responsibility**: Displays temporary notification messages to users.

**Public API**:

```javascript
class Toast {
  constructor()                        // Finds toast element
  show(message, isSuccess = true)      // Displays toast notification
}
```

**Usage**:

```javascript
import { Toast } from './components/shared/Toast.js';
const toast = new Toast();
toast.show('Form submitted!', true); // Success message
toast.show('Error occurred', false); // Error message
```

**Dependencies**: None

**DOM Requirements**:

- Element with `id="toast"`

**Behavior**:

- Shows toast for 3 seconds
- Auto-hides after timeout
- Provides close button
- Displays different styles for success/error

---

### 7. Modal Component

**Location**: `components/shared/Modal.js`

**Responsibility**: Manages testimonials modal display (currently not used in main HTML but preserved for future use).

**Public API**:

```javascript
class Modal {
  constructor()              // Auto-initializes
  openModal(item)            // Opens modal with testimonial content
  toggleModal()              // Toggles modal visibility
}
```

**Usage**:

```javascript
import { Modal } from './components/shared/Modal.js';
const modal = new Modal(); // Auto-initializes if elements exist
```

**Dependencies**: None

**DOM Requirements** (all optional - component gracefully degrades):

- Element with `[data-modal-container]` attribute
- Element with `[data-modal-close-btn]` attribute
- Element with `[data-overlay]` attribute
- Elements with `[data-testimonials-item]` attribute
- Elements for content: `[data-modal-img]`, `[data-modal-title]`, `[data-modal-text]`

**Behavior**:

- Extracts content from clicked testimonial
- Displays in modal overlay
- Closes on overlay/close button click

---

## Initialization

All components are initialized automatically in `assets/js/script.js`:

```javascript
import { Sidebar } from '../components/sidebar/Sidebar.js';
import { Navbar } from '../components/navbar/Navbar.js';
import { ProjectFilter } from '../components/portfolio/ProjectFilter.js';
import { ExperienceCalculator } from '../components/resume/ExperienceCalculator.js';
import { ContactForm } from '../components/contact/ContactForm.js';
import { Modal } from '../components/shared/Modal.js';

document.addEventListener('DOMContentLoaded', () => {
  new Sidebar();
  new Navbar();
  new ProjectFilter();
  new ExperienceCalculator();
  new ContactForm();
  new Modal();
});
```

## Testing

Each component has a corresponding test file (e.g., `sidebar.test.js`) using Jest and jsdom for DOM simulation.

Run tests with:

```bash
npm test
```

## Browser Support

All components use modern JavaScript (ES6+) and expect:

- ES6 module support
- Promise support
- Geolocation API (optional for ContactForm)
- Modern CSS support

Supports all modern browsers (Chrome, Firefox, Safari, Edge).

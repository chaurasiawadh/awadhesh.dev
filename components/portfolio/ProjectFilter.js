/**
 * ProjectFilter Component
 * Handles portfolio project filtering by category
 */

export class ProjectFilter {
  constructor() {
    this.select = document.querySelector('[data-select]');
    this.selectItems = document.querySelectorAll('[data-select-item]');
    this.selectValue = document.querySelector('[data-selecct-value]');
    this.filterBtn = document.querySelectorAll('[data-filter-btn]');
    this.filterItems = document.querySelectorAll('[data-filter-item]');
    this.lastClickedBtn = this.filterBtn[0] || null;
    this.init();
  }

  init() {
    // Select dropdown toggle
    if (this.select) {
      this.select.addEventListener('click', () => {
        this.toggleSelect();
      });
    }

    // Select dropdown items
    this.selectItems.forEach((item) => {
      item.addEventListener('click', () => {
        const selectedValue = item.innerText.toLowerCase();
        if (this.selectValue) this.selectValue.innerText = item.innerText;
        if (this.select) this.toggleSelect();
        this.filter(selectedValue);
      });
    });

    // Filter buttons (desktop)
    this.filterBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedValue = btn.innerText.toLowerCase();
        if (this.selectValue) this.selectValue.innerText = btn.innerText;
        this.filter(selectedValue);

        if (this.lastClickedBtn) this.lastClickedBtn.classList.remove('active');
        btn.classList.add('active');
        this.lastClickedBtn = btn;
      });
    });
  }

  toggleSelect() {
    this.select.classList.toggle('active');
  }

  filter(selectedValue) {
    this.filterItems.forEach((item) => {
      if (selectedValue === 'all') {
        item.classList.add('active');
      } else if (selectedValue === item.dataset.category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
}

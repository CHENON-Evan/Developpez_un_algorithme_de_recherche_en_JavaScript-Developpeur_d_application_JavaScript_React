import { closeDropdown } from './getCloseDropdown.js';
import { displayDropdown } from './getDisplayDropdown.js';

export function displayFilterDropdown() {
  const dropdownButton = document.querySelectorAll('.dropdown-btn');
  const icons = document.querySelectorAll('.fa-solid');

  dropdownButton.forEach((dropbtn, index) => {
    dropbtn.addEventListener('click', () => {
      const dropdownContent = dropbtn.parentNode.childNodes[3];
      const computedStyle = window.getComputedStyle(dropdownContent);
      const icon = icons[index];
      if (computedStyle.display === 'none') {
        displayDropdown(dropdownContent.id);
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      } else {
        closeDropdown(dropdownContent.id);
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    });
  });
}

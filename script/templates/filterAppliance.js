import {
  appliances,
  majSelectAppliance,
  selectAppliance,
} from '../utils/majSelectAppliance.js';

export function modifFilterAppliance(recipes) {
  const searchFilterApplianceList = document.querySelectorAll(
    '.search-tag-input-appliance'
  );

  majSelectAppliance(recipes);

  const listAppliance = document.querySelector('.list-option-tag-appliances');

  const addedAppliances = new Set();

  function filterData(e) {
    const searchedLetter = e.target.value.toLowerCase();
    const filteredArr = appliances.filter((appliance) =>
      appliance.toLowerCase().startsWith(searchedLetter)
    );

    updateList(filteredArr);
  }

  function updateList(filteredArr) {
    listAppliance.innerHTML = '';
    filteredArr.forEach((appliance) => {
      const applianceItem = createApplianceItem(appliance);
      listAppliance.appendChild(applianceItem);
      addedAppliances.add(appliance);
    });
  }

  function createApplianceItem(appliance) {
    const applianceItem = document.createElement('li');
    applianceItem.className = 'appliance-item';
    applianceItem.setAttribute('data-appliance', appliance.toLowerCase());
    applianceItem.innerHTML = appliance.toLowerCase();

    applianceItem.addEventListener('click', () => {
      selectAppliance(appliance.toLowerCase());
    });

    return applianceItem;
  }

  filterData({ target: { value: '' } });

  searchFilterApplianceList.forEach((searchFilterAppliance) => {
    searchFilterAppliance.addEventListener('input', filterData);
  });
}

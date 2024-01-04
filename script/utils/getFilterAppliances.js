export function getFilterAppliances(recipes) {
  const appliances = {};

  recipes.forEach((recipe) => {
    recipe.appliances.forEach((appliance) => {
      appliances[appliance] = appliance;
    });
  });

  return Object.keys(appliances).sort((a, b) => a.localeCompare(b));
}

export function filterByInput(recipes, input) {
  if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']{3,}$/.test(input)) {
    const recipeFiltered = [];
    recipes.forEach((recipe) => {
      const isMatch = searchRecipe(recipe, input);
      if (isMatch) {
        recipeFiltered.push(recipe);
      }
    });

    return recipeFiltered;
  } else {
    return [...recipes];
  }
}

function searchRecipe(recipe, searchTerm) {
  const normalizedSearchTerm = normalizeString(searchTerm);
  const normalizedTitle = normalizeString(recipe.name);
  const normalizedIngredients = recipe.ingredients
    .filter((ingredient) => typeof ingredient === 'string')
    .map((ingredient) => normalizeString(ingredient))
    .join(' ');

  const normalizedDescription = normalizeString(recipe.description);

  return (
    normalizedTitle.includes(normalizedSearchTerm) ||
    normalizedIngredients.includes(normalizedSearchTerm) ||
    normalizedDescription.includes(normalizedSearchTerm)
  );
}

function normalizeString(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

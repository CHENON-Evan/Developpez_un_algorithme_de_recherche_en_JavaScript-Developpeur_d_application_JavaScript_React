export function filterByInput(recipes, input) {
  if (/^[a-zÀ-ÖØ-öø-ÿ'\s]{3,}$/.test(input)) {
    const recipeFiltered = recipes.filter((recipe) =>
      searchRecipe(recipe, input)
    );

    recipeFiltered.forEach((recipe) => console.log(recipe.name));

    return recipeFiltered;
  } else {
    return [...recipes];
  }
}

function searchRecipe(recipe, input) {
  const normalizedSearchTerm = normalizeString(input);
  const normalizedTitle = normalizeString(recipe.name);
  console.log(recipe.name);

  const normailzedIngredients = recipe.ingredients.some((ingredient) =>
    normalizeString(ingredient.ingredient).includes(normalizedSearchTerm)
  );

  const normalizedDescription = normalizeString(recipe.description);

  return (
    normalizedTitle.includes(normalizedSearchTerm) ||
    normailzedIngredients ||
    normalizedDescription.includes(normalizedSearchTerm)
  );
}

function normalizeString(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

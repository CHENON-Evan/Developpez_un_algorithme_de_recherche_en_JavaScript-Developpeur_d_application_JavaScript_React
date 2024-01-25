export function filterByInput(recipes, input) {
  if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']{3,}$/.test(input)) {
    const recipeFiltered = [];
    let i = 0;
    while (i < recipes.length) {
      const recipe = recipes[i];
      const isMatch = searchRecipe(recipe, input);
      if (isMatch) {
        recipeFiltered[recipeFiltered.length] = recipe;
      }
      i++;
    }
    return recipeFiltered;
  } else {
    return [...recipes];
  }
}

function searchRecipe(recipe, searchTerm) {
  const normalizedSearchTerm = normalizeString(searchTerm);
  const normalizedTitle = normalizeString(recipe.name);
  const ingredients = recipe.ingredients;
  const normalizedIngredients = [];

  for (let j = 0; j < ingredients.length; j++) {
    const ingredient = ingredients[j];
    if (typeof ingredient === 'string') {
      normalizedIngredients[normalizedIngredients.length] =
        normalizeString(ingredient);
    }
  }

  const normalizedDescription = normalizeString(recipe.description);

  let titleMatch = false;
  for (let k = 0; k < normalizedTitle.length; k++) {
    if (normalizedTitle[k] === normalizedSearchTerm[0]) {
      let match = true;
      for (let l = 0; l < normalizedSearchTerm.length; l++) {
        if (normalizedTitle[k + l] !== normalizedSearchTerm[l]) {
          match = false;
          break;
        }
      }
      if (match) {
        titleMatch = true;
        break;
      }
    }
  }

  let ingredientsMatch = false;
  for (let k = 0; k < normalizedIngredients.length; k++) {
    const ingredient = normalizedIngredients[k];
    for (let l = 0; l < ingredient.length; l++) {
      if (ingredient[l] === normalizedSearchTerm[0]) {
        let match = true;
        for (let m = 0; m < normalizedSearchTerm.length; m++) {
          if (ingredient[l + m] !== normalizedSearchTerm[m]) {
            match = false;
            break;
          }
        }
        if (match) {
          ingredientsMatch = true;
          break;
        }
      }
    }
    if (ingredientsMatch) {
      break;
    }
  }

  let descriptionMatch = false;
  for (let k = 0; k < normalizedDescription.length; k++) {
    if (normalizedDescription[k] === normalizedSearchTerm[0]) {
      let match = true;
      for (let l = 0; l < normalizedSearchTerm.length; l++) {
        if (normalizedDescription[k + l] !== normalizedSearchTerm[l]) {
          match = false;
          break;
        }
      }
      if (match) {
        descriptionMatch = true;
        break;
      }
    }
  }

  return titleMatch || ingredientsMatch || descriptionMatch;
}

function normalizeString(str) {
  let normalizedStr = str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
  return normalizedStr;
}

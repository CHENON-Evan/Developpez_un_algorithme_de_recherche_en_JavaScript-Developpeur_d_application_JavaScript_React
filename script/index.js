async function getRecettes() {
  const reponse = await fetch('./data/recipes.json');
  const data = await reponse.json();
  return data.recipes;
}

async function displayData(recipes) {
  const recettesSection = document.querySelector('.recettes-card');
  recipes.forEach((recette) => {
    const recetteModel = recettesTemplate(recette);
    const recetteCardDOM = recetteModel.getRecetteCardDOM();
    recettesSection.appendChild(recetteCardDOM);
  });
}

async function init() {
  const recipes = await getRecettes();
  displayData(recipes);
}

init();

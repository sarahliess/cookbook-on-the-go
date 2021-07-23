//-------------------SHOW MORE RECIPES-------------------------//

function toggleRecipes(){
  const hiddenRecipes = document.querySelector('#hidden-recipes')
  hiddenRecipes.classList.toggle('hidden')
}

const moreButton = document.querySelector('.see-more-button')
moreButton.addEventListener('click', toggleRecipes)

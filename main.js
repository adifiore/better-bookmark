$(document).ready(function() {
  //make a get request to the db for all recipes
  $.ajax({
    url: 'http://localhost:3000/recipes',
    success: populateRecipes
  })

  //display the entries by appending divs to the #recipesContainer div

  function populateRecipes(data){
    // console.log(data);
    for (let i=0; i < data.length; i++){
      $('#recipesContainer').append('<div class="recipeCard">A Recipe!</div>')
    }
  }

});
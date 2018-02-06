const Recipe = require('./RecipeModel');

const recipeController = {
  //Post a recipe to root
  createRecipe(req,res) {
    Recipe.create({
      name: req.body.name,
      category: req.body.category,
      link: req.body.link,
      liked: req.body.liked,
      notes: req.body.notes
    }, (err, recipe) => {
      if (err) return res.status(400).send();
      if (recipe) return res.json(recipe);
    });
  },

  getAllRecipes(req,res){
    Recipe.find({}, (err, recipes) => {
      res.send(recipes);
    })
  },

  getRecipe(req,res) {

  },

  updateRecipe(req,res){

  },

  deleteRecipe(req,res){

  }
};

module.exports = recipeController;
const Recipe = require('./RecipeModel');

const recipeController = {
  //Post a recipe to root
  createRecipe(req,res) {
    //check for valid input

    Recipe.create({
      name: req.body.recipeName,
      category: req.body.category,
      link: req.body.url,
      liked: req.body.liked,
      notes: req.body.notes
    }, (err, recipe) => {
      if (err) return res.status(400).send();
      // If you did it correctly, redirect to root, which re-renders the page. NOT reac
      if (recipe) res.redirect('/');
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

  deleteRecipe(req,res,next){
    let _id = req.params.id;
    Recipe.remove({ _id }, (err) => {
      // remove, then next (to getAllRecipes)
      if (!err) next();
    })
  }
};

module.exports = recipeController;
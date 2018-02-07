const Recipe = require('./RecipeModel');

const recipeController = {
  //Post a recipe to root
  createRecipe(req,res,next) {
    //check for valid input
    Recipe.create({
      name: req.body.name,
      category: req.body.category,
      link: req.body.link,
      // liked: req.body.liked,
      notes: req.body.notes
    }, (err, recipe) => {
      if (err) {
        //for instance, if the recipe name is not unique
        console.log(err);
        return res.status(400).send(err);
      }

      // If you did it correctly, move on to getAllRecipes to re-render the page.
      if (recipe) next();
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
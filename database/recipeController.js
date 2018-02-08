const Recipe = require('./RecipeModel');

const recipeController = {
  //Post a recipe to /homepage
  createRecipe(req,res,next) {
    //check for valid input
    Recipe.create({
      name: req.body.name,
      category: req.body.category,
      url: req.body.url,
      liked: false,
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

  editRecipe(req,res,next) {
    let name = req.body.name;
    console.log(name);
    Recipe.findOne({ name }, (err,recipe) => {
      if (err || !recipe) {
        return res.status(418).send(err);
      } else {
        if (req.body.category) {
          recipe.category = req.body.category;
        }
        if (req.body.url) {
          recipe.url = req.body.url;
        }
        if (req.body.notes) {
          recipe.notes = req.body.notes;
        }
        recipe.save( (err) => {
          next(); //because save is async. need to wait for the save.
        });
      }
    });
  },

  likeRecipe(req,res,next){
    let _id = req.params.id;
    Recipe.findOne({ _id }, (err, recipe) => {
      if (err || !recipe) {
        console.log(err);
        return res.status(400).send();
      } else {
        recipe.liked ? recipe.liked = false : recipe.liked = true;
        recipe.save( (err) => {
          next(); //because save is async. need to wait for the save.
        });
      }
    })
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
const User = require('./UserModel');

const userController = {

  addUser(req,res,next) {
    let username = req.body.username;
    let password = req.body.password;

    User.create({ username, password }, (err, newUser) => {
      if (err) {
        //for instance, if the recipe name is not unique
        console.log(err);
        return res.status(400).send(err);
      } else if (newUser){
        next();
      }
    });
  },

  verifyUser(req,res,next) {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({username, password}, (err, data) => {
      if (!data) {
        return res.redirect('/signup');
      } else {
        return res.redirect('/homepage');
      }
    })
  }
}

module.exports = userController;
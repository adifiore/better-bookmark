const Card = require('./CardModel');

const CardController = {
  //Post a Card to /homepage
  createCard(req,res,next) {
    //check for valid input
    Card.create({
      name: req.body.name,
      category: req.body.category,
      url: req.body.url,
      liked: false,
      notes: req.body.notes
    }, (err, Card) => {
      if (err) {
        //for instance, if the Card name is not unique
        console.log(err);
        return res.status(400).send(err);
      }

      // If you did it correctly, move on to getAllCards to re-render the page.
      if (Card) next();
    });
  },

  getAllCards(req,res){
    Card.find({}, (err, Cards) => {
      res.send(Cards);
    })
  },

  editCard(req,res,next) {
    let name = req.body.name;
    console.log(name);
    Card.findOne({ name }, (err,Card) => {
      if (err || !Card) {
        return res.status(418).send(err);
      } else {
        if (req.body.category) {
          Card.category = req.body.category;
        }
        if (req.body.url) {
          Card.url = req.body.url;
        }
        if (req.body.notes) {
          Card.notes = req.body.notes;
        }
        Card.save( (err) => {
          next(); //because save is async. need to wait for the save.
        });
      }
    });
  },

  likeCard(req,res,next){
    let _id = req.params.id;
    Card.findOne({ _id }, (err, Card) => {
      if (err || !Card) {
        console.log(err);
        return res.status(400).send();
      } else {
        Card.liked ? Card.liked = false : Card.liked = true;
        Card.save( (err) => {
          next(); //because save is async. need to wait for the save.
        });
      }
    })
  },

  deleteCard(req,res,next){
    let _id = req.params.id;
    Card.remove({ _id }, (err) => {
      // remove, then next (to getAllCards)
      if (!err) next();
    })
  }
};

module.exports = CardController;
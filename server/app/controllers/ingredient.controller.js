const basicCrud = require('./basic-crud.controller');
const Ingredient = require('../models/ingredients');

// function normalIngredient(dbIng) {
//   return {
//     id: dbIng._id,
//     name: dbIng.name,
//     unit: dbIng.unit,
//     price: dbIng.price,
//   };
// }

module.exports = {
  getList(req, res, next) {
    Ingredient.find({})
      .exec((err, result) => {
        if (err) throw err;
        res.json(result);
      });
  },
  add(req, res, next) {
    if (!req.body.name) {
      res.send({ error: 'no name param provided' });
      return;
    }
    const ingredient = req.body;
    Ingredient.create(ingredient, (err, data) => {
      if (err) throw err;
      res.json((data));
    });
  },
  get(req, res) {
    Ingredient.findOne({ _id: req.params.id }, { name: 1, _id: 1 })
      .exec((err, data) => {
        if (err) throw err;
        res.json((data));
      });
  },
  update({body: item}, res) {
    Ingredient.findByIdAndUpdate(item.id, item, {new: true})
      .exec((err, result) => {
        if (err) throw err;
        res.json((result));
      })
  },
  deleteItem(req, res) {
    Ingredient.findByIdAndRemove(req.params.id)
      .exec()
      .then(doc => res.send({ success: true, document: doc }));
  }
};

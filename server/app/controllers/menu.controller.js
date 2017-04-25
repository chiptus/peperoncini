const basicCrud = require('./basic-crud.controller');
const Menu = require('../models/menus');
const Course = require('../models/courses');
const Ingredient = require('../models/ingredients');
module.exports = {
  getList(req, res, next) {
    Promise.all([
      Menu.find({}).exec((err, result) => {
        if (err) throw err;
        return result;
      }),
      Course.find({}).exec(),
      Ingredient.find({}).exec(),
    ]).then(
      ([menus, courses, ingredients]) => {
        res.json({ menus, courses, ingredients });
      },
      error => res.status(400).json({ error })
    );
  },
  add(req, res, next) {
    if (!req.body.name) {
      res.send({ error: 'no name param provided' });
      return;
    }
    Menu.create(req.body, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  },
  get(req, res) {
    Menu.findOne(
      { _id: req.params.id },
      { name: 1, _id: 0 }
    ).exec((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  },
  update({ body: item, params: { id } }, res) {
    if (!item) {
      return res.status(400).send({ error: 'no menu object provided' });
    }
    // console.log(id, item);
    Menu.findByIdAndUpdate(id, item, { new: true }).exec((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  },
  deleteItem(req, res) {
    Menu.findByIdAndRemove(req.params.id)
      .exec()
      .then(doc => res.send({ success: true, document: doc }));
  },
};

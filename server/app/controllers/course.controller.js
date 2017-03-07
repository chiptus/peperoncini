const basicCrud = require('./basic-crud.controller');
const Course = require('../models/courses');
const Ingredient = require('../models/ingredients');
const {normalizeModel} = require('./utils');

module.exports = {
  getList(req, res, next) {
    Course.find({})
      .exec((err, courses) => {
        if (err) throw err;
        
        const normalCourses = courses.map(c => (c._doc));
        return Ingredient.find({})
          .exec((err, ingredients) => {
            if (err) throw err;
            const normalIngredients = ingredients.map(i => (i._doc));
            res.json({
              courses: normalCourses,
              ingredients: normalIngredients,
            });
          })
      });
  },
  add(req, res, next) {
    if (!req.body) {
      res.status(400).send({ error: 'no course object provided' });;
      return;
    }
    if (!req.body.name) {
      res.status(400).send({ error: 'no name param provided' });
      return;
    }
    Course.create(req.body, (err, doc) => {
      if (err) throw err;
      
      res.json(normalizeModel(doc._doc));
    });
  },
  get(req, res) {
    Course.findOne({ _id: req.params.id }, { name: 1, _id: 0 })
      .exec((err, data) => {
        if (err) throw err;
      res.json(normalizeModel(data._doc));
        
      });
  },
  update({body: item}, res) {
    item.ingredients = item.ingredients.map(i => Object.assign({}, i, {_id:i.id}));
    Course.findByIdAndUpdate(item.id, item, {new: true})
      .exec((err, result) => {
        if (err) throw err;
        res.json(normalizeModel(result._doc));
      })
  },
  deleteItem(req, res) {
    Course.findByIdAndRemove(req.params.id)
      .exec()
      .then(doc => res.send({ success: true, document: doc }));
  }
};

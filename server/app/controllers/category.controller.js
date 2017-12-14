const Category = require('../models/categories');
const basicCrud = require('./basic-crud.controller');

module.exports = {
  getList(req, res, next) {
    Category.find({}).exec((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  },
  add(req, res, next) {
    if (!req.body.name) {
      res.send({ error: 'no name params provided' });
      return;
    }
    Category.create({ name: req.body.name }, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  },
  get(req, res) {
    Category.findOne({ _id: req.params.id }, { name: 1, _id: 0 }).exec(
      (err, data) => {
        if (err) throw err;
        res.json(data);
      }
    );
  },
  update(req, res) {
    res.json({ message: `update ${name} id: ${req.params.id}` });
  },
  deleteItem(req, res) {
    Category.findByIdAndRemove(req.params.id)
      .exec()
      .then(doc => res.send({ success: true, document: doc }));
  },
};

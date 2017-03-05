const basicCrud = require('./basic-crud.controller');
const Course = require('../models/courses');

module.exports = {
  getList(req, res, next) {
    Course.find({})
      .exec((err, result) => {
        if (err) throw err;
        res.json(result);
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
    Course.create({ name: req.body.name }, (err, data) => {
      if (err) throw err;
      
      res.json(data);
    });
  },
  get(req, res) {
    Course.findOne({ _id: req.params.id }, { name: 1, _id: 0 })
      .exec((err, data) => {
        if (err) throw err;
        res.json(data);
      });
  },
  update(req, res) {
    res.json({ message: `update ${name} id: ${req.params.id}` });
  },
  deleteItem(req, res) {
    Course.findByIdAndRemove(req.params.id)
      .exec()
      .then(doc => res.send({ success: true, document: doc }));
  }
};

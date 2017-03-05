const Event = require('../models/events');

module.exports = {
  getList(req, res, next) {
    Event.find({})
      .exec((err, result) => {
        if (err) throw err;
        res.json(result);
      });
  },
  add(req, res, next) {
    if (!req.body.name) {
      res.send({ error: 'no name params provided' });
      return;
    }
    Event.create({ name: req.body.name }, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  },
  get(req, res) {
    Event.findOne({ _id: req.params.id }, { name: 1, _id: 0 })
      .exec((err, data) => {
        if (err) throw err;
        res.json(data);
      });
  },
  update(req, res) {
    res.json({ message: `update ${name} id: ${req.params.id}` });
  },
  deleteItem(req, res) {
    Event.findByIdAndRemove(req.params.id)
      .exec()
      .then(doc => res.send({ success: true, document: doc }));
  }
};

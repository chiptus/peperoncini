module.exports = Model => ({
  getList(req, res, next) {
    Model.find({}).exec((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  },
  add(req, res, next) {
    if (!req.body.name) {
      res.send({ error: 'no name params provided' });
      return;
    }
    Model.create({ name: req.body.name }, (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  },
  get(req, res) {
    Model.findOne({ _id: req.params.id }, { name: 1, _id: 0 }).exec(
      (err, data) => {
        if (err) throw err;
        res.json(data);
      }
    );
  },
  update(req, res) {
    res.send(`update ${name} id: ${req.params.id}`);
  },
  deleteItem(req, res) {
    Model.findByIdAndRemove(req.params.id)
      .exec()
      .then(doc => res.send({ success: true, document: doc }));
  },
});

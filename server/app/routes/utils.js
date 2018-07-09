const { verifyJwt } = require('../auth/utils');
const { Types } = require('mongoose');
module.exports = {
  crudRoute,
  isLoggedIn,
};

function crudRoute(app, name, options = {}) {
  app
    .route(`/api/${name}/`)
    .get(
      options.getList ||
        ((req, res, next) => {
          res.send('list of caregories');
        })
    )
    .post(
      // isLoggedIn,
      options.add ||
        ((req, res, next) => {
          res.send(`add ${name}`);
        })
    );

  app
    .route(`/api/${name}/:id`)
    .get(
      checkIfIdIsValid,
      options.get ||
        ((req, res) => {
          res.send(`get ${name}, id: ${req.params.id}`);
        })
    )
    .post(
      // isLoggedIn,
      checkIfIdIsValid,
      options.update ||
        ((req, res) => {
          res.send(`update ${name} id: ${req.params.id}`);
        })
    )
    .delete(
      // isLoggedIn,
      checkIfIdIsValid,
      options.deleteItem ||
        ((req, res) => {
          res.send(`delete ${name} id: ${req.params.id}`);
        })
    );
}

function checkIfIdIsValid(req, res, next) {
  const { id } = req.params;
  return Types.ObjectId.isValid(id)
    ? next()
    : res.status(400).json({ error: 'Supplied id is not ObjectId' });
}

function isLoggedIn(req, res, next) {
  const profile = req.query.jwt && verifyJwt(req.query.jwt);
  if (profile) {
    req.profile = profile;
    return next();
  } else {
    res.sendStatus(403);
  }
}

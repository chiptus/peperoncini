'use strict';

const { isLoggedIn, crudRoute } = require('./utils');
const { validateWithFacebook } = require('../auth/facebook');
const { createJwt } = require('../auth/utils');
const categoryCtrl = require('../controllers/category.controller');
const courseCtrl = require('../controllers/course.controller');
const ingredientCtrl = require('../controllers/ingredient.controller');
const eventCtrl = require('../controllers/event.controller')
const menuCtrl = require('../controllers/menu.controller')
const userCtrl = require('../controllers/user');

module.exports = function (app, passport) {

  app.post('/auth/facebook', ({body: {socialToken}}, res, next) => {
    validateWithFacebook(socialToken)
      .then(profile => ({
        jwt: createJwt(profile, 'CLIENT-APP'),
        name: profile.name,
        socialId: profile.id
      }))
      .then(user => {
        return userCtrl.saveUser(user.name, user.socialId, 'facebook', socialToken)
          .then(() => user);
      })
      .then(({jwt, name}) => {
        res.json({ jwt, name });
      })
      .catch(err => {
        res.sendStatus(403);
        next(new Error(err));
      })
  })


  // app.route('/api/:id')
  // 	.get(isLoggedIn, function (req, res) {
  // 		res.json(req.user.github);
  // 	});

  // app.route('/auth/github')
  // 	.get(passport.authenticate('github'));

  // app.route('/auth/github/callback')
  // 	.get(passport.authenticate('github', {
  // 		successRedirect: '/',
  // 		failureRedirect: '/login'
  // 	}));

  crudRoute(app, 'category', categoryCtrl);

  crudRoute(app, 'course', courseCtrl);

  crudRoute(app, 'event', eventCtrl);

  crudRoute(app, 'ingredient', ingredientCtrl);

  crudRoute(app, 'menu', menuCtrl);
};


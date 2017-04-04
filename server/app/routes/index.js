'use strict';
const express = require('express');
const path = require('path');

const { isLoggedIn, crudRoute } = require('./utils');
const { validateWithFacebook } = require('../auth/facebook');
const { createJwt } = require('../auth/utils');
const categoryCtrl = require('../controllers/category.controller');
const courseCtrl = require('../controllers/course.controller');
const ingredientCtrl = require('../controllers/ingredient.controller');
const eventCtrl = require('../controllers/event.controller');
const menuCtrl = require('../controllers/menu.controller');
const userCtrl = require('../controllers/user');

module.exports = function(app, passport) {
  app.use(
    '/',
    express.static(path.join(__dirname, '../../../client-web/public/'))
  );

  app.post('/auth/facebook', ({ body: { socialToken } }, res, next) => {
    validateWithFacebook(socialToken)
      .then(profile => ({
        jwt: createJwt(profile, 'CLIENT-APP'),
        name: profile.name,
        socialId: profile.id,
      }))
      .then(user => {
        return userCtrl
          .saveUser(user.name, user.socialId, 'facebook', socialToken)
          .then(() => user);
      })
      .then(({ jwt, name }) => {
        res.json({ jwt, name });
      })
      .catch(err => {
        res.sendStatus(403);
        next(new Error(err));
      });
  });

  crudRoute(app, 'category', categoryCtrl);

  crudRoute(app, 'course', courseCtrl);

  crudRoute(app, 'event', eventCtrl);

  crudRoute(app, 'ingredient', ingredientCtrl);

  crudRoute(app, 'menu', menuCtrl);

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        'client-web',
        'public',
        'index.html'
      )
    );
  });
};

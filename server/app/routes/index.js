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
          .then(({ _id }) => ({
            user: Object.assign({ _id }, user),
            token: user.jwt,
          }));
      })
      .then(({ user, token }) => {
        res.json({ token, user });
      })
      .catch(err => {
        res.sendStatus(403);
        return next(err);
      });
  });

  crudRoute(app, 'category', categoryCtrl);

  crudRoute(app, 'course', courseCtrl);

  crudRoute(app, 'event', eventCtrl);

  crudRoute(app, 'ingredient', ingredientCtrl);

  crudRoute(app, 'menu', menuCtrl);
};

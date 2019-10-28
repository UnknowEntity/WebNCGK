var express = require('express');
var router = express.Router();
var usermodel = require('../models/user.model');
var passport = require('../middlewares/passport');
const jwt = require('jsonwebtoken');
router.post('/login', (req, res, next) => {
  // eslint-disable-next-line consistent-return, func-names
  passport.authenticate('local', { session: false }, function(err, user, info) {
    // eslint-disable-next-line no-console
    console.log(err);
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Login failed',
        user
      });
    }

    // eslint-disable-next-line no-shadow
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      // eslint-disable-next-line no-console
      console.log(user);
      const token = jwt.sign(JSON.stringify(user[0]), 'your_jwt_secret');

      return res.json({ user: user[0], token });
    });
  })(req, res);
});

router.post('/register', (req, res, next) => {
  console.log(req.body);
  const entity = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  // eslint-disable-next-line no-console
  //console.log(entity);
  usermodel
    .add(entity)
    // eslint-disable-next-line no-unused-vars
    .then(n => {
      res.status(200);
    })
    .catch(next);
});

module.exports = router;

const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
var UserModel = require('../models/user.model');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async function(email, password, done) {
      //Assume there is a DB module pproviding a global UserModel
      try {
        const user = await UserModel.findOne({ email, password });
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      //jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken('jwt'),
      secretOrKey: 'your_jwt_secret'
    },
    async function(jwtPayload, done) {
      //find the user in db if needed
      try {
        const user = await UserModel.findOneById(jwtPayload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        return console.log(err);
      }
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
module.exports = passport;

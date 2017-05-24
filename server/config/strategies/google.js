var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('../config.js')
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function() {
  passport.use(new GoogleStrategy({
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  }, function(req, accessToken, refreshToken, profile, done) {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);

  var providerData = {};
  providerData.accessToken = accessToken;
  providerData.refreshToken = refreshToken;
  User.findOne({id: profile.id}, function(err, user) {
    if (err) return done(err);
    if (user) {
      return done(null, user);
    } else {
      var newUser = new User({
        id: profile.id,
        name: profile.displayName,
        providerData: providerData
      });

      newUser.save(function(err) {
        if (err) return done(err);
        return done(null, user);
      })
    }
  })

  }))
}

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (User, config) {
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      
      User.findOne({
        'facebook.id': profile.id
      },
      function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {

          user = new User({
            name: profile.displayName,
            email: profile.emails ? profile.emails[0].value : null,
            role: 'user',
            username: profile.username ? profile.username : profile.id,
            provider: 'facebook',
            facebook: profile._json,
            location: {
              zip: 55419,
              latitude: 90,
              longitude: 90
            }
          });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      })
    }
  ));
};
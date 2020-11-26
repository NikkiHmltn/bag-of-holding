const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models')

// passport "serialize" your info and  make it easier to log in
passport.serializeUser((user, cb) => {
cb(null, user.id)
});

//passport "deserialize" is going ot take the id and look it up in the database
passport.deserializeUser((id, cb) => {
    db.user.findByPk(id)
    .then(user => {
        if (user) {
            cb(null, user);
        }
    })
    .catch(err => {
        console.log(err)
    })
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb) => {
    db.user.findOne({
        where: {email}
    })
    .then(user => {
        if (!user || !user.validPassword(password)) {
            cb(null, false)
        } else {
            cb(null, user);
        }
    })
    .catch(cb);
}));

module.exports = passport;
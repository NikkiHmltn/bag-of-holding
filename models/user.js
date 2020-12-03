'use strict';
const bcrypt = require('bcrypt'); //making a hashpassword for user
const {
  Model
} = require('sequelize');
const storedchar = require('./storedchar');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.storedChar)
    }
  };
  user.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,99],
          msg: 'Name must be between 1 and 99 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 99],
          msg: 'Password must be between 8 - 99 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });

  user.addHook('beforeCreate', function(pendingUser) {
  // bcrypt hash a password for us 
  let hash = bcrypt.hashSync(pendingUser.password, 12);

  //set password to the hash
  pendingUser.password = hash;
  console.log(pendingUser)
})

user.prototype.validPassword = function(passwordTyped) {
  let correctPassword = bcrypt.compareSync(passwordTyped, this.password);
  console.log('inside of validpassword', correctPassword)
  // return true or false based on correct password or not
  return correctPassword
}
//remove the password before it gets serialized
user.prototype.toJSON = function() {
  console.log('inside of tojson method')
  let userData = this.get();
  delete userData.password;
  console.log(userData)
  return userData;
}
  return user;
};


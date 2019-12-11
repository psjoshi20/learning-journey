const bcrypt =require('bcrypt-nodejs');
//export default (sequelize, DataTypes) =>
module.exports =(sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your username'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Password should be at least 8 characters');
          }
        },
      },
    }
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasmany(model.Books,{
      foreignKey: 'userId',
    });
  };
  return User;
};


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {});
// User.beforeSave((user, options) => {
//   if (user.changed('password')) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   }
// });
// User.prototype.comparePassword = function (passw, cb) {
//   bcrypt.compare(passw, this.password, function (err, isMatch) {
//       if (err) {
//           return cb(err);
//       }
//       cb(null, isMatch);
//   });
// };
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };
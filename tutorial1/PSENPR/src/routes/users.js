var express = require('express');
var router = express.Router();
const debug = require('debug')('app:users');
/* GET users listing. */

/* GET users listing. */
router.get('/', function (req, res, next) {
  debug('Hello World! dec 2019 here I am ');

  // db.User.findAll({
  //   attributes: ['firstName', 'lastName', 'email']
  // }).then(users => {
  //   res.json(users)
  // });
});

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;

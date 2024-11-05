var express = require('express');
var router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../Controllers/UserController');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const user = await createUser();
  console.log(user.dataValues);
  
  res.render('index', { user: user });
});

module.exports = router;

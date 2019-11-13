const router = require('express').Router();
const Users = require('./usersModel');
const restricted = require('../auth/restrictedMiddleware');

router.get('/', restricted, (req, res) => {
  Users.find()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => {
    res.status(500).json(err)
  });
});

module.exports = router;
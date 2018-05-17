const express = require('express');
const router = new express.Router();
const register = require('../controllers/register')

router.get('/test', function (req, res) {
  res.send("get accepted");
});

router.route('/register')
  .post(register.post);

/*
router.route('/login')
  .post();
*/
module.exports = router;

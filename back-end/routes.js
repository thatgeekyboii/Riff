const express = require('express');
const { signUp } = require('./controllers/user-controller');

const router = express.Router();
console.log('heyy')
router.get('/api/signup', signUp);

module.exports = router;
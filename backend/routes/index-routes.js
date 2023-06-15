const express = require('express');

const indexController = require('../controllers/index-controller');

const router = express.Router();

router.post('/', indexController.fetchData);


module.exports = router;
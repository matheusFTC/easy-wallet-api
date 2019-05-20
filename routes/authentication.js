const express = require('express');

let router = express.Router();

const controller = require('../controllers/authentication');

router.post('/', controller.authenticate);

module.exports = router;

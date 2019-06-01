const express = require('express');

let router = express.Router();

const controller = require('../controllers/user');

const validate = require('../controllers/authentication').validate;
const restrict = require('../controllers/authentication').restrict;

router.get('/', restrict, controller.findAll);
router.get('/:_id', validate, controller.findById);
router.post('/', controller.save);
router.put('/:_id', validate, controller.save);
router.delete('/:_id', restrict, controller.remove);

module.exports = router;

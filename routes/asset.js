const express = require('express');

let router = express.Router();

const controller = require('../controllers/asset');

const validate = require('../controllers/authentication').validate;

router.get('/', controller.findAll);
router.get('/:_id', validate, controller.findById);
router.post('/', validate, controller.save);
router.put('/:_id', validate, controller.save);
router.delete('/:_id', validate, controller.remove);

module.exports = router;

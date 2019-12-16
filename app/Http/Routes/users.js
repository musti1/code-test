const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');


/* Get users */
router.get('/', UserController.get);

/* Get by id */
router.post('/users', UserController.getByUserId);


module.exports = router;
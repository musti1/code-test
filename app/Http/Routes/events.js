const express = require('express');
const router = express.Router();
const EventsController = require('../Controllers/EventController');

/* Add event */
router.post('/', EventsController.add);


module.exports = router;
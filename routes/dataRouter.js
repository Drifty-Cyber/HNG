const express = require('express');
const dataController = require('../controllers/dataController');

// Router Object
const router = express.Router();

// Get Route
router.route('/').get(dataController.getData);

// Export Router Object
module.exports = router;

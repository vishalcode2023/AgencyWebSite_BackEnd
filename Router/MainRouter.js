const express = require('express');
const router = express.Router();
const { ContactController } = require('../Controller/ContactController');


router.post('/contact', ContactController);

module.exports = router;
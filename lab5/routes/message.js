var express = require('express');
var router = express.Router();
const messageController = require('../controllers/message');

/* GET message listing. */
router.get('/messages',messageController.get);
router.post('/messages',messageController.post);

module.exports = router;
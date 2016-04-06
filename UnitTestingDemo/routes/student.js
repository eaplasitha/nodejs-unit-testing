var express = require('express');
var studentController = require('../controllers/studentController');
var router = express.Router();

router.get('/',studentController.getStudentById);
router.get('/name',studentController.getStudentNameById); 
router.get('/age',studentController.getStudentAgeById);
router.get('/address', studentController.getStudentAddressById);


module.exports = router;

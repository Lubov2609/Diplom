const express = require('express');
const router = express.Router();
const listController = require("../controllers/listController");

router.route('/list-group').get(listController.groupsAll);
router.route('/list-group/:groupID').get(listController.studentsAll);
router.route('/list-group/:groupID/:studentID').get(listController.listAll);

module.exports = router;
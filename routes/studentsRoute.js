const express = require('express');
const router = express.Router();
const studentsController = require("../controllers/studentsController");

router.route('/students').get(studentsController.studentsAll);

module.exports = router;

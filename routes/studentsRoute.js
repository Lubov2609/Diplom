const express = require('express');
const router = express.Router();
const studentsController = require("../controllers/studentsController");

router.route('/students/:groupID').get(studentsController.getAll)

module.exports = router;

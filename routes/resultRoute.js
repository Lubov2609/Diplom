const express = require('express');
const router = express.Router();
const resultController = require("../controllers/resultController");

router.route('/group').get(resultController.groupsAll);
router.route('/group/:groupID').get(resultController.studentsAll);

module.exports = router;
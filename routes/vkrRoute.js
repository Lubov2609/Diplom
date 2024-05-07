const express = require('express');
const router = express.Router();
const vkrController = require("../controllers/vkrController");


router.route('/list-groups').get(vkrController.groupsAll);
router.route('/list-groups/students/:groupID').get(vkrController.studentsAll);
// router.route('/group/students/:groupID/vkr/studentsID').get(vkrController.studentsAll);

module.exports = router;
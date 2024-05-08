const express = require('express');
const router = express.Router();
const vkrController = require("../controllers/vkrController");


router.route('/list-groups').get(vkrController.groupsAll);
router.route('/list-groups/:groupID').get(vkrController.studentsAll);
router.route('/list-groups/:groupID/:studentID').get(vkrController.vkrAll);

module.exports = router;

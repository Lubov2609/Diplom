const express = require('express');
const router = express.Router();
const vkrController = require("../controllers/vkrController");
const yearsController = require("../controllers/yearsController");
const docsController = require("../controllers/docsController");


router.route('/list-groups').get(vkrController.groupsAll);
router.route('/list-groups/:groupID').get(vkrController.studentsAll);
router.route('/list-groups/:groupID/:studentID').get(vkrController.getAll);
router.route('/vkr').get(vkrController.vkrAll);
router.route("/vkr/new").get(vkrController.newVKR);
router.route("/vkr/new").post(vkrController.uploadFile);
router.route("/vkr/:id").delete(vkrController.delete);

module.exports = router;

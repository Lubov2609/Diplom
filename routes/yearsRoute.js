const express = require('express');
const router = express.Router();
const yearsController = require("../controllers/yearsController");

router.route("/").get(yearsController.getAll)
router.route("/years").get(yearsController.yearsAll);
router.route("/years/new").get(yearsController.newYear);
router.route("/years").post(yearsController.create);

router.route("/years/:id/edit").get(yearsController.getById);
router.route("/years/:id").put(yearsController.update);
router.route("/years/:id").delete(yearsController.delete);

module.exports = router;

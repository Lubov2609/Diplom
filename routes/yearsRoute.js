const express = require('express');
const router = express.Router();
const yearsController = require("../controllers/yearsController");

router.route("/").get(yearsController.getAll)
router.route("/years").get(yearsController.yearsAll);
router.route("/").post(yearsController.create);
router.route("/").get(yearsController.getById);
router.route("/").put(yearsController.update);
router.route("/").delete(yearsController.delete);

module.exports = router;

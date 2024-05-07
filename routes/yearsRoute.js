const express = require('express');
const router = express.Router();
const yearsController = require("../controllers/yearsController");

router.route("/years/").get(yearsController.getAll);
router.route("/years/:id").post(yearsController.create);
router.route("/years/:id").get(yearsController.getById);
router.route("/years/:id").put(yearsController.update);
router.route("/years/:id").delete(yearsController.delete);

module.exports = router;

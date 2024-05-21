const express = require('express');
const router = express.Router();
const docsController = require("../controllers/docsController");
const yearsController = require("../controllers/yearsController");

// router.route("/docs").get(docsController.getAll)
//
// module.exports = router;

router.route('/docs/:yearID').get(docsController.getAll);
router.route('/docs').get(docsController.docsAll);
router.route("/docs/new").get(docsController.newDoc);
router.route("/docs").post(docsController.create);
router.route("/docs/new").get(docsController.newDoc);
router.route("/docs").post(docsController.create);
router.route("/docs/:id").delete(docsController.delete);


module.exports = router;

const express = require('express');
const router = express.Router();
const docsController = require("../controllers/docsController");

// router.route("/docs").get(docsController.getAll)
//
// module.exports = router;

router.route('/docs/:yearID').get(docsController.getAll);

module.exports = router;
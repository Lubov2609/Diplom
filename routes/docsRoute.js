const express = require('express');
const router = express.Router();
const docsController = require("../controllers/docsController");
const yearsController = require("../controllers/yearsController");

// router.route("/docs").get(docsController.getAll)
//
// module.exports = router;

router.route('/:yearID/docs').get(docsController.getAll);
router.route('/docs').get(docsController.docsAll);
router.get('/docs/new',docsController.fileUploadForm);
router.post('/docs/new',docsController.uploadFile);
router.route("/docs/:id").delete(docsController.delete);

module.exports = router;

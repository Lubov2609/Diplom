var express = require('express');
var router = express.Router();

var queries = require('../db/queries');


// *** GET all shows *** //
router.get('/years', function(req, res, next) {
    queries.getAll()
        .then(function(years) {
            res.status(200).json(years);
        })
        .catch(function(error) {
            next(error);
        });
});
// *** GET year show *** //
// router.get('/years/:id', function(req, res, next) {
//     queries.getYears(req.params.id)
//         .then(function(year) {
//             res.status(200).json(year);
//         })
//         .catch(function(error) {
//             next(error);
//             console.log()
//         });
// });
//
//
// // *** add show *** //
// router.post('/years', function(req, res, next) {
//     queries.add(req.body)
//         .then(function(showID) {
//             return queries.getYears(showID);
//         })
//         .then(function(show) {
//             res.status(200).json(show);
//         })
//         .catch(function(error) {
//             next(error);
//         });
// });
module.exports = router;
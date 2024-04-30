//
//
//
// const express = "express";
//
// const YearController = "../controllers/years";
//
// const router = express.Router();
//
// router.get("/years", YearController.getAll);
// router.post("/years", YearController.create);
// router.get("/years/:year", YearController.getYear);
// router.put("/years/:year", YearController.editYear);
// router.delete("/years/:year", YearController.deleteYear);
//
// export default router;
//
//
//
//
//
// // var express = require('express');
// // var router =express.Router();
// // var database = require('../knexfile');
// //
// // router.get("/",function (request,response,next) {
// //     response.render('years',{title:'CRUD'});
// //
// // });
// // router.post("/action",function(request,response,next){
// //
// //     var action = request.body.action;
// //
// //     if (action =='fetch')
// //     {
// //         var query ="SELECT * FROM years ORDER BY id DESC";
// //
// //         database.query(query,function(error,data){
// //             response.json({
// //                 data:data
// //             });
// //         });
// //     }
// // });
// //
// // module.exports = router;
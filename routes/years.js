var express = require('express');
var router =express.Router();
var database = require('../knexfile');

router.get("/",function (request,response,next) {
    response.render('years',{title:'CRUD'});
    
});
router.post("/action",function(request,response,next){

    var action = request.body.action;

    if (action =='fetch')
    {
        var query ="SELECT * FROM years ORDER BY id DESC";

        database.query(query,function(error,data){
            response.json({
                data:data
            });
        });
    }
});

module.exports = router;
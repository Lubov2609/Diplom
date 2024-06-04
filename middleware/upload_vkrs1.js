var multer = require('multer');
module.exports.files={


    storage1:function(){
        var storage1 = multer.diskStorage({
            destination1: function (req, file, cb) {
                cb(null, 'public/uploads/vkrs')
            },
            filename1: function (req, file, cb) {
                cb(null, file.originalname)
            }
        })

        return storage1;
    },
    allowedFile1:function(req, file, cb) {

        if (!file.originalname.match(/\.(pdf|doc)$/)) {
            req.fileValidationError = 'Only  files are allowed!';
            return cb(new Error('Only  files are allowed!'), false);
        }
        cb(null, true);
    },
}
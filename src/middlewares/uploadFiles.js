const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : function(req,file,callback) {
        callback(null, './public/images/products')
    },
    filename: function(req, file, callback){
        const filenameFormat = file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    callback(null, filenameFormat)
    }
})
const uploadProducts = multer ({storage})

module.exports = {uploadProducts}
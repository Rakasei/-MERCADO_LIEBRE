// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { create, store, edit, update, destroy } = require("../controllers/admin");
const { uploadProducts } = require('../middlewares/uploadFiles');

/*** CREATE ONE PRODUCT ***/
router.get('/crear-producto', create);
router.post('/crear-producto', uploadProducts.single('img'), store);

/*** EDIT ONE PRODUCT ***/
router.get('/editar-producto/:id', edit);
router.put('/editar-producto/:id', uploadProducts.single('img'), update);

/*** DELETE ONE PRODUCT***/
router.delete('/eliminar-producto/:id', destroy);

module.exports = router;
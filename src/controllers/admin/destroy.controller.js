
const path = require('path');
const fs = require('fs');
const {loadData, saveData} = require('../../data')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) =>{
    const {id} = req.params
    const products = loadData()
    
    const productFilter = products.filter(p => p.id !== +id)
    const productDestroy = products.find(p => p.id === +id)

    const pathFile = path.join(__dirname, '../../../public/images/products/' + productDestroy.image);
    const exisFile = fs.existsSync(pathFile)

    if (exisFile){
        fs.unlinkSync(pathFile)
    }
    saveData(productFilter)
    
    res.redirect('/')
}
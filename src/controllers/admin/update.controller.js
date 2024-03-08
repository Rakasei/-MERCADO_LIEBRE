const {loadData, saveData} = require("../../data")

module.exports = (req, res) => {
    const { id } = req.params
    const { name, price, discount, description, category } = req.body

    const products = loadData()
    const productMap = products.map((p) => {

        if (p.id === +id) {
            const productUpdale = {
                ...p,
                name: name.trim(),
                price: +price,
                discount: +discount,
                description: description.trim(),
                category: category.trim(),
            }
            return productUpdale
        }
        return p
    })
    saveData(productMap, "product") 
    res.redirect(`/productos/detalle/${id}`)
}
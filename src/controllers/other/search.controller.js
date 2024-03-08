const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { loadData } = require("../../data");

module.exports = (req, res) => {

    module.exports = (req, res) => {
        const { keywords } = req.query
        const products = loadData()
        const productsFilter = products.filter(
            (p) => p.name.toLowerCase().includes(keywords.toLowerCase()) || p.description.toLowerCase().includes(keywords.toLowerCase()))
        res.render('./other/results', {
            products: productsFilter,
            keywords,
            toThousand
        })
    }
}
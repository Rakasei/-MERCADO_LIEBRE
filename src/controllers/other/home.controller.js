const {loadData} = require('../../data');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res) =>{
    const products = loadData()
    const productsInSale = products.filter(p => p.category === 'in-sale')
    const productsVisited = products.filter(p => p.category === 'visited')

    res.render('./other/index', {
        productsInSale,
        productsVisited,
        toThousand
    })
}
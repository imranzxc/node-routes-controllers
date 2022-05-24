module.exports.productController = {
  getProduct: (req, res) => {
    res.json('Hello!') },
    getProductId: (req, res) => {
      res.json('id!')
    }, postProduct:(req, res) => {
      res.json('post products')
    }, deleteid:(req, res) => {
      res.json('products id')
    },
}
const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
  );

  module.exports = class Cart {
    static addProduct(id, productPrice) {
        //fetching the previous cart
       fs.readFile(p, (err,fileContent)=> {
        let cart = {products: [], totalprice: 0}
        if(!err){
            cart = JSON.parse(fileContent)
        }
        //Analyze the Cart => find existing product
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id)
        const existingProduct = cart.products[existingProductIndex]
        let updatedProduct;
        //Add New Product / increase quantity
        if(existingProduct){
            updatedProduct ={...existingProduct}
            updatedProduct.qty = updatedProduct.qty +1
            cart.products = [...cart.products]
            cart.products[existingProductIndex] = updatedProduct
        }
        else {
            updatedProduct ={id: id, qty: 1}
            cart.products = [...cart.products, updatedProduct]
        }
        cart.totalprice = cart.totalprice + +productPrice
        fs.writeFile(p, JSON.stringify(cart), (err)=>{
            console.log(err)
        })
       })
    }
  }
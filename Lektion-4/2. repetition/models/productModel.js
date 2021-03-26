const mongodb = require('mongoose');
const Product = require('./productSchema');


exports.getProducts = (req, res) => {
  Product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.getProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'Bad request'
      })
    }

    if(result) {
      Product.findById(req.params.id)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json(err))
    }
    else {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'Oops the product does not exist'
      })
    }
  })
}

exports.createProduct = (req, res) => {
  
}
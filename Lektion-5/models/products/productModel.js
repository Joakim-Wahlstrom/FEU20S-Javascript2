const mongodb = require('mongoose');
const Product = require('./productSchema');

// exports.getProducts = (req, res) => {
//   Product.find()
//     .then(data => res.status(200).json(data))
//     .catch(err => res.status(500).json({
//       statusCode: 500,
//       status: false,
//       message: err.message || 'Something went wrong when fetching the products'
//     }))
// }


exports.getProducts = (req, res) => {
  Product.find({}, (err, data) => {
    if(err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message || 'Something went wrong when fetching the products'
      })
    }

    res.status(200).json(data);

  })
}


// exports.getProducts = async (req, res) => {
//   try {

//     const data = await Product.find()
//     res.status(200).json(data);

//   } catch(err) {
//     res.status(500).json({
//       statusCode: 500,
//       status: false,
//       message: err.message || 'Something went wrong when fetching the products'
//     })
//   }
// }



exports.getProduct = (req, res) => {

  Product.exists({ _id: req.params.hej }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(result) {
      Product.findById(req.params.hej)
        .then(product => res.status(200).json(product))
        .catch(err => res.status(500).json({
          statusCode: 500,
          status: false,
          message: err.message
        }))
    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: err || 'Oops, this products does not exist'
      })
    }
  })
}
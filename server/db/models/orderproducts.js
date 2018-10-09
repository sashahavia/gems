const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('OrderProducts', {
  productPrice: {
    type: Sequelize.DECIMAL(13, 2)
  },
  regularPrice: {
    type: Sequelize.DECIMAL(13, 2)
  },
  productQuantity: {
    type: Sequelize.INTEGER
  },
  isdiscounted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = OrderProducts

const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderTotal: {
    type: Sequelize.DECIMAL(13, 2),
    defaultValue: 0.0
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  orderStatus: {
    type: Sequelize.ENUM,
    values: ['Created', 'Pending', 'Shipped', 'Delivered'],
    defaultValue: 'Pending'
  },
  datePlaced: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  shippingPrice: {
    type: Sequelize.DECIMAL(13, 2),
    defaultValue: 2.99
  },
  discountCode: {
    type: Sequelize.STRING
  }
})

module.exports = Order

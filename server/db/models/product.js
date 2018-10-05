const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL(13, 2),
    allowNull: false,
    validate: {
      min: 0.01
    }
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  color: {
    type: Sequelize.ENUM,
    values: [
      'Blue',
      'Green',
      'Purple',
      'Red',
      'Yellow',
      'Black',
      'Pink',
      'White',
      'Brown'
    ]
  }
})

module.exports = Product

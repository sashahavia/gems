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
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
      min: 0.01
    }
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  size: {
    type: Sequelize.ENUM,
    values: ['2 mm', '2.5 mm', '3 mm', '3.5 mm', '4 mm', '4.5 mm', '5 mm']
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

const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    validate: {
      len: [5, 100]
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 5
    }
  },
  comment: {
    type: Sequelize.TEXT,
    validate: {
      len: [10, 1000]
    }
  }
})
module.exports = Review

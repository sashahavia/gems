const router = require('express').Router()
const {Product} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.all({
      where: {
        stock: {
          [Op.not]: 0
        }
      },
      include: [{all: true}]
    })
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})

module.exports = router

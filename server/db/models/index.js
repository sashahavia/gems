const User = require('./user')
const Order = require('./order')
const Product = require('./product')
const Category = require('./category')
const Photo = require('./photo')
const Review = require('./review')
const Address = require('./address')
const OrderProducts = require('./orderproducts')

Product.belongsTo(Category)
Category.hasMany(Product)

Review.belongsTo(Product)
Product.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

Photo.belongsTo(Product)
Product.hasMany(Photo)

Address.belongsTo(User)
User.hasMany(Address)

Order.belongsToMany(Product, {through: 'OrderProducts'})
Product.belongsToMany(Order, {through: 'OrderProducts'})

Order.belongsTo(User)
User.hasMany(Order)

module.exports = {
  Order,
  OrderProducts,
  Photo,
  Product,
  Review,
  User,
  Category,
  Address
}

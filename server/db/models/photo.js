const Sequelize = require('sequelize')
const db = require('../db')

const Photo = db.define('photo', {
  image: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images-na.ssl-images-amazon.com/images/I/61g8H1iDU9L._UY395_.jpg'
  }
})

// Photo.beforeCreate(photo => {
// 	if (photo.image === '') {
// 		photo.image =
// 			'https://images-na.ssl-images-amazon.com/images/I/61g8H1iDU9L._UY395_.jpg'
// 		return photo.image
// 	}
// })

module.exports = Photo

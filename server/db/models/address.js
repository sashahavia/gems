const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  addressStreet: {
    type: Sequelize.STRING,
    validate: {
      len: [5, 100]
    }
  },
  state: {
    type: Sequelize.ENUM,
    values: [
      'AL',
      'AK',
      'AZ',
      'AR',
      'CA',
      'CO',
      'CT',
      'DE',
      'FL',
      'GA',
      'HI',
      'ID',
      'IL',
      'IN',
      'IA',
      'KS',
      'KY',
      'LA',
      'ME',
      'MD',
      'MA',
      'MI',
      'MN',
      'MS',
      'MO',
      'MT',
      'NE',
      'NV',
      'NH',
      'NJ',
      'NM',
      'NY',
      'NC',
      'ND',
      'OH',
      'OK',
      'OR',
      'PA',
      'RI',
      'SC',
      'SD',
      'TN',
      'TX',
      'UT',
      'VT',
      'VA',
      'WA',
      'WV',
      'WI',
      'WY'
    ]
  },
  zipcode: {
    type: Sequelize.INTEGER,
    validate: {
      len: [5, 5]
    }
  }
})

module.exports = Address

'use strict'

const db = require('../server/db')
const {
  User,
  Review,
  Product,
  Photo,
  Order,
  OrderProducts,
  Category
} = require('../server/db/models')

const categories = [
  {
    name: 'Birthstone'
  },
  {
    name: 'Raw'
  },
  {
    name: 'Polished'
  }
]

const products = [
  {
    title: 'Garnet Fire Polished Round Glass Bead',
    description:
      'This beautiful stone, which is most commonly red but can be found in a range of other colors, symbolizes peace, prosperity and good health.',
    price: 6.95,
    stock: 25,
    color: 'Red',
    size: '3 mm',
    categoryId: 3
  },
  {
    title: 'Garnet Fire Polished Round Glass Bead',
    description:
      'This beautiful stone, which is most commonly red but can be found in a range of other colors, symbolizes peace, prosperity and good health.',
    price: 6.95,
    stock: 25,
    color: 'Red',
    size: '3.5 mm'
  }
]

const photos = [
  {
    image:
      'http://www.powwowsupply.com/thumbnail.asp?file=/assets/images/fire%20polish%20beads/FP080918.jpg&maxx=300&maxy=0',
    productId: 1
  },
  {
    image:
      'https://www.jewelrysupply.com/assets/images/firepolishedround-czechglass-8mmgarnet-CZ8011b.jpg',
    productId: 1
  }
]

const reviews = [
  {
    title: 'SO BEAUTIFUL',
    rating: 5,
    comment:
      'This gemstone is SO beautiful.  It was a little bigger than expected, but worked out perfectly for my project.',
    userId: 1,
    productId: 1
  },
  {
    title: 'Unacceptable Service',
    rating: 1,
    comment:
      'I received this gemstone last week and it was completely scratched. I tried to order a new one and the customer service was horrible.',
    userId: 2,
    productId: 5
  },
  {
    title: 'Perfect!',
    rating: 3,
    comment: 'This gemstone is SO Perfect. I received this last week.',
    userId: 1,
    productId: 2
  },
  {
    title: 'Awesome Service',
    rating: 4,
    comment:
      'I ordered the wrong stone and the team was so helpful in helping me correct my order.',
    userId: 2,
    productId: 4
  },
  {
    title: 'Nice Enough',
    rating: 2,
    comment: 'Average quality, average service.',
    userId: 2,
    productId: 3
  },
  {
    title: 'Perfect alternative to Expensive birthstones',
    rating: 5,
    comment:
      'These are identical to size and cut. The colors are very vibrant. Great value at $7.99 for 12 vs. $5 each at Origami Owl. Highly recommend!',
    userId: 2,
    productId: 13
  },
  {
    title: 'Great!',
    rating: 3,
    comment: 'The gem is cut very well, with smooth edges. ',
    userId: 2,
    productId: 6
  },
  {
    title: 'Better than expected!',
    rating: 5,
    comment:
      'I just received my order on time and the beads are gorgeous! I will definitely order again.',
    userId: 1,
    productId: 3
  },
  {
    title: 'pretty rock',
    rating: 4,
    comment:
      "bought this for a friend as a pet rock, it's pretty and I think they'll raise it up to be a well behaved pet",
    userId: 2,
    productId: 13
  },
  {
    title: 'skool of rock!',
    rating: 5,
    comment: "These stones are rockin'!  Awesome quality and service!"
  },
  {
    title: 'Nice quality but the color is not at all what I expected.',
    rating: 3,
    comment:
      'Nice quality but the color is not at all what is depicted in the photo. The beads I received were mostly dark olive green with some brown color (no reds or blues). That said, the package was delivered very quickly.'
  },
  {
    title: 'Wowee Wow Wow',
    rating: 5,
    comment:
      'Exceeds expectations. I purchased this to upgrade my engagement ring and boy is it an upgrade! (I overshot the size a bit, but it was a happy mistake)',
    userId: 2,
    productId: 3
  },
  {
    title: 'Blarg!',
    rating: 0,
    comment:
      'The only positive thing I can say is that the parcel was accurately weighed. Over 95% of the stones were broken, visibly flawed, or improperly cut. There were literally none I could use for jewelry. Sending this back asap!'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Pug',
      email: 'cody@email.com',
      password: '5522',
      isAdmin: true
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Bunny',
      email: 'murphy@email.com',
      password: '3434'
    })
  ])

  await Promise.all(categories.map(category => Category.create(category)))
  await Promise.all(products.map(product => Product.create(product)))
  await Promise.all(photos.map(photo => Photo.create(photo)))

  console.log(`seeded ${users.length} users`)
  console.log('seeded successfully')
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

// exported for testing purposes (see `./seed.spec.js`)
module.exports = seed

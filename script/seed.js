'use strict'

const db = require('../server/db')
const {
  User,
  Review,
  Product,
  Photo,
  Category,
  Address,
  Order,
  OrderProducts
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
    title: 'Amethyst Cluster',
    description:
      'Because Red Amethyst is found in the solid mudstone of the Thunder Bay area, it is rare to find pieces of this size. When the Earth lifted a fault in this location, hot mineral-rich steam and water seeped into cracks in the mudstone and, as it cooled, formed this incredible red amethyst! What makes it red? Rich deep red hematite present during the formation process naturally grew into the lovely purple high quality amethyst.',
    price: 200,
    stock: 10,
    color: 'Purple',
    size: '5 mm',
    categoryId: 1
  },
  {
    title: 'Raw Aquamarine',
    description:
      'These beautiful pieces are from Brazil and later name meaning ‘water of the sea’ and will surly give you the feeling of sacred waters. These stones can be very cooling to the emotional body while allowing one feeling fearless to speak their most heartfelt truth with compassion. It is empowering for both the masculine and feminine. It enriches ones inner knowing and intuitive ability freeing oneself from attachment old patterns and relationships. It assists in an eloquence of clear speaking without anger and reminding us that not all power comes from force. With the masculine it balances temper and feminine it creates a conduit and connection to the divine feminine.',
    price: 98.95,
    stock: 100,
    color: 'Blue',
    size: '5 mm',
    categoryId: 2
  },
  {
    title: 'Uncut Raw Diamond',
    description:
      'The Precious Gemstone Diamond. Renowned for being the hardest substance on earth, its sparkling fire, durability, and rarity make Diamond the most prized of all gems. No gemstone contains as much allure and interest as does Diamond',
    price: 270.75,
    stock: 45,
    color: 'White',
    size: '4.5 mm',
    categoryId: 2
  },
  {
    title: 'Raw Emerald Crystal',
    description:
      'Emerald is the most precious stone in the beryl group. The name comes from the old French word "esmeralde", which was derived from the Greek word "smaragdos" meaning "green stone".',
    price: 18.75,
    stock: 21,
    color: 'Green',
    size: '2.5 mm',
    categoryId: 2
  },
  {
    title: 'Raw Ruby Crystal',
    description:
      'Ruby is a pink to blood-red colored gemstone, a variety of the mineral corundum. Other varieties of gem-quality corundum are called sapphires.',
    price: 15.72,
    stock: 15,
    color: 'Red',
    size: '3 mm',
    categoryId: 2
  },
  {
    title: 'Small Peridot Stones',
    description:
      'Peridot is one of the few gemstones that occur in only one color: an olive-green. The intensity and tint of the green, however, depends on the percentage of iron that is contained in the crystal structure, so the color of individual peridot gems can vary from yellow, to olive, to brownish-green.',
    price: 4.2,
    stock: 39,
    color: 'Green',
    size: '4 mm',
    categoryId: 1
  },
  {
    title: 'Blue Faceted Sapphire',
    description:
      'The sapphire is the birthstone for the month of September. The name sapphire is derived from the Latin word ““saphirus” and the Greek word “sapheiros,” both meaning blue. Some believe that the name sapphire is derived from its association with the planet Saturn. The name can be roughly be translated to mean “dear to the planet Saturn” in many different languages.',
    price: 33.75,
    stock: 55,
    color: 'Blue',
    size: '3.5 mm',
    categoryId: 1
  },
  {
    title: 'Stunning Black Opal',
    description:
      'The beautiful opal is formed from rain. There is some conjecture on how exactly this precious gemstone forms, but many believe it is formed when water from rain seeps down into crevasses in the rock. Once the water evaporates, the silica that is left behind dries out and hardens into precious opal.',
    price: 9.25,
    stock: 38,
    color: 'Black',
    size: '2.5 mm',
    categoryId: 1
  },
  {
    title: 'Yellow Topaz',
    description:
      'Most unadulterated topaz is colorless or pale blue. The most rare and valuable topaz is yellow, or pink to reddish-orange, and is known as "imperial topaz" or "precious topaz". Some yellowish-brown topaz gems can gradually fade when continually exposed to daylight.',
    price: 17.5,
    stock: 64,
    color: 'Yellow',
    size: '2 mm',
    categoryId: 1
  },
  {
    title: 'Polished Black Onyx',
    description:
      'A Black Onyx stone provides powerful protective energy that help to shield the mind and body from negative energies and electromagnetic energies. It absorbs and transforms negative energy, while preventing the draining of personal energy in the process.',
    price: 5.75,
    stock: 67,
    color: 'Black',
    size: '4 mm',
    categoryId: 3
  },
  {
    title: 'Raw Rose Quartz',
    description:
      'Rose Quartz is the rosy pink variety of Quartz. Its color is usually soft, ranging from very light pink to medium pink in intensity. It is often hazy or turbid, which makes it lack good transparency.',
    price: 3.45,
    stock: 10,
    color: 'Pink',
    size: '3.5 mm',
    categoryId: 2
  },
  {
    title: 'Flower Agate Dendrites',
    description:
      'Dendritic agate is a translucent, colorless to whitish-gray variety of chalcedony quartz, easily distinguished by its distinct tree- or fern-like markings known as "dendrites", which are most often brown to black in color.',
    price: 15.23,
    stock: 3,
    color: 'Brown',
    size: '4.5 mm',
    categoryId: 3
  },
  {
    title: 'Flower Agate',
    description:
      'Dendritic agate is a translucent, colorless to whitish-gray variety of chalcedony quartz, easily distinguished by its distinct tree- or fern-like markings known as "dendrites", which are most often brown to black in color.',
    price: 15.23,
    stock: 0,
    color: 'Brown',
    size: '4 mm',
    categoryId: 3
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
  },
  {
    image:
      'https://i.etsystatic.com/10903412/r/il/ca6853/1576056551/il_570xN.1576056551_cblk.jpg',
    productId: 2
  },
  {
    image:
      'https://i.etsystatic.com/10903412/r/il/6b247a/1576056275/il_570xN.1576056275_lrhn.jpg',
    productId: 2
  },
  {
    image: 'https://juliemcafee.com/wp-content/uploads/2018/03/IMG_6247.jpg',
    productId: 3
  },
  {
    image:
      'https://www.angelleesadesigns.com/image/cache/data/products/gemstones/rough-gemstones/aquamarine/gem-raw-aquamarine-11-800x800.jpg',
    productId: 3
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0114/5222/products/OX1705_large.jpg?v=1505111121',
    productId: 4
  },
  {
    image:
      'http://cdn3.volusion.com/fxrhd.atpwc/v/vspfiles/photos/Cut298can-2.jpg',
    productId: 4
  },
  {
    image:
      'https://www.gemonediamond.com/wp-content/uploads/2015/07/IMG_2856.jpg',
    productId: 4
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/2419/5919/products/EMERALD_RAW-1_1024x1024@2x.jpg?v=1510007101',
    productId: 5
  },
  {
    image:
      'http://loripowersjewelry.com/wp-content/uploads/2015/05/rough-emerald-parcel.jpg',
    productId: 5
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61Jct-bykqL._UY500_.jpg',
    productId: 6
  },
  {
    image:
      'https://assets.catawiki.nl/assets/2017/7/13/b/1/8/b18b3ed8-f490-4e32-a24f-58c6f341e856.jpg',
    productId: 6
  },
  {
    image:
      'https://www.crystalvaults.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/0/900333b_1.jpg',
    productId: 7
  },
  {
    image:
      'https://s3.amazonaws.com/images.kernowcraft.com/usercontent/img/col-12/29029.jpg',
    productId: 7
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/2419/5919/products/PERIDOT-2_1024x1024@2x.jpg?v=1510173546',
    productId: 7
  },
  {
    image:
      'https://s3.amazonaws.com/images.kernowcraft.com/usercontent/img/col-12/7188.jpg',
    productId: 8
  },
  {
    image:
      'https://4.imimg.com/data4/VM/MB/MY-24672552/blue-sapphire-stone-500x500.jpg',
    productId: 8
  },
  {
    image: 'https://opalgalaxy.com/wp-content/uploads/2018/07/TT101.jpg',
    productId: 9
  },
  {
    image:
      'https://www.houseofmarbles.com/shop/wp-content/uploads/2017/01/130101-Black-Opal.jpg',
    productId: 9
  },
  {
    image:
      'https://cdn.shopclues.com/images/thumbnails/76509/320/320/122560895410JikEVDUL1499014433.jpg',
    productId: 10
  },
  {
    image:
      'https://svctips.com/89-thickbox_default/buy-natural-certified-yellow-topaz-pukhraj-pure-yellow-gemstone-online-in-india.jpg',
    productId: 10
  },
  {
    image:
      'https://cdn3.volusion.com/qz29d.hncd6/v/vspfiles/photos/GEM-532-2.jpg?1487081183',
    productId: 11
  },
  {
    image: 'http://www.crystalage.com/img/products/black-onyx-thumb-stone.jpg',
    productId: 11
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/6127HURS71L._SX425_.jpg',
    productId: 12
  },
  {
    image: 'http://thehealingchest.com/assets/images/stones/rose_quartz.jpg',
    productId: 12
  },
  {
    image:
      'https://i.etsystatic.com/6060039/r/il/aeb53c/1602987623/il_570xN.1602987623_qyl9.jpg',
    productId: 13
  },
  {
    image:
      'https://i.etsystatic.com/12612002/r/il/093c1e/1552527026/il_fullxfull.1552527026_376a.jpg',
    productId: 13
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
    productId: 12
  },
  {
    title: 'skool of rock!',
    rating: 5,
    comment: "These stones are rockin'!  Awesome quality and service!",
    userId: 3,
    productId: 9
  },
  {
    title: 'Nice quality but the color is not at all what I expected.',
    rating: 3,
    comment:
      'Nice quality but the color is not at all what is depicted in the photo. The beads I received were mostly dark olive green with some brown color (no reds or blues). That said, the package was delivered very quickly.',
    userId: 2,
    productId: 5
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
      'The only positive thing I can say is that the parcel was accurately weighed. Over 95% of the stones were broken, visibly flawed, or improperly cut. There were literally none I could use for jewelry. Sending this back asap!',
    userId: 3,
    productId: 6
  }
]

const users = [
  {
    firstName: 'Cody',
    lastName: 'Pug',
    email: 'cody@email.com',
    password: '5522',
    isAdmin: true
  },
  {
    firstName: 'Murphy',
    lastName: 'Bunny',
    email: 'murphy@email.com',
    password: '3434'
  },
  {
    firstName: 'Bat',
    lastName: 'Man',
    email: 'batman@email.com',
    password: '3434'
  }
]

const addresses = [
  {
    addressStreet: '1388 East 2nd Street',
    state: 'NY',
    zipcode: 11230,
    userId: 1
  },
  {
    addressStreet: '1500 West 2nd Street',
    state: 'PA',
    zipcode: 11200,
    userId: 2
  },
  {
    addressStreet: '100 Main Street APT 1F',
    state: 'PA',
    zipcode: 34567,
    userId: 2
  },
  {
    addressStreet: '345 Broadway Ave',
    state: 'NJ',
    zipcode: 34567,
    userId: 3
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(users.map(user => User.create(user)))
  await Promise.all(addresses.map(address => Address.create(address)))
  await Promise.all(categories.map(category => Category.create(category)))
  await Promise.all(products.map(product => Product.create(product)))
  await Promise.all(photos.map(photo => Photo.create(photo)))
  await Promise.all(reviews.map(review => Review.create(review)))

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

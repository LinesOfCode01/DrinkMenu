const bottlesApi = [
  {
    id: 65,
    name: 'Absolute',
    category: 'Vodka',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/Bottle_Shot_Absolut_960x.jpg?v=1600815582',
    price: 39,
    description:
      'Absolut Vodka is unique character, in both design and taste. Rich, full-bodied and complex, yet smooth and mellow with a distinct character of grain, followed by a hint of dried fruit.',
  },
  {
    id: 66,
    name: 'Belvedere',
    category: 'Vodka',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/Bottle_Shot_Belv_960x.jpg?v=1617027627',
    price: 42,
    description:
      'Poland - Named after the Belvedere Palace, formerly home to Polish royalty and presidents. Handcrafted in small batches and distilled four times. Produced from Dankowskie Gold Rye. Incredibly smooth and velvety. Enjoy chilled neat or in clean, simple cocktails.',
  },
  {
    id: 67,
    name: 'Grey Goose',
    category: 'Vodka',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/ggvod_960x.jpg?v=1601523940',
    price: 45,
    description:
      'Using only the finest French ingredients, Grey Goose is renowned for its smooth and silky character. Perfect in a classic martini and for your cheers moment!',
  },
  {
    id: 68,
    name: 'Ketel One',
    category: 'Vodka',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/kos_960x.jpg?v=1599848600',
    price: 42,
    description:
      'The Nolet Distillery in Schiedam, Holland has been producing the highest quality spirits for ten generations. Ketel One Vodka is inspired by over 300 years of family distilling expertise.',
  },
  {
    id: 69,
    name: 'Patron Silver',
    category: 'Tequila',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/patron_silver_960x.jpg?v=1594059440',
    price: 45,
    description:
      'Mexico - Blue Agave. Crystal clear, pure ultra premium. Light, fresh tequila is a favorite of connoisseurs worldwide. Smooth, soft, light tequila. The perfect ingredient in special margaritas or mixed cocktails, neat or on the rocks.',
  },
  {
    id: 45,
    name: 'Casamigos Blanco',
    category: 'Tequila',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/casamigos-blanco-750ml_960x.jpg?v=1597700689',
    price: 39,
    description:
      'Mexico - Crisp and clear, with subtle hints of vanilla and a smooth finish. It has been distilled in copper-lined stills, then filtered, and aged two months in stainless steel containers. Great served neat or on the rocks, and perfect base for premium cocktails.',
  },
  {
    id: 46,
    name: 'Don Julio 1942',
    category: 'Tequila',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/dj42_1_960x.jpg?v=1621449377',
    price: 52,
    description:
      'Mexico - The nose is initially caramel sweet, but clean vegetal aromas soon rise from the glass. The body is somewhat light, and the palate is gingery and peppery. The finish is soft, warm, and of medium length.',
  },
  {
    id: 47,
    name: 'Hornitos Plata',
    category: 'Tequila',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/h-plata_960x.jpg?v=1578581146',
    price: 47,
    description:
      'Mexico - For a smooth tasting tequila made from blue agave, look no further than our Plata. This tequila has a clean, lively flavor with floral and herbal notes. Enjoyable from start to finish.',
  },
  {
    id: 48,
    name: 'Mount Gay Black Barrel',
    category: 'Rum',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/blackbarrel_960x.jpg?v=1594765657',
    price: 45,
    description:
      'Our balanced sophisticated Black Barrel rum is distilled in traditional copper tools and matured in American Whiskey casks then finished in deeply charred bourbon casks.',
  },
  {
    id: 49,
    name: 'Ten To One White',
    category: 'Rum',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/1021white_960x.jpg?v=1599160448',
    price: 45,
    description:
      'Jamaica-An enticing unaged blend of column still rum from the Dominican Republic, which combines exceptionally well with high ester pot still rum from Jamaica,',
  },
  {
    id: 50,
    name: 'Diplomático',
    category: 'Rum',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/dip1_d69028cf-c89e-433b-89a2-9b2d02eb849b_960x.jpg?v=1616073851',
    price: 48,
    description:
      'Beautiful baked banana flavor with notes of fudge, toffee and vanilla oak, mingling well into gingerbread and orange zest. Voted spirit of the year 2018 from Wine Enthusiast',
  },
  {
    id: 51,
    name: 'Plantation Rum',
    category: 'Rum',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/OG-Dark_960x.jpg?v=1617807760',
    price: 45,
    description:
      'Barbados-Bold aromas of coconut creme pie and creme brulee follow through on a rich entry to a fruity medium-full body with layers of dried tropical fruits and sweet baking spices.',
  },
  {
    id: 52,
    name: 'Johnnie Walker Whisky',
    category: 'Whiskey',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/jwb_960x.jpg?v=1603753315',
    price: 42,
    description:
      'Scotland - The original Walker family blend, handcrafted from as many as 40 of the finest Scotch whiskies aged a minimum of 12 years, for a smooth and robust blend. Rich smoky malt, peat and sherry fruit character deliver a satisfyingly complex flavor on the long, lingering finish.',
  },
  {
    id: 53,
    name: 'Fortaleza Blanco',
    category: 'Tequila',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/fortaleza-blanco_960x.jpg?v=1542757224',
    price: 45,
    description:
      'Mexico - Produced and bottled on a family estate located in Tequila, Jalisco, Mexico using the traditional processes started 125 years ago. Silky on the tongue, piquantly herbal and floral on the palate, and has a bit of peppery spice on the finish.',
  },
  {
    id: 54,
    name: 'Equiano',
    category: 'Rum',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/Bottle_equiano_960x.jpg?v=1602772806',
    price: 48,
    description:
      'This unique spirit is a blend of 10-year-old African and 8-year-old Caribbean rum, the first of its kind. Complex, rich, and deep, it brings together two worlds, honoring the legacy of freedom fighter and abolitionist Olaudah Equiano',
  },
  {
    id: 55,
    name: '1800® CRISTALINO',
    category: 'Tequila',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/1800_960x.jpg?v=1619203678',
    price: 65,
    description:
      'USA - Pure, clean and smooth with a pleasing texture and classic aromas. Light charcoal, citrus, flower flavors. Distilled three times from American grains. Great for mixed drinks.',
  },
  {
    id: 56,
    name: 'Ardbeg Whiskey',
    category: 'Whiskey',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/Bottle_Shot_Ardbeg_960x.jpg?v=1605309727',
    price: 45,
    description:
      'Ardbeg Ten has rich aromas of ocean air, taffy and an undeniable peat smoke, which are balanced by softer elements of vanilla and lemon zest on the palate. The finish, which is mildly sweet, is nicely seasoned by malt grains, espresso and chocolate-covered almonds.',
  },
  {
    id: 57,
    name: "Jack Daniel's Single Barrel",
    category: 'Whiskey',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/jd-single-barrel-select_960x.jpg?v=1603340907',
    price: 52,
    description:
      'Tennessee - Sour mash whiskey made in Tennessee from natural corn, rye, barley malt and then charcoal filtered. Sweet with caramel, vanilla and charred wood. Pure, clean, and smooth. Classic. ',
  },
  {
    id: 58,
    name: 'Jameson Irish Whiskey',
    category: 'Whiskey',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/Jameson-Original_960x.jpg?v=1600130588',
    price: 42,
    description:
      'Jameson Irish Whiskey boasts a perfectly balanced flavor profile with spicy, nutty and sweet notes. The nose is lightly floral and peppered with spice, making this one of the most broadly appealing whiskeys on the market. ',
  },
  {
    id: 59,
    name: "Hendrick's Gin",
    category: 'Gin',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/Hendricks-Gin_960x.jpg?v=1599159332',
    price: 39,
    description:
      'Hendrick’s wondrous botanical signature consists of flowers, roots, fruits, and seeds from the world over. They function to complement and set the stage for our delicious duet of infusions: rose petal and cucumber.',
  },
  {
    id: 60,
    name: 'Roku Japanese Gin',
    category: 'Gin',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/roku-gin_960x.jpg?v=1602866113',
    price: 45,
    description:
      'Roku is the premium Japanese craft gin created by the House of Suntory in Osaka, Japan. Crafted by Japanese artisans with meticulous attention to detail, Roku is the perfect balance of flavors. Its precise balance is testimony to Japan’s renowned craftsmanship.',
  },
  {
    id: 61,
    name: 'The Botanist Islay Dry Gin',
    category: 'Gin',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/botangin_960x.jpg?v=1595878126',
    price: 39,
    description:
      'Scotland- The Botanist is a gin of layered complexity. 22 hand-foraged local botanicals delicately augment nine berries, barks, seeds and peels during an achingly slow distillation.',
  },
  {
    id: 62,
    name: 'Junipero Gin',
    category: 'Gin',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/junipero_960x.jpg?v=1615482891',
    price: 48,
    description:
      'With a name like Junipero you know juniper is going to drive the flavor profile. Accordingly, it features a light, juniper-rich piney fragrance and a pungent, earthy flavor, with loads of anise and a good wallop of alcohol.',
  },
  {
    id: 63,
    name: 'Fireball Cinnamon Whisky',
    category: 'Whiskey',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/fireball_960x.jpg?v=1542757386',
    price: 39,
    description:
      "Fireball is made with Canadian whisky and natural cinnamon flavours. It's certainly very cinnamon-y (if that's a word), and it's not too sweet, which is a plus. A very popular shot drink on the other side of the pond. Tastes Like Heaven, BURNS LIKE HELL",
  },
  {
    id: 64,
    name: 'Monkey 47 Schwarzwald',
    category: 'Dry Gin',
    image:
      'https://cdn.shopify.com/s/files/1/0013/2477/7569/products/monkey-gin_960x.jpg?v=1614294638',
    price: 45,
    description:
      'Germany - Distilled from 47 predominantly unusual but regional botanicals such as lingonberries and blended with natural spring water.',
  },
];

module.exports = bottlesApi;

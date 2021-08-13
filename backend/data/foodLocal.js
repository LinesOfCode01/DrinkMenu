const foodLocal = [
  {
    id: 20,
    name: 'Cheese Burger',
    image:
      'https://hip2save.com/wp-content/uploads/2020/09/act-mouthwash-3.jpg',
    price: 18,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 21,
    name: 'Chicken Sandwich',
    image:
      'https://erhardtseat.com/wp-content/uploads/2020/06/BLT-Grilled-Chicken-Sandwich-BLOG-4.jpg',
    price: 18,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },

  {
    id: 22,
    name: 'Pulled Pork Sandwich',
    image:
      'https://natashaskitchen.com/wp-content/uploads/2016/03/BBQ-Pulled-Pork-5-600x900.jpg',
    price: 18,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 23,
    name: 'Grouper Sandwich',
    image:
      ' https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2010/04/grouper-sandwich.jpg',
    price: 18,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 24,
    name: 'Chicken Wings',
    image:
      'https://larkinbros.com/wp-content/uploads/2020/10/chicken-wings.jpg',
    price: 12,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 26,
    name: 'Chicken Fingers',
    image:
      `https://img.thrfun.com/img/173/017/chicken_strip_x1.jpg`,
    price: 12,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 27,
    name: 'House Salad',
    image:
      `https://www.theanthonykitchen.com/wp-content/uploads/2017/01/House-Salad-1.jpg`,
    price: 8,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 28,
    name: 'Chicken  Salad',
    image:
      'https://littlespicejar.com/wp-content/uploads/2018/07/Crispy-Chicken-Salad-with-BBQ-Honey-Mustard-Dressing-2.jpg',
    price: 12,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 29,
    name: 'Potato Skins',
    image: 'https://thebakermama.com/wp-content/uploads/2015/09/IMG_9811.jpg',
    price: 10,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 30,
    name: 'Loaded Nachos',
    image:
      'https://www.thehomecookskitchen.com/wp-content/uploads/2018/01/These-pulled-pork-loaded-nachos-are-PERFECT-for-you-Super-Bowl-game-day-party-www.thehomecookskitchen.com_-3.jpg',
    price: 12,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 31,
    name: 'Fried Mac and Cheese',
    image:
      'https://hzwq4ajxo2-flywheel.netdna-ssl.com/wp-content/uploads/2018/07/Harveys-Fried-Mac-Cheese-300x200.jpg',
    price: 8,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },

  {
    id: 32,
    name: 'Chicken Egg Roll',
    image:
      'https://tatyanaseverydayfood.com/wp-content/uploads/2014/04/Avocado-Chicken-Rolls.jpg',
    price: 8,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },

  {
    id: 33,
    name: 'Loaded French Fries',
    image:
      'https://www.papernstitchblog.com/wp-content/uploads/2017/02/super-bowl-recipe-loaded-french-fry-nachos-1.jpg',
    price: 12,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 34,
    name: 'Fried Green Beans',
    image:
      'https://cakewhiz.com/wp-content/uploads/2017/08/How-To-Make-Crispy-Fried-Green-Beans.jpg',
    price: 8,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 35,
    name: 'Artichoke Dip',
    image:
      'https://cookieandkate.com/images/2017/09/cheesy-spinach-artichoke-dip-1100x1648.jpg',
    price: 8,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },

  {
    id: 36,
    name: 'Bean Soup',
    image:
      'https://www.foodiecrush.com/wp-content/uploads/2020/09/Sausage-Soup-With-Beans-foodiecrush.com-011-683x1024.jpg',
    price: 5,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },

  {
    id: 37,
    name: 'Minestrone Soup',
    image:
      'https://theviewfromgreatisland.com/wp-content/uploads/2018/11/minnestrone-soup-2283-November-09-2018-3.jpg',
    price: 5,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
  {
    id: 38,
    name: 'Chicken Noodle Soup',
    image:
      'https://www.wellplated.com/wp-content/uploads/2019/02/Crock-Pot-Chicken-Noodle-Soup-Healthy-600x829.jpg',
    price: 5,
    description:
      'Necessitatibus voluptatem occaecati id cumque animi. Porro quia molestiae mollitia esse ex.',
  },
];

module.exports = foodLocal;

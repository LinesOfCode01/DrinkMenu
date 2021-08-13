const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Message = require('../models/Message');
const User = require('../models/User');
const margaritas = require('../data/margaritas');
const Bottle = require('../models/Bottle');
const bottlesApi = require('../data/bottlesApi');
const Order = require('../models/Order');
const Food = require('../models/Food');
const foodLocal = require('../data/foodLocal');



router.post(`/add-message`, authorize, (req, res) => {
  let msg = req.body;
  msg.ownerId = res.locals.user._id;
  Message.create(msg).then(message => res.json(message));
});

router.get('/margaritas', (req, res) => {
  res.json({ margaritas });
});
router.get(`/get-user`, authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});

router.get('/get-messages', (req, res) => {
  Message.find().then(messages => res.json(messages));
});

router.get('/get-my-messages', authorize, (req, res) => {
  Message.find({ ownerId: res.locals.user._id }).then(messages =>
    res.json(messages)
  );
});

router.get('/get-my-orders', (req, res) => {
  Order.find({}).then(orders => res.json(orders));
});

router.get('/', (req, res) => {
  res.json({ serverWorks: true });
});

router.get('/bottlesApi', (req, res) => {
  res.json({ bottlesApi });
});

//FOOD
router.get('/foodLocal', (req, res) => {
  res.json({ foodLocal });
});


router.post('/logMeIn', async (req, res) => {
  //FIND USER
  let user = await User.findOne({ email: req.body.email });

  //IF NO USER >> CREATE USER

  if (!user) {
    user = await User.create(req.body);
  }

  jwt.sign({ user }, 'secret key', { expiresIn: '30min' }, (err, token) => {
    res.json({ user, token });
  });
});


function authorize(req, res, next) {  
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(' ')[1];    
    jwt.verify(token, 'secret key', async (err, data) => {
      if (!err) {        
        res.locals.user = data.user;
        next();
      } else {
        console.error(err);
        res.json({ err });
      }
    });
  } else {
    res.status(403).json({ message: 'You dont have a token' });
  }
}

const stripe = require('stripe')(
  
  'sk_test_51Iss5zD071Co8nngbUjcZ6oqVo9qtttynts22gl1YOsbQX3WjkQ90Y2uuKG9g4ypATPf75RcuO2FXlcLVPJ8uEE700LWmISfzb'
);


const YOUR_DOMAIN = 'http://localhost:3000/Profile';



router.post('/create-checkout-session', async (req, res) => {  
  let foods = Object.values(JSON.parse(req.query.cart));  

  let price = 0;
  let name = "";
  let image = "";
  for (let food of foods) {
    price += Number(food.price) * 100 * food.quantity;
    name += food.name + ", ";
    image += food.image;
  }

  //Loop thru req.query.cart and make one long name

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: name,
            images: [image],
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  Order.create({
    name: name,
    price: price,    
  });
  res.json({ id: session.id });
});

module.exports = router;
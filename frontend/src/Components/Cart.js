import React, { useState, useEffect } from 'react';
import './Cart.css';
import { loadStripe } from '@stripe/stripe-js';
import actions from '../api';


const stripePromise = loadStripe(  
  'pk_test_51Iss5zD071Co8nnggXi2Xn8KYyJLQKtfHCxL7wvzNdyzS3iLhuf6PD20K2SUa96lmw3u1sq2RbjHHYmeO5pFfoZy00hA6PtXQ9'
);

const Cart = props => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async event => {
    const stripe = await stripePromise;

    const response = await actions.checkout(props.cart);
        
    const session = response.data;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  let total = 0;

  let removeItems = item => {
    let cart = { ...props.cart };
    delete cart[item.id];
    props.setCart(cart);
  };

  let handleChange = item => e => {
    let cart = { ...props.cart };
    // setting e.target.value to the quantity of the unique cart item   
    cart[item.id].quantity = Number(e.target.value);

    props.setCart(cart);
  };

  let displayAllProducts = () => {
    let products = [];
    for (let key in props.cart) {
      let item = props.cart[key];
      total += item.price * item.quantity;
      products.push(
        <div key={key}>
          <img style={{ width: '200px' }} src={item.image} />
          <div>
            <b>{item.name}</b>
          </div>
          <div>${item.price}</div>
          <p>
            <b>Special Request: </b>
            {item.description}
          </p>
          <button onClick={() => removeItems(item)}>Remove</button>
          <div>
            <input
              onChange={handleChange(item)}
              className="input"
              type="number"
              defaultValue={props.cart[item.id]?.quantity}
              min="1"
            />
          </div>
          Subtotal: ${item.price * item.quantity}
        </div>
      );
    }
    products.unshift(<h2 key={Math.random()}>${total}</h2>);
    return <div>{products}</div>;
  };

  return (
    <div className="cart_container">
      <h1>YOUR ORDER</h1>
      <div className="checkout_btn">
        <button onClick={handleClick}>Checkout</button>
      </div>
      <div>{displayAllProducts()}</div>
    </div>
  );
};

export default Cart;

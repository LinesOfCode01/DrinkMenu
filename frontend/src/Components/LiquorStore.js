import React, { useState, useEffect } from 'react';
import './LiquorStore.css';
import actions from '../api';
import BottleHeader from './BottleHeader';

const LiquorStore = props => {
  const [bottle, setBottle] = useState([]);  

  useEffect(() => {
    actions.getBottle().then(res => {
      setBottle(res.data.bottlesApi);
    });
  }, []);

  const addToCart = data => {    

    let cart = { ...props.cart };
    if (cart[data.id]) {
      alert('item already in Shopping cart');
    } else {
      // adding quantity key value to data object
      data.quantity = 1;
      // data is the object you clicked on, cart[data.id] is the unique item within the list of items in the cart. This adds it to the cart
      cart[data.id] = data;      
    }
    // Setting cart to new values
    props.setCart(cart);
  };

  const showBottles = () => {
    return (
      <div className="container-fluid">
        <div className="container1">
      <div className="header">
        <div>
          <h1>Our Liquor Store </h1>
        </div>

        <div className="header-div1">        
        </div>
        <BottleHeader />
      </div>      
    </div>
        <div className="row">
          {bottle.map((bottles, i) => (
            <div
              key={i}
              className="cardss col-xl-3 col-lg-4 col-md-6 col-sm-12"
            >
              <div className="card text-center">
                <img src={bottles.image} />
                <div className="card-body">
                  <p>
                    <strong>{bottles.name}</strong>
                  </p>
                  <p>{bottles.category} </p>
                  <p>${bottles.price}</p>
                </div>
                <button type="button" onClick={() => addToCart(bottles)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div>{showBottles()}</div>  
};

export default LiquorStore;

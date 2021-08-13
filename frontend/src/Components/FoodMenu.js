import React, { useState, useEffect } from 'react';
import actions from '../api';
import './FoodMenu.css';

const FoodMenu = props => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    actions.getFood().then(res => {
      setFood(res.data.foodLocal);
    });
  }, []);

  const addToCart = data => {    

    let cart = { ...props.cart };
    if (cart[data.id]) {
      alert('item already in Shopping cart');
    } else {
      data.quantity = 1;

      cart[data.id] = data;
    }
    props.setCart(cart);
  };

  const showFood = () => {
    return (
      <div className="container-fluid">
        <h1>MENU</h1>
        <div className="row">
          {food.map((meal, i) => (
            <div
              key={i}
              className="cardss col-xl-3 col-lg-4 col-md-6 col-sm-12"
            >
              <div className="card text-center">
                <img src={meal.image} className="card-img-top" />
                <div className="card-body">
                  <b>{meal.name}</b>
                  <p>${meal.price}</p>
                  <p>{meal.description}</p>
                </div>
                <button type="button" onClick={() => addToCart(meal)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div>{showFood()}</div>;
};

export default FoodMenu;

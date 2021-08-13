import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Diy.css';
import actions from '../api';
import { Container, Row, Col } from 'reactstrap';
import { render } from 'react-dom';

function Diy(props) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    actions.getMargs().then(res => {
      setDrinks(res.data.margaritas);
    });
  }, []);

  const [item, setItem] = useState({
    image:
      'https://cdnimg.webstaurantstore.com/images/products/large/212276/1733645.jpg',
    name: '',
    price: 12,
    description: '',
    quantity: 1,
  });

  const handleChange = selectedItem => e => {
    let copyItem = { ...item };

    if (e.target.checked && copyItem.name.split(', ').length - 1 < 3) {
      copyItem.name += selectedItem.name + ', ';
    } else {
      copyItem.name = copyItem.name.replace(selectedItem.name + ', ', '');
      e.target.checked = false;
    }    
    setItem(copyItem);
  };

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

  return (
    <div>
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5">
              CREATE A CUSTOM DRINK FOR <b style={{ color: '#277FF2' }}>$12</b>{' '}
              BY SELECTING UP TO THREE DIFFERENT FLAVORS THEN CLICKING THE "ADD
              CUSTOM DRINK TO CART BUTTON"
            </h1>
            <p className="lead"></p>
          </div>
        </div>

        <div className="d-grid gap-2">
          <button
            className="cyo_addToCart_Btn btn btn-primary btn-grad"
            onClick={() => {
              let newCart = { ...props.cart };
              let id = Math.random();
              item.id = id;
              newCart[id] = item;              
              props.setCart(newCart);
            }}
          >
            Add Custom Drink to Cart
          </button>
        </div>

        <div className="row">
          {drinks.map((item, i) => (
            <div
              key={i}
              className="cardss col-xl-3 col-lg-4 col-md-6 col-sm-12"
            >
              <div className="card text-center">
                <img src={item.image} />
                <div className="card-body">
                  <p className="drinkTxt"></p>
                </div>

                <input
                  type="checkbox"
                  className="btn-check"
                  id={item.name}                  
                  autocomplete="off"
                  onClick={handleChange(item)}
                />
                <label className="btn btn-outline-danger" for={item.name}>
                  Select
                </label>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => addToCart(item)}
                >
                  Add This Drink To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Diy;

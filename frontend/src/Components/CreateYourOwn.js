import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './cyo.css';

const Alcohol = [
  { name: 'Vodka', price: 12 },
  { name: 'Whiskey', price: 12 },
  { name: 'Tequila', price: 12 },
  { name: 'Rum', price: 12 },
  { name: 'Champagne', price: 12 },
];
const Juices = [
  { name: 'Orange' },
  { name: 'Cranberry' },
  { name: 'Tomato' },
  { name: 'Lemon' },
  { name: 'Lime' },
];
const Ingredients = [
  { name: 'Ginger' },
  { name: 'Mint' },
  { name: 'Cinnamon' },
];
const Syrup = [
  { name: 'Blue Curacao' },
  { name: 'Pure Sugar Cane' },
  { name: 'Grenadine' },
  { name: 'Passion Fruit' },
  { name: 'Strawberry ' },
  { name: 'Sweetner Sugar Free' },
  { name: 'Vanilla' },
  { name: 'Mojito Mint' },
];
const Sodas = [
  { name: 'Soda water' },
  { name: 'Club Soda' },
  { name: 'Tonic Water' },
  { name: 'Ginger Ale' },
  { name: 'Ginger Beer' },
  { name: 'Lemon-Lime Soda' },
  { name: 'Cola' },
  { name: 'Root Beer' },
];

const Options = [Alcohol, Juices, Ingredients, Syrup, Sodas];

function CreateYourOwn(props) {
  let history = useHistory();
  const [item, setItem] = useState({
    image: 'https://i.ibb.co/kDjz6vr/coctail.jpg',
    name: '',
    price: 12,
    description: '',
    quantity: 1,
  });

  const handleChange = selectedItem => e => {
    let copyItem = { ...item };
    if (e.target.checked) {
      copyItem.name += selectedItem.name + ', ';
    } else {
      copyItem.name = copyItem.name.replace(selectedItem.name + ', ', '');
    }

    setItem(copyItem);    
  };

  const showAlcohol = () => {
    return Alcohol.map(eachItem => {
      return (
        
        <div key={eachItem.name}>
          <div className="container-fluid">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
          <input
            type="checkbox"
            className="btn-check"
            name="btnradio"
            id={eachItem.name}
            autocomplete="off"
            onChange={handleChange(eachItem)}
          />
          <label className="btn btn-outline-primary" for={eachItem.name}>
            {eachItem.name}
          </label>
        </div>
        </div>
        </div>
        </div>
      );
    });
  };

  const showJuices = () => {
    return Juices.map(eachItem => {
      return (
        <div key={eachItem.name}>
          <div className="container-fluid">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
          <input
            type="checkbox"
            className="btn-check"
            name="btnradio"
            id={eachItem.name}
            autocomplete="off"
            onChange={handleChange(eachItem)}
          />
          <label className="btn btn-outline-primary" for={eachItem.name}>
            {eachItem.name}
          </label>
        </div>
        </div>
        </div>
        </div>
      );
    });
  };

  const showIngredients = () => {
    return Ingredients.map(eachItem => {
      return (
        <div key={eachItem.name}>
          <div className="container-fluid">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
          <input
            type="checkbox"
            className="btn-check"
            name="btnradio"
            id={eachItem.name}
            autocomplete="off"
            onChange={handleChange(eachItem)}
          />
          <label className="btn btn-outline-primary" for={eachItem.name}>
            {eachItem.name}
          </label>
        </div>
        </div>
        </div>
        </div>
      );
    });
  };

  const showSyrup = () => {
    return Syrup.map(eachItem => {
      return (
        <div key={eachItem.name}>
          <div className="container-fluid">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
          <input
            type="checkbox"
            className="btn-check"
            name="btnradio"
            id={eachItem.name}
            autocomplete="off"
            onChange={handleChange(eachItem)}
          />
          <label className="btn btn-outline-primary" for={eachItem.name}>
            {eachItem.name}
          </label>
        </div>
        </div>
        </div>
        </div>
      );
    });
  };

  const showSodas = () => {
    return Sodas.map(eachItem => {
      return (
        <div key={eachItem.name}>
          <div className="container-fluid">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
          <input
            type="checkbox"
            className="btn-check"
            name="btnradio"
            id={eachItem.name}
            autocomplete="off"
            onChange={handleChange(eachItem)}
          />
          <label className="btn btn-outline-primary" for={eachItem.name}>
            {eachItem.name}
          </label>
        </div>
        </div>
        </div>
        </div>
      );
    });
  };
  
  return (
    <div className="container-fluid">
      <h1>CREATE YOUR OWN DRINK</h1>
      <img
        className="banner d-block w-100"
        src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        
      />
      <h1 className="display-6">
        CREATE A CUSTOM DRINK FOR <b style={{ color: '#277FF2' }}>$12</b> BY
        SELECTING FROM THE OPTIONS BELOW
      </h1>
      You've ordered: {item.name}      
   
          <h5>
            <strong>Select Your Alcohol: </strong>
          </h5>
          {showAlcohol()} 
        
      
            <h5>
              <strong>Select Your Juices: </strong>
            </h5>          
          {showJuices()}       
                  
            <h5>
              <strong>
                Select Your Ingredients:
              </strong>
            </h5>
          {showIngredients()}          
        
            <h5>
              <strong>Select Your Syrups: </strong>
            </h5>
          {showSyrup()}          
        
            <h5>
              <strong>Select Your Sodas: </strong>
            </h5>
          {showSodas()}
               
        
        <div className="cyo_addToCart_Btn_container">
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              <h6>Special Requests :</h6>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              cols="50"
              onChange={e => {
                item['description'] = e.target.value;
                setItem(item);
              }}
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            onClick={() => {
              let newCart = { ...props.cart };
              let id = Math.random();
              item.id = id;
              newCart[id] = item;              
              props.setCart(newCart);
            }}
          >
            Add to Cart
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">{item.name}</div>
          </div>
        </div>
      </div>
    
    
        
  );
}

export default CreateYourOwn;

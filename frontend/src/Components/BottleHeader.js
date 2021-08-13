import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BottleHeader = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="
      https://daily.sevenfifty.com/app/uploads/2017/12/SFD_RTD_Cocktails_CR_courtesy_Crafthouse_Cocktails_2520x1420.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WELCOME TO OUR STORE</h3>
          <p>Summer delivered on time .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="
      https://assets.bonappetit.com/photos/5c59e88485716f2cc28c0e84/master/pass/Basically-Campari-Group.jpg
"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>Choose your bottle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cf.ltkcdn.net/cocktails/images/orig/228637-1600x1067-vanilla-vodka-drinks.jpg
"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>ENJOY</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BottleHeader;

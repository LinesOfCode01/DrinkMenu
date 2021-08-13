import React, { useEffect, useState, useContext } from 'react';
import HeroSection from './Components/HeroSection';
import Cards from './Components/Cards';
import PopUp from './Components/popUp';

function Home(props) {
  return (
    <>
      <HeroSection />
      <Cards />
      <PopUp />
      
    </>
  );
}

export default Home;

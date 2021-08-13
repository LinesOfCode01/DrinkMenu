import './App.css';
import './index.css';
import { useState, useEffect, useContext } from 'react';
import TheContext from './TheContext';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Auth from './Auth';
import actions from './api';
import CreateYourOwn from './Components/CreateYourOwn';
import CartIcon from './Components/cart-icon/cart-icon';
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import LiquorStore from './Components/LiquorStore';
import Footer from './Components/Footer';
import { Carousel } from 'react-bootstrap';
import PopUp from './Components/popUp';
import FoodMenu from './Components/FoodMenu';
import Diy from './Components/Diy';

function App(props) {
  

  const [user, setUser] = useState({});
  const context = { user, setUser };
  const [cart, setCart] = useState({});

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));    
  }, [cart]);

  useEffect(() => {    
    actions.getUser().then((res) => {     
      setUser(res.data);
    });
  }, []);

  return (
    <TheContext.Provider value={context}>
      <div className="App">
       

        <Navbar
          className="NavBack text-center"          
          variant="dark"
          sticky="top"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Toggle />
          <Navbar.Collapse className="Colap">
            <Nav className="nav_container">
              <Navbar.Brand>
                <img
                  className="navimg"
                  src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Drinks-PNG-/Summer_Cocktail_PNG_Clip_Art_Image.png?m=1507172108"
                  width="20px"
                />{" "}
                Slushie World
              </Navbar.Brand>
              <Nav.Link as={Link} className="NavL" to="/" href="/">
                Home
              </Nav.Link>              
              <Nav.Link as={Link} className="NavL" to="/Drinks" href="/Drinks">
                Drinks
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="NavL"
                to="/Create-Your-Own"
                href="/Create-Your-Own"
              >
                Create Your Own
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="NavL"
                to="/FoodMenu"
                href="/FoodMenu"
              >
                Food Menu
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="NavL"
                to="/LiquorStore"
                href="/LiquorStore"
              >
                Spirits
              </Nav.Link>              
              <Nav.Link
                as={Link}
                className="NavL"
                to="/Profile"
                href="/Profile"
              >
                Profile
              </Nav.Link>
              <Auth className="login-container" setUser={setUser} user={user} />
              <Nav.Link as={Link} to="/Cart" href="/Cart" className="cartLink">
                <CartIcon cart={cart} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} setCart={setCart} cart={cart} />
            )}
          />
          <Route exact path="/profile" component={Profile} />          
          <Route
            exact
            path="/Create-Your-Own"
            render={(props) => <CreateYourOwn setCart={setCart} cart={cart} />}
          />
          <Route
            exact
            path="/Cart"
            render={(props) => <Cart setCart={setCart} cart={cart} />}
          />
          <Route
            exact
            path="/Drinks"
            render={(props) => <Diy setCart={setCart} cart={cart} />}
          />
          <Route
            exact
            path="/FoodMenu"
            render={(props) => <FoodMenu setCart={setCart} cart={cart} />}
          />

          <Route
            exact
            path="/LiquorStore"
            render={(props) => <LiquorStore setCart={setCart} cart={cart} />}
          />
        </Switch>
        <Footer />
      </div>
    </TheContext.Provider>
  );
}

export default App;

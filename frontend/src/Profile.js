import React, { useContext, useEffect, useState } from 'react';
import actions from './api';
import TheContext from './TheContext';
import Auth from './Auth';


function Profile(props) {
  const { user, setUser } = useContext(TheContext);
  const [myMessages, setMyMessages] = useState([]);
  const [messages, setMessages] = useState([]);

  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    actions.getMyMessages().then(messages => {
      if (!messages.err) setMyMessages(messages);
    });

    actions.getMyOrders().then((orders) => setOrders(orders));
  }, []);

  useEffect(() => {
    actions.getMessages().then((data) => {
      setMessages(data);
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const handleSubmit = e => {
    e.preventDefault();
    actions.addMessage({ message }).then((res) => {
      props.history.push("/");
    });
  };

  const showMessages = () =>
    messages.map(({ message, _id }) => <li key={_id}>{message}</li>);

  const showOrders = () =>
    orders.map(({ name, price, _id }) => 
      (<li key={_id}>
        {name} {price}
      </li>)
    );

  return (
    <div>
    
      <h3>User Profile</h3>
      <h5>Welcome {user?.name}</h5>
      {<img src={user?.imageUrl} alt="" />}
      <h5>        
        {user?.email}
      </h5>

      <h3>Order History</h3>
      <h5>{showOrders()}</h5>

      {myMessages.map(({ message, _id }) => (
        <li key={_id}>{message}</li>
      ))}     
      {user?.name && (
        <div>          
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}      
    </div>
  );
}

export default Profile;

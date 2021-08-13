import axios from 'axios';


//SERVER BACKEND
const serverUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_URL
    : "https://ih-finalproject.herokuapp.com/api";
       
    
const createHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

const actions = {
  getUser: async () => {
    return await axios.get(`${serverUrl}/get-user`, createHeaders());
  },

  getMessages: async () => {
    let messages = await axios.get(`${serverUrl}/get-messages`);
    return messages.data;
  },

  getMyMessages: async () => {
    let messages = await axios.get(
      `${serverUrl}/get-my-messages`,
      createHeaders()
    );    
    return messages.data;
  },

  getMyOrders: async () => {
    let orders = await axios.get(`${serverUrl}/get-my-orders`, createHeaders());    
    return orders.data;
  },

  addMessage: async ({ message }) => {
    return await axios.post(
      `${serverUrl}/add-message`,
      { message },
      createHeaders()
    );
  },

  logIn: async ({ profileObj }) => {
    let res = await axios.post(`${serverUrl}/logMeIn`, profileObj);    
    localStorage.setItem("token", res.data.token);
    return res.data.user;
  },

  getMargs: async () => {
    return axios.get(`${serverUrl}/margaritas`);
  },
  getBottle: async () => {
    return axios.get(`${serverUrl}/bottlesApi`);
  },
  getFood: async () => {
    return axios.get(`${serverUrl}/foodLocal`);
  },

  checkout: async (cart) => {
    return axios.post(
      `${serverUrl}/create-checkout-session?cart=${JSON.stringify(cart)}`
    );
  },
};

export default actions;


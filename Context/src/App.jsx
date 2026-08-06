import React, { createContext, useState, useEffect } from 'react';
import { UserContext } from './context/userContext';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App(){

  const user = {
  name: "Rahul Sharma",
  email: "rahul@gmail.com",
  location: "Chandigarh"
};

const [cartCount, setCartCount] = useState(0);

const setCartCount1 = (count) => {
  setCartCount(count);
}

useEffect(() => {
  console.log("Cart count updated:", cartCount);
}, [cartCount]);
  
  return (
    <UserContext.Provider value={user}>
      <h2>Food Ordering App</h2>
      <Navbar cartCount={cartCount}/>


      
      <Home setCartCount={setCartCount1} />
    </UserContext.Provider>
  );
}

export default App;
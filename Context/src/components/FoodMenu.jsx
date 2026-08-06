import React from 'react';
import { newUser } from '../context/userContext';
import UserInfo from './UserInfo.jsx';

const FoodMenu = ({ setCartCount }) => {
    return (
     <div>
            <br />
            <br />
            <span>Pizza </span>
            <span>₹299 </span>
            <button onClick={() => setCartCount(prevCount => prevCount + 1)}>Add to Cart</button>
            <br />
            <span>Burger </span>
            <span>₹149 </span>
            <button onClick={() => setCartCount(prevCount => prevCount + 1)}>Add to Cart</button>
            <br />
            <span>Pasta </span>
            <span>₹199 </span>
            <button onClick={() => setCartCount(prevCount => prevCount + 1)}>Add to Cart</button>
            <br />
            <br />
            <UserInfo />
        </div>
    );
};

export default FoodMenu;
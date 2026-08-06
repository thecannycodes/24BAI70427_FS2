import React from 'react';
import { newUser } from '../context/userContext';

const Navbar = ({cartCount}) => {
    const user = newUser();

    return (
        <div>
            <p>Welcome, {user.name}!</p>
            <p>Location: {user.location}</p>
            <p>Cart: {cartCount}</p>
        </div>
    );
};

export default Navbar;
import React from 'react';
import FoodMenu from './FoodMenu.jsx';

const Restaurant = ({ setCartCount }) => {
    return (
        <div>
            <FoodMenu setCartCount={setCartCount} />
        </div>
    );
};

export default Restaurant;
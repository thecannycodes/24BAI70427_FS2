import React from 'react';
import Restaurant from './Restaurant.jsx';

const Home = ({setCartCount}) => {
    return (
        <div>
            <Restaurant setCartCount={setCartCount}/>
        
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import { newUser } from '../context/userContext';

const UserInfo = () => {
    const user = newUser();
    return (    
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
        </div>
    );
};

export default UserInfo;
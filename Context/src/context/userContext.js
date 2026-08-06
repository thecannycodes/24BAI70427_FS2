import React, { createContext, useContext } from "react";

export const UserContext = createContext();

export const newUser = () =>{
    return useContext(UserContext);
};

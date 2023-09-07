import React, { createContext, useContext, useState } from "react";

const UserStateContext = createContext();

export const UserStateProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
  
  
  
    return (
      <UserStateContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </UserStateContext.Provider>
    );
  };
  
  export const useUserState = () => {
    return useContext(UserStateContext);
  };
  
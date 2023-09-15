import React, { createContext, useContext, useState } from "react";

const ItemStateContext = createContext();

export const UserStateProvider = ({ children }) => {
    const [currentItem, setCurrentItem] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
  
    return (
      <ItemStateContext.Provider value={{ currentItem, setCurrentItem, currentUser, setCurrentUser ,isAuth, setIsAuth}}>
        {children}
      </ItemStateContext.Provider>
    );
  };
  
  export const useItemState = () => {
    return useContext(ItemStateContext);
  };


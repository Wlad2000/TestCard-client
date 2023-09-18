import React, { createContext, useContext, useState } from "react";

const ItemStateContext = createContext();

export const UserStateProvider = ({ children }) => {
    const [currentItem, setCurrentItem] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [lang, setLang] = useState('en')
  
    return (
      <ItemStateContext.Provider value={{ currentItem, setCurrentItem, currentUser, setCurrentUser ,isAuth, setIsAuth,lang, setLang}}>
        {children}
      </ItemStateContext.Provider>
    );
  };
  
  export const useItemState = () => {
    return useContext(ItemStateContext);
  };


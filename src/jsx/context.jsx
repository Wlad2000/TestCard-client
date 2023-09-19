import React, { createContext, useContext, useState } from "react";

const ItemStateContext = createContext();

export const UserStateProvider = ({ children }) => {
    const [currentItem, setCurrentItem] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [lang, setLang] = useState('en')
    const [imageData, setImageData] = useState(null);
    const [reload, setReload] = useState(false)
  
    return (
      <ItemStateContext.Provider value={{reload, setReload, currentItem, setCurrentItem, currentUser, setCurrentUser ,isAuth, setIsAuth,lang, setLang, imageData, setImageData}}>
        {children}
      </ItemStateContext.Provider>
    );
  };
  
  export const useItemState = () => {
    return useContext(ItemStateContext);
  };


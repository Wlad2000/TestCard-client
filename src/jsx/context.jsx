import React, { createContext, useContext, useState } from "react";

const ItemStateContext = createContext();

export const UserStateProvider = ({ children }) => {
    const [currentItem, setCurrentItem] = useState('');
  
  
  
    return (
      <ItemStateContext.Provider value={{ currentItem, setCurrentItem }}>
        {children}
      </ItemStateContext.Provider>
    );
  };
  
  export const useItemState = () => {
    return useContext(ItemStateContext);
  };
  
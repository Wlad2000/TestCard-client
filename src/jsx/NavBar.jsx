import React, { useState } from 'react'
import { useItemState } from './context';
import { Button, Rectangle, Text } from './QuickBase'
import { useTranslation } from 'react-i18next'
import imgEn from '../img/flag_ssha.png'
import imgUa from '../img/flag_ukraine.svg.png'
import Dropdown from './Dropdown';

const NavBar = () => {
    const { currentUser,setCurrentUser, lang, setLang } = useItemState();
  
    const options = [
      { name: "en", image: imgEn, title: "England" },
      { name: "ua", image: imgUa, title: "Ukraine" },
    ]; 


    const {t,i18n} = useTranslation()
  

    const handleExit = () => {
        localStorage.removeItem('user');
    
        setCurrentUser(null);
      };
 



  return (
    <Rectangle
        width = "100%"
        height = "60px"
        position = "sticky"
        top = "0"
        display = "flex"
        justifyContent= "center"
        background = " rgba(215,187,226,1)"
        zIndex="2"
    >
         <Rectangle
        width = "70%"
        display = "flex"
        justifyContent= "space-between"
        alignItems = "center"

      >
        <Text 
        flex = "1"
          text={`${t("card.title")} ` } 
        />
        <Dropdown options={options}/>
        
        {currentUser && 
              <Button
                    cursor = "pointer"
                    backgroundColor = "coral"
                    color = "#fff"
                    border = "none"
                    width = "70px"
                    marginBottom = "5px"
                    height = "30px" 
                    borderRadius = "20px"
                    onClick={() => handleExit()} 
                    text={t("card.exitBtn")}
                />
        }
      </Rectangle>

    </Rectangle>
  )
}

export default NavBar
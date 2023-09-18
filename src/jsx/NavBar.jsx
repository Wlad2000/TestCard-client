import React, { useState } from 'react'
import { useItemState } from './context';
import { Button, Rectangle, Text } from './QuickBase'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
    const { currentUser,setCurrentUser } = useItemState();

    const [lang, setLang] = useState('en')
    const {t,i18n} = useTranslation()
  
    const changesLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }
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
        <Rectangle
           border= " 1px solid purple"
           border-radius= "10px"
           background-color = " grey"
           alignItems = "center"
           display = "flex"
           flexDirection = "column"
           justifyContent = "center"
           rowGap = "3px"
           width ="40px"
           marginRight = "4%"
           
        >
            <Button 
              cursor = "pointer"
              color = {lang === 'en' ? "gray" : "white"}
              width = "35px"
              height = "20px"
              border = "none"
              background-color = { lang === 'en' ? "lightgray"  : "gray"}
              border-radius = "10px"
              type="button"
              onClick={()=> {changesLanguage('en'); setLang('en')}}
              text="EN"
            />
            <Button 
              cursor = "pointer"
              color = {lang !== 'en' ? "gray" : "white"}
              width = "35px"
              height = "20px"
              border = "none"
              background-color = { lang !== 'en' ? "lightgray"  : "gray"}
              border-radius = "10px"
              type="button"  
              onClick={()=> {changesLanguage('ua'); setLang('ua')}}
              text="UA"
            />
        </Rectangle>
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
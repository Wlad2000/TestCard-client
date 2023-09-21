import React, { useState } from 'react'
import { useItemState } from './context';
import { Button, Rectangle, Text } from './QuickBase'
import { useTranslation } from 'react-i18next'
import imgEn from '../img/flag_ssha.png'
import imgUa from '../img/flag_ukraine.svg.png'

const NavBar = () => {
    const { currentUser,setCurrentUser, lang, setLang } = useItemState();
    const [isOpen, setIsOpen] = useState(false);
  
    const options = [
      { name: "en", image: imgEn, title: "England" },
      { name: "ua", image: imgUa, title: "Ukraine" },
    ]; 


    const {t,i18n} = useTranslation()
  
    const changesLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }
    const handleExit = () => {
        localStorage.removeItem('user');
    
        setCurrentUser(null);
      };
 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    changesLanguage(option.name);
     setLang(option.name)


    setIsOpen(false);
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
         position= "relative"
         width = "150px"
         fontFamily = "Arial, sans-serif"
         cursor = "pointer"
         marginRight ="20px"
        
        >
            <Rectangle 
            className="dropdown-header" onClick={toggleDropdown}
            backgroundColor=" #f0f0f0"
            border = "1px solid #ccc"
            padding = "10px"
            display = "flex"
            justifyContent = "space-between"
            alignItems = "center"
            borderRadius = "100px"
            >
                { lang ? 
                options.filter((element) => element.name === lang).map( (element) => (

            <>
                <img
                 style={{ width: '24px',
                 height: '24px',
                 marginRight: '10px'}}
                src={element.image}
                alt={element.title}
                className="option-image"
                />
                {element.title}
             </>
                     ))
                : (
          "Select an option"
        )} &#9660;
            </Rectangle>
            {isOpen && (
                <ul className="dropdown-options"
                    style={{
                        borderRadius : "10px",
                        padding: '0',
                        margin: '0',
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        width: '100%',
                        border: '1px solid #ccc',
                        borderTop: 'none',
                        backgroundColor: '#fff',
                        zIndex: '1'}}
                >
                    {options.map((option, index) => (
                    <li key={option.name}
                     style={{padding: '10px', borderBottom: '1px solid grey'}}
                     onClick={() => handleOptionClick(option)}
                    >
                       <img
                       style={{ width: '24px',
                        height: '24px',
                        marginRight: '10px'}}
                        src={option.image}
                        alt={option.title}
                        />
                        {option.title}
                    </li>
                    ))}
                </ul>
            )}
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
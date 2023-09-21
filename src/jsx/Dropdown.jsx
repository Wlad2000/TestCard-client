import React, { useState } from 'react'
import { Rectangle } from './QuickBase'
import { useTranslation } from 'react-i18next'
import { useItemState } from './context';


const Dropdown = ({options}) => {

    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang } = useItemState();

    const {t,i18n} = useTranslation()
  
    const changesLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

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
  )
}

export default Dropdown
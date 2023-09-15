import React, { useState } from 'react';
import { useItemState } from './context';
import ModalInfo from './ModalInfo';
import ModalSelect from './ModalSelect';
import ModalSetting from './ModalSetting';
import { Button, Rectangle, Text } from './QuickBase';
import '../scss/card.css'
import ModalSettingUsers from './ModalSettingUsers';
import { useTranslation } from 'react-i18next'


function Card({ data }) {
  const [showPopupSelect, setShowPopupSelect] = useState(false);
  const [showPopupInfo, setShowPopupInfo] = useState(false);
  const [showPopupSetting, setShowPopupSetting] = useState(false);
  const [showPopupSettingUsers, setShowPopupSettingUsers] = useState(false);

  const { currentItem,currentUser,setCurrentUser } = useItemState();

  const [lang, setLang] = useState('en')
  const {t,i18n} = useTranslation()

  const changesLanguage = (lang) => {
      i18n.changeLanguage(lang)
  }


  const handleSettingUsers = () => {
    setShowPopupSettingUsers(true)
  };

  const handleExit = () => {
    localStorage.removeItem('user');

    setCurrentUser(null);
  };

  const handleSelect = () => {
    setShowPopupSelect(true)
  };

  const handleInfo = () => {
    setShowPopupInfo(true)
  };

  const handleSettings = () => {
    setShowPopupSetting(true)
  };

  return (
    <Rectangle 
      width = "25rem"
      borderRadius = "1rem"
      boxShadow = "0px 10px 8px #999"
      display = "flex"
      flexDirection = "column"
      rowGap = "10px"
      padding = "10px"
      background = " rgba(215,187,226,1)"
      height = "fit-content"
      alignItems = "center"
    >
      <Rectangle
        paddingBottom = "10px"
        margin = "10px"
        width = "100%"
        borderBottom = "purple 1px solid"
        display = "flex"
        justifyContent= "space-between"
        alignItems = "center"
      >
        <Text 
        flex = "1"
          text={`${t("card.title")} `+ currentUser.name } 
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
              <Button
                    cursor = "pointer"
                    backgroundColor = "coral"
                    color = "#fff"
                    border = "none"
                    width = "50px"
                    marginBottom = "5px"
                    height = "30px" 
                    borderRadius = "20px"
                    onClick={() => handleExit()} 
                    text={t("card.exitBtn")}
                />
      </Rectangle>
      <Rectangle 
         margin = "10px"
      > 
        <Text 
          color = "#171717"
          fontSize = "20px"
          text = { currentItem.name || `${t("card.message")}` }
        />
      </Rectangle>
      <Rectangle 
        width = "100%"
        display = "flex"
        justifyContent = "space-between"
        alignItems = "center"
      >
        <Button 
          textAlign = "center"
          width = "90%"
          borderRadius = "5px"
          padding = "0.5rem 1rem"
          borderColor = "#70297e"
          backgroundColor = "#80156a"
          color = "white"
          textDecoration = "none"
          margin = "0.5rem 0.5rem"
          cursor = "pointer"
          text = {t("card.searchBtn")}
          onClick={handleSelect} 
          className = "card-btn"
        />
        <Button
          textAlign = "center"
          width = "90%"
          borderColor = "#70297e"
          borderRadius = "5px"
          padding = "0.5rem 1rem"
          backgroundColor = "#80156a"
          color = "white"
          textDecoration = "none"
          margin = "0.5rem 0.5rem"
          cursor = "pointer"
          text = {t("card.infoBtn")}
          onClick={handleInfo}
        />
        <Button 
          textAlign = "center"
          width = "90%"
          borderRadius = "5px"
          padding = "0.5rem 1rem"
          borderColor = "#70297e"
          backgroundColor = "#80156a"
          color = "white"
          textDecoration = "none"
          margin = "0.5rem 0.5rem"
          cursor = "pointer"
          text = {t("card.settingBtn")}
          onClick={handleSettings}
        />
      </Rectangle>
        {currentUser.accessLevel === 2 && 
            <Rectangle 
            display = "flex"
            justifyContent = "space-between"
            alignItems = "center"
            width = "70%"
          >
           
               <Button 
              textAlign = "center"
              width = "90%"
              borderRadius = "5px"
              padding = "0.5rem 1rem"
              borderColor = "#70297e"
              backgroundColor = "#80156a"
              color = "white"
              textDecoration = "none"
              margin = "0.5rem 0.5rem"
              cursor = "pointer"
              text = {t("card.settingBtn2")}
              onClick={handleSettingUsers}
        />
          </Rectangle>
        }

      <ModalSettingUsers  opened={showPopupSettingUsers} close={() => setShowPopupSettingUsers(false)}/>
      <ModalSelect data={data} opened={showPopupSelect} close={() => setShowPopupSelect(false)}/>
      <ModalInfo opened={showPopupInfo} close={() => setShowPopupInfo(false)}/>
      <ModalSetting data={data} opened={showPopupSetting} close={() => setShowPopupSetting(false)}/>
    </Rectangle>
  );
}

export default Card;

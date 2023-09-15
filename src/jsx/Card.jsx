import React, { useState } from 'react';
import { useItemState } from './context';
import ModalInfo from './ModalInfo';
import ModalSelect from './ModalSelect';
import ModalSetting from './ModalSetting';
import { Button, Rectangle, Text } from './QuickBase';
import '../scss/card.css'
import ModalSettingUsers from './ModalSettingUsers';


function Card({ data }) {
  const [showPopupSelect, setShowPopupSelect] = useState(false);
  const [showPopupInfo, setShowPopupInfo] = useState(false);
  const [showPopupSetting, setShowPopupSetting] = useState(false);

  const [showPopupSettingUsers, setShowPopupSettingUsers] = useState(false);


  const { currentItem,currentUser,setCurrentUser } = useItemState();


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
        margin = "10px"
        width = "100%"
        borderBottom = "purple 1px solid"
        display = "flex"
        justifyContent= "space-between"
      >
        <Text 
          text={"CARD NAME "+ currentUser.name } 
        />
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
                    text={"Exit"}
                />
      </Rectangle>
      <Rectangle 
         margin = "10px"
      > 
        <Text 
          color = "#171717"
          fontSize = "20px"
          text = { currentItem.name || `select item` }
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
          text = "Select"
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
          text = {"Info"}
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
          text = {"Settings"}
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
              text = {"SettingUsers"}
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

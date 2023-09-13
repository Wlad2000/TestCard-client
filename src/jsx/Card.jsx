import React, { useState } from 'react';
import { useItemState } from './context';
import ModalInfo from './ModalInfo';
import ModalSelect from './ModalSelect';
import ModalSetting from './ModalSetting';
import { Button, Rectangle, Text } from './QuickBase';


function Card({ data }) {
  const [showPopupSelect, setShowPopupSelect] = useState(false);
  const [showPopupInfo, setShowPopupInfo] = useState(false);
  const [showPopupSetting, setShowPopupSetting] = useState(false);
  const { currentItem, setCurrentItem } = useItemState();

 

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
      width = "15rem"
      borderRadius = "1rem"
      boxShadow = "0px 10px 8px #999"
      display = "flex"
      flexDirection = "column"
      rowGap = "10px"
      padding = "10px"
      backgroundColor = "#fff"
      height = "fit-content"
      alignItems = "center"
    >
      <Rectangle
        margin = "10px"
        width = "100%"
        borderBottom = "#999 1px solid"
      >
        <Text 
          text={"CARD NAME"} 
        />
      </Rectangle>
      <Rectangle 
         margin = "10px"
      > 
        <Text 
          color = "#171717"
          fontSize = "20px"
          text = { currentItem.name || `select user` }
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
          backgroundColor = "#999"
          color = "white"
          textDecoration = "none"
          margin = "0.5rem 0.5rem"
          cursor = "pointer"
          text = {"Select"}
          onClick={handleSelect} 
        />
        <Button
          textAlign = "center"
          width = "90%"
          borderRadius = "5px"
          padding = "0.5rem 1rem"
          backgroundColor = "#999"
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
          backgroundColor = "#999"
          color = "white"
          textDecoration = "none"
          margin = "0.5rem 0.5rem"
          cursor = "pointer"
          text = {"Settings"}
          onClick={handleSettings}
        />
      </Rectangle>
      <ModalSelect data={data} opened={showPopupSelect} close={() => setShowPopupSelect(false)}/>
      <ModalInfo opened={showPopupInfo} close={() => setShowPopupInfo(false)}/>
      <ModalSetting data={data} opened={showPopupSetting} close={() => setShowPopupSetting(false)}/>
    </Rectangle>
  );
}

export default Card;

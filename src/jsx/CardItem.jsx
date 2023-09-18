import React, { useState } from 'react';
import { useItemState } from './context';
import ModalInfo from './ModalInfo';
import ModalSelect from './ModalSelect';
import ModalSetting from './ModalSetting';
import { Button, Rectangle, Text } from './QuickBase';
import '../scss/card.css'
import { useTranslation } from 'react-i18next'
import Card from './Card';


function CardItem({ data }) {
  const [showPopupSelect, setShowPopupSelect] = useState(false);
  const [showPopupInfo, setShowPopupInfo] = useState(false);
  const [showPopupSetting, setShowPopupSetting] = useState(false);

  const { currentItem } = useItemState();


  const {t,i18n} = useTranslation()


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
    <Card title="CARD ITEM">
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
        justifyContent = "space-evenly"
        flexWrap = "wrap"  
        alignItems = "center"
      >
        <Button 
          textAlign = "center"
          width = "40%"
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
          width = "40%"
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
          width = "40%"
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

      <ModalSelect data={data} opened={showPopupSelect} close={() => setShowPopupSelect(false)}/>
      <ModalInfo opened={showPopupInfo} close={() => setShowPopupInfo(false)}/>
      <ModalSetting data={data} opened={showPopupSetting} close={() => setShowPopupSetting(false)}/>
      </Card>
  );
}

export default CardItem;

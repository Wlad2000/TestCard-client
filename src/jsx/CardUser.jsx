import React, { useState } from 'react'
import Card from './Card'
import { Button, Rectangle, Text } from './QuickBase'
import { useTranslation } from 'react-i18next'
import { useItemState } from './context'
import ModalSettingUsers from './ModalSettingUsers'

const CardUser = (props) => {
    const { currentUser } = useItemState();
    const [showPopupSettingUsers, setShowPopupSettingUsers] = useState(false);

    const {t,i18n} = useTranslation()

    const handleSettingUsers = () => {
        setShowPopupSettingUsers(true)
      };
    
  return (
    <Card title="CARD USER">
        <Rectangle 
         margin = "10px"
      > 
        <Text 
          color = "#171717"
          fontSize = "20px"
          text = { currentUser.name || `${t("card.message")}` }
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
    </Card>
  )
}

export default CardUser
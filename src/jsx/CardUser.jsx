import React, { useState } from 'react'
import Card from './Card'
import { Button, Rectangle, Text } from './QuickBase'
import { useTranslation } from 'react-i18next'
import { useItemState } from './context'
import ModalSettingUsers from './ModalSettingUsers'
import { socket } from './App'

const CardUser = (props) => {
    const { currentUser, imageData, reload, setReload, } = useItemState();
    const [showPopupSettingUsers, setShowPopupSettingUsers] = useState(false);

    const {t,i18n} = useTranslation()

    const handleSettingUsers = () => {
        setShowPopupSettingUsers(true)
      };

      const [selectedFile, setSelectedFile] = useState(null);
      const [uploadMessage, setUploadMessage] = useState('');

      const userId = currentUser.id

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
        setUploadMessage('Виберіть зображення для завантаження.');
        return;
      }
  
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
  
      reader.onload = () => {
        const base64data = reader.result.split(',')[1];
        const filename = selectedFile.name;
        socket.emit('uploadImage', { filename, base64data, userId });
        setReload(!reload)
      };
  
      reader.onerror = () => {
        setUploadMessage('Помилка при читанні зображення.');
      };
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

        {imageData && <img style={{width: '90px'}} src={imageData} alt="Зображення" />}
        {uploadMessage && <p style={{ color: 'red' }}>{uploadMessage}</p>}

        <Rectangle 
            display = "flex" 
            justifyContent = "space-between"
            alignItems = "center"
            
        >
        <input style={{width : "50%"}} type="file" accept="image/*" onChange={handleFileChange} />
        <Button 
            textAlign = "center"
            width = "50%"
            borderRadius = "5px"
            padding = "0.5rem 1rem"
            borderColor = "#70297e"
            backgroundColor = "#80156a"
            color = "white"
            textDecoration = "none"
            margin = "0.5rem 0.5rem"
            cursor = "pointer"
            onClick={handleUpload} 
            text = "Download"
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
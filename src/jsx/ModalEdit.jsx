import React, { useState } from 'react'
import { socket } from './App';
import Modal from './Modal';

import { useTranslation } from 'react-i18next'
import { ColumnLayout } from '../quick/QuickLayouts';
import { Text } from '../quick/QuickBase';
import { Button, Input } from '../quick/QuickControls';



const ModalEdit = (props) => {
  const {t,i18n} = useTranslation() 

  const [formData, setFormData] = useState({
    id: 0,
    updates: {
      
    },
  });

  const handleChange = (e) => {
    const { name,value } = e.target;
    setFormData({
      ...formData,
      updates: { ...formData.updates, [name]: value },
    });
  };

  const handleSubmit = (id) => {
    formData.id = id
    socket.emit('edit-listname', formData);
       
        // GET data
        socket.emit('get_listnames');

        setFormData({ id: 0, updates: {} });
        props.close()
  };

  const handleSubmitCreateUser = (id) => {
    formData.id = id
    socket.emit('edit-user', formData);
       
        // GET data
        socket.emit('get_users');

        setFormData({ id: 0, updates: {} });
        props.close()
  };



  return (
    props.opened &&
      <Modal title={t("modalEdit.title")} close={props.close}>
        
            {
              props.editUser 
              ?
            <ColumnLayout
              justifyContent = "center"
              alignItems = "center"
              rowGap = "20px"
              padding = "20px"
            >
              <Text color="black" fontSize = "20px" text={"ID: " + props.item.id}/>
              
              <Input
               fontSize = "15px"
               width = "40%"
               border = "none"
               background = "none"
               color = "purple"
               borderBottom = "3px solid purple"
              type="text" 
              name = "name"
              value={formData.updates.name }
              onChange={handleChange}
              placeholder={"name: " + props.item.name}
            />
             <Input
              fontSize = "15px"
              width = "40%"
              border = "none"
              background = "none"
              color = "purple"
              borderBottom = "3px solid purple"
             type="text"  
              name = "login"
              value={formData.updates.login }
              onChange={handleChange}
              placeholder={"login: " + props.item.login}
            />
            <Input
              fontSize = "15px"
              width = "40%"
              border = "none"
              background = "none"
              color = "purple"
              borderBottom = "3px solid purple"
             type="number"
              min="0" max="3"  
              name = "accessLevel"
              value={formData.updates.accessLevel }
              onChange={handleChange}
              placeholder={"accessLevel: " + props.item.accessLevel}
            />
            <Button
              cursor = "pointer"
              backgroundColor = "orange"
              color = "#fff"
              border = "none"
              width = "50%"
              marginBottom = "5px"
              height = "30px" 
              borderRadius = "20px"
              onClick={() => handleSubmitCreateUser(props.item.id)} 
              text={t("modalEdit.editBtn")}
            />  

            </ColumnLayout>
              :
          <ColumnLayout
              justifyContent = "center"
              alignItems = "center"
              rowGap = "20px"
              padding = "20px"
            >
            <Text color="black" fontSize = "20px"  text={"ID: " + props.item.idrecipe}/>
            <Input 
               fontSize = "15px"
               width = "40%"
               border = "none"
               background = "none"
               borderBottom = "3px solid purple"
              type="text"  
              name = "name"
              value={formData.updates.name || ''}
              onChange={handleChange}
              placeholder={"name: " + props.item.name}
            />
            <Input 
               fontSize = "15px"
               width = "40%"
               border = "none"
               background = "none"
               borderBottom = "3px solid purple"
              type="number"  
              name = "tempgrain"
              placeholder={"tempgrain: " + props.item.tempgrain}
              value={formData.tempgrain}
              onChange={handleChange}
            />
            <Input 
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name = "tempgrainmax"
              value={formData.tempgrainmax}
              onChange={handleChange}
              placeholder={"tempgrainmax: " + props.item.tempgrainmax}
            />
            <Input
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name = "tempgraincritical"
              value={formData.tempgraincritical}
              onChange={handleChange}
              placeholder={"tempgraincritical: " + props.item.tempgraincritical }
            />
            <Input
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name = "tempagent"
              value={formData.tempagent}
              onChange={handleChange}
              placeholder={"tempagent: " +  props.item.tempagent}
            />
            <Input
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name = "tempagentcritical"
              value={formData.tempagentcritical}
              onChange={handleChange}
              placeholder={"tempagentcritical: " + props.item.tempagentcritical}
            />
            <Input
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name = "maxfanasprate"
              value={formData.maxfanasprate}
              onChange={handleChange}
              placeholder={"maxfanasprate: " + props.item.maxfanasprate}
            />
            <Input
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name ="maxfanrecrate"
              value={formData.maxfanrecrate}
              onChange={handleChange} 
              placeholder={"maxfanrecrate: " + props.item.maxfanrecrate}
            />
            <Input
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name = "timeunload"
              value={formData.timeunload}
              onChange={handleChange} 
              placeholder={"timeunload: " + props.item.timeunload}
            />
            <Input
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name = "timeunloaddelay"
              value={formData.timeunloaddelay}
              onChange={handleChange} 
              placeholder={"timeunloaddelay: "+ props.item.timeunloaddelay}
            />
            <Input
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number" 
              name = "weight"
              value={formData.weight}
              onChange={handleChange}  
              placeholder={"weight: " + props.item.weight}
            />
            <Button
              cursor = "pointer"
              backgroundColor = "orange"
              color = "#fff"
              border = "none"
              width = "50%"
              marginBottom = "5px"
              height = "30px" 
              borderRadius = "20px"
              onClick={() => handleSubmit(props.item.idrecipe)} 
              text={t("modalEdit.editBtn")}
            />    
          </ColumnLayout>
          }        

     
      </Modal>
  )
}

export default ModalEdit


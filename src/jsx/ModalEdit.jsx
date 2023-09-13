import React, { useState } from 'react'
import { socket } from './App';
import Modal from './Modal';
import { Button, Rectangle, Text, Input } from './QuickBase';



const ModalEdit = (props) => {

  const [formData, setFormData] = useState({
    idrecipe: 0,
    updates: {
     
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      updates: { ...formData.updates, [name]: value },
    });
  };

  const handleSubmit = (id) => {
    formData.idrecipe = id
    socket.emit('edit-listname', formData);
       
        // GET data
        socket.emit('get_listnames');

        setFormData({ idrecipe: 0, updates: {} });
        props.close()
  };



  return (
    props.opened &&
      <Modal title='Edit item' close={props.close}>
          <Rectangle
            display="flex"
            justifyContent = "center"
            alignItems = "center"
            flexDirection = "column"
            rowGap = "20px"
            padding = "20px"
          >
            <Text text={"ID: " + props.item.idrecipe}/>
            <Input 
              name = "name"
              value={formData.updates.name || ''}
              onChange={handleChange}
              placeholder={"name: " + props.item.name}
            />
            <Input 
              name = "tempgrain"
              placeholder={"tempgrain: " + props.item.tempgrain}
              value={formData.tempgrain}
              onChange={handleChange}
            />
            <Input 
              name = "tempgrainmax"
              value={formData.tempgrainmax}
              onChange={handleChange}
              placeholder={"tempgrainmax: " + props.item.tempgrainmax}
            />
            <Input
              name = "tempgraincritical"
              value={formData.tempgraincritical}
              onChange={handleChange}
              placeholder={"tempgraincritical: " + props.item.tempgraincritical }
            />
            <Input
              name = "tempagent"
              value={formData.tempagent}
              onChange={handleChange}
              placeholder={"tempagent: " +  props.item.tempagent}
            />
            <Input
              name = "tempagentcritical"
              value={formData.tempagentcritical}
              onChange={handleChange}
              placeholder={"tempagentcritical: " + props.item.tempagentcritical}
            />
            <Input
              name = "maxfanasprate"
              value={formData.maxfanasprate}
              onChange={handleChange}
              placeholder={"maxfanasprate: " + props.item.maxfanasprate}
            />
            <Input
              name ="maxfanrecrate"
              value={formData.maxfanrecrate}
              onChange={handleChange} 
              placeholder={"maxfanrecrate: " + props.item.maxfanrecrate}
            />
            <Input
              name = "timeunload"
              value={formData.timeunload}
              onChange={handleChange} 
              placeholder={"timeunload: " + props.item.timeunload}
            />
            <Input
              name = "timeunloaddelay"
              value={formData.timeunloaddelay}
              onChange={handleChange} 
              placeholder={"timeunloaddelay: "+ props.item.timeunloaddelay}
            />
            <Input
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
              text={"Edit"}
            />            

          </Rectangle>
      </Modal>
  )
}

export default ModalEdit


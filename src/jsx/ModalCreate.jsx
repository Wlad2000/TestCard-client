import React, { useState } from 'react'
import { socket } from './App';
import Modal from './Modal';
import { Button, Rectangle,  Input } from './QuickBase';



const ModalCreate = (props) => {
  
  const [formData, setFormData] = useState({
    name: '',
    tempgrain: 0,
    tempgrainmax: 0,
    tempgraincritical: 0,
    tempagent: 0,
    tempagentcritical: 0,
    maxfanasprate: 0,
    maxfanrecrate: 0,
    timeunload: 0,
    timeunloaddelay: 0,
    weight: 0,
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    socket.emit('create-listname', formData);
    setFormData({
      name: '',
      tempgrain: '',
      tempgrainmax: '',
      tempgraincritical: '',
      tempagent: '',
      tempagentcritical: '',
      maxfanasprate: '',
      maxfancreate: '',
      timeunload: '',
      timeunloaddelay: '',
      weight: '',
    });

     // GET data
      socket.emit('get_listnames');
      props.close()
  };





  return (
    props.opened &&
      <Modal title='Create item' close={props.close}>
          <Rectangle
            display="flex"
            justifyContent = "center"
            alignItems = "center"
            flexDirection = "column"
            rowGap = "20px"
            padding = "20px"
          >
            <Input 
              name = "name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name" 
            />
            <Input 
              name = "tempgrain"
              placeholder="tempgrain"
              value={formData.tempgrain}
              onChange={handleChange}
            />
            <Input 
              name = "tempgrainmax"
              value={formData.tempgrainmax}
              onChange={handleChange}
              placeholder="tempgrainmax"
            />
            <Input
              name = "tempgraincritical"
              value={formData.tempgraincritical}
              onChange={handleChange}
              placeholder="tempgraincritical"
            />
            <Input
              name = "tempagent"
              value={formData.tempagent}
              onChange={handleChange}
              placeholder="tempagent"
            />
            <Input
              name = "tempagentcritical"
              value={formData.tempagentcritical}
              onChange={handleChange}
              placeholder="tempagentcritical"
            />
            <Input
              name = "maxfanasprate"
              value={formData.maxfanasprate}
              onChange={handleChange}
              placeholder="maxfanasprate"
            />
            <Input
              name ="maxfanrecrate"
              value={formData.maxfanrecrate}
              onChange={handleChange} 
              placeholder="maxfanrecrate"
            />
            <Input
              name = "timeunload"
              value={formData.timeunload}
              onChange={handleChange} 
              placeholder="timeunload"
            />
            <Input
              name = "timeunloaddelay"
              value={formData.timeunloaddelay}
              onChange={handleChange} 
              placeholder="timeunloaddelay"
            />
            <Input
              name = "weight"
              value={formData.weight}
              onChange={handleChange}  
              placeholder="weight"
            />
            <Button
              cursor = "pointer"
              backgroundColor = "green"
              color = "#fff"
              border = "none"
              width = "50%"
              marginBottom = "5px"
              height = "30px" 
              borderRadius = "20px"
              onClick={handleSubmit} 
              text={"Create New Item"}
            />            

          </Rectangle>
      </Modal>
  )
}

export default ModalCreate


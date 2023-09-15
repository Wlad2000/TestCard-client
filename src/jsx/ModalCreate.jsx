import React, { useState } from 'react'
import { socket } from './App';
import Modal from './Modal';
import { Button, Rectangle,  Input } from './QuickBase';
import { useTranslation } from 'react-i18next'



const ModalCreate = (props) => {
  const {t,i18n} = useTranslation() 
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
      <Modal title={t("modalCreate.title")} close={props.close}>
          <Rectangle
            display="flex"
            justifyContent = "center"
            alignItems = "center"
            flexDirection = "column"
            rowGap = "20px"
            padding = "20px"
          >
            <Input 
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="text"  
              name = "name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name" 
            />
            <Input 
            fontSize = "15px"
            width = "40%"
            border = "none"
            background = "none"
            borderBottom = "3px solid purple"
           type="number"  
              name = "tempgrain"
              placeholder="tempgrain"
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
              placeholder="tempgrainmax"
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
              placeholder="tempgraincritical"
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
              placeholder="tempagent"
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
              placeholder="tempagentcritical"
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
              placeholder="maxfanasprate"
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
              placeholder="maxfanrecrate"
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
              placeholder="timeunload"
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
              placeholder="timeunloaddelay"
            />
            <Input
             fontSize = "15px"
             width = "40%"
             border = "none"
             background = "none"
             color = "black"
             borderBottom = "3px solid purple"
            type="number"
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
              text={t("modalCreate.createBtn")}
            />            

          </Rectangle>
      </Modal>
  )
}

export default ModalCreate


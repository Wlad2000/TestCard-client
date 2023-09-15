import React from 'react'
import { socket } from './App';
import { useTranslation } from 'react-i18next'
import Modal from './Modal';
import { Button, Rectangle, Text } from './QuickBase';



const ModalDelete = (props) => {
  const {t,i18n} = useTranslation() 
  const handleDelete = () => {
    socket.emit('delete-listname', props.item.idrecipe);

    // GET data
    socket.emit('get_listnames');
    props.close()
  };

  const handleDeleteUser = () => {
    socket.emit('delete-user', props.item.id);

    // GET data
    socket.emit('get_users');
    props.close()
  };

  return (
    props.opened &&
      <Modal title={t("modalDelete.title")} close={props.close} width="30vw" height="200px">
          <Rectangle 
            display = "flex"
            justifyContent = "center"
            alignItems = "center"
            flexDirection = "column"
            rowGap = "50px"
            padding = "20px"
          >
              <Text 
                marginTop = "20px"
                color = "black"
                text={`${t("modalDelete.message")}` + props.item.name}
              />
              <Button 
                cursor = "pointer"
                backgroundColor = "red"
                color = "#fff"
                border = "none"
                alignItems = "center"
                width = "50%"
                marginBottom = "5px"
                height = "30px" 
                borderRadius = "20px"
                onClick = {props.delUser ? handleDeleteUser : handleDelete}
                text={t("modalDelete.deleteBtn")}
              />
          </Rectangle>
      </Modal>
  )
}

export default ModalDelete


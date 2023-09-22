import React from 'react'
import { socket } from './App';
import { useTranslation } from 'react-i18next'
import Modal from './Modal';
import { ColumnLayout } from '../quick/QuickLayouts';
import { Text } from '../quick/QuickBase';
import { Button } from '../quick/QuickControls';



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
          <ColumnLayout 
            justifyContent = "center"
            alignItems = "center"
            rowGap = "50px"
            padding = "20px"
          >
              <Text
                fontSize = "20px" 
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
          </ColumnLayout>
      </Modal>
  )
}

export default ModalDelete


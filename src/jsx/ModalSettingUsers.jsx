
import React, { useEffect, useState } from 'react'
import "../scss/modal.css";
import { socket } from './App';
import { useItemState } from './context';
import Modal from './Modal';
import ModalCreateUser from './ModalCreateUser';
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit';
import { useTranslation } from 'react-i18next'
import { ColumnLayout, RowLayout } from '../quick/QuickLayouts';
import { Button } from '../quick/QuickControls';
import { Rectangle, Text } from '../quick/QuickBase';


const ModalSettingUsers = (props) => {
  const { currentUser } = useItemState();
  const [showPopupCreateUser, setShowPopupCreateUser] = useState(false);
  const {t,i18n} = useTranslation();

  const handleCreate = () => {
    setShowPopupCreateUser(true)
  };

  const [usersData, setUsersData] = useState('');
  
  useEffect(() => {
    socket.emit('get_users');

   
    socket.on('users_data', (data) => {
      setUsersData(data);
    });
  }, [])
  


  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const [deleteItem, setDeleteItem] = useState();
  const [editItem, setEditItem] = useState();



  const handleDelete = (item) => {
    setShowPopupDelete(true)
    setDeleteItem(item)
  };
  const handleEdit = (item) => {
    setShowPopupEdit(true)
    setEditItem(item)
 
  };


  return (
    props.opened &&
      <Modal title={t("modalSetting.title")} close={props.close}>
                <ColumnLayout
                  justifyContent = "center"
                  rowGap = "20px"
                  padding = "20px"
             
                >
                    <Button
                          cursor = "pointer"
                          backgroundColor = "green"
                          color = "#fff"
                          border = "none"
                          width = "100%"
                          marginBottom = "5px"
                          height = "30px" 
                          borderRadius = "20px"
                          onClick={handleCreate} 
                          text={t("modalSetting.createBtn2")}
                        />
                    {usersData.map((item) => 
                    (
                      <RowLayout 
                        key={item.id}
                        padding = "10px"
                        borderBottom = {currentUser.id === item.id ? "3px solid green" : "1px solid black" }
                        
                      >
                     
                        <Text
                          fontSize = "20px"
                          color = {currentUser.id === item.id ? "green" : " black" }
                          text = {item.name}
                        />

                        <Rectangle display = {item.accessLevel === 2 && 'none' }>
                        <Button
                          cursor = "pointer"
                          backgroundColor = "orange"
                          color = "#fff"
                          border = "none"
                          width = "100%"
                          marginBottom = "5px"
                          height = "30px" 
                          borderRadius = "20px"
                          onClick={() => handleEdit(item)} 
                          text={t("modalSetting.editBtn")} 
                        />
                        <Button
                          cursor = "pointer"
                          backgroundColor = "red"
                          color = "#fff"
                          border = "none"
                          width = "100%"
                          marginBottom = "5px"
                          height = "30px" 
                          borderRadius = "20px"
                          onClick={() => handleDelete(item)}
                          text={t("modalSetting.deleteBtn")} 
                        />
                        </Rectangle>
                      </RowLayout>
                    ))}
                    <ModalCreateUser opened={showPopupCreateUser} close={() => setShowPopupCreateUser(false)} />
                    <ModalEdit editUser='true' item={editItem} opened={showPopupEdit} close={() => setShowPopupEdit(false)} />
                    <ModalDelete delUser='true' item={deleteItem} opened={showPopupDelete} close={() => setShowPopupDelete(false)} />
                </ColumnLayout>
      </Modal>
  )
}

export default ModalSettingUsers


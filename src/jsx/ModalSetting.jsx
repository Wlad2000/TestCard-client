
import React, { useState } from 'react'
import "../scss/modal.css";
import { useItemState } from './context';
import Modal from './Modal';
import ModalCreate from './ModalCreate';
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit';
import ModalError from './ModalError';
import { useTranslation } from 'react-i18next'
import { ColumnLayout, RowLayout } from '../quick/QuickLayouts';
import { Button } from '../quick/QuickControls';
import { Rectangle, Text } from '../quick/QuickBase';


const ModalSetting = (props) => {
  const { currentItem, currentUser } = useItemState();
  const {t,i18n} = useTranslation() 

  const [showPopupCreate, setShowPopupCreate] = useState(false);
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const [showPopupError, setShowPopupError] = useState(false);

  const [deleteItem, setDeleteItem] = useState();
  const [editItem, setEditItem] = useState();


  const handleCreate = () => {
    setShowPopupCreate(true)
  };
  const handleDelete = (item) => {
    setShowPopupDelete(true)
    setDeleteItem(item)
  };
  const handleEdit = (item) => {
    setShowPopupEdit(true)
    setEditItem(item)
  };
  const handleError = () => {
    setShowPopupError(true)
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
                          onClick={() => {currentUser.accessLevel === 0 ? handleError() : handleCreate()}} 
                          text={t("modalSetting.createBtn")}
                        />
                    {props.data.map((item) => 
                    (
                      <RowLayout 
                        key={item.idrecipe}
                        display = "flex"
                        justifyContent = "space-between"
                        padding = "10px"
                        borderBottom = {currentItem.idrecipe === item.idrecipe ? "3px solid green" : "1px solid black" }
                        
                      >
                     
                        <Text
                          fontSize = '15px'
                          color = {currentItem.idrecipe === item.idrecipe ? "green" : " black" }
                          text = {item.name}
                        />

                        <Rectangle>
                     
                        <Button
                          cursor = "pointer"
                          backgroundColor = "orange"
                          color = "#fff"
                          border = "none"
                          width = "100%"
                          marginBottom = "5px"
                          height = "30px" 
                          borderRadius = "20px"
                          onClick={() =>{ currentUser.accessLevel === 0 ? handleError() : handleEdit(item)}} 
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
                          onClick={() => { currentUser.accessLevel !== 2 ? handleError() :handleDelete(item)}}
                          text={t("modalSetting.deleteBtn")}
                        />
                        </Rectangle>
                      </RowLayout>
                    ))}
                    <ModalError opened={showPopupError} close={() => setShowPopupError(false)} />
                    <ModalCreate opened={showPopupCreate} close={() => setShowPopupCreate(false)} />
                    <ModalEdit item={editItem} opened={showPopupEdit} close={() => setShowPopupEdit(false)} />
                    <ModalDelete item={deleteItem} opened={showPopupDelete} close={() => setShowPopupDelete(false)} />
                </ColumnLayout>
      </Modal>
  )
}

export default ModalSetting


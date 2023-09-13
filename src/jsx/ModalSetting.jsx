
import React, { useState } from 'react'
import "../scss/modal.css";
import { useItemState } from './context';
import Modal from './Modal';
import ModalCreate from './ModalCreate';
import ModalDelete from './ModalDelete';
import ModalEdit from './ModalEdit';
import { Button, Rectangle, Text } from './QuickBase';


const ModalSetting = (props) => {
  const { currentItem, setCurrentItem } = useItemState();

  const [showPopupCreate, setShowPopupCreate] = useState(false);
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
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


  return (
    props.opened &&
      <Modal title="SETTING" close={props.close}>
                <Rectangle
                  display = "flex"
                  justifyContent = "center"
                  flexDirection = "column"
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
                          text={"Create New Item"}
                        />
                    {props.data.map((item) => 
                    (
                      <Rectangle 
                        key={item.idrecipe}
                        display = "flex"
                        justifyContent = "space-between"
                        padding = "10px"
                        borderBottom = {currentItem.idrecipe === item.idrecipe ? "3px solid green" : "1px solid black" }
                        
                      >
                     
                        <Text
                          
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
                          onClick={() => handleEdit(item)} 
                          text={"Edit"}
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
                          text={"Delete"}
                        />
                        </Rectangle>
                      </Rectangle>
                    ))}
                    <ModalCreate opened={showPopupCreate} close={() => setShowPopupCreate(false)} />
                    <ModalEdit item={editItem} opened={showPopupEdit} close={() => setShowPopupEdit(false)} />
                    <ModalDelete item={deleteItem} opened={showPopupDelete} close={() => setShowPopupDelete(false)} />
                </Rectangle>
      </Modal>
  )
}

export default ModalSetting


import React from 'react'
import "../scss/modal.css";
import { useItemState } from './context';
import Modal from './Modal';
import { Rectangle, Text, RadioButton } from './QuickBase';



const ModalSelect = (props) => {
  const { currentItem, setCurrentItem } = useItemState();

  const handleCurrent = (user) =>{
    setCurrentItem(user);
    props.close()
  }

  return (
    props.opened &&
    <Modal title='SELECT' close={props.close}>
            <Rectangle
                  display = "flex"
                  justifyContent = "center"
                  flexDirection = "column"
                  rowGap = "20px"
                  padding = "20px"
             
                >
                    {props.data.map((item) => 
                    (
                      <Rectangle 
                        key={item.idrecipe}
                        display = "flex"
                        justifyContent = "space-between"
                        padding = "10px"
                        borderBottom = {currentItem.idrecipe === item.idrecipe ? "3px solid green" : "1px solid black" }
                        
                      >
                        <RadioButton
                          value={item}
                          checked={currentItem.idrecipe === item.idrecipe}
                          onChange={() => {handleCurrent(item)}}
                        />
                        <Text
                          
                          color = {currentItem.idrecipe === item.idrecipe ? "green" : " black" }
                          text = {item.name}
                        />
                      </Rectangle>
                    ))}
                </Rectangle>
        
    </Modal>
  )
}

export default ModalSelect


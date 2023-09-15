import React from 'react'
import "../scss/modal.css";
import { useItemState } from './context';
import Modal from './Modal';
import { Rectangle, Text, RadioButton } from './QuickBase';
import { useTranslation } from 'react-i18next'



const ModalSelect = (props) => {
  const { currentItem, setCurrentItem } = useItemState();
  const {t,i18n} = useTranslation() 

  const handleCurrent = (user) =>{
    setCurrentItem(user);
    props.close()
  }

  return (
    props.opened &&
    <Modal title={t("modalSelect.title")} close={props.close}>
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
                        borderBottom = {currentItem.idrecipe === item.idrecipe ? "3px solid purple" : "1px solid black" }
                        
                      >
                        <RadioButton
                          value={item}
                          checked={currentItem.idrecipe === item.idrecipe}
                          onChange={() => {handleCurrent(item)}}
                        />
                        <Text
                          
                          color = {currentItem.idrecipe === item.idrecipe ? "purple" : " black" }
                          text = {item.name}
                        />
                      </Rectangle>
                    ))}
                </Rectangle>
        
    </Modal>
  )
}

export default ModalSelect


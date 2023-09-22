import React from 'react'
import "../scss/modal.css";
import { useItemState } from './context';
import Modal from './Modal';
import { useTranslation } from 'react-i18next'
import { ColumnLayout, RowLayout } from '../quick/QuickLayouts';
import { Text } from '../quick/QuickBase';
import { RadioButton } from '../quick/QuickControls';



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
            <ColumnLayout
                  justifyContent = "center"
                  rowGap = "20px"
                  padding = "20px"
             
                >
                    {props.data.map((item) => 
                    (
                      <RowLayout 
                        key={item.idrecipe}
                        padding = "10px"
                        borderBottom = {currentItem.idrecipe === item.idrecipe ? "3px solid purple" : "1px solid black" }
                        
                      >
                        <RadioButton
                          value={item}
                          checked={currentItem.idrecipe === item.idrecipe}
                          onChange={() => {handleCurrent(item)}}
                        />
                        <Text
                          fontSize = '15px'
                          color = {currentItem.idrecipe === item.idrecipe ? "purple" : " black" }
                          text = {item.name}
                        />
                      </RowLayout>
                    ))}
                </ColumnLayout>
        
    </Modal>
  )
}

export default ModalSelect


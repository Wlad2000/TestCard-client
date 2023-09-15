import React from 'react'
import { useItemState } from './context';
import Modal from './Modal';
import { Rectangle, Text } from './QuickBase';
import { useTranslation } from 'react-i18next'

const ModalInfo = (props) => {
  const { currentItem } = useItemState();
  const {t,i18n} = useTranslation() 

  return (
    props.opened && 
      <Modal title={t("modalInfo.title")} close={props.close}>
        {!currentItem ? `${t("modalInfo.message")}` :
                  
                      
        Object.keys(currentItem).map((key) => (
          <Rectangle
            key={key}
            display = "flex"
            justifyContent = "space-between"
            padding = "20px"
            borderBottom = "1px solid black"
           >
            <Text color="purple" text = {key + ':'}/>  <Text color="black" text = {currentItem[key]}/>
          </Rectangle>
        ))
                    
                
        }
      
      </Modal>
  )
}

export default ModalInfo
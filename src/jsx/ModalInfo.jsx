import React from 'react'
import { useItemState } from './context';
import Modal from './Modal';
import { useTranslation } from 'react-i18next'
import { RowLayout } from '../quick/QuickLayouts';
import { Text } from '../quick/QuickBase';

const ModalInfo = (props) => {
  const { currentItem } = useItemState();
  const {t,i18n} = useTranslation() 

  return (
    props.opened && 
      <Modal title={t("modalInfo.title")} close={props.close}>
        {!currentItem ? `${t("modalInfo.message")}` :
                  
                      
        Object.keys(currentItem).map((key) => (
          <RowLayout
            key={key}
            padding = "20px"
            borderBottom = "1px solid black"
           >
            <Text fontSize="15px" color="purple" text = {key + ':'}/>  <Text color="black" text = {currentItem[key]}/>
          </RowLayout>
        ))
                    
                
        }
      
      </Modal>
  )
}

export default ModalInfo
import React from 'react'
import { useItemState } from './context';
import Modal from './Modal';
import { Rectangle, Text } from './QuickBase';

const ModalInfo = (props) => {
  const { currentItem, setCurrentItem } = useItemState();

  return (
    props.opened && 
      <Modal title="INFO" close={props.close}>
        {!currentItem ? 'Select item' :
                  
                      
        Object.keys(currentItem).map((key) => (
          <Rectangle
            key={key}
            display = "flex"
            justifyContent = "space-between"
            padding = "20px"
            borderBottom = "1px solid black"
           >
            <Text text = {key + ':'}/>  <Text color="black" text = {currentItem[key]}/>
          </Rectangle>
        ))
                    
                
        }
      
      </Modal>
  )
}

export default ModalInfo
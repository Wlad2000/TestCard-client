import React from 'react'
import Modal from './Modal'
import { Button, Rectangle, Text } from './QuickBase'

const ModalError = (props) => {
  return (
    props.opened &&
    <Modal  title='Not access' close={props.close} width="30vw" height="200px">
        <Rectangle
            display="flex"
            justifyContent = "center"
            alignItems = "center"
            flexDirection = "column"
            rowGap = "20px"
            padding = "20px"
            paddingTop = "10%"
        >
            <Text
                alignItems = "center"
                fontSize = "18px"
                fontWeight = "bold"
                text="You do not have access to this operation!"
            />
             <Button
              cursor = "pointer"
              backgroundColor = "purple"
              color = "#fff"
              border = "none"
              width = "40%"
              marginBottom = "5px"
              height = "40px" 
              borderRadius = "20px"
              onClick={props.close} 
              text={"OK"}
            />  

        </Rectangle>
    
    </Modal>
  )
}

export default ModalError
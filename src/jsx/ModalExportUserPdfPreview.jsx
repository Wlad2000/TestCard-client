import React from 'react'
import { useItemState } from './context';
import Modal from './Modal'
import { Button, Rectangle, Text } from './QuickBase'

const ModalExportUserPdfPreview = (props) => {
    const { imageData, currentUser } = useItemState();
  return (
    props.opened &&
    <Modal width="400px"  title="Preview Export User Info" close={props.close}>
        <Rectangle
            alignItems = "center"
            padding = "20px"
            paddingTop ="10%"
            display = "flex"
            flexDirection = "column"
            rowGap = "20px"
            
        >
            <Rectangle
                background = "white"
                width="70%"
                height= "400px"
                display = "flex"
                alignItems = "center"
                flexDirection = "column"
                rowGap = "20px"
                padding = "50px"
            >
                 {imageData && <img style={{width: '90px'}} src={imageData} alt="Зображення" />}
                 <Text color="#171717" text={` Name: ${currentUser.name}`}/>
                 <Text color="#171717"  text={` Surname: ${currentUser.surname}`}/>
                 <Text color="#171717"  text={` Login: ${currentUser.login}`}/>
                 <Text color="#171717"  text={` Email: ${currentUser.email}`}/>
            </Rectangle>

            <Button
            textAlign = "center"
            width = "50%"
            borderRadius = "5px"
            padding = "0.5rem 1rem"
            borderColor = "#70297e"
            backgroundColor = "#80156a"
            color = "white"
            textDecoration = "none"
            margin = "0.5rem 0.5rem"
            cursor = "pointer"
            onClick={props.close} 
            text = "OK"
            />           
        </Rectangle>
    </Modal>
  )
}

export default ModalExportUserPdfPreview
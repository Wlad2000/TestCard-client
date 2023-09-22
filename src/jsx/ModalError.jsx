import React from 'react'
import Modal from './Modal'
import { useTranslation } from 'react-i18next'
import { ColumnLayout } from '../quick/QuickLayouts'
import { Text } from '../quick/QuickBase'
import { Button } from '../quick/QuickControls'

const ModalError = (props) => {
    const {t,i18n} = useTranslation() 
  return (
    props.opened &&
    <Modal  title={t("modalError.title")} close={props.close} width="30vw" height="200px">
        <ColumnLayout
            justifyContent = "center"
            alignItems = "center"
            rowGap = "20px"
            padding = "20px"
            paddingTop = "10%"
        >
            <Text
                alignItems = "center"
                fontSize = "18px"
                fontWeight = "bold"
                text={t("modalError.message")}
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
              text={t("modalError.btn")}
            />  

        </ColumnLayout>
    
    </Modal>
  )
}

export default ModalError
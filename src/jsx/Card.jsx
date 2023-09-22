import React from 'react'

import { useTranslation } from 'react-i18next'
import { Rectangle, Text } from '../quick/QuickBase'

const Card = (props) => {
    const {t,i18n} = useTranslation()
  return (
    <Rectangle 
      width = {props.width || "30%" }  
      borderRadius = "1rem"
      boxShadow = "0px 10px 8px #999"
      display = "flex"
      flexDirection = "column"
      rowGap = "10px"
      padding = "10px"
      background = " rgba(215,187,226,1)"
      height = "fit-content"
      alignItems = "center"
    >
      <Rectangle
        paddingBottom = "10px"
        margin = "10px"
        width = "100%"
        borderBottom = "purple 1px solid"
        display = "flex"
        justifyContent= "space-between"
        alignItems = "center"
      >
        <Text 
        fontSize = '15px'
        color = 'purple'
        flex = "1"
          text={props.title || `${t("card.title")} ` } 
        />
      </Rectangle>

      {props.children}
      </Rectangle>
  )
}

export default Card
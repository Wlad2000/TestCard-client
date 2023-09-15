import React from 'react'
import { Button, Rectangle, Text } from './QuickBase'

const Modal = (props) => {
  return (
    <Rectangle
        height = "100%"
        width = "100vw"
        backgroundColor = "rgba(0,0,0,0.4)"
        backdropFilter="blur(10px)"
        position = "fixed"
        display = "flex"
        justifyContent = "center"
        alignItems = "center"
        top = "0"
        left = "0"
        zIndex="1"
        onClick={props.close}
     >
        <Rectangle 
            padding = "20px"
            borderRadius = "12px"
            backgroundColor = "white"
            width = "40vw"
            height = "250px"
            overflow = "auto"
            onClick = {(e) => e.stopPropagation()}
            backdropFilter="blur(10px)"
            background= " linear-gradient(90deg, rgba(200,137,209,1) 0%, rgba(215,187,226,1) 50%, rgba(209,114,235,1) 100%)"
       
         >  
              <Rectangle
               display = "flex"
               justifyContent = "space-between"
               borderBottom = " #ac3bac 5px solid"
              >
                <Text
                    text = {props.title} 
                />
                <Button
                    cursor = "pointer"
                    backgroundColor = "coral"
                    color = "#fff"
                    border = "none"
                    width = "30px"
                    marginBottom = "5px"
                    height = "30px" 
                    borderRadius = "20px"
                    onClick={props.close} 
                    text={"X"}
                    display= {!props.close && "none"}
                />
              </Rectangle>
                {props.children}
        </Rectangle>
    </Rectangle>
  )
}

export default Modal
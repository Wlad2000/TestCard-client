import React from 'react'
import Card from './Card'
import { Rectangle } from './QuickBase'
import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { useItemState } from './context';
import '../scss/card.css'
import { ReactChat } from "reactchatt";



const CardChat = () => {
    const { currentUser, imageData, reload, setReload, } = useItemState();
    function child() {
        return (
        <div
            style={{
            width: "20px",
            height: "20px",
            border: "1px solid black",
            "background-color": "red",
            position: "relative",
            display: "flex"
        }}
        ></div>
           //<img style={{ border:'1px solid black', display: 'block', height:"7%", width: '7%'}} src={imageData} alt="Зображення" />
        );
      }
     
    
  return (
    <Card width='400px' title="Card Chat">
        <Rectangle>
        <MessageList
       className = 'ml'
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={[
          {
            position: "left",
            type: "text",
            title: "Name1",
            titleColor: "red",
            className : 'msg',
            text:
              "This is a long message that should have a long element near it. This is a long message that should have a long element near it",
            date: new Date(),
          },
          {
            position: "right",
            type: "text",
            title: "Name2",
            text: "That's short",
            date: new Date(),
          }
        ]}
        children={[child()]}
        isShowChild={true}
      />
        </Rectangle>
        <Rectangle>
        </Rectangle>
    </Card>
  )
}

export default CardChat
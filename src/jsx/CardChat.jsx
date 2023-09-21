import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Rectangle } from './QuickBase'
import { MessageBox, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { useItemState } from './context';
import '../scss/card.css'
import { socket } from './App';


const CardChat = () => {
    const { currentUser, imageData, reload, setReload, } = useItemState();

    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');
     
    useEffect(() => {
        socket.on('clientMessage', (message) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        });
      }, []);


  const handleSendMessage = () => {
    const message = { text: messageText, user: `${currentUser.login}` };

    socket.emit('clientMessage', message);
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessageText('');
  };

  return (
    <Card width='400px' title="Card Chat">

      <Rectangle>
        {messages.map((message, index) => (
          <MessageBox
            key={index}
            title={message.user === 'auto' ? 'ChatAnswer' : `${currentUser.login}`}
            position={message.user === 'auto' ? 'left' : 'right'}
            type="text"
            text={message.text}
            date={new Date()}
          />
        ))}
      </Rectangle>
      <Input
        placeholder="enter your question.."
        multiline={true}
        onChange={(e) => setMessageText(e.target.value)}
        value={messageText}
        rightButtons={
          <Button
            color="white"
            backgroundColor="purple"
            text="Send"
            onClick={handleSendMessage}
          />
        }
      />
    </Card>
  )
}

export default CardChat
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import "../scss/App.css";
import Card from './Card';
//import axios from 'axios';
export const socket = io.connect('http://localhost:3001'); // Підключаємось до сервера

export function createItem (name) {
  try{
      const response =  axios.post(`http://localhost:3001/add?name=${name}`)
      console.log("ok@")
  }catch(e){
      alert(e.response.data.message)
  }
}

function App() {
  const [listnames, setListnames] = useState([]);



  useEffect(() => {
    // Отправка GET-запроса на сервер для получения данных
    socket.emit('get_listnames');

    // Прослушивание ответа от сервера
    socket.on('listnames_data', (data) => {
      setListnames(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [])

  return (
    <div className='app'>
     
       <Card 
        data={listnames} 
       />
     
    </div>
  );
}

export default App;

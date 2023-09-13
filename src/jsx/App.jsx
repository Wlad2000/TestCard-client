import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import "../scss/App.css";
import Card from './Card';
import { UserStateProvider } from './context';
import { Rectangle } from './QuickBase';

export const socket = io.connect('http://localhost:3001'); // SERVER


function App() {
  const [listnames, setListnames] = useState([]);



  useEffect(() => {
   
    socket.emit('get_listnames');

   
    socket.on('listnames_data', (data) => {
      setListnames(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [])

  return (
    <UserStateProvider>
    <Rectangle 
        height = "100vh"
        display = "flex"
        alignItems = "center"
        justifyContent = "center"
    >
     
       <Card 
        data={listnames} 
       />
     
    </Rectangle>
    </UserStateProvider>
  );
}

export default App;

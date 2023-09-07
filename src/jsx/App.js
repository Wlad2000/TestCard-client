import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import "../scss/App.css";
import Card from './Card';
import { UserStateProvider } from './context';

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
    <div className='app'>
     
       <Card 
        data={listnames} 
       />
     
    </div>
    </UserStateProvider>
  );
}

export default App;

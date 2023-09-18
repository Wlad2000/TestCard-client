import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import '../scss/App.css'
import { useItemState, UserStateProvider } from './context';
import Login from './Login';
import { Rectangle } from './QuickBase';
import '../i18n'
import Home from './Home';
import NavBar from './NavBar';

export const socket = io.connect('http://localhost:3001'); // SERVER


function App() {
  const [listnames, setListnames] = useState([]);
  const {  isAuth,setCurrentUser, currentUser} = useItemState();


  useEffect(() => {
   
    socket.emit('get_listnames');

   
    socket.on('listnames_data', (data) => {
      setListnames(data);
    });

  const storedUser = localStorage.getItem('user');

  if ( !storedUser) {
    localStorage.removeItem('user');
    setCurrentUser(null);
    return;
  }
  try {
    setCurrentUser(JSON.parse(storedUser));
  } catch (error) {
    localStorage.removeItem('user');
    setCurrentUser(null);
  }

    return () => {
      socket.disconnect();
    };
    
  }, [])

  return (
   
    <BrowserRouter>
    <Rectangle 
        className = "app"
    >
             <NavBar/>

     {!currentUser?
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
          :
          <Routes>
           <Route exact path="/" element={<Home data={listnames}  />} />
           <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        }

    </Rectangle>
    
    </BrowserRouter>

  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import '../scss/App.css'
import { useItemState, } from './context';
import Login from './Login';
import { Rectangle } from './QuickBase';

import Home from './Home';
import NavBar from './NavBar';
import { useTranslation } from 'react-i18next'
import CardDonutChart from './CardDonutChart';


export const socket = io.connect('http://localhost:3001'); // SERVER

function App() {
  const [listnames, setListnames] = useState([]);
  const {  isAuth,setCurrentUser, currentUser, setLang, } = useItemState();
  const {t,i18n} = useTranslation()


  const changesLanguage = (lang) => {
    i18n.changeLanguage(lang)
}
  useEffect(() => {
   
    socket.emit('get_listnames');
   
    socket.on('country', (data) => {
      const country = data.country  === 'UA' ? 'ua' : 'en';
      setLang(`${country}`)
      changesLanguage(country)
      console.log(`Your country is: ${country}`);
    });
    const language = localStorage.getItem('i18nextLng');
    setLang(language)

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
  console.log(currentUser)
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

   
          
  {!currentUser ? (
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
      ) : (
    <Routes>
      <Route path="/" element={<Home data={listnames} />} />
      <Route path="/test" element={<CardDonutChart />} />
      <Route path="*" element={!currentUser ?<Navigate to="/login" /> :<Navigate to="/" /> } />
      </Routes>
  )}
 

        

    </Rectangle>
    
    </BrowserRouter>

  );
}

export default App;

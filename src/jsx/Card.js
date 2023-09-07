import React, { useState } from 'react';
import { io } from 'socket.io-client';
import "../scss/card.css";
import ModalInfo from './ModalInfo';
import ModalSelect from './ModalSelect';
import ModalSetting from './ModalSetting';

const socket = io.connect('http://localhost:3001'); // Підключаємось до сервера

function Card({ data }) {
  const [showPopupSelect, setShowPopupSelect] = useState(false);
  const [showPopupInfo, setShowPopupInfo] = useState(false);
  const [showPopupSetting, setShowPopupSetting] = useState(false);
 

  const handleSelect = () => {
    setShowPopupSelect(true)
    socket.emit('message', 'Привіт, сервер!');
    // Откройте popup окно с выбором имени
  };

  const handleInfo = () => {
    setShowPopupInfo(true)
    // Откройте popup окно с информацией о текущем имени
  };

  const handleSettings = () => {
    setShowPopupSetting(true)
    // Откройте popup окно с настройками и списком имён
  };

  return (
    <div className="card">
      <div className="card-header">CARD NAME</div>
      <div className="card-content">item.name</div>
      <div className="card-footer">
        <button className='card-btn' onClick={handleSelect}>Select</button>
        <button className='card-btn' onClick={handleInfo}>Info</button>
        <button className='card-btn' onClick={handleSettings}>Settings</button>
      </div>
      <ModalSelect data={data} active={showPopupSelect} setActive={setShowPopupSelect}/>
      <ModalInfo active={showPopupInfo} setActive={setShowPopupInfo}/>
      <ModalSetting data={data} active={showPopupSetting} setActive={setShowPopupSetting}/>
    </div>
  );
}

export default Card;

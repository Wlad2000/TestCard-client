import React, { useState } from 'react';
import "../scss/card.css";
import { useUserState } from './context';
import ModalInfo from './ModalInfo';
import ModalSelect from './ModalSelect';
import ModalSetting from './ModalSetting';


function Card({ data }) {
  const [showPopupSelect, setShowPopupSelect] = useState(false);
  const [showPopupInfo, setShowPopupInfo] = useState(false);
  const [showPopupSetting, setShowPopupSetting] = useState(false);
  const { currentUser, setCurrentUser } = useUserState();

 

  const handleSelect = () => {
    setShowPopupSelect(true)
  };

  const handleInfo = () => {
    setShowPopupInfo(true)
  };

  const handleSettings = () => {
    setShowPopupSetting(true)
  };

  return (
    <div className="card">
      <div className="card-header">CARD NAME</div>
      <div className="card-content"> { currentUser.name || `select user` }</div>
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

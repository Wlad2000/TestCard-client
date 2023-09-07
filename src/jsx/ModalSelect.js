import React, { useState } from 'react'
import { io } from 'socket.io-client';
import "../scss/modal.css";
import { socket } from './App';



const ModalSelect = ({data, active, setActive}) => {
const [first, setfirst] = useState({})
  const handleCurrent = (user) =>{
    console.log(user)
    socket.on('setCurrentUser', (user) => {
      console.log(user)
      socket.emit('setCurrentUser', user);
    });
    setfirst(user)
    console.log(first)
  }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__header'>SELECT</div>
            <div className='modal__list'>
              {first.name}
            <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.accesslevel} - {item.datecreate} - {item.icon}
            <button onClick={() => handleCurrent(item)}>SEL</button>
          </li>
        ))}
      </ul>
            </div>
        </div>
    </div>
  )
}

export default ModalSelect
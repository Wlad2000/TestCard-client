
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import "../scss/modal.css";
import {  socket } from './App';


const ModalSetting = ({data, active, setActive}) => {
  const [listnames, setListnames] = useState();
  const [nameInput, setNameInput] = useState("")



  const handleCreate = (name) => {
        console.log(name);
      socket.emit('create-listname', name);
      setNameInput('')

      // Отправка GET-запроса на сервер для получения данных
    socket.emit('get_listnames');
  };

  const handleEdit = (id, name) => {
        console.log(id + "new-name = " + name)
        socket.emit('edit-listname', { id, name });

      // Отправка GET-запроса на сервер для получения данных
    socket.emit('get_listnames');
  };

    const handleDelete = (id) => {
        console.log(id)
        socket.emit('delete-listname', id);

      // Отправка GET-запроса на сервер для получения данных
    socket.emit('get_listnames');
  };



  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__header'>SETTING</div>
            <div className='modal__list'>
                <input value={nameInput} onChange={(e)=> setNameInput(e.target.value)} type="text" placeholder='input name(edit/create)'/> 
                <button onClick={() => handleCreate(nameInput)} >CREATE NEW ITEM</button>
                <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.accesslevel} - {item.datecreate} - {item.icon} 
            <button onClick={() => handleDelete(item.id)}> X </button>
            <button onClick={() => handleEdit(item.id, nameInput)}> Edit </button>
          </li>
        ))}
      </ul>
            </div>
        </div>
    </div>
  )
}

export default ModalSetting
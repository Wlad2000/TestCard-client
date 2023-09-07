
import React, { useState } from 'react'
import "../scss/modal.css";
import {  socket } from './App';


const ModalSetting = ({data, active, setActive}) => {

  const [nameInput, setNameInput] = useState("")



  const handleCreate = (name) => {
      socket.emit('create-listname', name);
      setNameInput('')

      // GET data
    socket.emit('get_listnames');
  };

  const handleEdit = (id, name) => {
        socket.emit('edit-listname', { id, name });
        setNameInput('')

       // GET data
    socket.emit('get_listnames');
  };

    const handleDelete = (id) => {
        socket.emit('delete-listname', id);

      // GET data
    socket.emit('get_listnames');
  };



  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__header'>SETTING</div>
            <div className='modal__body'>
                <input value={nameInput} onChange={(e)=> setNameInput(e.target.value)} type="text" placeholder='input name(edit/create)'/> 
                <button onClick={() => handleCreate(nameInput)} >CREATE NEW ITEM</button>
                <ul className='modal__list'>
        {data.map((item) => (
          <li className='modal__list-li' key={item.id}>
            {item.name} - {item.accesslevel} - {item.datecreate} - {item.icon} 
            <button className='modal__button' onClick={() => handleDelete(item.id)}> X </button>
            <button className='modal__button' onClick={() => handleEdit(item.id, nameInput)}> Edit </button>
          </li>
        ))}
      </ul>
            </div>
        </div>
    </div>
  )
}

export default ModalSetting
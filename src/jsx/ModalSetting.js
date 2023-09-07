
import React, { useState } from 'react'
import "../scss/modal.css";
import {  socket } from './App';


const ModalSetting = ({data, active, setActive}) => {

  const [nameInput, setNameInput] = useState("")
  const [editNameInput, setEditNameInput] = useState("")


  const handleCreate = (name) => {
      socket.emit('create-listname', name);
      setNameInput('')

      // GET data
    socket.emit('get_listnames');
  };

  const handleEdit = (id, name) => {
        socket.emit('edit-listname', { id, name });
        setEditNameInput('')

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
                <input className='modal__input' value={nameInput} onChange={(e)=> setNameInput(e.target.value)} type="text" placeholder='input name(create item)'/> 
                <button className='modal__button' onClick={() => handleCreate(nameInput)} >CREATE NEW ITEM</button>
                <div className='modal__container'>
              <div className='modal__container-header'>
                <div className='modal__container-name'> ItemName </div>
                <div className='modal__container-level'> AccessLevel</div>
                <div className='modal__container-data'> Data</div>
              </div>
                {data.map((item) => 
                    (
                      <div className='item__container'>
                        <img className='item__icon' src={item.icon}/>
                        <div className='item__name'>{item.name}</div>
                        <div className='item__level'>{item.accesslevel}</div>
                        <div className='item__data'>{item.datecreate.slice(2,10)}</div>
                        <div className='item__btn'>
                          <input className='modal__input' value={editNameInput} onChange={(e)=> setEditNameInput(e.target.value)} type="text" placeholder='input name(edit)'/> 
                          <button className='modal__button' onClick={() => handleEdit(item.id, editNameInput)}> Edit </button>
                        </div>
                        <button className='item__btn-del' onClick={() => handleDelete(item.id)}> Delete </button>
                      </div>
                    ))}
            </div>
                
               
            </div>
        </div>
    </div>
  )
}

export default ModalSetting

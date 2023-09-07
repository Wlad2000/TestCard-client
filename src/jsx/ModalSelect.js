import React from 'react'
import "../scss/modal.css";
import { useUserState } from './context';



const ModalSelect = ({data, active, setActive}) => {
  const { currentUser, setCurrentUser } = useUserState();

  const handleCurrent = (user) =>{
    setCurrentUser(user);
  }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__header'>SELECT  { currentUser.name }</div>
            <div className='modal__body'>
              <ul className='modal__list'>
              {data.map((item) => (
                <li className='modal__list-li' key={item.id}>
                  {item.name} - {item.accesslevel} - {item.datecreate} - {item.icon}
                  { item.id !== currentUser.id && <button className='modal__button' onClick={() => handleCurrent(item)}>O</button>}
              </li>
              ))}
              </ul>
            </div>
        </div>
    </div>
  )
}

export default ModalSelect
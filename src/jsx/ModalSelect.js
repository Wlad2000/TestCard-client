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
                   
                        { item.id !== currentUser.id && <button className='item__button' onClick={() => handleCurrent(item)}>SELECT</button>}
                 
                      </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default ModalSelect


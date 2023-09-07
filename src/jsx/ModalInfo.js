import React from 'react'
import "../scss/modal.css";
import { useUserState } from './context';

const ModalInfo = ({active, setActive}) => {
  const { currentUser, setCurrentUser } = useUserState();
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__header'>INFO</div>
            { currentUser.name ? 
            <div className='modal__container'>
              <div className='modal__container-header'>
                <div className='modal__container-name'> ItemName </div>
                <div className='modal__container-level'> AccessLevel</div>
                <div className='modal__container-data'> Data</div>
              </div>
             <div className='item__container'>
             <img className='item__icon' src={currentUser.icon}/>
             <div className='item__name'> {currentUser.name}</div>
             <div className='item__level'> {currentUser.accesslevel}</div>
             <div className='item__data'> {currentUser.datecreate.slice(2,10)}</div>
           </div>
            </div>
            : `Select user!`}
        </div>
    </div>
  )
}

export default ModalInfo
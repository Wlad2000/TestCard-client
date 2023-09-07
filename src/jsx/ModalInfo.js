import React from 'react'
import "../scss/modal.css";
import { useUserState } from './context';

const ModalInfo = ({active, setActive}) => {
  const { currentUser, setCurrentUser } = useUserState();
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__header'>INFO</div>
            <div className='modal__list'>
            <li className='modal__list-li'>
             { currentUser.name ? `${currentUser.name} - ${currentUser.accesslevel} - ${currentUser.datecreate} - ${currentUser.icon}` : `Select user!`}
          </li>
            </div>
        </div>
    </div>
  )
}

export default ModalInfo
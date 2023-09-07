import React from 'react'
import "../scss/modal.css";

const ModalInfo = ({active, setActive}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__header'>INFO</div>
            <div className='modal__list'>
                data
            </div>
        </div>
    </div>
  )
}

export default ModalInfo
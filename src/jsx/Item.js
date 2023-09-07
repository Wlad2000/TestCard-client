import React from 'react'

const Item = ({data}) => {
  return (
    <div className='item__container'>
        <img className='item__icon' src={data.icon}/>
        <div className='item__name'>{data.name}</div>
        <div className='item__level'>{data.name}</div>
        <div className='item__data'>{data.data.slice(0,10)}</div>
    </div>
  )
}

export default Item
import React from 'react'
import './item.css'
export const item = () => {
  return (
    <div className='item'>
        <img src={props.image} alt=""/>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                {props.new_price}
            </div>
            <div className='item-price-old'>
                
            </div>
        </div>
    </div>
  )
}
export default item
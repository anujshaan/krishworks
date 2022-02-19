import React from 'react'
import ItemCard from './itemCard'
import { sliderImg } from '../../sliderData';

const ItemContainer = () => {
  return (
    <div className='item-container-wrapper'>
       {
        sliderImg.map((item,index)=>(
          <ItemCard item={item} />
        ))
      }
    </div>
  )
}

export default ItemContainer
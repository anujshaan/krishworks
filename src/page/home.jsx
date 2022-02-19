import React from 'react'
import Carousel from '../component/carousel'
import Header from '../component/headers';
import ItemContainer from '../component/items/itemContainer';

const Home = () => {
  return (
    <div>
        <Header/>
        <Carousel/>
        <ItemContainer/>
    </div>
  )
}

export default Home
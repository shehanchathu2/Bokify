import React from 'react'
import { roomsDummyData } from '../assets/assets.js'
import Featured from './Featured'
import Title from './Title.jsx'

const Popular = () => {
  return (
   <div>
            <Title text1='Popular ' text2='Destinations' subtitle='Discover our most loved selections — handpicked for their quality, style, and customer favorites. These top-rated choices combine beauty and value, making them perfect for any occasion. Explore what everyone’s talking about!' />
            <div className='flex flex-wrap gap-6 p-2 items-center justify-center mt-20 mb-20'>
            {roomsDummyData.slice(0, 4).map((room, index) => (
                <Featured key={room._id} room={room} index={index} />
            ))}
        </div>
        </div>
  )
}

export default Popular

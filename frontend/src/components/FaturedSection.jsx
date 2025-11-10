import React, { useEffect } from 'react'
import { roomsDummyData } from '../assets/assets.js'
import Featured from './Featured'
import Title from './Title.jsx'


const FaturedSection = () => {


    useEffect(() => {
        console.log(roomsDummyData)
    }, [])


    return (
        <div>
            <Title text1='Featured' text2='Properties' subtitle=' Sir Lanka is a known to be the "Paradise" of the Indian Ocean for its amazing beauty and incomparable richness in natural resources.' />
            <div className='flex flex-wrap gap-6 p-2 items-center justify-center mt-20 mb-20'>
            {roomsDummyData.slice(0, 4).map((room, index) => (
                <Featured key={room._id} room={room} index={index} />
            ))}
        </div>
        </div>
    )
}

export default FaturedSection

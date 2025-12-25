import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import Title from "./Title";
import Featured from './Featured'

const RecommendedHotels = () => {

    const { rooms, searchedCities } = useAppContext()

    const [recommended, setRecommended] = useState([])


    const filteredHotels = () => {
    const filtered = rooms
        .slice()
        .filter(room => searchedCities.includes(room.hotel.city))

    console.log("Filtered hotels:", filtered) 
    console.log("Count:", filtered.length)    

    setRecommended(filtered)
}



    useEffect(() => {
        filteredHotels()
    }, [rooms, searchedCities])

    return recommended.length > 0 && (
        <div>
            <Title text1='Reccomended' text2='Hotels' subtitle=' Sir Lanka is a known to be the "Paradise" of the Indian Ocean for its amazing beauty and incomparable richness in natural resources.' />
            <div className='flex flex-wrap gap-6 p-2 items-center justify-center mt-20 mb-20'>
                {recommended.slice(0, 4).map((room, index) => (
                    <Featured key={room._id} room={room} index={index} />
                ))}
            </div>
        </div>
    );
};

export default RecommendedHotels;

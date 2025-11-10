import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets.js'
import { roomCommonData } from '../assets/assets.js'
import { MapPin, Star, Wifi, Car, Coffee, Utensils, Waves, Wind, Users, BedDouble, Maximize, Heart, Share2, ChevronLeft } from 'lucide-react';

const HotelDetail = () => {

    const { id } = useParams()
    const [hotel, setHotel] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const hotel = roomsDummyData.find(room => room._id == id)
        hotel && setHotel(hotel)
        hotel && setMainImage(hotel.images[0])
    }, [])

    return hotel && (

        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-3 mb-4'>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
                    {hotel.hotel.name} <span className='font-normal text-base text-gray-600'>({hotel.roomType})</span>
                </h1>
                <span className='inline-flex items-center px-4 py-1.5 text-sm font-semibold text-white bg-teal-600 rounded-full'>
                    12% OFF
                </span>
            </div>


            <div className='flex items-center gap-2 mb-3'>
                <div className='flex items-center gap-1'>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className='w-5 h-5 fill-amber-400 text-amber-400' />
                    ))}
                </div>
                <p className='text-gray-600 ml-1'>100+ review</p>
            </div>


            <div className='flex items-start gap-2 mb-8'>
                <MapPin className='w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5' />
                <p className='text-gray-600'>{hotel.hotel.address}</p>
            </div>


            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                {/* Main Image */}
                <div className='lg:w-1/2 w-full'>
                    <img
                        src={mainImage}
                        alt="Main view"
                        className='w-full h-[400px] md:h-[500px] rounded-xl object-cover shadow-lg'
                    />
                </div>


                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {hotel?.images.length > 1 && hotel.images.slice(1).map((image, index) => (
                        <img
                            onClick={() => setMainImage(image)}
                            key={index}
                            src={image}
                            alt={`View ${index + 2}`}
                            className={`w-full h-[190px] md:h-[240px] rounded-xl shadow-md object-cover cursor-pointer transition-all duration-300 hover:shadow-xl ${mainImage === image
                                ? 'ring-4 ring-teal-600 ring-offset-2'
                                : 'hover:ring-2 hover:ring-teal-300 hover:ring-offset-2'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>
                        Like nevwer Before
                    </h1>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {hotel.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200'>
                                <img src="" alt="" />
                                <p className='textsm'>{item}</p>

                            </div>
                        ))}
                    </div>
                </div>
                <p>LKR. {hotel.pricePerNight}</p>
            </div>
            <form className='bg-white shadow-lg rounded-2xl p-6 md:p-8 mb-6'>
                <div className='flex flex-col md:flex-row items-start md:items-end justify-between gap-6'>
                    <div className='flex flex-col md:flex-row items-start md:items-end gap-6 flex-1'>
                        <div className='flex flex-col w-full md:w-auto'>
                            <label htmlFor='checkInDate' className='font-medium text-gray-700 mb-2'>
                                Check-In
                            </label>
                            <input
                                type="date"
                                id='checkInDate'
                                className='w-full md:w-auto rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full md:w-auto'>
                            <label htmlFor='checkOutDate' className='font-medium text-gray-700 mb-2'>
                                Check-Out
                            </label>
                            <input
                                type="date"
                                id='checkOutDate'
                                className='w-full md:w-auto rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full md:w-auto'>
                            <label htmlFor='guests' className='font-medium text-gray-700 mb-2'>
                                Guests
                            </label>
                            <input
                                type="number"
                                id='guests'
                                className='w-full md:w-28 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
                                required
                            />
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='w-full md:w-auto bg-teal-600 hover:bg-teal-700 active:scale-95 transition-all text-white rounded-lg px-8 py-3 font-semibold shadow-md hover:shadow-lg'
                    >
                        Book Now
                    </button>
                </div>
            </form>

            {/* Specifications Section */}
            <div className='bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {roomCommonData.map((spec, i) => (
                        <div key={i} className='flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors'>
                            <img src={spec.icon} alt="" className='w-8 h-8 flex-shrink-0' />
                            <div>
                                <p className='text-base font-semibold text-gray-800'>{spec.title}</p>
                                <p className='text-gray-500 text-sm mt-1'>{spec.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Description Section */}
            <div className='bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6'>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>About this property</h3>
                <div className='prose prose-gray max-w-none'>
                    <p className='text-gray-600 leading-relaxed'>
                        Featuring a garden, terrace and views of garden, Rich Lanka Hotel is set in Negombo, 17 km from St Anthony's Church. The property is located 34 km from R Premadasa Stadium, 35 km from Khan Clock Tower and 40 km from Bambalapitiya Railway Station. The accommodation offers room service, a 24-hour front desk and currency exchange for guests.
                    </p>
                    <p className='text-gray-600 leading-relaxed mt-4'>
                        Guests at the hotel can enjoy an Asian breakfast. At Rich Lanka Hotel you will find a restaurant serving American cuisine. Vegetarian, vegan and kosher options can also be requested.
                    </p>
                    <p className='text-gray-600 leading-relaxed mt-4'>
                        Maris Stella College is 16 km from the accommodation, while Dutch Fort is 17 km away. The nearest airport is Bandaranaike International Airport, 8 km from Rich Lanka Hotel.
                    </p>
                </div>
            </div>

            {/* Host Section */}
            <div className='bg-white rounded-2xl shadow-md p-6 md:p-8'>
                <div className='flex items-start gap-4'>
                    <img
                        src={hotel.hotel.owner.image}
                        alt="Host"
                        className='h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-teal-600'
                    />
                    <div className='flex-1'>
                        <p className='text-lg font-semibold text-gray-800 mb-2'>
                            Hosted by {hotel.hotel.name}
                        </p>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className='w-4 h-4 fill-amber-400 text-amber-400' />
                                ))}
                            </div>
                            <p className='text-gray-600 text-sm'>500+ reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDetail

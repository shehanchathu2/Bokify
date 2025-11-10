import React, { useState } from 'react'

const AddHotel = () => {

    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })

    const [input, setInput] = useState({
        roomType: '',
        pricePerNight: 0,
        amenities: {
            parking: false,
            restaurant: false,
            pet: false,
            fitness: false,
            wifi: false,
            pool: false,
            bar: false,
            laundry: false,
            beach: false,
            spa: false

        }
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 sm:p-10">
            <div className='max-w-7xl mx-auto'>
                <div className='mb-8'>
                    <div className='flex items-center gap-3 mb-2'>
                        <div className='w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full'></div>
                        <h1 className='text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'>
                            Add New Hotels
                        </h1>
                    </div>
                    <p className='text-slate-600 ml-5'>Fill in the details to add a new product to your inventory</p>
                </div>
            </div>
            <div className='relative group'>

                <div className='relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden'>

                    <div className='p-8'>
                        <form  className='space-y-8'>
                            <p>Images</p>
                            <div className='grid grid-c sm:flex gap-2 my-2 flex-wrap'>
                                {
                                    Object.keys(images).map((key) => (
                                        <label htmlFor={`hotelImage${key} key={key}` }>
                                            
                                        </label>
                                    ))
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddHotel

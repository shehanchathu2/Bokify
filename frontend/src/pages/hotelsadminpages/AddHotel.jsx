import React, { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import { Upload } from 'lucide-react';
import toast from 'react-hot-toast';

const AddHotel = () => {

    const { axios, getToken } = useAppContext()

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

    const [loading, setLoading] = useState(false)

    const sublitHadler = async (e) => {
        e.preventDefault()
        if (!input.roomType || !input.pricePerNight || !input.amenities || !Object.values(images).some(image => image)) {
            toast.error("Please fill in all the detailed")
        }
        setLoading(true)
        try {
            const formData = new FormData();
            formData.append('roomType', input.roomType)
            formData.append('pricePerNight', input.pricePerNight)

            const amenities = Object.keys(input.amenities).filter(key => input.amenities[key])
            formData.append('amenities', JSON.stringify(amenities))

            Object.keys(images).forEach((key) => {
                images[key] && formData.append('images', images[key])
            })

            const { data } = await axios.post('/api/rooms/', formData, {
                headers: {
                    Authorization: `Bearer ${await getToken()}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (data.success) {
                toast.success(data.message)
                setInput({
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
                setImages({
                    1: null,
                    2: null,
                    3: null,
                    4: null
                })
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

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

                    <div className='px-8 py-4'>
                        <form className='space-y-8' onSubmit={sublitHadler}>
                            <p className='text-gray-800 mt-10'>Images</p>
                            <div className="grid grid-cols-2 sm:flex gap-2 my-2 flex-wrap">
                                {Object.keys(images).map((key) => (
                                    <label
                                        htmlFor={`hotelImage${key}`}
                                        key={key}
                                        className="group/upload flex flex-col items-center justify-center w-32 h-32 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                                    >
                                        {images[key] ? (
                                            <img
                                                src={URL.createObjectURL(images[key])}
                                                alt={`Hotel ${key}`}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        ) : (
                                            <>
                                                <Upload className="w-10 h-10 mb-2 text-slate-400 group-hover/upload:text-indigo-500 transition-colors" />
                                                <span className="text-slate-500 text-sm group-hover/upload:text-indigo-600 font-medium">
                                                    Upload {key}
                                                </span>
                                            </>
                                        )}
                                        <input name='images' type="file" accept=' image/* ' id={`hotelImage${key}`} hidden
                                            onChange={e => setImages({ ...images, [key]: e.target.files[0] })} />
                                    </label>
                                ))}
                            </div>

                            <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4' >
                                <div className='flex-1 max-w-48'>
                                    <p className='text-gray-800 mt-4'>Room Type</p>
                                    <select value={input.roomType} onChange={e => setInput({ ...input, roomType: e.target.value })}
                                        className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                                        <option value="">Select Room Type</option>
                                        <option value="Single bed">Single Bed</option>
                                        <option value="">Double Bed</option>
                                        <option value="">Luxury Room</option>
                                        <option value="">Family Suite</option>
                                    </select>
                                </div>

                                <div>
                                    <p className='mt-4 text-gray-800'>
                                        Price <span className='text-xs'>/night</span>
                                    </p>
                                    <input type="number" className='border border-gray-400 mt-1 rounded p-2 w-24' placeholder='0' value={input.pricePerNight} onChange={e => setInput({ ...input, pricePerNight: e.target.value })} />
                                </div>
                            </div>
                            <p className="text-lg font-semibold text-gray-800 mb-3">Amenities</p>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md">
                                {Object.keys(input.amenities).map((amenity, index) => (
                                    <label
                                        key={index}
                                        htmlFor={`amenities${index + 1}`}
                                        className="flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-teal-50 border border-gray-200 rounded-xl px-3 py-2 transition duration-200"
                                    >
                                        <input
                                            type="checkbox"
                                            id={`amenities${index + 1}`}
                                            checked={input.amenities[amenity]}
                                            onChange={() =>
                                                setInput({
                                                    ...input,
                                                    amenities: {
                                                        ...input.amenities,
                                                        [amenity]: !input.amenities[amenity],
                                                    },
                                                })
                                            }
                                            className="accent-teal-600 w-4 h-4 rounded focus:ring-teal-500"
                                        />
                                        <span className="text-gray-700 capitalize">{amenity}</span>
                                    </label>
                                ))}
                            </div>

                            <button type='submit' className=' bg-teal-900 text-white px-8 py-2 rounded mt-8 cursor-pointer' disabled={loading}>
                                {loading ? 'Adding...🔁' : "Add Hotel"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddHotel

import React from 'react'
import { X, Building2, Phone, MapPin, Map } from 'lucide-react'
import footer from '../assets/footer.jpg'
import { useAppContext } from '../context/appContext'


const HotelsReg = () => {

    const {setShowHotelReg} = useAppContext()


    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4'>
            <div className='flex flex-col md:flex-row bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden'>
                <div className='hidden md:block md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 p-10 relative overflow-hidden'>
                    <div className="absolute inset-0 z-0">
                        <img
                            src={footer}
                            alt="Sri Lanka"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-900/50 to-teal-950/60"></div>
                    </div>
                    <div className='relative z-10 h-full flex flex-col justify-center text-white'>
                       <h2 className='text-4xl font-bold mb-4 leading-tight'>
                            Join Our Platform
                        </h2>
                        <p className='text-indigo-100 text-lg leading-relaxed'>
                            Register your hotel and connect with travelers worldwide
                        </p>
                    </div>
                </div>

                <div className='relative md:w-1/2 p-8 md:p-10'>
                    <button className='absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors'>
                        <X className='w-5 h-5 text-gray-600' onClick={()=>setShowHotelReg(false)}/>
                    </button>

                    <div className='md:mt-6'>
                        <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                            Register Your Hotel
                        </h3>
                        <p className='text-gray-600 text-sm mb-8'>Fill in the details below to get started</p>

                        <div className='space-y-5'>
                            <div>
                                <label htmlFor='name' className='flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm'>
                                    <Building2 className='w-4 h-4 text-teal-600' />
                                    Hotel Name
                                </label>
                                <input
                                    type="text"
                                    id='name'
                                    className='border-2 border-gray-200 rounded-lg w-full px-4 py-3 outline-none focus:border-teal-500 transition-colors'
                                    placeholder='Enter hotel name'
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor='contact' className='flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm'>
                                    <Phone className='w-4 h-4 text-teal-600' />
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id='contact'
                                    className='border-2 border-gray-200 rounded-lg w-full px-4 py-3 outline-none focus:border-teal-500 transition-colors'
                                    placeholder='+94 77 123 4567'
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor='address' className='flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm'>
                                    <MapPin className='w-4 h-4 text-teal-600' />
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id='address'
                                    className='border-2 border-gray-200 rounded-lg w-full px-4 py-3 outline-none focus:border-teal-500 transition-colors'
                                    placeholder='Street address'
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor='city' className='flex items-center gap-2 font-semibold text-gray-700 mb-2 text-sm'>
                                    <Map className='w-4 h-4 text-teal-600' />
                                    City
                                </label>
                                <input
                                    type="text"
                                    id='city'
                                    className='border-2 border-gray-200 rounded-lg w-full px-4 py-3 outline-none focus:border-teal-500 transition-colors'
                                    placeholder='City name'
                                    required
                                />
                            </div>

                            <button className='w-full bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-all hover:shadow-lg mt-6'>
                                Register Hotel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsReg
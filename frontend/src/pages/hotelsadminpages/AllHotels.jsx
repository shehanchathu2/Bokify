import React from 'react'

const AllHotels = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6 sm:p-10">
            <div className='max-w-7xl mx-auto'>
                <div className='mb-8'>
                    <div className='flex items-center gap-3 mb-2'>
                        <div className='w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full'></div>
                        <h1 className='text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'>
                            All Products
                        </h1>
                    </div>
                    <p className='text-slate-600 ml-5'>Manage your product inventory</p>
                </div>
                <div className="relative group">

                    <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl border border-slate-200">

                        <div className="p-8">
                            <div className='flex items-center justify-between mb-6'>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800">Product Inventory</h2>
                                    <p className='text-sm text-slate-500 mt-1'>Total Products: <span className='font-semibold text-indigo-600'>12</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllHotels
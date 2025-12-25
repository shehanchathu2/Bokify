import React, { useEffect, useMemo, useState } from 'react';
import { Search, MapPin, DollarSign, X, Wifi, Car, Coffee, Utensils, Waves, Mountain, Home, Building2, TreePine, ChevronRight } from 'lucide-react';
import { roomsDummyData } from '../assets/assets.js'
import { Navigate, useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext.jsx';


const Hotels = () => {

    const { rooms, navigate, currency } = useAppContext()
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedFilters, setSelectedFilters] = useState({
        roomType: [],
        priceRange: []
    })
    const [selectedSort, setSelectedSort] = useState('')

    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('Any Budget Range');
    const [propertyTypes, setPropertyTypes] = useState({
        apartments: false,
        cabins: false,
        chalets: false,
        countryHouses: false,
        guesthouse: false,
        hotels: false,
        villas: false
    });



    useEffect(() => {
        console.log(rooms)
    })

    const hotels = [
        {
            amenities: ['parking', 'restaurant', 'pet', 'fitness', 'wifi', 'pool']
        },]

    const amenityIcons = {
        parking: Car,
        restaurant: Utensils,
        pet: Home,
        fitness: Mountain,
        wifi: Wifi,
        pool: Waves,
        'room-service': Coffee,
        bar: Coffee,
        laundry: Building2,
        beach: Waves,
        spa: TreePine
    };
    const clearLocation = () => {
        setLocation('');
    };

    const togglePropertyType = (type) => {
        setPropertyTypes(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };


    const handleFilterChange = (checked, value, type) => {
        setSelectedFilters((preFilters) => {
            const updatedFlters = { ...preFilters }
            if (checked) {
                updatedFlters[type].push(value)
            } else {
                updatedFlters[type] = updatedFlters[type].filter(item => item !== value)
            }
            return updatedFlters
        })
    }
    const filterByRoomType = (room) => {
        if (selectedFilters.roomType.length === 0) return true;

        return selectedFilters.roomType.includes(room.roomType);
    };

    const sortRooms = (a, b) => {
        if (selectedSort === 'Price Low to High') {
            return a.pricePerNight - b.pricePerNight
        }
        if (selectedSort === 'Price High to Low') {
            return b.pricePerNight - a.pricePerNight
        }
        if (selectedSort === 'Newest First') {
            return new Date(b.createdAt) - new Date(a.createdAt)
        }
        return 0;
    }

    const filterDestination = (room) => {
    const destination = searchParams.get('destination')
    if (!destination) return true

    console.log(
      room.hotel.city
        .toLowerCase()
        .includes(destination.toLowerCase())
    )

    return room.hotel.city
      .toLowerCase()
      .includes(destination.toLowerCase())
}


    const clearFilter = () => {
        setSelectedFilters({
            roomType: [],
            priceRange: [],
        })

    }

    return (
        <div className="min-h-screen bg-gray-50 pt-28 md:pt-35 px-4 md:px-16 lg-px-24 xl:px-32
    ">
            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-6">

                    <div className="lg:col-span-1 space-y-6">

                        <div className="bg-teal-800 rounded-2xl p-6 text-white shadow-lg">
                            <h2 className="text-2xl font-bold mb-2">Search Hotels</h2>
                            <p className="text-teal-100 mb-6">Browse the most suitable for you</p>

                            {/* Location Input */}
                            <div className="mb-4">
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-600" />
                                    <input
                                        type="text"
                                        placeholder="Where are you going to ?"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full pl-10 pr-10 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    />
                                    {location && (
                                        <button
                                            onClick={clearLocation}
                                            className="absolute right-3 top-1/2 -translate-y-1/2"
                                        >
                                            <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Budget Dropdown */}
                            <div className="mb-6">
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-600" />
                                    <select
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                        className="w-full pl-10 pr-10 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 appearance-none cursor-pointer"
                                    >
                                        <option>Any Budget Range</option>
                                        <option>Under $20</option>
                                        <option>$20 - $50</option>
                                        <option>$50 - $100</option>
                                        <option>$100+</option>
                                    </select>
                                </div>
                            </div>

                            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                                Search Hotels
                            </button>
                        </div>

                        {/* Filter Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Filter by:</h3>

                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="font-semibold text-gray-800 mb-4">Popular filters:</h4>
                                <div className="space-y-3">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Single bed"
                                            onChange={(e) =>
                                                handleFilterChange(e.target.checked, "Single bed", "roomType")
                                            }
                                        />
                                        Single Bed
                                    </label>

                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Double bed"
                                            onChange={(e) =>
                                                handleFilterChange(e.target.checked, "Double bed", "roomType")
                                            }
                                        />
                                        Double Bed
                                    </label>

                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Luxury room"
                                            onChange={(e) =>
                                                handleFilterChange(e.target.checked, "Luxury room", "roomType")
                                            }
                                        />
                                        Luxury Room
                                    </label>

                                    <label>
                                        <input
                                            type="checkbox"
                                            value="Family suite"
                                            onChange={(e) =>
                                                handleFilterChange(e.target.checked, "Family suite", "roomType")
                                            }
                                        />
                                        Family Suite
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Results */}
                    <div className="lg:col-span-3">

                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">

                                <div className="flex items-center gap-3">
                                    <span className="text-gray-700 font-medium">Sort by:</span>
                                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
                                        <option>Default</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Rating</option>
                                        <option>Name</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Hotel Cards Grid */}
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {rooms
                                .filter(filterByRoomType)
                                .filter(filterDestination)
                                .map((hotel) => (
                                    <div key={hotel._id} className="bg-white rounded-xl cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                                        {/* Hotel Image */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                onClick={() => navigate(`/hotel/${hotel._id}`)}
                                                src={hotel.images[0]}
                                                alt={hotel.hotel.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Hotel Info */}
                                        <div className="p-5">
                                            <h3 onClick={() => navigate(`/hotel/${hotel._id}`)} className="text-xl hover:underline  font-bold text-teal-800 mb-2 group-hover:text-teal-600 transition-colors">
                                                {hotel.hotel.name}
                                            </h3>
                                            <div className="flex items-center gap-2 text-gray-600 mb-3">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm">{hotel.hotel.city}</span>

                                            </div>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                vjnewokvnnevwn
                                            </p>

                                            {/* Amenities */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {hotel.amenities.map((amenity, idx) => {
                                                    const Icon = amenityIcons[amenity] || Home;
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                                                            title={amenity}
                                                        >
                                                            <Icon className="w-4 h-4 text-gray-600" />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                                <span className="text-lg font-bold text-teal-800">
                                                    LKR.{hotel.pricePerNight}/night
                                                </span>
                                                <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-300 text-sm font-semibold">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <div className="flex items-center gap-2">
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                                    Previous
                                </button>
                                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">1</button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                                    2
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                                    3
                                </button>
                                <span className="px-2">...</span>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                                    90
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
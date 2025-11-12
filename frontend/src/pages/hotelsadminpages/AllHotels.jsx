import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext'
import toast from 'react-hot-toast'

const AllHotels = () => {

    const [rooms, setRooms] = useState([])
    const { axios, getToken, user } = useAppContext()

    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms/owner', {
                headers: {
                    Authorization: `Bearer ${await getToken()}`,
                }
            })

            if (data.success) {
                setRooms(data.rooms)
            } else {
                toast.error("Error fetching rooms")
            }
        } catch (error) {
            console.log(error)
            toast.error("Error fetching rooms")
        }
    }

    useEffect(() => {
        if (user) {
            fetchRooms()
        }
    }, [user])

    const toggleAvailability = async (roomId) => {
  try {
    // Get JWT token
    const token = await getToken();

    // Make API request
    const response = await axios.post(
      "/api/rooms/toggle-availability",
      { roomId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Check response
    if (response.data.success) {
      toast.success("Room availability updated successfully!");
    } else {
      toast.error(response.data.message || "Failed to update availability.");
    }
  } catch (error) {
    console.error("Error toggling availability:", error);
    if (error.response) {
      // Server responded with an error
      toast.error(error.response.data.message || "Server error occurred.");
    } else if (error.request) {
      // No response received
      toast.error("No response from server. Please try again.");
    } else {
      // Something else went wrong
      toast.error("Unexpected error occurred.");
    }
  }
};


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

                <div className="overflow-x-auto relative bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
                    <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium bg-gray-100">
                            <tr>
                                <th className="px-6 py-4">Room Type</th>
                                <th className="px-6 py-4">Price/Night</th>
                                <th className="px-6 py-4">Amenities</th>
                                <th className="px-6 py-4">Images</th>
                                <th className="px-6 py-4">Availability</th>
                                <th className="px-6 py-4">Availability</th>
                                <th className="px-6 py-4">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room) => (
                                <tr key={room._id} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{room.roomType}</td>
                                    <td className="px-6 py-4">${room.pricePerNight}</td>
                                    <td className="px-6 py-4">{room.amenities.join(', ')}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            {room.images.map((img, index) => (
                                                <img key={index} src={img} alt={`Room ${index}`} className="w-16 h-16 object-cover rounded" />
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{room.isAvailable ? 'Yes' : 'No'}</td>
                                    <td className="px-6 py-4">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={room.isAvailable}
                                                onChange={() => toggleAvailability(room._id)}
                                            />
                                            <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-teal-600 transition-colors duration-200"></div>
                                            <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                        </label>
                                    </td>

                                    <td className="px-6 py-4">{new Date(room.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllHotels

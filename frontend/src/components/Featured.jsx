import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Star, DollarSign } from "lucide-react"; // react-icons alternative
// If you're using react-icons instead of lucide-react, import like:
// import { FaMapMarkerAlt, FaStar, FaDollarSign } from "react-icons/fa";


const Featured = ({ room, index }) => {
  return (
    <motion.div
      key={room._id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => scrollTo(0, 0)}
      className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
    >
      {/* Best Seller Badge */}
      {index % 2 === 0 && (
        <div className="absolute top-4 left-4 bg-yellow-400 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
          Best Seller
        </div>
      )}


      <div className="overflow-hidden">
        <motion.img
          src={room.images[0]}
          alt={room.hotel.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Info Section */}
      <div className="p-5 space-y-3">
        {/* Hotel Name */}
        <h2 className="text-xl font-bold text-gray-800">
          {room.hotel.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <Star size={18} className="mr-1" />
          <span className="font-semibold text-gray-700">3.9</span>
          <span className="text-sm text-gray-500 ml-1">/5</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600">
          <MapPin size={16} className="mr-2 text-blue-500" />
          <p>{room.hotel.address}</p>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center text-gray-800 font-semibold">
            LKR.
            { room.pricePerNight}/night
          </div>

          <Link
            to={`/book/${room._id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Featured;

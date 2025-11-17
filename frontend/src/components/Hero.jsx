import React, { useState, useEffect } from "react";
import { MapPin, X, Calendar, Users, Tag, Search, ChevronDown, Sparkles } from 'lucide-react';
import bg9 from '../assets/bg9.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import bg4 from '../assets/bg4.jpg'
import bg5 from '../assets/bg5.jpg'
import bg6 from '../assets/bg6.jpg'
import bg7 from '../assets/bg7.jpg'
import bg8 from '../assets/bg8.jpg'


const images = [bg9,bg2,bg3,bg4,bg5,bg6,bg7,bg8];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('2025-11-07');
    const [checkOut, setCheckOut] = useState('2025-11-08');
    const [guests, setGuests] = useState({ rooms: 1, adults: 1, children: 0 });
    const [isSearchFocused, setIsSearchFocused] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-[2000ms] ease-out ${index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
                        }`}
                >
                    <img
                        src={img}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}


            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>


            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                  <p className="text-xl md:text-lg text-gray-200 max-w-2xl font-light">
                   Book your Stay
                </p>

                <h1 className="text-6xl  mb-4 tracking-tight">
                    <h1 style={{ fontFamily: 'Lobster, cursive' }}>Visit Sri Lanka</h1>
                </h1>

                <p className="text-xl md:text-lg mb-12 text-gray-200 max-w-2xl font-light">
                    Your personal tropical sanctuary in the heart of paradise
                </p>


                <div className="w-full max-w-6xl bg-white/10 backdrop-blur-md p-4 rounded-3xl">
                    <div className={`bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-3 transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''
                        }`}>
                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className="flex-1 relative">
                                <div className="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    <div className="flex-1 text-left">
                                        <label className="text-xs text-gray-500 font-medium block mb-1">Where to?</label>
                                        <input
                                            type="text"
                                            value={destination}
                                            onChange={(e) => setDestination(e.target.value)}
                                            onFocus={() => setIsSearchFocused(true)}
                                            onBlur={() => setIsSearchFocused(false)}
                                            placeholder="Search destinations"
                                            className="w-full text-gray-800 font-semibold outline-none bg-transparent placeholder:text-gray-400"
                                        />
                                    </div>
                                    {destination && (
                                        <button onClick={() => setDestination('')} className="text-gray-400 hover:text-gray-600">
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>


                            <div className="flex-1">
                                <div className="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
                                    <Calendar className="w-5 h-5 text-green-500" />
                                    <div className="flex-1 text-left">
                                        <label className="text-xs text-gray-500 font-medium block mb-1">Check-in</label>
                                        <input
                                            type="date"
                                            value={checkIn}
                                            onChange={(e) => setCheckIn(e.target.value)}
                                            className="w-full text-gray-800 font-semibold outline-none bg-transparent cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
                                    <Calendar className="w-5 h-5 text-orange-500" />
                                    <div className="flex-1 text-left">
                                        <label className="text-xs text-gray-500 font-medium block mb-1">Check-out</label>
                                        <input
                                            type="date"
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                            className="w-full text-gray-800 font-semibold outline-none bg-transparent cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="lg:w-auto w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Search className="w-5 h-5" />
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${index === current ? 'w-8 bg-white' : 'w-6 bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
}
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/appContext";


const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
)

const Navbar = () => {



    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotel', path: '/hotel' },
        { name: 'Visit Sri Lanka', path: '/contact' },
        { name: 'Sri Lanka', path: '/about' },
    ];


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { openSignIn } = useClerk()

    const location = useLocation()

    const { user, navigate, isOwner, setShowHotelReg } = useAppContext()


    useEffect(() => {
        // Set scroll state based on pathname
        setIsScrolled(location.pathname !== '/');

        const handleScroll = () => {
            // Set scroll state when user scrolls down
            setIsScrolled(window.scrollY > 10 || location.pathname !== '/');
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (

        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-28 transition-all duration-300 z-50 ${isScrolled ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl py-3 md:py-3.5" : "bg-black/20 backdrop-blur-md py-4 md:py-5"}`}>


            <Link to='/' className="group">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 via-teal-500 to-teal-500 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                        <span className="text-white font-bold text-xl">B</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Bolify
                    </h1>
                </div>
            </Link>


            <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className="relative px-4 lg:px-5 py-2 text-white/90 hover:text-white text-sm lg:text-base font-medium rounded-full hover:bg-white/20 transition-all duration-300 group">
                        {link.name}
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-teal-500 group-hover:w-1/2 transition-all duration-300" />
                    </a>
                ))}
                {user && (
                    <button onClick={() => isOwner ? navigate('/owner') : setShowHotelReg(true)} className="ml-2 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        {isOwner ? ' Dashboard' : 'List Your Hotel'}
                    </button>
                )}
            </div>


            <div className="hidden md:flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>

                {user ?
                    (<div className="transform hover:scale-105 transition-transform duration-300">
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="My Bookings"
                                    labelIcon={<BookIcon />}
                                    onClick={() => navigate("/my-booking")}
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </div>)
                    :
                    (
                        <button onClick={openSignIn} className="px-6 py-2.5 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Login
                        </button>
                    )

                }
            </div>



            <div className="flex items-center gap-3 md:hidden">
                <div className="transform hover:scale-105 transition-transform duration-300">
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action
                                label="My Bookings"
                                labelIcon={<BookIcon />}
                                onClick={() => navigate("/my-booking")}
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </button>
            </div>


            <div className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-base flex flex-col md:hidden items-center justify-center gap-8 font-medium text-white transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="flex flex-col items-center gap-6">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform">
                            {link.name}
                        </a>
                    ))}
                </div>

                {user && <button onClick={() => navigate('/owner')} className="px-8 py-3 text-base font-medium rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    {isOwner ? '✨ Dashboard' : '🏨 List Your Hotel'}
                </button>}

                {!user && <button onClick={openSignIn} className="bg-white text-gray-900 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Login
                </button>}
            </div>
        </nav>
    );
}

export default Navbar
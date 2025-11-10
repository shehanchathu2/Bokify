import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SriLankaHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop", // Colombo cityscape
    "https://images.unsplash.com/photo-1608748776558-0e0e4370bda0?w=800&h=600&fit=crop", // Beach
    "https://images.unsplash.com/photo-1571161584142-68efa7781779?w=800&h=600&fit=crop", // Temple
    "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=800&h=600&fit=crop", // Tea plantation
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full min-h-screen ">
      <div className="container mx-auto px-0 py-8">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Left Content Section */}
          <div className="text-white space-y-6 px-12 py-12 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-2xl tracking-tight">
                Visit Sri Lanka
              </h1>
              <span className="text-xl md:text-sm text-teal-100 font-light">
                Experience the Glory of this beautiful Island
              </span>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Visit Sri Lanka to witness the outstanding beauty and hospitality. 
                Sri Lanka is known to be the "Paradise" of the Indian Ocean for its 
                amazing beauty and incomparable richness in natural resources. The 
                country is extremely famous for beautiful soothing tourist destinations 
                and great hospitality of the Sri Lankans. Checkout our Sri Lankan Map 
                which is completed with all known tourist destinations.
              </p>

              <p>
                Tourist destinations in Sri Lanka provide a great and unforgettable 
                holiday experience to all the people who visit Sri Lanka.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#visit"
                className="px-8 py-3 bg-white text-teal-900 font-semibold rounded-lg hover:bg-teal-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Visit Sri Lanka
              </a>
              <a
                href="#map"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-900 transition-colors duration-300"
              >
                Sri Lankan Map
              </a>
            </div>
          </div>

          {/* Right Carousel Section */}
          <div className="relative h-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            {/* Images */}
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`Sri Lanka ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SriLankaHero;
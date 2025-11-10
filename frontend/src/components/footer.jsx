import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import footer from '../assets/footer.jpg'

const SriLankaFooter = () => {
  return (
    <footer className="relative w-full bg-teal-900 px-10" >
      <div className="absolute inset-0 z-0">
        <img
          src={footer}
          alt="Sri Lanka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/95 via-teal-900/70 to-teal-950/85"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Visit Sri Lanka</h3>
            <p className="text-teal-100 leading-relaxed">
              Experience the Glory of this beautiful Island. Discover amazing beauty and incomparable richness in natural resources.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Sri Lanka
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Tourist Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Sri Lankan Map
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Popular Destinations</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Colombo
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Kandy
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Galle
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Sigiriya
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Ella
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-300 mt-1 flex-shrink-0" />
                <p className="text-teal-100">
                  123 Tourism Street,<br />
                  Colombo, Sri Lanka
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-300 flex-shrink-0" />
                <a href="tel:+94112345678" className="text-teal-100 hover:text-white transition-colors duration-300">
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-300 flex-shrink-0" />
                <a href="mailto:info@visitsrilanka.com" className="text-teal-100 hover:text-white transition-colors duration-300">
                  info@visitsrilanka.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-teal-100 text-center md:text-left">
              © 2024 Visit Sri Lanka. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-teal-100">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SriLankaFooter;
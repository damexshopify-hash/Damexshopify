
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ramat-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold serif">RAMAT</h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Experience true hospitality in the heart of Ilorin. Whether for business or rest, we provide a sanctuary of peace.
            </p>
          </div>

          <div>
            <h3 className="text-ramat-gold text-lg font-semibold mb-6 serif">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/rooms" className="text-white/60 hover:text-ramat-gold transition-colors">Our Rooms</Link></li>
              <li><Link to="/garden" className="text-white/60 hover:text-ramat-gold transition-colors">Garden & Events</Link></li>
              <li><Link to="/reviews" className="text-white/60 hover:text-ramat-gold transition-colors">Guest Experiences</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-ramat-gold transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-ramat-gold text-lg font-semibold mb-6 serif">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 text-ramat-gold"><Icons.MapPin /></div>
                <span className="text-white/60 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="text-ramat-gold"><Icons.Phone /></div>
                <span className="text-white/60 text-sm">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <span className="text-ramat-gold font-medium">Checkout:</span> {CONTACT_INFO.checkout}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-ramat-gold text-lg font-semibold mb-6 serif">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">Subscribe for exclusive offers and updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 px-4 py-2 w-full focus:outline-none focus:border-ramat-gold" 
              />
              <button className="bg-ramat-gold text-white px-4 py-2 hover:bg-white hover:text-ramat-green transition-all">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Ramat Hotel and Garden. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Rooms', path: '/rooms' },
    { label: 'Garden', path: '/garden' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ramat-green py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 group">
            <h1 className={`text-2xl sm:text-3xl font-bold serif tracking-wider transition-colors duration-300 ${scrolled ? 'text-white' : 'text-ramat-green'}`}>
              RAMAT <span className="text-ramat-gold">HOTEL</span>
            </h1>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-ramat-gold ${
                  location.pathname === item.path 
                    ? 'text-ramat-gold' 
                    : (scrolled ? 'text-white' : 'text-ramat-green')
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/rooms" 
              className={`px-5 py-2.5 rounded text-sm font-semibold uppercase tracking-widest transition-all ${
                scrolled ? 'bg-ramat-gold text-white hover:bg-white hover:text-ramat-green' : 'bg-ramat-green text-white hover:bg-ramat-gold'
              }`}
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-white' : 'text-ramat-green'} p-2`}
            >
              {isOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-ramat-green transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t border-ramat-gold/20' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-white text-lg font-medium serif tracking-wide py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/rooms"
            className="block w-full text-center bg-ramat-gold text-white py-3 rounded font-bold uppercase tracking-widest mt-4"
            onClick={() => setIsOpen(false)}
          >
            Check Availability
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

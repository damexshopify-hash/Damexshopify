
import React from 'react';
import { Room } from '../types';

const ROOMS_DATA: Room[] = [
  {
    id: 'standard',
    name: 'Standard Serenity',
    description: 'A cozy retreat perfectly suited for individual travelers and short-stay business guests.',
    price: '₦25,000 / night',
    image: 'https://picsum.photos/id/1021/800/600',
    amenities: ['Queen Bed', 'Free Wi-Fi', 'En-suite Shower', 'Daily Breakfast']
  },
  {
    id: 'deluxe',
    name: 'Deluxe Garden Room',
    description: 'Spacious rooms with a direct view of our lush greenery, offering a truly relaxing atmosphere.',
    price: '₦35,000 / night',
    image: 'https://picsum.photos/id/1031/800/600',
    amenities: ['King Bed', 'Garden View', 'Minibar', 'Premium Wi-Fi', 'Daily Breakfast']
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    description: 'Our most luxurious offering, featuring a separate sitting area and premium interior design.',
    price: '₦50,000 / night',
    image: 'https://picsum.photos/id/1029/800/600',
    amenities: ['King Bed', 'Private Lounge', 'Luxury Bath', 'Butler Service', 'All-inclusive Breakfast']
  }
];

const Rooms: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-ramat-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-ramat-gold font-semibold uppercase tracking-[0.2em] text-sm">Accommodation</span>
          <h1 className="text-5xl md:text-6xl font-bold serif text-ramat-green">Our Peaceful Rooms</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choose from our curated selection of spaces, each designed with a focus on deep rest and modern simplicity.
          </p>
        </div>

        <div className="space-y-24">
          {ROOMS_DATA.map((room, idx) => (
            <div key={room.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`overflow-hidden rounded-2xl shadow-xl ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className={`space-y-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <h2 className="text-4xl font-bold serif text-ramat-green">{room.name}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{room.description}</p>
                <div className="flex flex-wrap gap-3">
                  {room.amenities.map(item => (
                    <span key={item} className="px-4 py-1.5 rounded-full bg-white border border-ramat-gold/20 text-xs font-medium text-ramat-green tracking-wide">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-gray-200">
                  <div>
                    <span className="text-ramat-gold text-2xl font-bold serif">{room.price}</span>
                  </div>
                  <button className="px-8 py-3 bg-ramat-green text-white font-bold uppercase tracking-widest rounded hover:bg-ramat-gold transition-all">
                    Book Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;

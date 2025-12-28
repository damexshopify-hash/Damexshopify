
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920" 
            alt="Ramat Hotel Exterior" 
            className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_ease_infinite_alternate]" 
          />
          {/* Darkened overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-ramat-green/80 via-ramat-green/60 to-ramat-green/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 drop-shadow-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold text-sm tracking-widest uppercase shadow-lg">
            <Icons.Star filled />
            <span>Top Rated in Ilorin</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold serif leading-tight tracking-tight drop-shadow-md">
            A Sanctuary of <br /> <span className="text-ramat-gold italic font-bold">Pure Stillness</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto font-semibold leading-relaxed drop-shadow-sm">
            Experience the elegant charm of our Sobi Road retreat. Modern comfort meets the peaceful embrace of our signature gardens.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              to="/rooms" 
              className="w-full sm:w-auto px-12 py-5 bg-ramat-gold text-white font-black uppercase tracking-widest rounded shadow-2xl hover:bg-white hover:text-ramat-green transition-all transform hover:-translate-y-1"
            >
              Check Availability
            </Link>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="w-full sm:w-auto px-12 py-5 bg-white text-ramat-green font-black uppercase tracking-widest rounded shadow-2xl hover:bg-ramat-gold hover:text-white transition-all transform hover:-translate-y-1"
            >
              Call to Book
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-ramat-cream py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 text-ramat-green font-semibold">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4].map(i => <Icons.Star key={i} filled />)}
              <div className="relative">
                <Icons.Star />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                   <Icons.Star filled />
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold serif">{CONTACT_INFO.rating}</span>
          </div>
          <p className="text-gray-700 italic text-center md:text-left text-lg">
            "An exceptional experience with peaceful garden views and world-class service." — Real Guest Review
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-ramat-gold font-bold uppercase tracking-[0.2em] text-sm">Amenities</span>
            <h2 className="text-4xl md:text-5xl font-bold serif text-ramat-green">Everything you need to unwind</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Icons.Coffee, title: "Free Breakfast", desc: "Freshly prepared every morning to start your day right." },
              { icon: Icons.Wifi, title: "Free Wi-Fi", desc: "High-speed connection throughout the hotel and garden." },
              { icon: Icons.Car, title: "Secure Parking", desc: "Complimentary on-site parking for all our guests." },
              { icon: Icons.Leaf, title: "Peaceful Garden", desc: "Lush greenery perfect for relaxation and small events." }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 border border-transparent hover:border-ramat-gold/20 hover:bg-ramat-cream transition-all rounded-lg text-center space-y-4 shadow-sm hover:shadow-xl">
                <div className="inline-flex p-4 rounded-full bg-ramat-cream text-ramat-gold group-hover:bg-ramat-green group-hover:text-white transition-all shadow-inner">
                  <item.icon />
                </div>
                <h3 className="text-xl font-bold serif text-ramat-green">{item.title}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser Section */}
      <section className="py-24 bg-ramat-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-ramat-gold font-bold uppercase tracking-[0.2em] text-sm">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold serif text-ramat-green leading-tight">
                Designed for Comfort, <br /> Built for Rest.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Located on Sobi Road, our hotel features elegant cream-toned architecture and a signature bird fountain that welcomes you to a world of calm. Whether you're here for business or a quiet getaway, our space is designed to recharge your spirit.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold serif text-ramat-green">12:00 PM</h4>
                  <p className="text-xs uppercase tracking-widest text-ramat-gold font-bold mt-1">Check-out Time</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold serif text-ramat-green">24/7</h4>
                  <p className="text-xs uppercase tracking-widest text-ramat-gold font-bold mt-1">Guest Support</p>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center text-ramat-green font-black uppercase tracking-widest group">
                  Explore our story
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-ramat-gold/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=80&w=800" 
                  alt="Garden Fountain Detail" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-ramat-green">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl text-white font-bold serif">Ready for a peaceful stay?</h2>
          <p className="text-white/80 text-xl font-semibold">Join us at Ramat Hotel and Garden for an unforgettable experience in Ilorin.</p>
          <div className="pt-4">
             <Link 
                to="/rooms" 
                className="inline-block px-12 py-5 bg-ramat-gold text-white font-black uppercase tracking-widest rounded hover:bg-white hover:text-ramat-green transition-all shadow-2xl"
              >
                Book Your Stay
              </Link>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Home;


import React from 'react';

const Garden: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Garden Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-ramat-gold font-semibold uppercase tracking-[0.2em] text-sm">Outdoors</span>
            <h1 className="text-5xl md:text-6xl font-bold serif text-ramat-green leading-tight">
              A Living <br /> Sanctuary.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Step into our meticulously maintained courtyard, featuring our iconic bird fountain and lush greenery. Designed for meditation, quiet conversations, and intimate gatherings, it's the peaceful backdrop of every Ramat stay.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-ramat-gold"></div>
                <p className="text-ramat-green font-medium italic">Small private gatherings</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-ramat-gold"></div>
                <p className="text-ramat-green font-medium italic">Morning meditation & yoga space</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-ramat-gold"></div>
                <p className="text-ramat-green font-medium italic">Relaxing evening tea & refreshments</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800" 
                alt="Courtyard and Fountain" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-ramat-green p-10 rounded-2xl shadow-xl hidden md:block">
              <p className="text-white text-3xl font-serif">"Peace is not just an idea, it's a place."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Moments */}
      <section className="bg-ramat-cream py-24">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold serif text-ramat-green">Moments in the Garden</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-8">
                <img src="https://picsum.photos/id/102/600/400" className="rounded-xl shadow-lg w-full" alt="Experience 1" />
                <img src="https://picsum.photos/id/103/600/800" className="rounded-xl shadow-lg w-full" alt="Experience 2" />
              </div>
              <div className="space-y-8 pt-12">
                <img src="https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=80&w=600" className="rounded-xl shadow-lg w-full" alt="Fountain Detail" />
                <img src="https://picsum.photos/id/106/600/400" className="rounded-xl shadow-lg w-full" alt="Experience 4" />
              </div>
              <div className="space-y-8">
                <img src="https://picsum.photos/id/107/600/400" className="rounded-xl shadow-lg w-full" alt="Experience 5" />
                <img src="https://picsum.photos/id/108/600/800" className="rounded-xl shadow-lg w-full" alt="Experience 6" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Garden;

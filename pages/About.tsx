
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
           <div className="relative">
             <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                <img src="https://picsum.photos/id/1012/800/1200" className="w-full h-full object-cover" alt="Hospitality" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-ramat-gold rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl">
               <span className="serif text-xl font-bold italic">Dedicated to your comfort</span>
             </div>
           </div>
           
           <div className="space-y-8">
             <span className="text-ramat-gold font-semibold uppercase tracking-[0.2em] text-sm">Our Story</span>
             <h1 className="text-5xl md:text-6xl font-bold serif text-ramat-green">Crafting a home in Ilorin</h1>
             <p className="text-gray-600 text-lg leading-relaxed">
               Ramat Hotel and Garden was founded on a simple belief: hospitality shouldn't feel transactional. It should feel like an invitation. We wanted to create a space where travelers to Ilorin could find more than just a bed—they could find a sanctuary.
             </p>
             <p className="text-gray-600 text-lg leading-relaxed">
               By blending modern architectural lines with lush, living landscapes, we've built a retreat that respects the environment while providing every luxury. Our team is trained not just to serve, but to care.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
               <div className="space-y-2">
                 <h4 className="text-2xl font-bold serif text-ramat-green">Authentic</h4>
                 <p className="text-sm text-gray-500">True Ilorin hospitality with a global standard of care.</p>
               </div>
               <div className="space-y-2">
                 <h4 className="text-2xl font-bold serif text-ramat-green">Peaceful</h4>
                 <p className="text-sm text-gray-500">A garden sanctuary that silences the noise of the city.</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;

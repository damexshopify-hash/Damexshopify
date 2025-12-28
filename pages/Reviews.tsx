
import React from 'react';
import { Icons, CONTACT_INFO } from '../constants';
import { Review } from '../types';

const REVIEWS: Review[] = [
  { id: 1, author: "Tunde O.", rating: 5, comment: "One of the most peaceful hotels I've stayed in Ilorin. The garden is a real gem.", date: "February 2024" },
  { id: 2, author: "Sarah W.", rating: 4.5, comment: "Clean rooms, friendly staff, and the breakfast was actually fresh. Highly recommended.", date: "January 2024" },
  { id: 3, author: "Musa A.", rating: 5, comment: "Quiet, safe, and professional. The Wi-Fi worked perfectly for my business meetings.", date: "March 2024" },
  { id: 4, author: "Janet P.", rating: 4, comment: "Lovely atmosphere. A bit further from downtown but worth the extra drive for the peace.", date: "February 2024" }
];

const Reviews: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="text-ramat-gold font-semibold uppercase tracking-[0.2em] text-sm">Testimonials</span>
          <h1 className="text-5xl md:text-6xl font-bold serif text-ramat-green">What our guests say</h1>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <div className="flex">
               {[1,2,3,4].map(i => <Icons.Star key={i} filled />)}
               <div className="relative">
                 <Icons.Star />
                 <div className="absolute inset-0 overflow-hidden w-1/2"><Icons.Star filled /></div>
               </div>
            </div>
            <span className="text-2xl font-bold serif text-ramat-green">{CONTACT_INFO.rating} Average Guest Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-10 bg-ramat-cream rounded-2xl border border-ramat-gold/10 hover:shadow-xl transition-shadow relative">
              <div className="absolute top-6 right-10 text-ramat-gold/20">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor">
                  <path d="M15 0C6.71573 0 0 6.71573 0 15V40H20V15H10C10 12.2386 12.2386 10 15 10V0ZM50 0C41.7157 0 35 6.71573 35 15V40H55V15H45C45 12.2386 47.2386 10 50 10V0Z" />
                </svg>
              </div>
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icons.Star key={i} filled={i < Math.floor(review.rating)} />
                ))}
              </div>
              <p className="text-xl text-gray-700 italic leading-relaxed mb-8">"{review.comment}"</p>
              <div className="flex justify-between items-center border-t border-ramat-gold/10 pt-6">
                <span className="font-bold serif text-ramat-green">{review.author}</span>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-ramat-green rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold serif mb-4">Have you stayed with us?</h3>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">We value every guest's feedback. Please share your experience with us on Google.</p>
          <button className="px-10 py-4 bg-ramat-gold hover:bg-white hover:text-ramat-green transition-all font-bold uppercase tracking-widest rounded">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

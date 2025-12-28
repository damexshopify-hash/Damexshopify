
import React, { useState } from 'react';
import { Icons, CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 bg-ramat-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-ramat-gold font-semibold uppercase tracking-[0.2em] text-sm">Get in touch</span>
          <h1 className="text-5xl md:text-6xl font-bold serif text-ramat-green">We're here for you</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold serif text-ramat-green border-b border-ramat-gold/20 pb-4">Contact Info</h3>
              <div className="flex items-start space-x-4">
                <div className="text-ramat-gold mt-1"><Icons.MapPin /></div>
                <div>
                  <h4 className="font-bold text-ramat-green">Address</h4>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-ramat-gold mt-1"><Icons.Phone /></div>
                <div>
                  <h4 className="font-bold text-ramat-green">Phone</h4>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-500 text-sm hover:text-ramat-gold transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15767.145695034635!2d4.5800!3d8.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364c63283f5e55%3A0x8687258b6883f3f5!2sSobi%20Rd%2C%20Ilorin!5e0!3m2!1sen!2sng!4v1612345678901!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center space-y-6 animate-pulse">
                <div className="w-20 h-20 bg-ramat-green rounded-full flex items-center justify-center text-white">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h2 className="text-3xl font-bold serif text-ramat-green">Message Sent!</h2>
                <p className="text-gray-500">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-ramat-green">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-ramat-cream border border-gray-100 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-ramat-gold/50 transition-all"
                      placeholder="Your full name"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-ramat-green">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-ramat-cream border border-gray-100 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-ramat-gold/50 transition-all"
                      placeholder="Your email address"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-ramat-green">Message</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full bg-ramat-cream border border-gray-100 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-ramat-gold/50 transition-all"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-ramat-green text-white font-bold uppercase tracking-widest rounded-lg hover:bg-ramat-gold transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

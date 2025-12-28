
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const Rooms = React.lazy(() => import('./pages/Rooms'));
const Garden = React.lazy(() => import('./pages/Garden'));
const Reviews = React.lazy(() => import('./pages/Reviews'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-ramat-cream">
    <div className="w-16 h-16 border-4 border-ramat-gold/30 border-t-ramat-green rounded-full animate-spin"></div>
    <h2 className="mt-8 serif text-2xl font-bold text-ramat-green animate-pulse">RAMAT HOTEL</h2>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/garden" element={<Garden />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        
        {/* Floating Call Button for mobile */}
        <a 
          href="tel:09029435317" 
          className="md:hidden fixed bottom-6 right-6 z-50 bg-ramat-green text-white p-4 rounded-full shadow-2xl border border-ramat-gold/30 animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>
    </Router>
  );
};

export default App;

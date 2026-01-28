import React, { useState, useEffect } from 'react';
import weddingmc from '../assets/weddingmc.jpg';
import dj from '../assets/dj.jpg';
import danceshow from '../assets/danceshow.jpg';
import livemusic from '../assets/livemusic.jpg';
import photobooth from '../assets/photobooth.jpg';
import ledeffects from '../assets/ledeffects.jpg';
import kidsentertainment from '../assets/kidsentertainment.jpg';

// Unsplash fallback images
const entertainmentbanner1 = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const entertainmentbanner2 = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80";

const Entertainment = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    {
      id: 1,
      image: entertainmentbanner1,
      title: "Entertainment Services",
      subtitle: "Make Your Event Unforgettable"
    },
    {
      id: 2,
      image: entertainmentbanner2,
      title: "Premium Entertainment",
      subtitle: "Create Magical Experiences"
    }
  ];

  // Auto change banner every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  // Manual banner navigation
  const goToBanner = (index) => {
    setCurrentBannerIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Banner Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Banner Images */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBannerIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            
            {/* Light gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
          </div>
        ))}

        {/* Banner Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBannerIndex
                  ? 'bg-yellow-500 w-8'
                  : 'bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous/Next Buttons */}
        <button
          onClick={() => goToBanner(currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
          aria-label="Previous banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => goToBanner(currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all duration-300"
          aria-label="Next banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
          Our Entertainment Categories
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Wedding MCs */}
          <div className="flex flex-col items-center">
            <a href="/entertainment/wedding-mc" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={weddingmc}
                    alt="Wedding MCs" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Wedding MCs</h3>
          </div>

          {/* DJ & Remix */}
          <div className="flex flex-col items-center">
            <a href="/entertainment/dj-remix" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={dj}
                    alt="DJ & Remix" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">DJ & Remix</h3>
          </div>

          {/* Dance Shows */}
          <div className="flex flex-col items-center">
            <a href="/entertainment/dance-shows" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={danceshow}
                    alt="Dance Shows" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Dance Shows</h3>
          </div>

          {/* Live Music */}
          <div className="flex flex-col items-center">
            <a href="/entertainment/live-music" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={livemusic}
                    alt="Live Music" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Live Music</h3>
          </div>

          {/* Photo Booths */}
          <div className="flex flex-col items-center">
            <a href="/entertainment/photo-booths" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={photobooth}
                    alt="Photo Booths" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Photo Booths</h3>
          </div>

          {/* LED Effects */}
          <div className="flex flex-col items-center">
            <a href="/entertainment/led-effects" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={ledeffects}
                    alt="LED Effects" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">LED Effects</h3>
          </div>

          {/* Celebrity Acts
          <div className="flex flex-col items-center">
            <a href="/entertainment/celebrity-acts" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={celebrityacts}
                    alt="Celebrity Acts" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Celebrity Acts</h3>
          </div>*/}

          {/* Kids Entertainment */}
          <div className="flex flex-col items-center">
            <a href="/entertainment/kids-entertainment" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={kidsentertainment}
                    alt="Kids Entertainment" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Kids Entertainment</h3>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Why Choose Our Entertainment Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Professional Artists</h3>
            <p className="text-gray-600 text-center">Talented and experienced entertainers</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Latest Equipment</h3>
            <p className="text-gray-600 text-center">State-of-the-art sound and lighting systems</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Customized Packages</h3>
            <p className="text-gray-600 text-center">Tailored entertainment solutions for your event</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Memorable Experience</h3>
            <p className="text-gray-600 text-center">Creating unforgettable moments for your guests</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entertainment;
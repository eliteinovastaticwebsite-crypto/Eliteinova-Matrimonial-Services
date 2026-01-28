import React, { useState, useEffect } from 'react';
import mandapdecor from '../assets/mandapdecor.jpg';
import stagedecor from '../assets/stagedecor.jpg';
import weddingdecor from '../assets/weddingdecor.jpg';
import receptiondecor from '../assets/receptiondecor.jpg';
import eventdecor from '../assets/eventdecor.jpg';
import floraldecor from '../assets/floraldecor.jpg';
import themedecor from '../assets/themedecor.jpg';
import lightingdecor from '../assets/lightingdecor.jpg';
// Unsplash fallback images
const decorationbanner1 = "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const decorationbanner2 = "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80";

const Decoration = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    {
      id: 1,
      image: decorationbanner1,
      title: "Wedding Decoration",
      subtitle: "Transform Your Dreams into Reality"
    },
    {
      id: 2,
      image: decorationbanner2,
      title: "Exquisite Decoration Services",
      subtitle: "Create Magical Moments"
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
          Our Decoration Categories
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Wedding Decoration */}
          <div className="flex flex-col items-center">
            <a href="/decoration/wedding-decoration" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={weddingdecor}
                    alt="Wedding Decoration" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Wedding Decoration</h3>
          </div>

          {/* Stage Decoration */}
          <div className="flex flex-col items-center">
            <a href="/decoration/stage-decoration" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={stagedecor}
                    alt="Stage Decoration" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Stage Decoration</h3>
          </div>

          {/* Mandap Decoration */}
          <div className="flex flex-col items-center">
            <a href="/decoration/mandap-decoration" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={mandapdecor}
                    alt="Mandap Decoration" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Mandap Decoration</h3>
          </div>

          {/* Reception Decoration */}
          <div className="flex flex-col items-center">
            <a href="/decoration/reception-decoration" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={receptiondecor}
                    alt="Reception Decoration" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Reception Decoration</h3>
          </div>

          {/* Event Decoration */}
          <div className="flex flex-col items-center">
            <a href="/decoration/event-decoration" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={eventdecor}
                    alt="Event Decoration" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Event Decoration</h3>
          </div>

          {/* Floral Decoration */}
          <div className="flex flex-col items-center">
            <a href="/decoration/floral-decoration" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={floraldecor}
                    alt="Floral Decoration" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Floral Decoration</h3>
          </div>

          {/* Theme-Based Decoration */}
          <div className="flex flex-col items-center">
            <a href="/decoration/theme-decoration" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={themedecor}
                    alt="Theme-Based Decoration" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Theme-Based Decoration</h3>
          </div>

          {/* Lighting & Ambience Decoration */}
          <div className="flex flex-col items-center">
            <a href="/decoration/lighting-decoration" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={lightingdecor}
                    alt="Lighting & Ambience Decoration" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Lighting & Ambience Decoration</h3>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Why Choose Our Decoration Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Creative Designs</h3>
            <p className="text-gray-600 text-center">Unique and innovative decoration concepts</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Timely Setup</h3>
            <p className="text-gray-600 text-center">Professional and punctual service delivery</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Expert Team</h3>
            <p className="text-gray-600 text-center">Experienced decorators and designers</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Premium Quality</h3>
            <p className="text-gray-600 text-center">High-quality materials and craftsmanship</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Decoration;
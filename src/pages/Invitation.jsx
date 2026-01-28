import React, { useState, useEffect } from 'react';
import digitalinvites from '../assets/digitalinvites.jpg';
import luxurycards from '../assets/luxurycards.jpg';
import printedcards from '../assets/printedcards.jpg';
import customdesigns from '../assets/customdesigns.jpg';
import returngifts from '../assets/returngifts.jpg';
import gifthampers from '../assets/gifthampers.jpg';
import ecogifts from '../assets/ecogifts.jpg';
import luxuryhampers from '../assets/luxuryhampers.jpg';

// Unsplash fallback images
const invitationbanner1 = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const invitationbanner2 = "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80";


const Invitation = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    {
      id: 1,
      image: invitationbanner1,
      title: "Invitation & Gifts",
      subtitle: "Make Your First Impression Count"
    },
    {
      id: 2,
      image: invitationbanner2,
      title: "Exquisite Invitations",
      subtitle: "Set the Tone for Your Special Day"
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
          Our Invitation & Gift Categories
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Digital Invites */}
          <div className="flex flex-col items-center">
            <a href="/invitation/digital-invites" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={digitalinvites}
                    alt="Digital Invites" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Digital Invites</h3>
          </div>

          {/* Luxury Cards */}
          <div className="flex flex-col items-center">
            <a href="/invitation/luxury-cards" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={luxurycards}
                    alt="Luxury Cards" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Luxury Cards</h3>
          </div>

          {/* Video Invites */}
          <div className="flex flex-col items-center">
            <a href="/invitation/video-invites" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={printedcards}
                    alt="Video Invites" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Printed Cards</h3>
          </div>

          {/* Custom Designs */}
          <div className="flex flex-col items-center">
            <a href="/invitation/custom-designs" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={customdesigns}
                    alt="Custom Designs" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Custom Designs</h3>
          </div>

          {/* Return Gifts */}
          <div className="flex flex-col items-center">
            <a href="/invitation/return-gifts" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={returngifts}
                    alt="Return Gifts" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Return Gifts</h3>
          </div>

          {/* Gift Hampers */}
          <div className="flex flex-col items-center">
            <a href="/invitation/gift-hampers" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={gifthampers}
                    alt="Gift Hampers" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Gift Hampers</h3>
          </div>

          {/* Eco Gifts */}
          <div className="flex flex-col items-center">
            <a href="/invitation/eco-gifts" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={ecogifts}
                    alt="Eco Gifts" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Eco Gifts</h3>
          </div>

          {/* Premium Favors */}
          <div className="flex flex-col items-center">
            <a href="/invitation/premium-favors" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={luxuryhampers}
                    alt="Premium Favors" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Luxury Hampers</h3>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Why Choose Our Invitation & Gift Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Creative Designs</h3>
            <p className="text-gray-600 text-center">Unique and personalized invitation designs</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Quick Delivery</h3>
            <p className="text-gray-600 text-center">Fast printing and delivery services</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Premium Quality</h3>
            <p className="text-gray-600 text-center">High-quality materials and printing</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Affordable Prices</h3>
            <p className="text-gray-600 text-center">Competitive pricing with no hidden costs</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invitation;
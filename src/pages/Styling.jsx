import React, { useState, useEffect } from 'react';
import bridalmakeup from '../assets/bridalmakeup.jpg';
import groomstyling from '../assets/groomstyling.jpg';
import hairstyling from '../assets/hairstyling.jpg';
import mehendiart from '../assets/mehendiart.jpg';
/*import preweddingstyling from '../assets/bridalmakeup.jpg';
import traditionalstyling from '../assets/bridalmakeup.jpg';
import luxurystyling from '../assets/bridalmakeup.jpg';*/

// Unsplash fallback images
const stylingbanner1 = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const stylingbanner2 = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80";

const Styling = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    {
      id: 1,
      image: stylingbanner1,
      title: "Bridal & Groom Styling",
      subtitle: "Look Your Best on Your Special Day"
    },
    {
      id: 2,
      image: stylingbanner2,
      title: "Professional Styling Services",
      subtitle: "Transform Into Royalty"
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
          Our Styling Categories
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Bridal Makeup */}
          <div className="flex flex-col items-center">
            <a href="/styling/bridal-makeup" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={bridalmakeup}
                    alt="Bridal Makeup" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Bridal Makeup</h3>
          </div>

          {/* Groom Styling */}
          <div className="flex flex-col items-center">
            <a href="/styling/groom-styling" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={groomstyling}
                    alt="Groom Styling" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Groom Styling</h3>
          </div>

          {/* Hair Styling */}
          <div className="flex flex-col items-center">
            <a href="/styling/hair-styling" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={hairstyling}
                    alt="Hair Styling" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Hair Styling</h3>
          </div>

          {/* Mehendi Art */}
          <div className="flex flex-col items-center">
            <a href="/styling/mehendi-art" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={mehendiart}
                    alt="Mehendi Art" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Mehendi Art</h3>
          </div>

          {/* Pre-Wedding Styling 
          <div className="flex flex-col items-center">
            <a href="/styling/pre-wedding-styling" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={preweddingstyling}
                    alt="Pre-Wedding Styling" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Pre-Wedding Styling</h3>
          </div>*/}

          {/* Traditional Styling 
          <div className="flex flex-col items-center">
            <a href="/styling/traditional-styling" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={traditionalstyling}
                    alt="Traditional Styling" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Traditional Styling</h3>
          </div>*/}

          {/* Luxury Styling 
          <div className="flex flex-col items-center">
            <a href="/styling/luxury-styling" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={luxurystyling}
                    alt="Luxury Styling" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Luxury Styling</h3>
          </div>*/}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Why Choose Our Styling Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Expert Stylists</h3>
            <p className="text-gray-600 text-center">Certified and experienced beauty professionals</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Premium Products</h3>
            <p className="text-gray-600 text-center">High-quality branded cosmetics and products</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Personalized Look</h3>
            <p className="text-gray-600 text-center">Customized styling to match your vision</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">On-Time Service</h3>
            <p className="text-gray-600 text-center">Punctual and professional service delivery</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Styling;
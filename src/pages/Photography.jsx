import React, { useState, useEffect } from 'react';
import album from '../assets/album.jpg';
import kids from '../assets/kids.jpg';
import videography from '../assets/videography.jpg';
import event from '../assets/event.jpg';
import weddingphoto from '../assets/weddingphoto.jpg';
import fashion from '../assets/fashion.jpg';
import commercial from '../assets/commercial.jpg';
import religious from '../assets/religious.jpg';
import photobanner1 from '../assets/photobanner1.png';
import photobanner2 from '../assets/photobanner2.png';

const Photography = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    {
      id: 1,
      image: photobanner1,
      title: "Photography Services",
      subtitle: "Capture Your Special Moments"
    },
    {
      id: 2,
      image: photobanner2,
      title: "Professional Photography",
      subtitle: "Timeless Memories Forever"
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
          Our Photography Categories
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Wedding Photography */}
          <div className="flex flex-col items-center">
            <a href="/photography/wedding-photography" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={weddingphoto}
                    alt="Wedding Photography" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Wedding Photography</h3>
          </div>

          {/* Wedding Videography */}
          <div className="flex flex-col items-center">
            <a href="/photography/wedding-videography" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={event}
                    alt="Wedding Videography" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg"> Event Photography
</h3>
          </div>

          {/* Drone Shoot */}
          <div className="flex flex-col items-center">
            <a href="/photography/drone-shoot" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={videography}
                    alt="Drone Shoot" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Videography
</h3>
          </div>

          {/* Pre Wedding Shoot */}
          <div className="flex flex-col items-center">
            <a href="/photography/live-streaming" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={album}
                    alt="Live Wedding Streaming" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Editing & Album Services

</h3>
          </div>

          {/* Post Wedding Shoot */}
          <div className="flex flex-col items-center">
            <a href="/photography/post-wedding-shoot" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={fashion}
                    alt="Post Wedding Shoot" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Fashion & Lifestyle</h3>
          </div>

          {/* Album Designing */}
          <div className="flex flex-col items-center">
            <a href="/photography/album-designing" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={commercial}
                    alt="Album Designing" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Commercial Photography</h3>
          </div>

          {/* Live Wedding Streaming */}
          <div className="flex flex-col items-center">
            <a href="/photography/live-streaming" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={religious}
                    alt="Live Wedding Streaming" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Religious & Cultural Photography
</h3>
          </div>
          <div className="flex flex-col items-center">
            <a href="/photography/live-streaming" className="block group">
              <div className="w-44 h-44 rounded-full border-[5px] border-amber-800 overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={kids}
                    alt="Live Wedding Streaming" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
            <h3 className="mt-4 text-center font-semibold text-gray-800 text-lg">Kids & Special Shoots
</h3>
          </div>

        </div>

        
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
          Why Choose Our Photography Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Professional Equipment</h3>
            <p className="text-gray-600 text-center">High-end cameras and latest technology</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Timely Delivery</h3>
            <p className="text-gray-600 text-center">Quick turnaround without compromising quality</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Experienced Team</h3>
            <p className="text-gray-600 text-center">Years of expertise in wedding photography</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg text-red-700 mb-2 text-center">Customer Satisfaction</h3>
            <p className="text-gray-600 text-center">Dedicated to exceeding expectations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photography;
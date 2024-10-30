import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const slides = [
  'https://f.hubspotusercontent40.net/hubfs/6062099/softwaress.png',
  'https://blog.webhopers.com/wp-content/uploads/2022/02/Software-Development-Company-in-India.jpg',
  'https://www.werkvonmorgen.de/hubfs/WVM%20-%20Blog/WvM%20Blog%20Header%20%2B%20Bilder-1-Webdesign%20Trends%202024-1.png#keepProtocol'
];

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative h-[60vh] lg:h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      ))}
      <div className=" relative z-10 flex items-center  h-full bg-black bg-opacity-20">
        <div className='mx-4 md:mx-12 lg:mx-24'>
          
        <h1 className="text-white font-bold z-20  text-4xl ">We Are <span className='text-blue-500'>Connecting</span></h1>
        <h1 className="text-white font-bold z-20  text-4xl ">Through</h1>
        <h1 className="text-white font-bold z-20  text-4xl ">Technology</h1>
        <div className='flex flex-row gap-2 md:gap-4 lg:gap-8'>
          <NavLink to='/contact' className='bg-white rounded-sm shadow text-[#0849A8] px-6 py-2 mt-10 font-semibold text-lg'>Build Us</NavLink>
          <NavLink to='/contact' className='bg-white rounded-sm shadow text-[#0849A8] px-6 py-2 mt-10 font-semibold text-lg'>Join Us</NavLink>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

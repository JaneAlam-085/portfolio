import React, { useState, useEffect } from 'react'

export default function Cirtificate({ images, autoSlide = true, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide || isPaused) return;

    const slideInterval = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [currentIndex, autoSlide, interval, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  return (
     <div id="Education" className='p-10 md:p-24 -mt-20 md:-mt-48 '> 
            <h1 className='flex flex-wrap text-2xl md:my-10 md:text-4xl text-white font-bold'>Cirtificate</h1>
    
            <div className=' flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-3 items-center'>


            <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        {/* {images.map((img)=>{
          return<div>
            <img src={img} />
          </div>
        })} */}
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full object-cover h-64 md:h-96 transition-opacity duration-1000"
        /> 
       
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          &#10094;
        </button>
        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          &#10095;
        </button>
      </div>
      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
    </div>
    <hr className="h-0.5 my-8 mx:4 hover:mx-auto bg-slate-100 border dark:bg-slate-50"></hr>
    </div>
    

  )
}


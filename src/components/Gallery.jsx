import React, { useEffect, useState } from 'react';
import './gallery.css';
import Header from './Header';
import Footer from './Footer';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Gallery() {
  const [counter, setCounter] = useState(0);
  const images = [
    '/imgs/gymimg1.webp',
    '/imgs/gymimg2.webp',
    '/imgs/gymimg3.webp',
    '/imgs/gymimg4.webp',
    '/imgs/gymimg5.webp',
    '/imgs/gymimg6.webp',
    '/imgs/gymimg7.webp'
  ];
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % images.length);
    }, 2000);
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  const goToNextSlide = () => {
    clearInterval(intervalId);
    setCounter((prevCounter) => (prevCounter + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    clearInterval(intervalId);
    setCounter((prevCounter) => (prevCounter - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className='container-fluid bg-dark text-center pt-5'>
        <img className='pt-5 mt-5 img-fluid' src='/imgs/logowhite.webp' alt='Logo'/>
        
        <div className='position-relative container mt-5'>
          <button onClick={goToPreviousSlide} className='btn btn-dark position-absolute top-50 start-0 translate-middle-y'>
            <FaArrowAltCircleLeft size={30} />
          </button>
          
          <div className='card mx-auto' style={{ width: '75%' }}>
            <img className='slider img-fluid' src={images[counter]} alt='Gym' />
          </div>
          
          <button onClick={goToNextSlide} className='btn btn-dark position-absolute top-50 end-0 translate-middle-y'>
            <FaArrowAltCircleRight size={30} />
          </button>
        </div>
      </div>

      <div className='container-fluid'>
        <Footer />
      </div>
    </>
  );
}

export default Gallery;

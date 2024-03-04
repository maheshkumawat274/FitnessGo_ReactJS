import React, { useEffect, useState } from 'react'
import './gallery.css'
import Header from './Header'
import Footer from './Footer'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Gallery() {
  const [counter, setCounter] = useState(0);
  let images = ['/imgs/gymimg1.webp','/imgs/gymimg2.webp','/imgs/gymimg3.webp','/imgs/gymimg4.webp','/imgs/gymimg5.webp','/imgs/gymimg6.webp','/imgs/gymimg7.webp'];
  const [intervalId, setIntervalId] = useState(null);

  const slidebar = () => {
    document.querySelector('.slider').src = images[counter];

      if (counter === images.length - 1) {
        setCounter(0);
      } else {
        setCounter((prevCounter) => prevCounter +1);
      }

    console.log(counter);
  };

  useEffect(() => {
    const id = setInterval(slidebar, 2000);
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [counter]);

  const Rightbtn = () => {
    clearInterval(intervalId);
    slidebar();
  };

  const Leftbtn = () => {
    clearInterval(intervalId);
    document.querySelector('.slider').src = images[counter];
      if (counter === 0) {
        setCounter(images.length - 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }

    console.log(counter);
  };
  return (
    <>
    <div className='container-fluid bg-dark pt-5'>
      <div className='text-center'>
        <img className='pt-5 mt-5 img-fluid'
         src='/imgs/logowhite.webp'></img>
      </div>
         <button onClick={Rightbtn} className='rightbtn p-2 px-3' style={{borderRadius:"50%"}}>{<FaArrowAltCircleRight/>}</button>
         <button onClick={Leftbtn} className='leftbtn p-2 px-3' style={{borderRadius:"50%"}}><FaArrowAltCircleLeft/></button>
        
       <div className='container'>
        <div className='container p-5 d-flex justify-content-center'>
          <div className='card w-75' style={{position:'static'}}>
          <img className='slider img-fluid' src=''></img>
          </div>
        </div>
        
       </div>
       
    </div>
    <div className='contaier-fluid'>
      <Footer/>
    </div>
    </>
  )
}

export default Gallery
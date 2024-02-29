import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import './homepage.css'
import Footer from '../components/Footer'
function HomePage() {
 
  return (
    <>
      <div className='homepage'>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default HomePage
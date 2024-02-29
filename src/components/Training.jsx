import React from 'react'
import Header from './Header'
import './training.css'
import Footer from './Footer'
function Training() {
  return (
    <>
    <div className='traincontent1'>
    </div>
    <div className='container-fluid p-3'>
      <h1 className='text-center fs-3'>Our certified personal trainers create the perfect programs to help<br/> you reach your goals, designed 100% around you.</h1>
    </div>
    <div className='container'><hr/></div>
    <div className='traincontent2 container-fluid bg-light p-3'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
          <img src='https://static.wixstatic.com/media/d3fada_4677300bb3cb44f8b1b6a32c2114c988~mv2.jpg/v1/fill/w_421,h_750,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d3fada_4677300bb3cb44f8b1b6a32c2114c988~mv2.jpg'></img>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
          <h1 className='fw-bold' style={{fontSize:"70px"}}>It's   <img className='img-fluid' src='https://static.wixstatic.com/media/d3fada_e92277911ce041ebb03f6232d64274a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black%20green%20code%20is%20rg%20%2300fb00%20%20cmyk%20c64%20m0%20y100%20k0%20-%20Copy.png'/>    TIME.</h1>
          <p className='fs-4'>Here at FITNESS nGO, we focus on bringing you the most powerful workouts to meet your needs: our toolbox includes weighted battle ropes, kettlebells, TRX® suspension straps, Turf Zone, Med Balls, and the list goes on.</p>
          <p className='fs-4'>It may sound like a lot, but this world-class functional training equipment helps our trainers provide you with an array of High Intensity Interval Training (HIIT) workouts.</p>
          <p className='fs-4'>Our FITNESS nGO locations offer PowerPlate, an all-encompassing fitness program that includes revolutionary vibration technology. Come check it out for yourself!</p>
          <button className='btn'>Sign Up for Personal Training</button>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <Footer/>
    </div>
    </>
  )
}

export default Training
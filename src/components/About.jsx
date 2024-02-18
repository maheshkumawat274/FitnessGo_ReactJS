import React from 'react'
import Header from './Header'
import './about.css'
import Footer from './Footer'
function About() {
  return (
    <>
     <Header/>
     <div className='aboutcontent container-fluid text-light d-flex justify-content-center align-items-center' style={{backgroundColor:"black"}}>
      <h1 className='pt-5 fw-bold'>
      Welcome to the    <img src='https://static.wixstatic.com/media/d3fada_e92277911ce041ebb03f6232d64274a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black%20green%20code%20is%20rg%20%2300fb00%20%20cmyk%20c64%20m0%20y100%20k0%20-%20Copy.png'/>      Experience
      </h1>
     </div>
     <div className='contaier-fluid'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img className='img-fluid' src='https://static.wixstatic.com/media/2820f4_560d7e69d77f4be7b14469bc5f5db228~mv2.png/v1/fill/w_956,h_638,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/sublimated-sports-bra-mockup-of-a-woman-with-short-hair-stretching-her-leg-on-a-yoga-mat-m.png'></img>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
          <h1 className='fw-bold pt-5'>Our Mission & Concept</h1>
          <p className='fs-4 pt-3'>Our concept is simple. Provide our local communities with the most motivating fitness environment possible.  As a valued member, you will receive the cleanest facilities with the friendliest staff guaranteed.  No matter your gym experience or level of fitness, you will find our atmosphere welcoming and inspiring. Our mission is to ultimately help you achieve your end goal. </p>
        </div>
      </div>
     </div>
     <div className='container-fluid'>
      <Footer/>
     </div>
    </>
  )
}

export default About
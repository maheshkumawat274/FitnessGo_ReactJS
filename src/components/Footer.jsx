import React from 'react'
import './footer.css'
function Footer() {
  return (
    <>
     <div className='container-fluid p-5' style={{backgroundColor:"white"}}>
     <div className='container-fluid d-flex justify-content-around align-items-center'>
          <img style={{height:"70px",width:'150px'}} className='img-fluid' src='https://static.wixstatic.com/media/d3fada_aab824fb2b7d4473bf4e40b243bc538c~mv2.png/v1/fill/w_243,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black.png'></img>
          <div className=''>
              <img className='img-fluid' src='https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png'></img>
              <img className='img-fluid' src='https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png'></img>
              <img className='img-fluid' src='/imgs/tiktok.png'></img>
          </div>
          </div>
      <div className='container d-flex justify-content-center '>
        <div className='Footeritem'>
            <ul className='list-unstyled d-flex gap-4 mx-5 px-5 pt-5'>
              <li>Careers</li>
              <li>Customer Service</li>
              <li>Corporate Wellness</li>
            </ul>
            <ul className='list-unstyled d-flex gap-4 mx-5 px-5 pt-5'>
              <li>Terms of us</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          <p className=' mx-5 px-5 pt-5 fw-bold'>© 2022-2024 FITNESS nGO</p>
          <p className='mx-5 px-5 pt-2'>250 NW Peacock Blvd, Port Saint Lucie, Florida 34986</p>
          <p className='mx-5 px-5 pt-2'>Hours of Operation  </p>
          <p className='mx-5 px-5 pt-1'>Monday - Friday - 5:00 a.m - 11:00 p.m</p>
          <p className='mx-5 px-5 pt-1'>Saturday & Sunday - 7:00 a.m - 7:00 p.m</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default Footer
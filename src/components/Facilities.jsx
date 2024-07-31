import React from 'react'
import Header from './Header'
import './facilities.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Facilities(x) {
  return (
    <>
    <div className='facicontent container-fluid text-center text-dark'>
      <img src='https://static.wixstatic.com/media/d3fada_ce4bbb92f2be49b8a0ba8d0d16a13b1e~mv2.jpg/v1/fill/w_1899,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d3fada_ce4bbb92f2be49b8a0ba8d0d16a13b1e~mv2.jpg'></img>
     
    </div>
    <div className='facibtn contaier-fluid text-center p-5'>
      <h1>$2 Million-Dollars in Renovations!</h1>
      <p>Come in and experience the best gym in the Port Saint Lucie area.</p>
      <Link to='/join'><button className='btn btn-primary w-50'>Join Now</button></Link>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='pt-5 fw-bold'>Training Floor</h1>
          <p className='pt-5 fs-5'>Our fully renovated 25,000 sq.ft. gym provides you all the space you need to enjoy your pursuit of a healthier and happier you! We offer all the brand names from: MATRIX, NAUTILUS, HAMMER, STAIRMASTER, LIFE FITNESS, TORQUE, and more. </p>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
          <img className='img-fluid' src='https://static.wixstatic.com/media/2820f4_2c20dde9e0934b58b2fb248e030fef77~mv2.jpg/v1/fill/w_615,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-1956.jpg'></img>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
          <img className='img-fluid' src='https://static.wixstatic.com/media/2820f4_581305c147b843c2837736c74e969709~mv2.jpg/v1/fill/w_594,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-1953.jpg'></img>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='pt-5 fw-bold'>Cardio</h1>
          <p className='pt-5 fs-5'>Get your heart and lungs working with our brand new cardio.  All of them have personal fans to keep you cool and dozens of 72" 4k televisions for your entertainment.  We have them all: Treadmills, stairmills, upright/recumbent/spin bikes, rowers, ellipticals. </p>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='pt-5 fw-bold'>Strength</h1>
          <p className='pt-5 fs-5'>Find everything you need to sculpt, tone, firm, and add metabolic boosting muscle to your body.  Literally tons of free-weights, plate-loaded, and selectorized machines available. No muscle group will go underworked. </p>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
          <img className='img-fluid' src='https://static.wixstatic.com/media/2820f4_7aa3ebf41c784e988c4f5e3618d0651e~mv2.jpg/v1/fill/w_615,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-1959.jpg'></img>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
          <img className='img-fluid' src='https://static.wixstatic.com/media/2820f4_581305c147b843c2837736c74e969709~mv2.jpg/v1/fill/w_594,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-1953.jpg'></img>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='pt-5 fw-bold'>Turf Training Zone</h1>
          <p className='pt-5 fs-5'>Large zone dedicated to training like an athlete. Complete with all the functional and cross training equipment and accessories. Push your way to stronger glutes with the latest sled from TORQUE! </p>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='pt-5 fw-bold'>Recovery</h1>
          <p className='pt-5 fs-5'>Our ultimate tier membership gives you the best recovery equipment in Port Saint Lucie. The hydromassage and Cryo chairs alone are worth the membership.  </p>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
          <img className='img-fluid' src='https://static.wixstatic.com/media/2820f4_ce2840b2f07f41e7853495a829116ce8~mv2.jpg/v1/fill/w_615,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-1957.jpg'></img>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <Footer/>
    </div>
    </>
  )
}

export default Facilities
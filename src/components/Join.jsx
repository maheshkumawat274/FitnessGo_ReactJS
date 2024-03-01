import React from 'react'
import './join.css'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Join({joincotent,common,onSidebarToggle}) {
  console.log({joincotent})
  return (
    <>
     <div className='joincontent'></div>
     <div className='container-fluid text-center text-light p-3' style={{backgroundColor:"black"}}>
      <h1>MEMBERSHIP OPTIONS</h1>
      <h1>STARTING AT $19.99 MONTHLY</h1>
      <h1>NO CONTRACTS</h1>
      <h1>100% MONEY BACK GUARANTEE</h1>
     </div>
     <div className='container-fluid text-light p-5' style={{backgroundColor:"rgb(201,201,201)"}}>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className='joincontent1 container px-5 p-5'>
            <h1 className='fw-bold'>ULTIMATE <img src='https://static.wixstatic.com/media/d3fada_e92277911ce041ebb03f6232d64274a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black%20green%20code%20is%20rg%20%2300fb00%20%20cmyk%20c64%20m0%20y100%20k0%20-%20Copy.png'/></h1>
            <ul className='list-unstyled'>
              {joincotent.map(function(item){
                return  <>
                <li className=' d-flex justify-content-between'>
                <h4>{item.item}</h4>
                <img style={{height:"50px"}} src={common}></img>
              </li></>
              })}
            </ul>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <div className='joincontent2 container px-5 p-5 '>
            <h1 className='fw-bold'>365 <img src='https://static.wixstatic.com/media/d3fada_e92277911ce041ebb03f6232d64274a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black%20green%20code%20is%20rg%20%2300fb00%20%20cmyk%20c64%20m0%20y100%20k0%20-%20Copy.png'/></h1>
            <ul className='list-unstyled'>
              {joincotent.map(function(item){
                return  <>
                <li className=' d-flex justify-content-between'>
                <h4>{item.item}</h4>
                <img style={{height:"50px"}} src={common}></img>
              </li></>
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='jointext container-fluid pt-3 text-dark mt-1 text-center'>
        <p>Weekend Only membership not shown -- Minimum age to become a member is 16 years.</p>
        <h1 className='fs-3 fw-bold'>Click below to schedule your gym tour. We will respond promptly.</h1>
        <Link to='/register'><button className='btn btn-light px-5'>CLICK HERE</button></Link>
      </div>
     </div>
     <div className='container-fluid'>
      <Footer/>
     </div>
    </>
  )
}

export default Join
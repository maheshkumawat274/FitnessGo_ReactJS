import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate(); 
 
  return (
    
    <>
     <div className='container-fluid' style={{backgroundColor:"rgb(255, 255, 255)",position:"fixed"}}>
       
       <div className='row'>
        <div className='HeaderSection1 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center' >
          <img src='/imgs/logo.webp'></img>
        </div>
        <div className='HeaderSection2 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
          <ul className='list-unstyled d-flex mt-3'>
            <li> <a onClick={()=>navigate('/')}>HOME</a></li>
            <li><a onClick={()=>navigate('/training')}>TRAINING</a></li>
            <li><a onClick={()=>navigate('/facilities')}>FACILITIES</a></li>
            <li><a onClick={()=>navigate('/join')}>JOIN</a></li>
            <li><a onClick={()=>navigate('/about')}>ABOUT</a></li>
            <li><a onClick={()=>navigate('/gallery')}>GALLERY</a></li>
            
          </ul>
        </div>
        <div className='HeaderSection3 col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center' >
              <img src='https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png'></img>
              <img src='https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png'></img>
              <img src='/imgs/tiktok.png'></img>
           <Link to='/join'><button className='btn btn-primary'>Join Now</button></Link>
           <Link to='/register'><button className='btn btn-primary'>FREE PASS</button></Link>
        </div>
       </div>
     </div>
    </>
  )
}
export default Header
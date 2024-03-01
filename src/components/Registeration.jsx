import React, { useState } from 'react'
import './register.css'
import axios from 'axios'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Registeration() {

  
  const[firstname,setfirstnamevalue]=useState('')
  const[lastname,setlastnamevalue]=useState('')
  const[email,setemailvalue]=useState('')
  const[number,setnumbervalue]=useState('')
  const[radiovalue,setradiovalue]=useState('')

  const FnameHandler=(event)=>{
    setfirstnamevalue(event.target.value)
  }
  const LnameHandler=(event)=>{
    setlastnamevalue(event.target.value)
  }
  const EmailHandler=(event)=>{
    setemailvalue(event.target.value)
  }
  const NumberHandler=(event)=>{
    setnumbervalue(event.target.value)
  }
  const RadioHandler=(event)=>{
      setradiovalue(event.target.value)
  }
  const Formdetail=(e)=>{
    e.preventDefault();
    const getUserDetails = {FirstName:firstname,LastName:lastname,Email:email,MobileNumber:number,YourGoal:radiovalue}
    return axios.post('http://localhost:8080/auth/storedata',getUserDetails).then((response)=>{
      console.log(getUserDetails)
    })
  }
  return (
    <>
     <div className='container-fluid'>
      <div className='registercontent container-fluid bg-light d-flex justify-content-center text-white'>
        <div className='registermain bg-dark p-5'>
        <div className='text-center'>
          <img className='img-fluid' src='/imgs/register.webp'></img>
        </div>
                <div className='registertext1'>COMPLETE THIS FORM AND A MEMBERSHIP</div>
                <div className='registertext2'>ADVISOR WILL CONTACT YOU FOR YOUR FREE DAY PASS!</div>
                <div className='registertext3'>MUST BE 18+ AND LOCAL RESIDENT.BY APPOINTMENT ONLY</div><br/>
                <span>First name</span>
                
                <input className='form-control' type='text' onChange={FnameHandler}></input>
                <spna>Last name</spna>
                <input className='form-control' type='text' onChange={LnameHandler}></input>
                <span>Email</span>
                <input className='form-control' type='email' onChange={EmailHandler}></input>
                <span>Cell Phone</span>
                <input className='form-control' type='text' onChange={NumberHandler}></input><br/>
                <span>What's your current goal?</span><br/>
                <input type='radio' name='radio' value='MAINTAIN WEIGHT' onChange={RadioHandler}></input>MAINTAIN WEIGHT <br/>
                <input type='radio' name='radio' value='LOSE WEIGHT' onChange={RadioHandler}></input>LOSE WEIGHT <br/>
                <input type='radio' name='radio' value='GAIN WEIGHT' onChange={RadioHandler}></input>GAIN WEIGHT<br/><br/>
                <button className='submitbtn'  onClick={Formdetail}><Link to='/userlist'style={{textDecoration:"none",color:"white"}}>Submit</Link></button>
        </div>
      </div>
     </div>
     <Footer/>
    </>
  )
}

export default Registeration
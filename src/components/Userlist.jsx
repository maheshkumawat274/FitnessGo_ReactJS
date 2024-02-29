import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { RiDeleteBinLine } from "react-icons/ri";
function Userlist() {
  const[Userdata,setUserdata]=useState([]);

useEffect(()=>{
  getUserdata()
},[])
  const getUserdata=()=>{
    return axios.get('http://localhost:8080/auth/userlist',).then((response)=>{
       console.log(response.data.message);
       setUserdata(response.data.message)
    })
  }

  const DeleteHandler=(id)=>{
     return axios.delete('http://localhost:8080/auth/deleteuser/'+id).then((response)=>{
      getUserdata()
     })
  }
  return (
    <>
      <Header/>
       <div className='container-fluid  bg-dark d-flex justify-content-center pt-5'>
        <div className='row mt-5 mb-5'>
          <div className='col-sm-12 mt-5 mb-5'>
          <div className='card mt-5' style={{position:"static"}}>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>MobileNumber</th>
                <th>Your Goal</th>
              </tr>
            </thead>
            <tbody>
              {Userdata.map((item)=><tr>
                <td>{item.id}</td>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.Email}</td>
                <td>{item.MobileNumber}</td>
                <td>{item.YourGoal}</td>
                <td><button className='btn btn-danger' onClick={()=>DeleteHandler(item.id)}>{<RiDeleteBinLine/>}</button></td>
              </tr>)}
            </tbody>
          </table>
        </div>
          </div>
        </div>
       </div>
      <Footer/>
    </>
  )
}

export default Userlist
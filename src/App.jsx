
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Training from './components/Training'
import Facilities from './components/Facilities'
import Join from './components/Join'
import Gallery from './components/Gallery'
import About from './components/About'
import Header from './components/Header'
import Registeration from './components/Registeration'
import { useState } from 'react'
import Userlist from './components/Userlist'

function App() {
  const Joincotent = [
    {
      item:'INCLUDED',
    },
    {
      item:'ANY DAY ACCESS',
    },
    {
      item:'BRING A GUEST FREE*',
    },
    {
      item:'3 TRAINING SESSIONS',
    },
    {
      item:'HEALTHY WORKSHOPS',
    },
    {
      item:'MONTHLY INBODY REPORTS',
    },
    {
      item:'UNLIMITED FITNESS EQUIPMENT USE',
    },
    {
      item:'EXECUTIVE LOCKER ROOM ',
    },
    {
      item:'UNLIMITED DRY SAUNA',
    },
    {
      item:'UNLIMITED TANNING',
    },
    {
      item:'KIDS CLUB-FIRST CHILD FREE'
    },
    {
      item:'UNLIMITED CRYO-THERAPY'
    },
    {
      item:'UNLIMITED HYDRO-MASSAGE'
    },
    {
      item:'UNLIMITED MASSAGE CHAIR'
    }
  ];
  const Common =['https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png'];


  return (
    <>
   
      <BrowserRouter>
      <Header/>
        <Routes>
        
          <Route path='/'element={<HomePage/>}></Route>
          <Route path='/training' element={<Training  />}></Route>
          <Route path='/facilities' element={<Facilities/>}></Route>
          <Route path='/join' element={<Join joincotent = {Joincotent} common = {Common} />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/register'element={<Registeration/>}></Route>
          <Route path='/userlist' element={<Userlist/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

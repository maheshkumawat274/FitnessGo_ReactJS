import React from 'react'
import  './home.css'
import Footer from './Footer'
function Home() {
  return (
    <>
      <div className='homecontent container-fluid p-5 text-light text-center'>
          <h1 className='pt-5 mt-5'>2-FOR-1 <br/>ENROLLMENT</h1>
          <h2>FOR COUPLES AND BEST FRIENDS!</h2>
          <button className='btn btn-danger'>CLICK HERE FOR FREE DAY PASS</button>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='homecontent1 col-lg-6 col-md-12 col-sm-12 px-5 p-5'>
              <h1 className='px-5 hometext1'>EXPERT<br/> PERSONAL <br/>TRAINING</h1>
              <p className='px-5 pt-5 hometext2 '>FITNESS nGO Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins. </p>
              <button className='mx-5 mt-3 btn btn-danger'>FREE PERSONAL TRAINING COUPON</button>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
              <img className='img-fluid' src='https://static.wixstatic.com/media/d3fada_7d1ea558680d42ca9a48052ee00cc62d~mv2.jpg/v1/crop/x_0,y_1734,w_4672,h_4977/fill/w_575,h_613,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00571-Enhanced-NR.jpg'></img>
            </div>
          </div>
        </div>
        <div className='homecontent2'>
          <div className='homeitem'>
            <div className='container'>
              <div className='row text-light'>
                <div className='col-lg-6 col-md-12 col-sm-12 pt-5'>
                  <h1 className='fw-bolder p-5 pt-5' style={{fontSize:"100px"}}>Why <img src='https://static.wixstatic.com/media/d3fada_e92277911ce041ebb03f6232d64274a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black%20green%20code%20is%20rg%20%2300fb00%20%20cmyk%20c64%20m0%20y100%20k0%20-%20Copy.png'/> is?</h1>
                  <h4 className='px-5' style={{fontWeight:"800"}}>Luxury Gym Experience Everyone Can Afford.</h4>
                  <ul className='homecard-content list-unstyled p-5'>
                    <li className='d-flex'>
                      <img src='https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png'></img>
                      <h1 className=' pt-3'>Super Clean</h1>
                    </li>
                    <li className='d-flex'>
                      <img src='https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png'></img>
                      <h1 className=' pt-3'>Friendly Staff</h1>
                    </li>
                    <li className='d-flex'>
                      <img src='https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png'></img>
                      <h1 className=' pt-3'>Workout & Recover</h1>
                    </li>
                    <li className='d-flex'>
                      <img src='https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png'></img>
                      <h1 className=' pt-3'>Motivating Atmosphere</h1>
                    </li>
                    <li className='journey-btn pt-5'>
                      <button className='btn '>Start Your Journey</button>
                    </li>
                  </ul>
                </div>
                <div className='homeimage col-lg-6 col-md-12 col-sm-12'>
                  <img className='img-fluid' src='https://static.wixstatic.com/media/d3fada_7bf960455e3d42c7b2b86d7f557c3fe2~mv2.jpg/v1/fill/w_545,h_826,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%204-10-23%20at%201_edited_edited.jpg'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='homecontent3 container p-3'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <img className='img-fluid' src='https://static.wixstatic.com/media/2820f4_02be0359d8c447fe905ab9a960c9771c~mv2.png/v1/fill/w_790,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sports-bra-mockup-of-a-woman-doing-an-ab-workout-m6507-r-el2.png'></img>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 pt-5'>
                <h1 className='fw-bold pt-4 px-5'>The  <img className='img-fluid' src='https://static.wixstatic.com/media/d3fada_e92277911ce041ebb03f6232d64274a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black%20green%20code%20is%20rg%20%2300fb00%20%20cmyk%20c64%20m0%20y100%20k0%20-%20Copy.png'/>    Experience</h1>
                <p className='fs-5'>Cleanliness & Friendliness, Guaranteed. Fitness nGo carries the latest and greatest cardio and strength training equipment available, exciting nGo classes, Personal Training, Tanning, Cryo-Therapy, Hydromassage, Kids Club, and the greatest atmosphere in the city.</p>
            </div>
          </div>
        </div>
        <div className='homecontent4 container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 pt-5'>
              <h1 className='fw-bold px-5'>THE. BEST.<br/> RECOVERY.</h1>
              <p className='fs-5 px-5 pt-5'>Our ultimate tier membership gives you the best recovery equipment in Port Saint Lucie. The hydromassage and Cryo chairs alone are worth the becoming a member. </p>
              <div className='homecontent4images px-5 pt-5'>
                <img className='img-fluid pt-5 ' src='https://static.wixstatic.com/media/d3fada_2e63da2150964b4c843c86f31f76e1ba~mv2.jpg/v1/fill/w_324,h_489,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%204-10-23%20at%201_edited_edited.jpg'></img>
                <img className='homecontent4images2 pt-5 img-fluid' src='https://static.wixstatic.com/media/d3fada_971f42c8fe9044448aa63ef582063093~mv2.jpg/v1/fill/w_340,h_519,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC02497-2_edited.jpg'></img>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <img className='img-fluid' src='https://static.wixstatic.com/media/2820f4_95c3bfd8268f402493fae44990832814~mv2.jpg/v1/fill/w_679,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-1957_edited.jpg'></img>
              <h1 className='pt-5 mt-5 fw-bold'>TURF ZONE</h1>
              <p className='fs-5 pt-3'>The perfect place to knock out those athletic<br/> workouts, take content, and use the TANK.</p>
            </div>
          </div>
        </div>
        <div className='homecontent5 container p-2'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
              <h1 className='fw-bold'>ATMOSPHERE</h1>
              <p className='fs-5 pt-3'>Our members tell us that they love our gym and the competitive atmosphere to be better. We are a gym for people that are serious about their health and fitness. Our gym is almost at capacity for monthly members because we want to make sure we don't get overcrowded.</p>
              <button className='btn mt-3'>Start Your Journey</button>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <img className='img-fluid' src='https://static.wixstatic.com/media/d3fada_046a1f43542f401da8f264e31adc02b2~mv2.jpg/v1/fill/w_633,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00655_edited.jpg'></img>
            </div>
          </div>
        </div>
        <div className='homecontent6 text-center pt-5'>
            <h1 className='text-light pt-5' style={{fontWeight:"900",fontSize:"100px"}}>JOIN TODAY</h1>
            <button className='homecontentbtn'>FREE PASS</button>
        </div>
        <div className='contaier-fluid'>
          {/* <Map/> */}
        </div>
        
    </>
  )
}

export default Home
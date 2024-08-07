import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div className="container-fluid p-0">

        {/* Header Section */}
        <div className="bg-dark text-light text-center py-5">
          <h1 className="pt-5 mt-5 fw-bold">2-FOR-1 <br />ENROLLMENT</h1>
          <h2 className="fw-bold">FOR COUPLES AND BEST FRIENDS!</h2>
          <Link to="/register">
            <button className="btn btn-danger mt-3">CLICK HERE FOR FREE DAY PASS</button>
          </Link>
        </div>

        {/* Personal Training Section */}
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex align-items-center mb-4">
              <div data-aos="fade-right">
                <h1 className="fw-bold">EXPERT PERSONAL TRAINING</h1>
                <p className="pt-4">
                  FITNESS nGO Gyms has the best personal training program in the Port Saint Lucie area. Our certified personal trainers are experts in their craft. We create the perfect programs to help you reach your goals. Everything begins with our energy and figuring out how to evolve that, then the journey begins.
                </p>
                <button className="btn btn-danger mt-3">FREE PERSONAL TRAINING COUPON</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-4 text-center" data-aos="fade-left">
              <img className="img-fluid rounded" src="https://static.wixstatic.com/media/d3fada_7d1ea558680d42ca9a48052ee00cc62d~mv2.jpg/v1/crop/x_0,y_1734,w_4672,h_4977/fill/w_575,h_613,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00571-Enhanced-NR.jpg" alt="Personal Training" />
            </div>
          </div>
        </div>

        {/* Why Us Section */}
        <div className="bg-dark text-light py-5">
          <div className="container">
            <div className="row text-center text-md-start">
              <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-left">
                <h1 className="fw-bold">Why <img src="https://static.wixstatic.com/media/d3fada_e92277911ce041ebb03f6232d64274a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black%20green%20code%20is%20rg%20%2300fb00%20%20cmyk%20c64%20m0%20y100%20k0%20-%20Copy.png" alt="Logo" /> is?</h1>
                <h4 className="fw-bold">Luxury Gym Experience Everyone Can Afford.</h4>
                <ul className="list-unstyled mt-4">
                  <li className="d-flex align-items-center mb-3">
                    <img src="https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png" alt="Check" className="me-2" />
                    <span>Super Clean</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <img src="https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png" alt="Check" className="me-2" />
                    <span>Friendly Staff</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <img src="https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png" alt="Check" className="me-2" />
                    <span>Workout & Recover</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <img src="https://static.wixstatic.com/media/2820f4_35c945009ca44f619c9eb024eb48865f~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/check%20(1).png" alt="Check" className="me-2" />
                    <span>Motivating Atmosphere</span>
                  </li>
                </ul>
                <button className="btn btn-outline-light mt-4">Start Your Journey</button>
              </div>
              <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-right">
                <img className="img-fluid rounded" src="https://static.wixstatic.com/media/d3fada_7bf960455e3d42c7b2b86d7f557c3fe2~mv2.jpg/v1/fill/w_545,h_826,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image%204-10-23%20at%201_edited_edited.jpg" alt="Gym" />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4" data-aos="zoom-in">
              <img className="img-fluid rounded" src="https://static.wixstatic.com/media/2820f4_02be0359d8c447fe905ab9a960c9771c~mv2.png/v1/fill/w_790,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sports-bra-mockup-of-a-woman-doing-an-ab-workout-m6507-r-el2.png" alt="Experience" />
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-center mb-4">
              <div data-aos="fade-left">
                <h1 className="fw-bold">The <img className="img-fluid" src="https://static.wixstatic.com/media/d3fada_e92277911ce041ebb03f6232d64274a1~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black%20green%20code%20is%20rg%20%2300fb00%20%20cmyk%20c64%20m0%20y100%20k0%20-%20Copy.png" alt="Logo" /> Experience</h1>
                <p className="fs-5 pt-3">Cleanliness & Friendliness, Guaranteed. Fitness nGo carries the latest and greatest cardio and strength training equipment available, exciting nGo classes, Personal Training, Tanning, Cryo-Therapy, Hydromassage, Kids Club, and the greatest atmosphere in the city.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recovery Section */}
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bold text-center mb-4" data-aos="fade-down">THE BEST RECOVERY</h1>
              <p className="fs-5 text-center mb-4" data-aos="fade-down">
                Our ultimate tier membership gives you the best recovery equipment in Port Saint Lucie. The hydromassage and Cryo chairs alone are worth the becoming a member.
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center" data-aos="zoom-in">
                <img
                  className="img-fluid mb-4 mb-md-0"
                  src="https://static.wixstatic.com/media/d3fada_2e63da2150964b4c843c86f31f76e1ba~mv2.jpg/v1/fill/w_324,h_489,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%204-10-23%20at%201_edited_edited.jpg"
                  alt="Recovery 1"
                />
                <img
                  className="img-fluid ms-md-3"
                  src="https://static.wixstatic.com/media/d3fada_971f42c8fe9044448aa63ef582063093~mv2.jpg/v1/fill/w_340,h_519,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC02497-2_edited.jpg"
                  alt="Recovery 2"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center mb-4" >
              <img
                className="img-fluid rounded mb-4" data-aos="zoom-in"
                src="https://static.wixstatic.com/media/2820f4_95c3bfd8268f402493fae44990832814~mv2.jpg/v1/fill/w_679,h_509,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG-1957_edited.jpg"
                alt="Turf Zone"
              />
              <h1 className="pt-5 mt-5 fw-bold" data-aos="fade-down">TURF ZONE</h1>
              <p className="fs-5 pt-3" data-aos="fade-down">The perfect place to knock out those athletic workouts, take content, and use the TANK.</p>
            </div>
          </div>
        </div>

        {/* Atmosphere Section */}
        <div className="bg-dark text-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-down">
                <h1 className="fw-bold">ATMOSPHERE</h1>
                <p className="fs-5 pt-3">Our members tell us that they love our gym and the competitive atmosphere to be better. We are a gym for people that are serious about their health and fitness. Our gym is almost at capacity for monthly members because we want to make sure we don't get overcrowded.</p>
                <button className="btn btn-danger mt-3">Start Your Journey</button>
              </div>
              <div className="col-lg-6 col-md-12 mb-4 text-center" data-aos="zoom-in">
                <img className="img-fluid rounded" src="https://static.wixstatic.com/media/d3fada_046a1f43542f401da8f264e31adc02b2~mv2.jpg/v1/fill/w_633,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00655_edited.jpg" alt="Atmosphere" />
              </div>
            </div>
          </div>
        </div>

        {/* Join Today Section */}
        <div className="bg-dark text-light text-center py-5">
          <h1 className="py-5">JOIN TODAY</h1>
          <Link to="/register">
            <button className="btn btn-danger px-5">FREE PASS</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

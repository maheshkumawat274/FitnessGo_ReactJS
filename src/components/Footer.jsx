import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer bg-white py-5">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-around mb-4">
          <div className="col-12 col-md-auto text-center mb-3 mb-md-0">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/d3fada_aab824fb2b7d4473bf4e40b243bc538c~mv2.png/v1/fill/w_243,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FitnessNGo_black.png"
              alt="FitnessNGo Logo"
              style={{ height: '70px', width: '150px' }}
            />
          </div>
          <div className="col-12 col-md-auto text-center">
            <img
              className="img-fluid mx-2"
              src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"
              alt="Social Icon"
              style={{ maxWidth: '31px' }}
            />
            <img
              className="img-fluid mx-2"
              src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
              alt="Social Icon"
              style={{ maxWidth: '31px' }}
            />
            <img
              className="img-fluid mx-2"
              src="/imgs/tiktok.png"
              alt="TikTok"
              style={{ maxWidth: '31px' }}
            />
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-md-6 col-lg-4">
            <div className='footeritem'>
              <ul className="list-unstyled mb-4">
                <li className="d-inline-block mx-2">
                  <a href="#careers">Careers</a>
                </li>
                <li className="d-inline-block mx-2">
                  <a href="#customer-service">Customer Service</a>
                </li>
                <li className="d-inline-block mx-2">
                  <a href="#corporate-wellness">Corporate Wellness</a>
                </li>
              </ul>
              <ul className="list-unstyled mb-4">
                <li className="d-inline-block mx-2">
                  <a href="#terms">Terms of Use</a>
                </li>
                <li className="d-inline-block mx-2">
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li className="d-inline-block mx-2">
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <p className="fw-bold mb-0">© 2022-2024 FITNESS nGO</p>
            <p className="mb-0">250 NW Peacock Blvd, Port Saint Lucie, Florida 34986</p>
            <p className="mb-0">Hours of Operation</p>
            <p className="mb-0">Monday - Friday: 5:00 a.m - 11:00 p.m</p>
            <p className="mb-0">Saturday & Sunday: 7:00 a.m - 7:00 p.m</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

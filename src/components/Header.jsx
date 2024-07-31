import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { FaBars } from 'react-icons/fa'; // For hamburger icon
import './Header.css'
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src="/imgs/logo.webp" alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/training">TRAINING</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/facilities">FACILITIES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/join">JOIN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">GALLERY</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png" alt="Icon" className="img-fluid mx-1" />
            <img src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png" alt="Icon" className="img-fluid mx-1" />
            <img src="/imgs/tiktok.png" alt="TikTok" className="img-fluid mx-1" />
            <div className="d-flex flex-column flex-lg-row">
              <Link to="/join" className="btn btn-primary mb-2 mb-lg-0 me-lg-2">Join Now</Link>
              <Link to="/register" className="btn btn-primary">FREE PASS</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}
export default Header
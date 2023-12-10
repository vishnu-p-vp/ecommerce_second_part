import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import "./commonstyle.css";

function Menu()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                &nbsp; Fast N Fresh
              </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Fast N Fresh</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">.....</a></li>
                    <li><a className="dropdown-item" href="#">.....</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">.....</a></li>
                  </ul>
                </li>
                
                <li className="nav-item">
                    <Link to="/login"><a className="nav-link" href="#">Logout</a></Link>
                  </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="#">About us</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Admin</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>Cart</a>
                  </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
}

export default Menu;
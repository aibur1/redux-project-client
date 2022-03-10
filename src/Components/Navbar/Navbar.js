import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-mainbg py-3 '>
          <NavLink className="navbar-brand navbar-logo" to="/" exact>
              {/* Comming */}
          </NavLink>

          {/* <button
          className='navbar-toggle'
          type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
              <i i className="fas fa-bars text-white"></i>
          </button> */}

          <div
          className='collapse navbar-collapse'
          id="navbarsSupportedContent"

          >
              |<ul
              className='navbar-nav ml-auto'
              >
                  <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>

                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact>

                     <i
                     className="fas fa-tachometer-alt"
                     ></i>
                     Home
                    </NavLink>
                </li>

                <li className="nav-item ">
                    <NavLink className="nav-link" to="/services" exact>

                     <i
                     className="far fa-clone"
                     ></i>
                   Services
                    </NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/about" exact>

                     <i
                     className="far fa-address-book"
                     ></i>
                   About
                    </NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/contact" exact>

                     <i
                     className="far fa-copy"
                     ></i>
                  Contact
                    </NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/dashboard" exact>

                     <i
                     className="far fa-copy"
                     ></i>
                  Dashboard
                    </NavLink>
                </li>
                {/* <li className="nav-item ">
                    <NavLink className="nav-link" to="/register" exact>

                     <i
                     className="far fa-copy"
                     ></i>
                  Register
                    </NavLink>
                </li> */}
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/login" exact>

                     <i
                     className="far fa-copy"
                     ></i>
                  Login
                    </NavLink>
                </li>

              </ul>
          </div>
      </nav>
    );
};

export default Navbar;
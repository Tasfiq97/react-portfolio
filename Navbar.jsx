import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../Images/logo.jpg"

function Navbar() {
    return (
      <>
      <div className="navBar">

    
      <div className="navi">
          <div className="profile">
             <h1>Portfolio</h1>
              </div>
        
          <div className="nav-bars">
              <ul className="nav-items">
                  <li className="nav-list">
                      <NavLink to="/" exact activeClassName="active">
                      Home

                      </NavLink>
                  </li>
                  <li className="nav-list">
                      <NavLink to="/" exact activeClassName="active">
                      About Me

                      </NavLink>
                  </li>
                  <li className="nav-list">
                      <NavLink to="/" exact activeClassName="active">
                      Projects

                      </NavLink>
                  </li>
                  <li className="nav-list">
                      <NavLink to="/" exact activeClassName="active">
                      Services

                      </NavLink>
                  </li>
                  <li className="nav-list">
                      <NavLink to="/" exact activeClassName="active">
                      Contact Me

                      </NavLink>
                  </li>

              </ul>
          </div>
     
      </div>
  </div>
      </>
    )
}

export default Navbar

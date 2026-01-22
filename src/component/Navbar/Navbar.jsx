import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (<>
     <nav className="navbar navbar-expand-lg bg-dark navbar-dark  fixed-top py-3">
      <div className="container d-flex justify-content-between align-items-center">

        {/* LEFT SIDE - LOGO */}
        <NavLink className="nav-link fs-5" to="" >
          <h2 className="text-white fw-bold m-0 fs-2">Start Framework</h2>
        </NavLink>
        

        {/* TOGGLER FOR MOBILE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* RIGHT SIDE - LINKS */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className="navbar-nav gap-3">

            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/portfilo">
                Portfilo
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/contact">
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  </>

  )
}

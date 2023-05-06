import React from 'react';
import "./Navbar.css"
import { navlink } from "../../data/navbar"
import { Link } from 'react-scroll'
const Navbar = () => {

   return (
      <div className="navbar-container">
         <div className="logo">
            <h3>FIKRIMLN16</h3>
         </div>
         <div className="nav">
            <ul>
               {
                  navlink.map((nav) => {
                     return (
                        <li key={nav._id}>
                           <Link
                              activeClass='active'
                              to={nav.link}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                           >{nav.title}</Link>
                        </li>
                     )
                  })
               }
            </ul>
         </div>
      </div>
   )
}

export default Navbar;
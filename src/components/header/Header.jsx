
// import React from 'react'
// import '../App.jsx';

import './Header.css'

import logo from '../../assets/images-used/icons/logo.png'
import search from '../../assets/images-used/icons/search-icon.png'


const Header = () => {

  return (
    <>
    <div>

       {/* <!-- This is Header Component --> */}

    <header className="header-wrapper">
      <ul className="header-ul">
        <li className="first-icon">
          <a href="#"
            ><img
              src={logo}
              alt="apple logo"
            />
          </a>
        </li>
        <li><a href="#">Mac </a></li>
        <li><a href="#">iPad </a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">Watch</a></li>
        <li><a href="#">TV </a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Support</a></li>
        <li className="second-icon">
          <a href="#"
            ><img
              src={search}
              alt="search-icon"
          /></a>
        </li>

        
        {/* <!-- <li><a href="#"><i className="fa-solid fa-magnifying-glass-minus"></a></li> --> */}
        
      </ul>

    </header>


    </div>
    </>
  )
}

// ReactDom.reader(document.getElementById("root"));

export default Header;



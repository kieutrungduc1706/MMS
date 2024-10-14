import React, { useState } from 'react'
import './Navbar.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const logo = require('../../assets/logo.png')

function TopBar({ data }) {
  // console.log(data)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <img src={logo} style={{padding: 5, width:60, height: 'auto'}}/>
      <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
          {/* <li>
            <NavLink to="/Home">Trang chủ</NavLink>
          </li> */}
          <li>
            <div className="profile">
              <FaUser className="icon"/>
              <NavLink to="/Profile">{data}</NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/">Đăng xuất</NavLink>
          </li>
      </ul>
    </nav>
  );
}

export default TopBar;
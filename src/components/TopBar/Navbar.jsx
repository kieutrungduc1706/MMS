import React, { useContext, useState } from 'react'
import './Navbar.css';
import { Link, NavLink, useHref, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from "../../AuthContext";

const logo = require('../../assets/logo.png')

function TopBar({ data }) {
  console.log("Check data Nabar--->",data)
  const [menuOpen, setMenuOpen] = useState(false)
  const { userData } = useContext(AuthContext);
  return (
    <header style={{width:'100vw'}}>
    <nav>
    <NavLink to="/Home">
        <img src={logo} style={{padding: 5, width:60, height: 'auto'}}/>
        </NavLink>
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
              <NavLink to="/Profile">{userData?.user_fullname}</NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/UserManager">Quản lý người dùng</NavLink>
          </li>
          <li>
            <NavLink to="/">Đăng xuất</NavLink>
          </li>
      </ul>
    </nav>
    </header>
  );
}

export default TopBar;
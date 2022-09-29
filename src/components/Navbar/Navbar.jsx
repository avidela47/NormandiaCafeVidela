import React, { useState } from "react";
import './NavBar.scss'
import Logo from '../Navbar/logo.png'
import { Link } from 'react-router-dom'
import { navItems } from './NavItem'
import { Dropdown } from './Dropdown'
import { useNavigate } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { useLoginContext } from "../../Context/LoginContext";

export function NavbarContainer() {
  const [dropdown, setDropdown] = useState(false);
  let navigate = useNavigate();
  const { user, logout } = useLoginContext()

  const handleDropdown = (e) => {
    e.preventDefault()
    setDropdown(!dropdown);
  }

  const handleOrigen = (item) => {
    let path = item.title.toLowerCase()
    navigate(`/origen/${path}`)
    setDropdown(false);
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img src={Logo} className="logo" alt="React Bootstrap logo" />NORMANDIA
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Origen") {
              return (
                <>
                  <li key={item.id} className={item.cName} onClick={(e) => handleDropdown(e)}>
                    {item.title}
                  </li>
                  {dropdown && <Dropdown handler={handleOrigen} dropdown={dropdown} />}
                </>
              );
            } else {
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            }
          })
          }
        </ul>
        <CartWidget />
        <div className='header-user'>
          <small>Bienvenido: {user.user}</small>
          <button onClick={logout} className='btnlo btn btn-outline-primary btn-sm'>Logout</button>
        </div>
      </nav>
    </>
  );
}



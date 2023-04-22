import React from 'react';
import '../style/style.css';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

function Nav() {
  return (
    <nav className="navbar">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <ul className="menu-items">
        <li>
          <NavLink className="menu-items" to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink className="menu-items" to="/Categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <button
        type="button"
        className="menu-btn"
      >
        <BsFillPersonFill className="menu-btn-icon" />
      </button>
    </nav>
  );
}
export default Nav;

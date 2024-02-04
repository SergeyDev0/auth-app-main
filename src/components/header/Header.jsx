import React from "react"
import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list__item">
            <Link to="/" className="header__nav-list__item--link">Home</Link>
          </li>
          <li className="header__nav-list__item">
            <Link to="/" className="header__nav-list__item--link">About</Link>
          </li>
          <li className="header__nav-list__item">
            <Link to="/" className="header__nav-list__item--link">Blog</Link>
          </li>
          <li className="header__nav-list__item">
            <Link to="/" className="header__nav-list__item--link">Pages</Link>
          </li>
          <li className="header__nav-list__item">
            <Link to="/" className="header__nav-list__item--link">Pages</Link>
          </li>
        </ul>
      </nav>
      <ul className="header__auth-list">
        <li className="header__auth-list__item">
          <button className="header__auth-list__item-button outline">Sign in</button>
        </li>
        <li className="header__auth-list__item">
          <button className="header__auth-list__item-button solid">Register</button>
        </li>
      </ul>
    </header>
  )
};

export default Header;

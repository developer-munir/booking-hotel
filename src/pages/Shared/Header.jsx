import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300 font-serif uppercase">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li tabIndex={0}>
                <Link className="justify-between" to="/">
                  Home
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-base-300">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
              <li>
                <Link to="/signup">SingUp</Link>
              </li>
              <li>
                <span>
                  <FaPhoneAlt className="text-black"></FaPhoneAlt>
                  <Link className="ml-2">260-582-7803</Link>
                </span>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <FaStore></FaStore>
            <span className="ml-2">Booking Hotel</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <Link to="/">
                Home
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-base-300">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
            <li>
              <Link to="/signup">SingUp</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <FaPhoneAlt className="hidden md:block"></FaPhoneAlt>
          <Link className="ml-2 hidden md:block">260-582-7803</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import Container from './Container';

const Navbar = () => {
    return (
      <Container>
        <div className="navbar bg-base-100   ">
          <div className="dropdown md:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a className="btn bg-gradient-to-r from-[#7E45EA] to-[#995CF1] border-0 text-white">
                  <span>+</span>
                  New Ticket
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <a className=" text-xl font-bold">CS — Ticket System</a>
          </div>
          <div className=" hidden md:block">
            <ul className="menu menu-horizontal px-1  text-black font-normal items-center">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a className="btn bg-gradient-to-r from-[#7E45EA] to-[#995CF1] border-0 text-white">
                  <span>+</span>
                  New Ticket
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    );
};

export default Navbar;
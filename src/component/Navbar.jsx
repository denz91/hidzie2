import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logohidzie from "../images/Logohidzie1.png";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  return (
    <>
      <nav
        className={
          scroll
            ? "flex justify-between items-center bg-white text-black backdrop-blur-md fixed top-0 z-50 w-full transition duration-500 ease-in-out"
            : "flex justify-between items-center bg-transparent text-white fixed top-0 z-50 w-full transition duration-500 ease-in-out"
        }
      >
        <div className="flex items-center">
          <Link to="/">
            <span className="cursor-pointer flex items-center font-bold font-Poppins px-[128px]">
              <img className="w-20 items-center" src={Logohidzie} alt="" />
              <div className="px-4 text-3xl">Hidzie</div>
            </span>
          </Link>
          <div className="h-[80px] cursor-pointer justify-between font-Poppins font-bold text-black ml-auto">
            <ul className="flex justify-center text-center mt-7">
              {/* <li className="px-5 ml-auto">Home</li>
              <li className="px-5 ml-auto">About</li>
              <li className="px-5 ml-auto">Contact</li>
              <li className="px-5 ml-auto">Services</li> */}
              <li className="px-5 ml-auto">
                <Link to="/">Home</Link>
              </li>
              <li className="px-5 ml-auto">
                <Link to="/about">About</Link>
              </li>
              <li className="px-5 ml-auto">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="px-5 ml-auto">
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

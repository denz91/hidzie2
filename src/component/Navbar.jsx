import React from "react";
import { Link } from "react-router-dom";
import Logohidzie from "../images/Logohidzie1.png";

function Navbar() {
  return (
    <>
      <nav className="flex bg-gray-400 py-3 h-20">
        <div className="flex items-center">
          <span className="cursor-pointer flex items-center font-bold font-Poppins px-[128px]">
            <img className="w-20 items-center" src={Logohidzie} alt="" />
            <div className="px-4 text-3xl">Hidzie</div>
          </span>
          <div className="cursor-pointer justify-between font-Poppins font-bold text-black ml-auto">
            <ul className="flex justify-between">
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

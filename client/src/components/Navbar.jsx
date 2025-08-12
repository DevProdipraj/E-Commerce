import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [vasible, setVasible] = useState(false);

  return (
    <>
      {/* Sticky Navbar */}
      <div className="container flex items-center justify-between py-5 border-b border-gray-300 sticky top-0 z-50 bg-white">
        {/* brand icon */}
        <div>
          <Link to="/">
            <span className="text-2xl font-semibold uppercase">Shopzy</span>
          </Link>
        </div>

        {/* menu link */}
        <div>
          <nav className="hidden md:block">
            <div className="flex items-center gap-6">
              <NavLink to="/" className="flex flex-col items-center ">
                <p>HOME</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to="/collection" className="flex flex-col items-center ">
                <p>COLLECTION</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to="/about" className="flex flex-col items-center ">
                <p>ABOUT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
              <NavLink to="/contact" className="flex flex-col items-center ">
                <p>CONTACT</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
            </div>
          </nav>
        </div>

        {/* client area */}
        <div className="flex items-center gap-5">
          <Link to="/">
            <IoSearch className="text-3xl text-gray-600" />
          </Link>
          <Link to="/">
            <FaUser className="text-2xl text-gray-600" />
          </Link>
          <Link to="/cart" className="relative">
            <FaCartPlus className="text-2xl text-gray-600" />
            <span className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              0
            </span>
          </Link>
          {/* mobile menu */}
          <div onClick={() => setVasible(true)} className="md:hidden">
            <IoMenu className="text-3xl" />
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div>
        <div
          className={`absolute md:hidden left-0 top-0 h-screen overflow-hidden transition-all duration-300 bg-gray-300 ${
            vasible ? "w-full" : "w-0"
          }`}
        >
          <nav>
            <div className="flex items-start flex-col px-6 gap-6">
              <div
                onClick={() => setVasible(false)}
                className="flex items-center mt-4"
              >
                <IoIosArrowDown className="rotate-90 text-gray-600" />
                <h2>Back</h2>
              </div>
              <NavLink
                onClick={() => setVasible(false)}
                to="/"
                className="border-b border-gray-400 w-full"
              >
                <p>HOME</p>
              </NavLink>
              <NavLink
                onClick={() => setVasible(false)}
                to="/collection"
                className="border-b border-gray-400 w-full"
              >
                <p>COLLECTION</p>
              </NavLink>
              <NavLink
                onClick={() => setVasible(false)}
                to="/about"
                className="border-b border-gray-400 w-full"
              >
                <p>ABOUT</p>
              </NavLink>
              <NavLink
                onClick={() => setVasible(false)}
                to="/contact"
                className="border-b border-gray-400 w-full"
              >
                <p>CONTACT</p>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

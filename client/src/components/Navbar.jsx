import React from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    
    
    
    <div className="container flex items-center justify-between py-5 border-b-1 border-gray-300">
      {/* brand icon  */}
      <div className="">
        <Link to="/">
          <span className="text-2xl font-semibold uppercase">Shopzy</span>
        </Link>
      </div>

      {/* menu link  */}
      <div className="">
        <nav className="hidden md:block">
          <div className=" flex items-center   gap-6">
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

      {/* client area  */}
      <div className="flex items-center gap-5 ">
        <Link to="/">
          <IoSearch className="text-3xl text-gray-600" />
        </Link>
        <Link to="/">
          <FaUser className="text-2xl text-gray-600" />
        </Link>
        <Link to="/cart" className="relative">
          <FaCartPlus className="text-2xl text-gray-600" />
          <span class="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </span>
        </Link>
        {/* mobile menu  */}
        <div className="md:hidden">
          <IoMenu className="text-3xl" />
        </div>
      </div>
    </div>

     {/* mobile menu  */}
      <div className="relative">
        <div className="absolute md:hidden left-0 top-0 w-full h-screen bg-gray-300">
           <nav className="absolute left-0 top-0">
          <div className=" flex items-center flex-col   gap-6">
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
       
      </div>
    </>
  );
};

export default Navbar;

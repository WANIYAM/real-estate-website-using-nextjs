"use client";
import React, {  useEffect, useState } from 'react'
import { FaHouse } from 'react-icons/fa6'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { navLinks } from '@/constant/constant'
type Props={
  openNav:()=> void;
}
const Nav = ({openNav}:Props) => {
  const[navBg, setNavBg]= useState(false);
  useEffect(()=>{
    const handler =() =>{
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY <90 ) setNavBg(false);
    };
    window.addEventListener("scroll",handler);
    return () => {
      window.removeEventListener("scroll",handler);
    }
  },

  []);
  useEffect(()=>{
    console.log(navLinks)
  })
 
  return (
    <div className={`fixed ${
      navBg ? "bg-gray-800 " : ""
    }h-[10vh] z-[100] w-full transition-all duration-200`}>
  
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center">
            <FaHouse />
          </div>
          <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
            HomeHub
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-14 text-white">
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className="font-medium hover:text-yellow-300 cursor-pointer">
                {navLink.label}
              </p>
            </Link>
          ))}
        </div>
        {/* Login and burgermenu */}
        <div className='flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200'>
          <FaUserCircle className='w-5 h-5'/>
          <p className='font-bold text-xs sm:text-base'>Login/Register</p>

        </div>
        {/* burger menu */}
        <HiBars3BottomRight onClick={openNav} className='w-10 h-10 cursor-pointer text-white lg:hidden' />

      </div>
    </div>
  );
}

export default Nav;





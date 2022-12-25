import React from 'react'
import logo from "../logo.png"
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="border pl-12 flex space-x-8 items-center py-4">
        <img alt="logo" className="w-[50px] md:w-[60px]" src={logo}></img>
        <Link to="/" className= {"text-blue-400 font-bold text:xl md:text-3xl"}> Movies</Link>
        <Link to="/favourite" className="text-blue-400 font-bold text:xl md:text-3xl">Favourites</Link>
      </div>
    </>
  );
}



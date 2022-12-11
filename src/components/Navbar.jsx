import React from 'react'
import logo from "../logo.png"

export const Navbar = () => {
  return (
    <>
      <div className="border pl-12 flex space-x-8 items-center py-4">
        <img src={logo}></img>
        <div className="text-blue-400 font-bold text-3xl"> Movies</div>
        <div className="text-blue-400 font-bold text-3xl">Favourites</div>
      </div>
    </>
  );
}



import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SearchBar from './SearchBar';

export default function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  function isActiveChecker(isActive:boolean) {
    return isActive 
      ? "mr-8 text-white hover:text-orange-300 text-xl lg:border-b lg:border-yellow-300 p-1 text-orange-300" 
      : "mr-8 text-white hover:text-orange-300 text-xl p-1";
  }

  return (
    <div className="flex items-center justify-between px-4 py-8 md:px-20  bg-slate-800">
      <div className="">
        <NavLink to="/" className="text-white font-serif md:text-2xl font-bold">
          DiAL Hub
        </NavLink>
      </div>

      {/* Navigation links */}  
      <div className="hidden md:block">
      
        <NavLink to="/" className={({ isActive }) => isActiveChecker(isActive)}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActiveChecker(isActive)}>About</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActiveChecker(isActive)}>Products</NavLink>
        <NavLink to="/login" className="bg-blue-600 text-white text-lg px-4 py-2 rounded-full">Sign in</NavLink>
      </div>

      <div onClick={handleNav} className="md:hidden cursor-pointer pl-25">
        <AiOutlineMenu size={35} color="orange" />
      </div>

      <div className={
        menuOpen
          ? "fixed left-0 top-0 w-[90%] sm:hidden h-screen bg-slate-800 p-10 ease-in duration-500 z-10"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="md:hidden cursor-pointer pl-25">
            <AiOutlineClose size={35} color="orange" />
          </div>
        </div>
        <SearchBar />
        <ul className="flex flex-col">
          <li className="py-4 cursor-pointer">
            <NavLink to="/" className={({ isActive }) => isActiveChecker(isActive)} onClick={handleNav}>Home</NavLink>
          </li>
          <li className="py-4 cursor-pointer">
            <NavLink to="/about" className={({ isActive }) => isActiveChecker(isActive)} onClick={handleNav}>About</NavLink>
          </li>
          <li className="py-4 cursor-pointer">
            <NavLink to="/products" className={({ isActive }) => isActiveChecker(isActive)} onClick={handleNav}>Products</NavLink>
          </li>
          <li className="py-4 cursor-pointer">
          <NavLink to="/login" className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full" onClick={handleNav}>Sign in</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

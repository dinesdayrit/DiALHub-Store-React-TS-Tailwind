import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-6 px-3 lg:px-24 bg-gray-700 flex justify-between">
      <NavLink to="" className="text-white font-serif font-bold lg:text-3xl">DiAL</NavLink>
      <div className="">
        {/* Hamburger menu icon */}
       <RxHamburgerMenu onClick={toggleMenu} className='lg:hidden block text-white top-0' />
        
        {/* Navigation links */}
        <div className={`flex flex-col lg:flex-row lg:block ${isMenuOpen ? '' : 'hidden'}`}>
          <NavLink to="" className="mr-8 text-white hover:text-orange-300 font-semibold text-xl">Home</NavLink>
          <NavLink to="about" className="mr-8 text-white hover:text-orange-300 font-semibold text-xl">About</NavLink>
          <NavLink to="products" className="mr-8 text-white hover:text-orange-300 font-semibold text-xl">Products</NavLink>
          <NavLink to="login" className="text-white hover:text-orange-300 font-semibold text-xl">Login</NavLink>
        </div>
      </div>
    </div>
  );
}

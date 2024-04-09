import { useState } from 'react';
import { NavLink,  } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function isActiveChecker(isActive:boolean) {
    return isActive ? "mr-8 text-white hover:text-orange-300 font-semibold text-xl lg:border-b lg:border-yellow-300 p-2" : "mr-8 text-white hover:text-orange-300 font-semibold text-xl p-2";
}



  return (
    <div className={`items-center md:flex top-0  z-50 bg-sky-900 ${isMenuOpen ? 'bg-sky-900' : ''}`}>
      <div className="flex justify-between p-3 md:flex-row">
      <NavLink to="" className="text-white font-serif font-bold lg:text-3xl lg:ml-32 md:mt-3 mt-1">DiAL</NavLink>

        {/* Hamburger menu icon */}
       <RxHamburgerMenu onClick={toggleMenu} className='md:hidden lg:hidden mr-0 text-white' />
       </div>


        {/* Navigation links */}
        <div className={`md:p-8 flex flex-col md:block md:w-auto md:ml-auto mr-16 ${isMenuOpen ? '' : 'hidden'}`}>
          <NavLink to="" className={({isActive}) => isActiveChecker(isActive)} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="about" className={({isActive}) => isActiveChecker(isActive)} onClick={toggleMenu}>About</NavLink>
          <NavLink to="products" className={({isActive}) => isActiveChecker(isActive)} onClick={toggleMenu}>Products</NavLink>
          <NavLink to="login" className={({isActive}) => isActiveChecker(isActive)} onClick={toggleMenu}>Login</NavLink>
        </div>
    </div>
  );
}

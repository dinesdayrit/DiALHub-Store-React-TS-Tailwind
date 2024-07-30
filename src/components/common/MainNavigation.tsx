import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SearchBar from "./SearchBar";
import { ShoppingBag } from "lucide-react";
import { useModalState } from "@/hooks/useModalState";
import { motion } from "framer-motion";

export default function MainNavigation() {
  const { openCartModal } = useModalState();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  function isActiveChecker(isActive: boolean) {
    return isActive
      ? "mr-8 text-white hover:text-orange-300 text-xl lg:border-b lg:border-yellow-300 p-1 text-orange-300"
      : "mr-8 text-white hover:text-orange-300 text-xl p-1";
  }

  return (
    <div className="flex items-center justify-between px-4 py-4 lg:px-20  bg-slate-800">
      <div>
        <NavLink to="/">
          <motion.img
            src="/dial-logo.png"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-[5rem]"
          />
        </NavLink>
      </div>

      {/* Navigation links */}
      <div className="hidden lg:grid lg:grid-cols-2 items-end">
        <div className="mr-8">
          <SearchBar />
        </div>
        <div className="flex flex-shrink">
          <NavLink
            to="/"
            className={({ isActive }) => isActiveChecker(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActiveChecker(isActive)}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => isActiveChecker(isActive)}
          >
            Products
          </NavLink>
          <NavLink
            to="/login"
            className="bg-blue-700 hover:bg-blue-800 text-white lg:text-lg px-4 py-2 mr-4"
          >
            Sign in
          </NavLink>
          <motion.button
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 500 }}
            onClick={openCartModal}
          >
            {" "}
            <ShoppingBag size={40} color="orange" strokeWidth={1.75} />{" "}
          </motion.button>
        </div>
      </div>

      <div className="lg:hidden cursor-pointer pl-24 flex items-center gap-2">
        <button onClick={openCartModal}>
          {" "}
          <ShoppingBag size={40} color="orange" strokeWidth={1.75} />{" "}
        </button>
        <div onClick={handleNav}>
          <AiOutlineMenu size={35} color="white" />
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[90%] lg:hidden h-screen bg-slate-800 p-10 ease-in duration-500 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="lg:hidden cursor-pointer">
            <AiOutlineClose size={35} color="white" />
          </div>
        </div>
        <SearchBar />
        <ul className="flex flex-col">
          <li className="py-4 cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) => isActiveChecker(isActive)}
              onClick={handleNav}
            >
              Home
            </NavLink>
          </li>
          <li className="py-4 cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) => isActiveChecker(isActive)}
              onClick={handleNav}
            >
              About
            </NavLink>
          </li>
          <li className="py-4 cursor-pointer">
            <NavLink
              to="/products"
              className={({ isActive }) => isActiveChecker(isActive)}
              onClick={handleNav}
            >
              Products
            </NavLink>
          </li>
          <li className="py-4 cursor-pointer">
            <NavLink
              to="/login"
              className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full"
              onClick={handleNav}
            >
              Sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

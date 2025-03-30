import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="w-full relative sm:relative top-0 left-0 z-50 bg-transparent backdrop-blur-md py-4"
    >

      <div className="relative flex items-center justify-center px-4 sm:px-10 max-w-[1440px] mx-auto">

        {/* Logo */}
        <Link to="/" className="absolute left-4 sm:left-10 flex items-center gap-2 top-0">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-16 w-auto object-contain drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-12 mt-5">
          {navLinks.map(({ path, label }) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <NavLink
                key={path}
                to={path}
                className="text-white font-medium text-base no-underline hover:text-orange-400 transition"
              >
                {label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setIsSidebarOpen(true)}
          src={assets.menu_icon}
          className="sm:hidden w-10 cursor-pointer absolute right-4 mt-10"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 text-white z-50 p-6 flex flex-col gap-2"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Back Button */}
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center gap-3 px-6 py-4 cursor-pointer hover:text-orange-500 transition"
            >
              <img
                src={assets.dropdown_icon}
                className="h-5 w-5 rotate-180 object-contain"
                alt="Back"
              />
              <span className="text-lg font-medium">Back</span>
            </div>

            {/* Mobile Nav Links */}
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsSidebarOpen(false)}
                className="py-3 pl-6 border-t text-white font-medium text-lg no-underline hover:text-orange-400 transition"
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

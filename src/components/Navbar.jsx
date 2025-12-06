// src/components/Navbar.jsx
import React, { useEffect, useRef, useState, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets";
import { AuthContext } from "../context/AuthContext";
import "../style.css";
import { api, assetURL } from "../lib/api";
import Profile from "./Profile";

const Navbar = () => {
  const { token, user, profile, setprofile, update } = useContext(AuthContext);
  const [userdp, setUserdp] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const profileImgRef = useRef(null);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => setIsSidebarOpen(false), [location.pathname]);

  async function getUser() {
    if (!token) return;
    try {
      const { data } = await api.get("/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserdp(data?.user?.DP || "");
    } catch (err) {
      console.warn("GetUser failed:", err?.response?.status, err?.message);
    }
  }

  useEffect(() => {
    getUser();
  }, [update, token]);

  const avatarUrl = userdp
    ? userdp.startsWith("http")
      ? userdp
      : assetURL(userdp)
    : "";

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/booking", label: "Booking" },
    { path: "/admin", label: "Admin", adminOnly: true },
  ];

  const linkClass = ({ isActive }) =>
    `text-white font-medium text-base no-underline transition ${
      isActive ? "text-orange-400" : "hover:text-orange-400"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`w-full fixed top-0 left-0 z-50 border-b border-white/10 transition-all duration-300
        ${
          isSidebarOpen
            ? "bg-black"
            : "bg-black/40 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
          
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 sm:h-14 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ path, label, adminOnly }) =>
              adminOnly && !user?.IsAdmin ? null : (
                <NavLink key={path} to={path} className={linkClass}>
                  {label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Desktop Profile Icon */}
            {token && avatarUrl && (
              <img
                ref={profileImgRef}
                src={avatarUrl}
                onClick={() => setprofile(true)}
                className="hidden md:block w-12 h-12 rounded-full cursor-pointer ring-2 ring-orange-400/60 hover:scale-105 transition"
              />
            )}

            {/* Mobile Menu */}
            <img
              onClick={() => setIsSidebarOpen(true)}
              src={assets.menu_icon}
              className="w-9 md:hidden cursor-pointer"
              alt="Menu"
            />
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* FULL BLACK BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black z-[70]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* SIDEBAR PANEL */}
            <motion.div
              className="fixed inset-0 bg-black text-white z-[80] flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <h2 className="text-xl font-semibold">Menu</h2>
                <img
                  onClick={() => setIsSidebarOpen(false)}
                  src={assets.dropdown_icon}
                  className="h-6 w-6 rotate-180 cursor-pointer"
                  alt="Close"
                />
              </div>

              {/* Links */}
              <div className="flex flex-col mt-2 text-lg font-medium">
                {navLinks.map(({ path, label, adminOnly }) =>
                  adminOnly && !user?.IsAdmin ? null : (
                    <NavLink
                      key={path}
                      to={path}
                      className={({ isActive }) =>
                        `block px-6 py-4 border-b border-white/10 ${
                          isActive ? "text-orange-400" : "hover:text-orange-500"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  )
                )}
              </div>

              {/* Profile Section */}
              <div className="mt-auto px-6 py-6 bg-black border-t border-white/10 flex items-center justify-between">
                <div>
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      className="w-16 h-16 rounded-full ring-2 ring-orange-400/40 object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-600" />
                  )}
                </div>

                <button
                  onClick={() => {
                    setIsSidebarOpen(false);
                    setprofile(true);
                  }}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-lg transition"
                >
                  Profile
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* PROFILE POPUP */}
      {profile === true && (
        <Profile
          userdp={userdp}
          setuserdp={setUserdp}
          profileimge={profileImgRef}
        />
      )}
    </>
  );
};

export default Navbar;

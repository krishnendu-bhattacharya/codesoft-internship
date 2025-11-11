import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import bag_icon from "../assets/bag_icon.png";
import user_profile from "../assets/user_profile.png"; // avatar image
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate(); // ✅ fixed navigate
  const [open, setOpen] = useState(false); // mobile menu
  const [isScrolled, setIsScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false); // avatar dropdown
  const { user, setUser, setQuery } = useContext(AppContext);
  const [input, setInput] = useState("");

  // handle search enter
  const handleSearch = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setQuery(input);
      navigate("/all-jobs");
      setInput("");
    }
  };

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Jobs", path: "/all-jobs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between 
        px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b 
        ${
          isScrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md"
            : "bg-gradient-to-r from-indigo-50 via-white to-indigo-100"
        } transition-all duration-300`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <motion.img
            src={bag_icon}
            alt="JobFindr Logo"
            className="w-10 h-10 object-contain"
            whileHover={{ scale: 1.1, rotate: 2 }}
          />
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-indigo-600"
          >
            JobFindr
          </motion.span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Search */}
          <input
            type="text"
            placeholder="Search jobs..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />

          {/* User / Login */}
          {user ? (
            <div className="relative">
              <img
                src={user_profile}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-indigo-500"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              />
              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl py-2 flex flex-col gap-2"
                  >
                    <button
                      onClick={() => {
                        navigate("/my-applications");
                        setUserMenuOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-indigo-100 text-gray-700 rounded-lg text-left"
                    >
                      My Applications
                    </button>
                    <button
                      onClick={() => {
                        setUser(false);
                        setUserMenuOpen(false);
                        navigate("/login");
                      }}
                      className="px-4 py-2 hover:bg-indigo-100 text-gray-700 rounded-lg text-left"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        navigate("/login");
                      }}
                      className="px-4 py-2 hover:bg-indigo-100 text-gray-700 rounded-lg text-left"
                    >
                      Change Account
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full shadow-sm"
              onClick={() => navigate("/login")}
            >
              Login
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="sm:hidden">
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 transition ${
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-700 hover:text-indigo-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <input
                type="text"
                placeholder="Search jobs..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleSearch}
                className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-full text-sm"
              />
              {!user && (
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/login");
                  }}
                  className="cursor-pointer px-6 py-2 mt-3 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm"
                >
                  Login
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;

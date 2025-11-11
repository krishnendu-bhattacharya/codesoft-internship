import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    navigate("/login"); // redirect to login after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-emerald-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">
          Create Account 🌱
        </h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-emerald-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-emerald-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-emerald-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg transition"
            type="submit"
          >
            Sign Up
          </motion.button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;

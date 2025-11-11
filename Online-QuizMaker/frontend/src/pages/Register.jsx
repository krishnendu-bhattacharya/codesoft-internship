import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", { name, email, password });
      setMessage("🎉 Registration successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch {
      setMessage("❌ Error registering. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#00D9FF] via-[#00B8E0] to-[#0047AB] overflow-hidden">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-10 w-[90%] sm:w-[28rem] text-center text-[#e8f9ff]"
      >
        <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-[0_0_15px_#00f5ff]">
          Create Account ✨
        </h2>
        <p className="text-base text-[#ccfaff] mb-8">
          Sign up and start creating amazing quizzes!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label className="block mb-2 text-sm text-[#aafcff] font-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:border-[#00e5ff] focus:ring-2 focus:ring-[#00e5ff] transition-all"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="text-left">
            <label className="block mb-2 text-sm text-[#aafcff] font-semibold">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:border-[#00e5ff] focus:ring-2 focus:ring-[#00e5ff] transition-all"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="text-left">
            <label className="block mb-2 text-sm text-[#aafcff] font-semibold">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder:text-white/70 focus:border-[#00e5ff] focus:ring-2 focus:ring-[#00e5ff] transition-all"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <p className="text-center text-[#00ffcc] mt-2 font-semibold">
              {message}
            </p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-neon w-full mt-4 text-lg tracking-wide"
          >
            Register
          </motion.button>
        </form>

        <p className="mt-6 text-sm text-[#ccfaff]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00fff2] hover:text-[#00e5ff] font-bold">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;

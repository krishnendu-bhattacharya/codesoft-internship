import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useContext(AppContext);
  const [isLogin, setIsLogin] = useState(true); // toggle
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // for signup
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please fill all fields!");
    setUser({ email });
    alert("🎉 Successfully logged in!");
    navigate("/home");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return alert("Please fill all fields!");
    setUser({ email });
    alert("🎉 Account created and logged in!");
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md"
      >
        {/* Tab Switch */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isLogin ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={`px-6 py-2 rounded-full font-semibold transition ${
              !isLogin ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        {isLogin ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition"
              type="submit"
            >
              Login
            </motion.button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition"
              type="submit"
            >
              Sign Up
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Login;

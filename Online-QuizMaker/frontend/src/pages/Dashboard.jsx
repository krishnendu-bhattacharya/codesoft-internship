import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const buttons = [
    { label: "🧠 Take a Quiz", path: "/quizlist", color: "from-cyan-400 to-sky-500" },
    { label: "✏️ Create a Quiz", path: "/createquiz", color: "from-emerald-400 to-teal-500" },
    { label: "📜 My Quizzes", path: "/quizlist", color: "from-blue-400 to-indigo-500" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500 text-gray-900 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl bg-white/40 backdrop-blur-2xl p-16 rounded-3xl shadow-2xl text-center"
        >
          <h1 className="text-5xl font-extrabold mb-8 text-gray-800 tracking-tight">
            Welcome to Your Dashboard 🎉
          </h1>

          <p className="text-gray-700 mb-16 text-xl font-medium">
            Choose what you’d like to do today
          </p>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-14">
            {buttons.map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(btn.path)}
                className={`w-80 h-28 text-2xl font-semibold rounded-3xl bg-gradient-to-r ${btn.color} text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="mt-20 py-4 px-12 rounded-3xl bg-gradient-to-r from-rose-400 to-red-500 text-white text-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            🚪 Logout
          </motion.button>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;

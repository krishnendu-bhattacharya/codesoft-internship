import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  useEffect(() => {
    // Scroll to top smoothly when loaded
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-800 text-white p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-[90%] max-w-lg text-center"
        >
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="text-4xl font-extrabold text-white mb-4"
          >
            🎉 Quiz Completed!
          </motion.h1>

          <p className="text-xl mb-8">
            You scored{" "}
            <span className="text-yellow-300 font-bold">
              {score}
            </span>{" "}
            out of{" "}
            <span className="text-blue-300 font-bold">
              {total}
            </span>
          </p>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => navigate("/quizlist")}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Take Another Quiz
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-white/20 border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition"
            >
              Go to Dashboard
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-blue-200 text-sm"
          >
            © {new Date().getFullYear()} QuizMaster — Well done!
          </motion.p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Result;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-sky-400 via-cyan-500 to-teal-500 text-white px-6 md:px-16 lg:px-32 relative overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-4 drop-shadow-2xl text-center"
        >
          🌐 Welcome to QuizMaster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mb-12 text-white/90 text-center max-w-xl"
        >
          Sharpen your mind, challenge your friends, and test your knowledge with fun quizzes across multiple topics!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            to="/login"
            className="bg-white text-sky-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-sky-100 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-sky-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-sky-800 transition duration-300"
          >
            Register
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;

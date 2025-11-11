import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import API from "../utils/api";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await API.get("/quizzes/demo");
        setQuizzes(res.data);
      } catch (err) {
        console.error("Error fetching quizzes:", err);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500 text-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-14 text-gray-800 drop-shadow-lg text-center"
        >
          🎯 Available Quizzes
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {quizzes.map((quiz, i) => (
            <motion.div
              key={quiz._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-80 p-8 rounded-3xl bg-white/60 backdrop-blur-xl text-center shadow-2xl hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{quiz.title}</h2>
              <p className="text-gray-600 mb-6 text-lg">{quiz.questions.length} Questions</p>
              <Link
                to={`/takequiz/${quiz._id}`}
                className="inline-block py-3 px-8 text-white text-lg font-semibold rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md hover:shadow-xl transition"
              >
                Take Quiz →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default QuizList;

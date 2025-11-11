import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import API from "../utils/api";

const TakeQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await API.get("/quizzes/demo");
        const foundQuiz = res.data.find((q) => q._id === id);
        setQuiz(foundQuiz);
      } catch (err) {
        console.error("Error fetching quiz:", err);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleAnswer = () => {
    if (selectedOption === quiz.questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption("");
    } else {
      navigate("/result", {
        state: { score, total: quiz.questions.length },
      });
    }
  };

  if (!quiz)
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-white">
          Loading Quiz...
        </div>
      </PageTransition>
    );

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500 text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl bg-white/60 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl text-center"
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800">{quiz.title}</h1>
          <p className="mb-6 text-gray-700 text-lg">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-gray-800">
                {quiz.questions[currentQuestion].question}
              </h2>

              <div className="flex flex-col gap-5 items-center">
                {quiz.questions[currentQuestion].options.map((opt, i) => (
                  <motion.label
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`w-full max-w-md px-5 py-4 rounded-2xl cursor-pointer text-center text-lg font-semibold transition-all ${
                      selectedOption === opt
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                        : "bg-white/80 text-gray-800 hover:bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="option"
                      value={opt}
                      checked={selectedOption === opt}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="hidden"
                    />
                    {opt}
                  </motion.label>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!selectedOption}
            onClick={handleAnswer}
            className="w-full mt-10 py-4 rounded-2xl text-xl text-white font-semibold bg-gradient-to-r from-emerald-400 to-teal-500 shadow-md hover:shadow-xl transition disabled:opacity-50"
          >
            {currentQuestion + 1 === quiz.questions.length
              ? "See Result"
              : "Next Question"}
          </motion.button>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default TakeQuiz;

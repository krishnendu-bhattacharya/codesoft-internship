import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import API from "../utils/api";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([{ question: "", options: ["", "", "", ""], answer: "" }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/quizzes", { title, questions });
    alert("✅ Quiz created successfully!");
    setTitle("");
    setQuestions([{ question: "", options: ["", "", "", ""], answer: "" }]);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500 text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl bg-white/60 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl text-center"
        >
          <h1 className="text-5xl font-extrabold mb-8 text-gray-800 drop-shadow-md">
            🧩 Create a New Quiz
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Enter Quiz Title"
              className="w-full p-4 rounded-xl bg-white/80 text-gray-800 font-semibold placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {questions.map((q, i) => (
              <div key={i} className="space-y-3">
                <input
                  type="text"
                  placeholder="Question"
                  className="w-full p-4 rounded-xl bg-white/80 text-gray-800 font-semibold placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  value={q.question}
                  onChange={(e) => {
                    const newQs = [...questions];
                    newQs[i].question = e.target.value;
                    setQuestions(newQs);
                  }}
                />

                {q.options.map((opt, j) => (
                  <input
                    key={j}
                    type="text"
                    placeholder={`Option ${j + 1}`}
                    className="w-full p-4 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                    value={opt}
                    onChange={(e) => {
                      const newQs = [...questions];
                      newQs[i].options[j] = e.target.value;
                      setQuestions(newQs);
                    }}
                  />
                ))}

                <input
                  type="text"
                  placeholder="Correct Answer"
                  className="w-full p-4 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  value={q.answer}
                  onChange={(e) => {
                    const newQs = [...questions];
                    newQs[i].answer = e.target.value;
                    setQuestions(newQs);
                  }}
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full mt-6 py-4 text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-emerald-400 to-teal-500 shadow-md hover:shadow-xl transition"
            >
              🚀 Create Quiz
            </button>
          </form>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default CreateQuiz;

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-indigo-700 mb-4"
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’d love to hear from you! Whether you have a question or suggestion, reach out to us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Mail size={28} />, title: "Email", text: "krishnandubhattacharya057@gmail.com" },
            { icon: <Phone size={28} />, title: "Phone", text: "+91 (9999999999)" },
            { icon: <MapPin size={28} />, title: "Address", text: "Kolkata, India" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col items-center gap-3 transition-all min-w-[300px]"
            >
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm truncate">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="bg-white rounded-3xl shadow-lg p-8 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none" required />
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none" required />
          </div>
          <textarea placeholder="Your Message..." rows="5" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none mb-6" required></textarea>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-indigo-700 transition">
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;

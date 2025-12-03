import { useState, useEffect } from 'react';
import { Download, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Full Stack Developer', 'MERN Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-20 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm
            </motion.h2>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Kaviya M
            </motion.h1>
            <motion.div
              className="h-16 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {roles[roleIndex]}
              </h3>
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Passionate Full Stack Developer skilled in building scalable web
              applications using the MERN stack. I focus on writing clean,
              maintainable code and designing intuitive user interfaces.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <a
                href="/Kaviya_M_Resume.pdf"
                download="Kaviya_M_Resume.pdf"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                <span>Get CV</span>
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                <span>Let's Talk</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <img
                src="kaviya.jpg"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

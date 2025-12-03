import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg"
                >
                  <MapPin className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                    <p className="text-gray-700 dark:text-gray-300">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg"
                >
                  <Phone className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:+916379858267" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      +91 6379858267
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg"
                >
                  <Mail className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:kaviyamagudeeswaran3006@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 break-all">
                      kaviyamagudeeswaran3006@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/kaviyamagudeeswaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow-lg"
                >
                  <Github size={28} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/kaviya--/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg"
                >
                  <Linkedin size={28} />
                </motion.a>
                <motion.a
                  href="mailto:kaviyamagudeeswaran3006@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-red-600 dark:bg-red-700 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors shadow-lg"
                >
                  <Mail size={28} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                >
                  <Instagram size={28} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-900 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

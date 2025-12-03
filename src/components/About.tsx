import { motion } from 'framer-motion';
import { Code, Database, Layout, Server } from 'lucide-react';

export const About = () => {
  const features = [
    { icon: <Code size={32} />, title: 'Frontend Development', desc: 'Creating responsive and interactive UIs with React' },
    { icon: <Server size={32} />, title: 'Backend Development', desc: 'Building robust APIs with Node.js and Express' },
    { icon: <Database size={32} />, title: 'Database Design', desc: 'Designing efficient schemas with MongoDB and SQL' },
    { icon: <Layout size={32} />, title: 'Full Stack', desc: 'End-to-end application development' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl mb-12"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate developer who loves crafting elegant solutions to
              complex problems. With expertise in the MERN stack and a keen eye
              for design, I build applications that are not only functional but
              also beautiful and user-friendly.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              My focus is on writing clean, maintainable code, designing
              intuitive user interfaces, and developing efficient backend
              systems. I'm actively involved in tech communities and constantly
              learning new technologies to stay ahead in the ever-evolving tech
              landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

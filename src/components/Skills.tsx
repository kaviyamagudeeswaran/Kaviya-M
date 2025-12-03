import { motion } from 'framer-motion';
import { Code, Database, Palette, Terminal } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Palette size={32} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Backend',
      icon: <Terminal size={32} />,
      skills: ['Node.js', 'Express.js', 'Python'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database',
      icon: <Database size={32} />,
      skills: ['MongoDB', 'SQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tools',
      icon: <Code size={32} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 bg-gradient-to-br ${category.color} rounded-xl text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                    }}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg font-medium shadow-md cursor-pointer transition-all duration-300`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Always Learning
          </h3>
          <p className="text-white/90 text-lg">
            Constantly exploring new technologies and best practices to stay at the forefront of web development.
            Currently focused on advanced React patterns, cloud technologies, and system design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

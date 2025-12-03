import { motion } from 'framer-motion';
import { Cloud, ChefHat, Github, Wallet, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Weather Detector',
      description: 'A web application providing real-time weather insights including temperature, humidity, wind speed, and conditions. Features 7-day weather forecast with past and future predictions.',
      icon: <Cloud size={40} />,
      tech: ['React', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Recipe Finder',
      description: 'Interactive application to search recipes by ingredients or meal type. Fetches detailed recipe information and cooking steps from external APIs with an intuitive user interface.',
      icon: <ChefHat size={40} />,
      tech: ['React', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-orange-400 to-red-400'
    },
    {
      title: 'GitHub Profile Finder',
      description: 'Search and discover GitHub profiles by username. Displays comprehensive user details including repositories, followers, following, and contribution statistics with a clean interface.',
      icon: <Github size={40} />,
      tech: ['React', 'Tailwind CSS'],
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Budget Tracker',
      description: 'Full-stack CRUD application for tracking personal expenses and income. Features budget visualization, category management, and financial insights with responsive design.',
      icon: <Wallet size={40} />,
      tech: ['React', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-green-400 to-emerald-400'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className={`inline-block p-4 bg-gradient-to-br ${project.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
                  <ExternalLink size={18} />
                  <span>View Project</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

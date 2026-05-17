import { motion } from 'framer-motion';
import {
  Cloud,
  Bot,
  BookOpen,
  ShoppingCart,
  Github,
  ExternalLink
} from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'CodeInsight AI',
      description:
        'An AI-powered code review platform that analyzes code across multiple programming languages and provides intelligent feedback on bugs, security vulnerabilities, performance bottlenecks, coding standards, and optimization opportunities. Includes syntax-highlighted code preview, PDF report generation, and overall code quality scoring. Built with a fully responsive full-stack architecture.',
      icon: <Bot size={40} />,
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration'],
      color: 'from-purple-500 to-pink-500',
      live: 'https://codeinsight-ai-frontend.onrender.com',
      github: 'https://github.com/kaviyamagudeeswaran/CodeInsight-AI'
    },
    {
      title: 'Weather Dashboard',
      description:
        'A real-time weather intelligence application that provides current weather conditions, historical weather insights for the past 7 days, and predictive weather forecasting for the upcoming 7 days. Features detailed metrics including temperature, humidity, wind speed, weather conditions, and a responsive user-friendly dashboard.',
      icon: <Cloud size={40} />,
      tech: ['React', 'Bootstrap', 'Node.js', 'Express.js', 'Weather API'],
      color: 'from-blue-400 to-cyan-500',
      live: 'https://weather-dashboard-rosy-gamma.vercel.app/',
      github: 'https://github.com/kaviyamagudeeswaran/Weather-Dashboard'
    },
    {
      title: 'EnglishMate',
      description:
        'An interactive English learning platform designed to improve communication skills through engaging lessons, grammar exercises, vocabulary enhancement, and practical learning modules. Built to deliver an intuitive learning experience with responsive design and smooth user interaction.',
      icon: <BookOpen size={40} />,
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-orange-400 to-red-500',
      live: 'https://englishmate-project-2.onrender.com/',
      github: 'https://github.com/kaviyamagudeeswaran/englishmate-project'
    },
    {
      title: 'GreenBasket',
      description:
        'A smart grocery planning and shopping management application that helps users organize grocery purchases efficiently, manage shopping lists, plan smarter buying decisions, and improve household budgeting. Designed with full-stack CRUD functionality and responsive user experience.',
      icon: <ShoppingCart size={40} />,
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'from-green-400 to-emerald-500',
      live: 'https://smart-grocery-planner-eug5.onrender.com',
      github: 'https://github.com/kaviyamagudeeswaran/smart-grocery-planner'
    }
  ];

  return (
    <section
      id="projects"
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
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className={`inline-block p-4 bg-gradient-to-br ${project.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
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

              <div className="flex gap-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:gap-3 transition-all font-medium"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

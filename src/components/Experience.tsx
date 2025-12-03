import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const Experience = () => {
  const internships = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Syncner',
      location: 'Coimbatore, India',
      period: 'Feb 2025 - Nov 2025',
      description: 'Working on full-stack web development projects using React, Node.js, and MongoDB. Responsible for designing scalable APIs, implementing frontend features, and optimizing application performance. Collaborating with cross-functional teams to deliver impactful digital solutions.',
      tech: ['React', 'Node.js', 'MongoDB', 'API Development']
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Web-Gen',
      location: 'Remote',
      period: 'Jul 2024 - Aug 2024',
      description: 'Built and maintained full-stack applications using React and Node.js. Designed RESTful APIs and integrated MongoDB. Collaborated with teams to ship quality software solutions on time.',
      tech: ['React', 'Node.js', 'MongoDB', 'JavaScript']
    },
    {
      title: 'UI/UX Design Intern',
      company: 'CodTech IT Solutions',
      location: 'Remote',
      period: 'Aug 2024 - Sep 2024',
      description: 'UI/UX Designer & Frontend Developer who blends design creativity with technical precision. From wireframes to production-ready React interfaces, I design experiences that look great and perform even better.',
      tech: ['React', 'UI/UX', 'Frontend Development']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'SNS College of Engineering',
      location: 'Coimbatore, India',
      period: '2022 - 2026',
      description: 'Pursuing B.Tech in Information Technology with a focus on AI and Data Science. Actively involved in tech clubs, bootcamps, and project-based learning. Working on real-world projects across full-stack and ML domains.',
      gpa: 'GPA: 8.9/10'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Vivekananda Vidyalaya Hr. Sec. School',
      location: 'Tamil Nadu',
      period: '2021 - 2022',
      description: 'Completed higher secondary education with distinction.',
      gpa: '87%'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Vivekananda Vidyalaya Hr. Sec. School',
      location: 'Tamil Nadu',
      period: '2019 - 2020',
      description: 'Completed secondary education with excellent academic performance.',
      gpa: '91%'
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
            >
              <Briefcase className="text-blue-600" size={32} />
              Work Experience
            </motion.h3>
            <div className="space-y-6">
              {internships.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {job.title}
                      </h4>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {job.company} | {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar size={18} />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
            >
              <GraduationCap className="text-purple-600" size={32} />
              Education
            </motion.h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar size={18} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                    {edu.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {edu.gpa}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

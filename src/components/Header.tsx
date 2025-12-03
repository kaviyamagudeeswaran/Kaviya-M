import { useState } from 'react';
import { Github, Linkedin, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            KaviDev
          </h1>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/kaviya--/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/kaviyamagudeeswaran" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:kaviyamagudeeswaran3006@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
            <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

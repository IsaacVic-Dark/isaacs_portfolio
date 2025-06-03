import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/experiance', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
  ];

  return (
    <div className="min-h-screen">
      <nav className="bg-white dark:bg-secondary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-dark dark:text-light">
                Isaac.
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${location.pathname === link.path
                      ? 'text-accent'
                      : 'text-dark dark:text-light hover:text-accent dark:hover:text-accent'
                    } transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
              {/* CV Download Link */}
              <a
                href="https://drive.google.com/file/d/1Fk-2HPx9KWGcmZX_PYP7wm7lKYIGzOSa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark dark:text-light hover:text-accent dark:hover:text-accent transition-colors duration-200"
              >
                Download CV
              </a>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-light dark:bg-dark text-dark dark:text-light
          hover:bg-opacity-90 transition-colors duration-200"
              >
                {isDark ? '🌞' : '🌙'}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-light dark:bg-dark text-dark dark:text-light
          hover:bg-opacity-90 transition-colors duration-200 mr-2"
              >
                {isDark ? '🌞' : '🌙'}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-dark dark:text-light hover:text-accent"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${location.pathname === link.path
                      ? 'text-accent'
                      : 'text-dark dark:text-light hover:text-accent dark:hover:text-accent'
                    } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* CV Download Link for Mobile */}
              <a
                href="https://drive.google.com/file/d/1WWF1wDzHiC-OFLOyCkNp1GzowhNvL6wz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark dark:text-light hover:text-accent dark:hover:text-accent block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white dark:bg-secondary mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-dark dark:text-light">
            © {new Date().getFullYear()} Isaac. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 
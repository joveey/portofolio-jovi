// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full mt-24 py-8 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/joveey" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jovi-syawal" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:jovisywl@gmail.com" className="hover:text-cyan-400">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Muhammad Jovi Syawal Difa. Dibuat dengan Next.js.</p>
      </div>
    </footer>
  );
};

export default Footer;
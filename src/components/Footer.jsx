import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {SiGithub} from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
  
          <div>
            <h2 className="text-2xl font-semibold mb-6">Stay Connected</h2>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/hii.dino/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://github.com/hiidino"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <SiGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/dino-raj-200a2524a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
        
   
        <div className="border-t border-gray-300 my-8"></div>

       
        <div className="text-sm text-gray-300">
          <p className="mt-6">
            <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
              Terms of Service
            </Link>
            {' | '}
            <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            {' | '}
            <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
              Cookie Preferences
            </Link>
            {' | '}
            <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
              Sitemap
            </Link>
          </p>
          <p className="mt-4">&copy; 2024 Dino Raj. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

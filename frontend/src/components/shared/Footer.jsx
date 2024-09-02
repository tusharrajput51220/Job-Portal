import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="shadcn-hover:shadow-lg"
            >
              <FaFacebook
                className="text-blue-600 shadcn-hover:text-blue-800 transition duration-200 ease-in-out transform hover:scale-110"
                size={30}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="shadcn-hover:shadow-lg"
            >
              <FaTwitter
                className="text-blue-400 shadcn-hover:text-blue-600 transition duration-200 ease-in-out transform hover:scale-110"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="shadcn-hover:shadow-lg"
            >
              <FaInstagram
                className="text-pink-600 shadcn-hover:text-pink-800 transition duration-200 ease-in-out transform hover:scale-110"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

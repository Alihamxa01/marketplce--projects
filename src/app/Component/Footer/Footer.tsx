import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t-4 backdrop-blur-3xl border-blue-300 bg-blue-100 text-gray-900 py-12 shadow-md">
      <div className="container mx-auto px-4">
        {/* Grid for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo Section */}
          <div className="w-full md:w-1/4">
            <div className="flex items-center mb-4">
              <Image
                src="/images.png"
                alt="Logo"
                width={70}
                height={60}
                className="h-16 mr-3 rounded-full border-2 border-pink-300 shadow-lg"
              />
              <span className="text-3xl font-bold tracking-wide text-pink-600">
                E-Shop
              </span>
            </div>
            <p className="text-gray-700">
              Explore premium
            </p>
          </div>

          {/* Chairs Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Chairs</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-pink-500 transition">
                Office Chairs
              </li>
              <li className="text-gray-700 hover:text-pink-500 transition">
                Dining Chairs
              </li>
              <li className="text-gray-700 hover:text-pink-500 transition">
                Lounge Chairs
              </li>
              <li className="text-gray-700 hover:text-pink-500 transition">
                Recliners
              </li>
            </ul>
          </div>

          {/* Sofas Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Sofas</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-pink-500 transition">
                Sectional Sofas
              </li>
              <li className="text-gray-700 hover:text-pink-500 transition">
                Leather Sofas
              </li>
              <li className="text-gray-700 hover:text-pink-500 transition">
                Reclining Sofas
              </li>
              <li className="text-gray-700 hover:text-pink-500 transition">
                Loveseats
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Stay Connected
            </h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg shadow-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Payments */}
        <div className="flex flex-col items-center space-y-6 mb-10">
          <div className="flex space-x-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
          <div className="flex space-x-6">
            <SiVisa
              size={32}
              className="text-gray-600 hover:text-pink-500 transition"
            />
            <SiMastercard
              size={32}
              className="text-gray-600 hover:text-pink-500 transition"
            />
            <SiPaypal
              size={32}
              className="text-gray-600 hover:text-pink-500 transition"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-10">
          <Link href="/" className="text-gray-700 hover:text-pink-500 transition">
            Home
          </Link>
          <Link
            href="/About"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            Terms of Service
          </Link>
        </div>

        {/* Footer Credit */}
        <div className="text-center text-gray-600 text-sm">
          © 2023 E-Commerce. Designed by Ali Hamza 
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import the dropdown icon

const Header = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

  // Toggle dropdown
  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsHomeDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white/30 border-b border-gray-300 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images.png"
              alt="E-Shop Logo"
              height="12"
              width={12}
              className="h-12 w-12 rounded-full border-2 border-pink-300 shadow-lg mr-3"
            />
          </Link>
          <div>
            <Link href="/">
              <h1 className="text-2xl font-bold text-pink-500">E-SHOP</h1>
            </Link>
          </div>
        </div>

        <nav className="flex space-x-6 relative">
          <div ref={dropdownRef} className="relative">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-500 transition font-medium flex items-center gap-1"
              onClick={toggleHomeDropdown}
            >
              Home
              <FaChevronDown
                className={`transition-transform ${
                  isHomeDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {/* Dropdown Menu */}
            {isHomeDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <Link
                  href="/Faqs"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition font-medium"
                >
                  FAQs
                </Link>
                <Link
                  href="/Login"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition font-medium"
                >
                  Log-in
                </Link>

                <Link
                  href="/Signup"
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition font-medium"
                >
                  Sign up
                </Link>

              </div>
            )}
          </div>

          <Link
            href="/About"
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
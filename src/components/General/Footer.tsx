import React from "react";
import { Link } from "react-router-dom"; // Replace with `next/link` if using Next.js

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "200px",
      }}
      className="bg-gray-800 text-white py-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-lg font-semibold">
            <Link to="/" className="hover:text-blue-400">
              Jewel Shop
            </Link>
          </div>

          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link to="/cart" className="hover:text-blue-400">
              Cart
            </Link>
            <Link to="/about-us" className="hover:text-blue-400">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-blue-400">
              Contact Us
            </Link>
            <Link to="/faq" className="hover:text-blue-400">
              FAQ
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Jewel Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

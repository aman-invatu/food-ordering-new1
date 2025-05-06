
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-food-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold mb-4">
                FoodEats<span className="text-food-primary">.</span>
              </h2>
            </Link>
            <p className="text-gray-300 mb-4">
              Delicious food delivered to your doorstep. We offer a wide variety of cuisines to satisfy your cravings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-food-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-food-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-food-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-food-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-food-primary transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-food-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-food-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-food-primary transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1"><Mail size={18} /></span>
                <span>support@foodeats.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1"><Phone size={18} /></span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <address className="not-italic text-gray-300">
                  123 Delicious Street<br />
                  Foodville, FD 12345
                </address>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-300">Get updates on our latest offers and promotions</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-food-primary rounded-l-md w-full md:w-64"
                />
                <button className="bg-food-primary hover:bg-food-primary/90 text-white px-4 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} FoodEats. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-food-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-food-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

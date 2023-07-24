import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Column 2 */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 789</p>
          </div>
          {/* Column 3 */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Influencer Marketing. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

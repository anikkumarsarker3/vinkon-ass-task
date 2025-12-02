"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-white">Market</h2>
                    <p className="text-gray-400">
                        Shop smarter with our hand-picked collection of curated products
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
                    <a href="#" className="hover:text-white transition">Home</a>
                    <a href="#" className="hover:text-white transition">Courses</a>
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                </div>

                {/* Contact / Newsletter */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Subscribe</h3>
                    <p className="text-gray-400">
                        Get updates about new courses and offers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} DynamicNav. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
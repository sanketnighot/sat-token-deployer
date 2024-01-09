"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="drop-shadow-xl z-40 fixed w-full bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* Website Logo */}
                            <a href="/" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-White-500 font-black text-lg">SAT Token Deployer</span>
                            </a>
                        </div>
                        {/* Primary Navbar items */}
                        <div
                            className="hidden md:flex space-x-1">
                            <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-black-500 transition duration-300 text-white">Home</Link>
                            <Link href="/collection" className="py-4 px-2 text-gray-500 font-semibold hover:text-black-500 transition duration-300 text-white">Collection</Link>


                        </div>
                    </div>
                    {/* Connect Wallet Button */}
                    <div className="hidden md:flex space-x-1">
                        <button className="px-4 py-2 bg-black-500 text-white rounded hover:bg-black-600 transition duration-300">
                            Connect Wallet
                        </button>
                    </div>


                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-6 h-6 text-white-500 hover:text-black-500"
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="white">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} drop-shadow-xl`}>
                <Link href="/" className="block py-2 px-4 text-sm hover:bg-black-500 transition duration-300 text-white">Home</Link>
                <Link href="/collection" className="block py-2 px-4 text-sm hover:bg-black-500 transition duration-300 text-white">Collection</Link>
                <div className="flex">
                    <button className="block px-4 py-2 bg-black-500 text-white rounded hover:bg-black-500 transition duration-300">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

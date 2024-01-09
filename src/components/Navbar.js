"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
// import { dappClient } from '../../../utils/walletconnect'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [account, setAccount] = useState(false);
    // useEffect(() => {
    //     (async () => {
    //         // TODO 5.b - Get the active account
    //         const accounts = await dappClient().getAccount();
    //         setAccount(accounts.account);

    //     })();
    // }, []);

    // const onConnectWallet = async () => {
    //     await dappClient().connectAccount();
    //     const accounts = await dappClient().getAccount();
    //     setAccount(accounts.account);
    // };

    // const onDisconnectWallet = async () => {
    //     await dappClient().disconnectWallet();
    //     setAccount(false);
    // };

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
                        <div className="flex items-center py-2 px-2">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                            </svg> &nbsp; Connect Wallet
                        </div>
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
                <div className="flex items-center py-2 px-2 text-sm">
                    <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                    </svg> &nbsp; Connect Wallet
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Image from 'next/image'
import Collection from '../app/collection/page';

export default function HomePage() {
    const [isAnimating, setIsAnimating] = useState(false);
    const router = useRouter();

    const handleNavigate = () => {
        setIsAnimating(true);
        setTimeout(() => {
            router.push('/collection');
        }, 500); // Duration should match the CSS animation
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-blue-700 to-pink-700 overflow-y-auto">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mt-40">"Special Appreciation Token"</h1>
                <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-gray-300 text-center">for the great Artists of Tezos</h2>
                <p className="text-lg font-normal text-white-100 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300 text-center">SAT stands for Social Appreciation Tokens, a revolutionary tokenization system on the Tezos network that transforms the relationship between artists and their supporters. SATs operate on the principle of decentralized promotion and ownership, creating a symbiotic ecosystem that benefits both artists and token holders.</p>
                <Image
                    className="cursor-pointer"
                    src="/coin.svg"
                    width={250}
                    height={250}
                    alt="token image"
                    onClick={handleNavigate}
                />
                {isAnimating && (
                    <div className="fixed top-0 left-0 z-10 w-full h-full bg-white circle-animation">
                        <Collection />
                    </div>
                )}
            </div>
        </>
    );
}

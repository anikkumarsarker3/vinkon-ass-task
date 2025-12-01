"use client"
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import { MdMenu } from "react-icons/md";
import Link from 'next/link';
import Logo from '../Logo/Logo';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        });
    }, []);
    const links = <>
        <Link href='/' className="hover:text-blue-600 transition">Home</Link>
        <Link href='/' className="hover:text-blue-600 transition">Services</Link>
        <Link href='/' className="hover:text-blue-600 transition">About</Link>
        <Link href='/' className="hover:text-blue-600 transition">Contact</Link>
    </>
    return (
        <nav
            data-aos="fade-down"
            className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">
                    <Logo></Logo>
                </h1>
                <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    {links}
                </ul>
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    <MdMenu />
                </button>
            </div>
            <div
                className={`md:hidden text-gray-700 flex flex-col gap-4 bg-white px-6 transition-all ${open ? "max-h-60" : "max-h-0 overflow-hidden"
                    }`}
            >
                {links}
            </div>
        </nav>
    );
};

export default Navbar;
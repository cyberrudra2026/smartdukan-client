"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { cart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        // Default to dark mode
        document.documentElement.classList.add("dark");
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass h-16 shadow-2xl" : "bg-transparent h-20"
                } flex items-center justify-between px-6 md:px-12`}
        >
            {/* Logo */}
            <Link href="/" className="text-2xl font-black tracking-tighter tiger-text uppercase">
                SMART DUKAN
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                <div className="relative w-full group">
                    <input
                        type="text"
                        placeholder="Search smartphones..."
                        className="w-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-full py-2.5 px-10 focus:ring-2 focus:ring-primary/50 outline-none transition-all text-sm text-zinc-900 dark:text-white"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 w-4 h-4" />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <Link href="/cart" className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 tiger-bg text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white dark:border-black shadow-lg">
                        {cart.length}
                    </span>
                </Link>

                {/* Profile Icon with Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    >
                        <User className="w-5 h-5" />
                    </button>

                    <AnimatePresence>
                        {isProfileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute right-0 mt-4 w-52 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-2 z-[60]"
                            >
                                <Link href="/login" className="block px-4 py-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl text-sm font-semibold transition-colors text-zinc-900 dark:text-zinc-100">
                                    Login / Sign Up
                                </Link>
                                <Link href="/admin/dashboard" className="block px-4 py-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl text-sm font-semibold transition-colors border-t border-zinc-100 dark:border-zinc-800 mt-1 pt-2.5 text-zinc-900 dark:text-zinc-100">
                                    Admin Dashboard
                                </Link>
                                <Link href="/profile" className="block px-4 py-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl text-sm font-semibold transition-colors text-zinc-900 dark:text-zinc-100">
                                    My Orders
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button
                    className="md:hidden p-2 text-zinc-900 dark:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col space-y-4"
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary outline-none"
                        />
                        <Link href="/shop" className="text-lg font-bold">Explore Shop</Link>
                        <Link href="/brands" className="text-lg font-bold">Premium Brands</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

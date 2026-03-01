"use client";

import React from "react";
import { motion } from "framer-motion";
import BrandBar from "@/components/BrandBar";
import { ArrowRight, Zap, Shield, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              New Arrival: iPhone 15 Pro
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              The Smart Way to <br />
              <span className="text-primary">Upgrade Your Life.</span>
            </h1>
            <p className="text-lg text-secondary max-w-lg">
              Discover the latest smartphones with cutting-edge technology,
              premium designs, and unbeatable prices. Experience the SMART DUKAN difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center space-x-2 hover:scale-105 transition-transform">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-8 py-4 rounded-full font-bold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative hidden md:flex justify-center"
          >
            {/* Placeholder for 3D Smartphone Image */}
            <div className="w-80 h-[600px] bg-zinc-200 dark:bg-zinc-800 rounded-[3rem] border-8 border-zinc-900 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-900 rounded-full" />
              <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center">
                <Smartphone className="w-20 h-20 text-primary/50" />
                <h3 className="text-xl font-bold">Premium Display</h3>
                <p className="text-sm opacity-50">Imagine a 3D iPhone rotating here with GSAP/Three.js</p>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-4 rounded-2xl shadow-lg border border-white/20"
            >
              <Zap className="text-yellow-500 w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl shadow-lg border border-white/20"
            >
              <Shield className="text-green-500 w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BrandBar />

      {/* Featured Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Models</h2>
            <p className="text-secondary mt-2">Handpicked smartphones for you</p>
          </div>
          <Link href="/shop" className="text-primary font-semibold hover:underline flex items-center">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 group cursor-pointer"
            >
              <div className="aspect-square bg-white dark:bg-zinc-800 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <Smartphone className="w-24 h-24 text-zinc-300 dark:text-zinc-700 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] px-2 py-1 rounded-full font-bold">
                  NEW
                </div>
              </div>
              <h3 className="text-xl font-bold">iPhone 15 Pro Max</h3>
              <p className="text-secondary text-sm">Apple | 256GB | Blue Titanium</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold">$1,199</span>
                <button className="bg-primary text-white p-2 rounded-full hover:scale-110 transition-transform">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

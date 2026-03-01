"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, SlidersHorizontal, Smartphone, ShoppingCart, Star } from "lucide-react";

const products = [
    { id: 1, name: "iPhone 15 Pro", brand: "Apple", price: 999, ram: "8GB", storage: "128GB", network: "5G", image: "" },
    { id: 2, name: "Galaxy S24 Ultra", brand: "Samsung", price: 1199, ram: "12GB", storage: "256GB", network: "5G", image: "" },
    { id: 3, name: "OnePlus 12", brand: "OnePlus", price: 799, ram: "16GB", storage: "256GB", network: "5G", image: "" },
    { id: 4, name: "Redmi Note 13 Pro", brand: "Xiaomi", price: 299, ram: "8GB", storage: "256GB", network: "5G", image: "" },
];

const FilterItem = ({ label, options }: { label: string, options: string[] }) => (
    <div className="mb-6">
        <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-zinc-900 dark:text-zinc-100">{label}</h4>
        <div className="space-y-2">
            {options.map((opt) => (
                <label key={opt} className="flex items-center space-x-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-700 text-primary focus:ring-primary bg-transparent" />
                    <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{opt}</span>
                </label>
            ))}
        </div>
    </div>
);

export default function Shop() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 space-y-8 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-3xl h-fit border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold flex items-center text-zinc-900 dark:text-white">
                            <SlidersHorizontal className="w-5 h-5 mr-2" /> Filters
                        </h3>
                        <button className="text-xs text-primary font-bold hover:underline">Reset</button>
                    </div>

                    <FilterItem label="Brand" options={["Apple", "Samsung", "OnePlus", "Xiaomi", "Oppo", "Vivo"]} />
                    <FilterItem label="RAM" options={["4GB", "6GB", "8GB", "12GB", "16GB"]} />
                    <FilterItem label="Storage" options={["64GB", "128GB", "256GB", "512GB", "1TB"]} />
                    <FilterItem label="Network" options={["5G", "4G"]} />

                    <div>
                        <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Price Range</h4>
                        <input type="range" className="w-full accent-primary" min="0" max="2000" />
                        <div className="flex justify-between text-xs mt-2 text-zinc-500 dark:text-zinc-400">
                            <span>$0</span>
                            <span>$2000</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-8 bg-accent/30 dark:bg-zinc-900/30 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <p className="text-zinc-500 dark:text-zinc-400">Showing <span className="text-zinc-900 dark:text-white font-bold">{products.length}</span> smartphones</p>
                        <select className="bg-transparent border-none focus:ring-0 font-bold text-sm cursor-pointer text-zinc-900 dark:text-white">
                            <option className="bg-white dark:bg-zinc-900">Sort by: Newest</option>
                            <option className="bg-white dark:bg-zinc-900">Price: Low to High</option>
                            <option className="bg-white dark:bg-zinc-900">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-5 group flex flex-col relative"
                            >
                                <div className="aspect-[4/5] bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl mb-4 flex items-center justify-center transition-colors group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800">
                                    <Smartphone className="w-20 h-20 text-zinc-300 dark:text-zinc-700" />
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{product.name}</h3>
                                        <span className="flex items-center text-xs bg-yellow-400/20 text-yellow-600 px-2 py-0.5 rounded-full">
                                            <Star className="w-3 h-3 mr-1 fill-yellow-600" /> 4.9
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">{product.brand} | {product.ram} / {product.storage}</p>

                                    <div className="mt-auto flex items-center justify-between">
                                        <div>
                                            <span className="text-xl font-bold text-zinc-900 dark:text-white">${product.price}</span>
                                            <p className="text-[10px] text-green-500 font-bold">In Stock</p>
                                        </div>
                                        <button className="bg-foreground text-background p-3 rounded-2xl hover:scale-110 transition-transform">
                                            <ShoppingCart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Smartphone, ShoppingCart, ShieldCheck, Truck, RefreshCw,
    MessageCircle, Heart, Share2, Star, CheckCircle2
} from "lucide-react";

export default function ProductDetail() {
    const [selectedImg, setSelectedImg] = useState(0);
    const [selectedStorage, setSelectedStorage] = useState("256GB");

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-16">
                {/* Left: Image Gallery */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-square bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] p-12 flex items-center justify-center relative border border-zinc-200 dark:border-zinc-800"
                    >
                        <Smartphone className="w-64 h-64 text-zinc-200 dark:text-zinc-800" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                    </motion.div>

                    <div className="grid grid-cols-4 gap-4">
                        {[0, 1, 2, 3].map((i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedImg(i)}
                                className={`aspect-square rounded-2xl border-2 transition-all p-4 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 ${selectedImg === i ? "border-primary" : "border-transparent"
                                    }`}
                            >
                                <Smartphone className="w-8 h-8 text-zinc-400 dark:text-zinc-600" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Info */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase">Top Rated</span>
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                            </div>
                            <span className="text-sm text-zinc-500 dark:text-zinc-400">(120+ Reviews)</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">iPhone 15 Pro Max</h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 mt-2">Titanium. So strong. So light. So Pro.</p>
                    </div>

                    <div className="flex items-baseline space-x-4">
                        <span className="text-4xl font-bold text-zinc-900 dark:text-white">$1,199</span>
                        <span className="text-xl text-zinc-400 dark:text-zinc-500 line-through">$1,299</span>
                        <span className="text-green-500 font-bold">Save $100</span>
                    </div>

                    {/* Variant Selector */}
                    <div>
                        <h4 className="font-bold mb-4 text-zinc-900 dark:text-white">Storage Capacity</h4>
                        <div className="flex gap-4">
                            {["128GB", "256GB", "512GB", "1TB"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSelectedStorage(s)}
                                    className={`px-6 py-3 rounded-2xl border-2 transition-all font-medium ${selectedStorage === s ? "border-primary bg-primary/5 text-primary" : "border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                        <button className="flex-1 bg-primary text-white py-5 rounded-3xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center space-x-2">
                            <ShoppingCart className="w-6 h-6" />
                            <span>Add to Cart</span>
                        </button>
                        <button className="px-6 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-500">
                            <Heart className="w-6 h-6" />
                        </button>
                        <button className="px-6 border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-500">
                            <Share2 className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            <Truck className="w-5 h-5 text-primary" />
                            <span>Free Delivery</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <span>1 Year Warranty</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            <RefreshCw className="w-5 h-5 text-primary" />
                            <span>7-Day Replacement</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Genuine Product</span>
                        </div>
                    </div>

                    <button className="w-full bg-[#25D366] text-white py-4 rounded-3xl font-bold flex items-center justify-center space-x-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>Order on WhatsApp</span>
                    </button>
                </div>
            </div>

            {/* Full Specs Table */}
            <section className="mt-24">
                <h2 className="text-3xl font-bold mb-12 text-zinc-900 dark:text-white">Technical Specifications</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <SpecRow label="Processor" value="A17 Pro chip" />
                        <SpecRow label="Display" value='6.7" Super Retina XDR' />
                        <SpecRow label="Camera" value="48MP Main | 12MP Ultra Wide | 5x Telephoto" />
                        <SpecRow label="Safety" value="Crash Detection" />
                    </div>
                    <div className="space-y-4">
                        <SpecRow label="Charging" value="USB-C (USB 3 support)" />
                        <SpecRow label="Face ID" value="Yes" />
                        <SpecRow label="Network" value="5G Ready" />
                        <SpecRow label="Resistance" value="IP68 Water Resistance" />
                    </div>
                </div>
            </section>
        </div>
    );
}

const SpecRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between py-4 border-b border-zinc-100 dark:border-zinc-900">
        <span className="text-zinc-500 dark:text-zinc-400">{label}</span>
        <span className="font-bold text-zinc-900 dark:text-white">{value}</span>
    </div>
);

"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const brands = [
    { name: "Apple", logo: "🍎" },
    { name: "Samsung", logo: "📱" },
    { name: "OnePlus", logo: "⚡" },
    { name: "Google", logo: "G" },
    { name: "Xiaomi", logo: "X" },
    { name: "Oppo", logo: "O" },
    { name: "Vivo", logo: "V" },
    { name: "Realme", logo: "R" },
    { name: "Motorola", logo: "M" },
    { name: "Asus", logo: "A" },
    { name: "Nothing", logo: "N" },
];

const BrandBar = () => {
    return (
        <div className="w-full tricolor-bg py-10 my-10 border-y-4 border-black/10 overflow-hidden relative shadow-inner">
            <div className="flex animate-scroll whitespace-nowrap">
                {/* Double the brands for infinite loop effect */}
                {[...brands, ...brands].map((brand, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.15, rotate: -2 }}
                        className="inline-flex items-center space-x-4 px-12 cursor-pointer group py-3 transition-all"
                    >
                        <div className="w-16 h-16 rounded-full bg-black border-2 border-white/20 flex items-center justify-center group-hover:tiger-bg transition-all shadow-2xl overflow-hidden">
                            <span className="text-3xl grayscale group-hover:grayscale-0 transition-all drop-shadow-lg">
                                {brand.logo}
                            </span>
                        </div>
                        <span className="text-base font-black uppercase tracking-tighter text-black group-hover:tiger-text transition-all drop-shadow-sm">
                            {brand.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    display: inline-flex;
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default BrandBar;

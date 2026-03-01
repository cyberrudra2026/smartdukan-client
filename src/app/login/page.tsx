"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Mail, Lock, ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center -mt-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-2xl border border-zinc-100 dark:border-zinc-800"
            >
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Welcome Back</h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2">Enter your credentials to access your account</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold ml-1 text-zinc-700 dark:text-zinc-300">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-primary transition-colors" />
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full pl-12 pr-4 py-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-zinc-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Password</label>
                            <button type="button" className="text-xs text-primary font-bold hover:underline">Forgot Password?</button>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-primary transition-colors" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-zinc-900 dark:text-white"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 hover:scale-[1.02] transition-transform">
                        <span>Sign In</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-zinc-900 px-4 text-zinc-500">Or continue with</span></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <SocialButton icon={<Github className="w-5 h-5" />} label="GitHub" />
                    <SocialButton icon={<span className="font-bold">G</span>} label="Google" />
                </div>

                <p className="text-center mt-10 text-zinc-500 dark:text-zinc-400">
                    Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Sign up</Link>
                </p>
            </motion.div>
        </div>
    );
}

const SocialButton = ({ icon, label }: { icon: any, label: string }) => (
    <button className="flex items-center justify-center space-x-3 py-3 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors text-zinc-700 dark:text-zinc-300">
        {icon}
        <span className="font-medium text-sm">{label}</span>
    </button>
);

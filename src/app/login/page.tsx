"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://smartdukan-api.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login Successful!");
        window.location.href = "/";
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      alert("Server Error");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center -mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-2xl border"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Smartphone className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 mt-2">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-sm font-bold">Email</label>
            <div className="relative mt-2">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 border rounded-xl"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold">Password</label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 border rounded-xl"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition"
          >
            Sign In
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          Don’t have an account?{" "}
          <Link href="/register" className="text-orange-500 font-bold">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    LayoutDashboard, Package, ShoppingBag, Users,
    BarChart3, Settings, DollarSign, PlusCircle
} from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
            {/* Admin Sidebar */}
            <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-6 hidden lg:block">
                <div className="font-bold text-xl mb-12 text-primary">Admin Panel</div>
                <nav className="space-y-2">
                    <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active />
                    <SidebarItem icon={<Package />} label="Products" />
                    <SidebarItem icon={<ShoppingBag />} label="Orders" />
                    <SidebarItem icon={<Users />} label="Customers" />
                    <SidebarItem icon={<BarChart3 />} label="Analytics" />
                    <SidebarItem icon={<Settings />} label="Settings" />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold font-primary">Overview</h1>
                    <button className="bg-primary text-white px-6 py-2 rounded-xl font-bold flex items-center space-x-2">
                        <PlusCircle className="w-5 h-5" />
                        <span>Add Product</span>
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatCard label="Total Revenue" value="$45,231" icon={<DollarSign />} color="text-green-500" />
                    <StatCard label="Total Orders" value="156" icon={<ShoppingBag />} color="text-blue-500" />
                    <StatCard label="Total Customers" value="842" icon={<Users />} color="text-purple-500" />
                    <StatCard label="Active Stock" value="12" icon={<Package />} color="text-orange-500" />
                </div>

                {/* Recent Orders Table */}
                <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                    <div className="p-6 border-b border-zinc-100 dark:border-zinc-800">
                        <h2 className="font-bold text-xl">Recent Orders</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-zinc-50 dark:bg-zinc-950 text-secondary text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Order ID</th>
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-950/50 transition-colors">
                                        <td className="px-6 py-4 font-mono text-sm text-secondary">#SD-9842{i}</td>
                                        <td className="px-6 py-4 font-medium">John Doe</td>
                                        <td className="px-6 py-4">iPhone 15 Pro</td>
                                        <td className="px-6 py-4 font-bold">$999</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full">
                                                DELIVERED
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

const SidebarItem = ({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
    <div className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-colors ${active ? "bg-primary text-white" : "text-secondary hover:bg-zinc-100 dark:hover:bg-zinc-900"
        }`}>
        {React.cloneElement(icon, { size: 20 })}
        <span className="font-medium">{label}</span>
    </div>
);

const StatCard = ({ label, value, icon, color }: { label: string, value: string, icon: any, color: string }) => (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800">
        <div className={`w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-4 ${color}`}>
            {React.cloneElement(icon, { size: 24 })}
        </div>
        <div className="text-secondary text-sm font-medium">{label}</div>
        <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
);

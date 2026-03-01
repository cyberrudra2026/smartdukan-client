"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
    const { cart, removeFromCart, total } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
                <div className="w-24 h-24 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-zinc-300" />
                </div>
                <h1 className="text-2xl font-bold">Your cart is empty</h1>
                <p className="text-secondary">Looks like you haven't added anything yet.</p>
                <Link href="/shop" className="bg-primary text-white px-8 py-3 rounded-full font-bold">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-12">Shopping Bag</h1>

            <div className="space-y-6">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center space-x-6">
                            <div className="w-20 h-20 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">📱</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{item.name}</h3>
                                <p className="text-sm text-secondary">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-8">
                            <span className="font-bold text-xl">${item.price * item.quantity}</span>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] border border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl text-secondary">Total Amount</span>
                    <span className="text-4xl font-bold">${total}</span>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-3xl font-bold text-lg flex items-center justify-center space-x-2 hover:scale-[1.02] transition-transform">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}

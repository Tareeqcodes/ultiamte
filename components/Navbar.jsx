"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ scrolled }) {
  const navItems = ["Services", "Paint", "About", "Contact"];
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-black tracking-tight text-gray-900"
        >
          <span className="text-yellow-600">UNLIMITED</span> BUILD ZONE
        </motion.h1>
        <nav className="hidden md:flex gap-8 font-semibold text-sm">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-yellow-600 font-semibold transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
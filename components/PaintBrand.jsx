"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PaintBrand({ name, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <h5 className="font-semibold text-gray-900">{name}</h5>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
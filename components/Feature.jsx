"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Feature({ icon, title }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-yellow-50 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
        {icon}
      </div>
      <div>
        <span className="text-sm font-semibold tracking-wide text-gray-900">
          {title}
        </span>
        <div className="w-8 h-0.5 bg-yellow-500 mt-2"></div>
      </div>
    </motion.div>
  );
}
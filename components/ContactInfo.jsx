"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function ContactInfo({ icon, title, content, link }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col p-6 bg-white border border-gray-100 rounded-2xl hover:border-yellow-200 transition-colors"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
          {icon}
        </div>
        <h5 className="font-semibold text-sm text-gray-900">{title}</h5>
      </div>
      
      <div>
        {link ? (
          <a
            href={link}
            className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-sm text-gray-600">{content}</p>
        )}
      </div>
    </motion.div>
  );
}
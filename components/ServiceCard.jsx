"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function ServiceCard({ 
  title, 
  description, 
  imageUrl, 
  items = [],
  subtitle = "",
  index 
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative h-full min-h-48 rounded-3xl overflow-hidden border border-gray-100 hover:border-yellow-200 transition-all duration-500 hover:shadow-2xl"
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-8 z-10">
        <div>
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-6 group-hover:bg-yellow-500/20 group-hover:border-yellow-400/30 transition-all duration-300">
            <div className="text-2xl font-bold text-white">{index + 1}</div>
          </div>
          
          {/* Title and Subtitle */}
          <div className="mb-4">
            <h4 className="font-bold text-2xl md:text-3xl mb-2 text-white leading-tight">{title}</h4>
            {subtitle && (
              <p className="text-yellow-300 font-semibold text-sm uppercase tracking-wider mb-3">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-200 leading-relaxed mb-6 text-sm md:text-base">
            {description}
          </p>
          
          {/* Feature Items */}
          {items.length > 0 && (
            <div className="space-y-3 mb-6">
              {items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Action Button */}
        <button className="group/btn w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 rounded-xl font-semibold hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg">
          Get Quote
          <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
        </button>
      </div>
    </motion.div>
  );
}
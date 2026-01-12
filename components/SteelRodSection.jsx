"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Ruler, Shield, Truck, Package } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function SteelRodSection() {
  const rodTypes = [
    {
      name: "High Tensile Steel Rods",
      diameter: "8mm - 32mm",
      grade: "TMT 500 & 550",
      description: "Premium quality TMT bars with excellent yield strength for heavy construction",
      application: "High-rise buildings, bridges, industrial structures",
      image: "/77.webp"
    },
    {
      name: "Mild Steel Rods",
      diameter: "6mm - 25mm",
      grade: "MS Grade 40",
      description: "Versatile rods suitable for general construction and reinforcement",
      application: "Residential buildings, slabs, columns, beams",
      image: "/55.webp"
    },
    {
      name: "Corrosion Resistant Rods",
      diameter: "10mm - 20mm",
      grade: "CRS Grade 60",
      description: "Specially treated rods for marine and corrosive environments",
      application: "Coastal structures, bridges, industrial zones",
      image: "/66.webp"
    }
  ];

  const rodSpecifications = [
    { spec: "Yield Strength", value: "500 N/mm²", icon: Shield },
    { spec: "Elongation", value: "18% Minimum", icon: Ruler },
    { spec: "Bend Test", value: "180° without crack", icon: ArrowRight },
    { spec: "Delivery Time", value: "24-48 Hours", icon: Truck },
    { spec: "Packaging", value: "Bundled & Tagged", icon: Package },
    { spec: "Quality Cert", value: "ISO 9001:2015", icon: Shield },
  ];

  const applications = [
    "High-rise Building Construction",
    "Bridge & Flyover Projects",
    "Industrial Plant Structures",
    "Residential Complexes",
    "Commercial Buildings",
    "Water Treatment Plants",
    "Road & Highway Projects",
    "Warehouse Construction"
  ];

  return (
    <motion.section
      id="steel-rods"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          variants={fadeInUp} 
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm tracking-wide uppercase mb-4">
            <div className="w-8 h-px bg-yellow-500"></div>
            Steel Reinforcement
            <div className="w-8 h-px bg-yellow-500"></div>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">
            Premium <span className="bg-linear-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Steel Rods & Reinforcement
            </span>
          </h3>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality steel rods and reinforcement bars for all construction needs. 
            We supply locally manufactured and imported steel rods with guaranteed strength and durability.
          </p>
        </motion.div>

        {/* Rod Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {rodTypes.map((rod, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-yellow-300 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={rod.image} 
                  alt={rod.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  In Stock
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{rod.name}</h4>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold">Diameter:</span> {rod.diameter}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold">Grade:</span> {rod.grade}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {rod.description}
                </p>
                
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold">Best for:</span> {rod.application}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Need Steel Rods for Your Project?
            </h4>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant quotes, technical specifications, and delivery schedules for your steel rod requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors shadow-lg flex items-center justify-center gap-2">
                Request Quote for Steel Rods
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="group border-2 border-yellow-500 bg-yellow-50 text-yellow-700 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-100 transition-colors flex items-center justify-center gap-2">
                Download Technical Specs
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";
import { PaintBucket, Check, Globe } from "lucide-react";
import PaintBrand from "./PaintBrand";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function PaintSection() {
  const categories = [
    {
      name: "Interior Paints",
      description:
        "Washable, low-VOC, and decorative paints for indoor spaces",
    },
    {
      name: "Exterior Coatings",
      description:
        "Weather-resistant paints and protective coatings for facades",
    },
    {
      name: "Industrial Paints",
      description:
        "Heavy-duty coatings for factories, warehouses, and infrastructure",
    },
    {
      name: "Specialty Finishes",
      description:
        "Textured, metallic, and decorative specialty paints",
    },
  ];

  const benefits = [
    "Premium quality from trusted global brands",
    "VOC-compliant and environmentally friendly",
    "Wide color range with custom mixing available",
    "Technical support and application guidance",
    "Bulk pricing for contractors and developers",
    "Timely delivery across all regions",
  ];

  const brands = [
    "Dulux",
    "Berger",
    "Canopy",
    "Swan",
    "Liquid",
    "Noble",
    
  ];

  return (
    <motion.section
      id="paint"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-linear-to-b from-yellow-50 to-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-6">
            <PaintBucket className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
            Premium Paint Solutions
          </h3>
          <p className="text-gray-600 text-lg">
            We supply top-quality paints and coatings from leading global
            brands for residential, commercial, and industrial applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <PaintBrand key={index} {...category} />
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="bg-black text-white rounded-3xl p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-6">
                Why Choose Our Paints?
              </h4>
              <ul className="space-y-4">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-100 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-black" />
                </div>
                <h5 className="text-sm md:text-lg font-bold text-gray-900">
                  Global Brands Available
                </h5>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg text-center"
                  >
                    <span className="font-semibold text-gray-900">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
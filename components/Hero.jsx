"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, PaintBucket, Boxes, Warehouse, Truck, Ship, Shield } from "lucide-react";
import Feature from "./Feature";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Hero() {
  const features = [
    { icon: <Boxes size={20} />, title: "Material Supply" },
    { icon: <PaintBucket size={20} />, title: "Paint Solutions" },
    { icon: <Truck size={20} />, title: "Nationwide Distribution" },
    { icon: <Ship size={20} />, title: "Import & Export" },
    { icon: <Warehouse size={20} />, title: "Bulk & Retail" },
    { icon: <Shield size={20} />, title: "Quality Guaranteed" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-yellow-50 to-white"></div>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs uppercase tracking-[0.3em] text-yellow-600 font-bold mb-6"
          >
            Building Materials • Import • Export
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black leading-[1.1] mb-8"
          >
            Reliable Supply, Distribution of Building Materials &{" "}
            <span className="text-yellow-600">Paint Supply</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-xl mb-12 leading-relaxed"
          >
            Unlimited Build Zone is your trusted partner for high-quality
            building materials, premium paints, and comprehensive distribution
            services across local and international markets.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors shadow-lg"
            >
              Get in Touch <ArrowUpRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#paint"
              className="inline-flex items-center justify-center text-lg gap-3 border-2 border-yellow-400 bg-yellow-50 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-100 transition-colors"
            >
              <PaintBucket size={18} /> Our Services
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-linear-to-br from-yellow-100 to-yellow-200 rounded-3xl blur-3xl opacity-40"></div>
          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Shield, Clock, Globe, Truck } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

export default function AboutSection() {
  const companyValues = [
    "Strong supplier and manufacturer partnerships",
    "Wide range of premium paint brands",
    "Scalable logistics and distribution network",
    "Compliance with international trade standards",
    "Technical expertise in material application",
    "Focused on long‑term client relationships",
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality",
      description:
        "We deliver only premium materials that meet international standards",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description:
        "Timely delivery and consistent supply chain management",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description:
        "Sourcing from and distributing to markets worldwide",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Service",
      description:
        "Comprehensive support from consultation to delivery",
    },
  ];

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div variants={fadeInUp}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-yellow-500"></div>
            <span className="text-sm font-bold text-yellow-600 uppercase tracking-wide">
              About Us
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black mb-8 text-gray-900">
            Building Trust in Construction
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Unlimited Build Zone operates at the intersection of construction,
            logistics, and global trade. Our focus is on reliability, quality
            assurance, and timely delivery ensuring that builders and
            businesses always have access to the materials they need, when
            they need them.
          </p>

          <div className="space-y-4">
            {companyValues.map((item, index) => (
              <motion.div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          className="bg-white border border-gray-100 rounded-3xl p-10 shadow-lg"
        >
          <h4 className="font-bold text-2xl mb-8 text-gray-900">
            Our Values
          </h4>
          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">
                    {value.title}
                  </h5>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
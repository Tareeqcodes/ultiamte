"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ServicesSection() {
  const services = [
    {
      title: "Building Materials Supply",
      subtitle: "Quality Foundation",
      description:
        "Premium cement, structural steel, roofing materials, and all essential construction inputs for durable and lasting structures.",
      imageUrl:
        "/22.jpg",
      items: [
        "Cement & Concrete",
        "Structural Steel",
        "Bricks & Blocks",
        "Roofing Materials",
        "Aggregates & Sand",
      ],
    },
    {
      title: "Premium Paint Solutions",
      subtitle: "Perfect Finish",
      description:
        "Interior, exterior, and industrial paints & coatings from leading global brands for every surface and application.",
      imageUrl:
        "/2.jpg",
      items: [
        "Interior & Exterior Paints",
        "Industrial Coatings",
        "Decorative Finishes",
        "Custom Color Matching",
        "Protective Coatings",
      ],
    },
    {
      title: "Import Operations",
      subtitle: "Global Sourcing",
      description:
        "Sourcing and importing high‑grade materials from international manufacturers and suppliers worldwide.",
      imageUrl:
        "/11.jpg",
      items: [
        "International Sourcing",
        "Quality Inspection",
        "Logistics Management",
        "Customs Clearance",
        "Documentation",
      ],
    },
    {
      title: "Export Operations",
      subtitle: "Global Distribution",
      description:
        "Exporting premium locally sourced building materials to regional and international markets with efficiency.",
      imageUrl:
        "/33.jpg",
      items: [
        "Market Analysis",
        "Export Documentation",
        "Quality Certification",
        "Shipping & Logistics",
        "After-sales Support",
      ],
    },
  ];

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - Light Theme */}
        <motion.div
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm tracking-wide uppercase mb-4">
            <div className="w-8 h-px bg-yellow-500"></div>
            Our Services
            <div className="w-8 h-px bg-yellow-500"></div>
          </div>

          <h3 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">
            Comprehensive{" "}
            <span className="bg-linear-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Building Solutions
            </span>
          </h3>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End‑to‑end sourcing, trade, and distribution services tailored for
            modern construction and development needs.
          </p>
        </motion.div>

        {/* Services Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import ContactInfo from "./ContactInfo";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ContactSection() {
  const contactDetails = [
    {
      icon: <Phone size={18} />,
      title: "Call Us",
      content: "+2348126907506",
      link: "tel:+2348126907506",
    },
    {
      icon: <Mail size={18} />,
      title: "Email Us",
      content: "info@unlimitedbuildzone.com",
      link: "mailto:info@unlimitedbuildzone.com",
    },
    {
      icon: <MapPin size={18} />,
      title: "Visit Us",
      content: "Global Distribution Network",
    },
  ];

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-linear-to-b from-white to-yellow-50 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-black mb-6 text-gray-900"
          >
            Let's Build Together
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-lg mb-12"
          >
            Reach out to discuss supply contracts, bulk orders, paint
            requirements, import/export partnerships, or distribution
            opportunities.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactDetails.map((detail, index) => (
              <ContactInfo key={index} {...detail} />
            ))}
          </div>

          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:info@unlimitedbuildzone.com"
            className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-900 transition-colors shadow-lg text-lg"
          >
            Start Your Project <ArrowUpRight size={20} />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
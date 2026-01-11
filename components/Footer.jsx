"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="border-t border-gray-100 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="text-yellow-400">UNLIMITED</span> BUILD ZONE
            </h4>
            <p className="text-sm text-gray-300">
              Your trusted partner for premium building materials and paint
              solutions.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Building Materials</li>
              <li>Paint Supply</li>
              <li>Import/Export</li>
              <li>Distribution</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-yellow-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#paint" className="hover:text-yellow-400">
                  Paints
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <div className="space-y-2 text-sm text-gray-300">
              <p>info@unlimitedbuildzone.com</p>
              <p>+234 8126907506</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Unlimited Build Zone. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
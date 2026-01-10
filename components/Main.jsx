'use client';
import React from "react";
import { ArrowUpRight, Ship, Warehouse, Truck, Boxes } from "lucide-react";

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700">
        {icon}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-black transition">
      <h4 className="font-semibold mb-3">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function UnlimitedBuildZoneLanding() {
  return (
    <main className="bg-white text-black min-h-screen font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">Unlimited Build Zone</h1>
          <nav className="hidden md:flex gap-8 text-sm text-gray-700">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Building Materials • Import • Export</p>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Reliable Supply & Distribution of <span className="text-gray-500">Building Materials</span>
            </h2>
            <p className="text-gray-600 max-w-xl mb-10">
              Unlimited Build Zone is a trusted partner for the supply, sales, distribution,
              import, and export of high‑quality building materials across local and international markets.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-sm hover:bg-gray-800 transition"
              >
                Get in Touch <ArrowUpRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-xl text-sm hover:border-black transition"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl blur-3xl opacity-60" />
            <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <Feature icon={<Boxes />} title="Material Supply" />
                <Feature icon={<Truck />} title="Nationwide Distribution" />
                <Feature icon={<Ship />} title="Import & Export" />
                <Feature icon={<Warehouse />} title="Bulk & Retail Sales" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Supply of Building Materials"
              description="Cement, steel, blocks, aggregates, roofing materials, and other essential construction inputs."
            />
            <ServiceCard
              title="Sales & Distribution"
              description="Efficient distribution channels serving contractors, developers, and retailers."
            />
            <ServiceCard
              title="Import Operations"
              description="Sourcing high‑grade materials from international manufacturers and suppliers."
            />
            <ServiceCard
              title="Export Operations"
              description="Exporting locally sourced building materials to regional and global markets."
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">About Unlimited Build Zone</h3>
            <p className="text-gray-700 leading-relaxed">
              Unlimited Build Zone operates at the intersection of construction, logistics, and global trade.
              Our focus is on reliability, quality assurance, and timely delivery—ensuring that builders and
              businesses always have access to the materials they need, when they need them.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <ul className="space-y-6 text-gray-700">
              <li>• Strong supplier and manufacturer partnerships</li>
              <li>• Scalable logistics and distribution network</li>
              <li>• Compliance with international trade standards</li>
              <li>• Focused on long‑term client relationships</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-gray-600 mb-10">
              Reach out to discuss supply contracts, bulk orders, import/export partnerships,
              or distribution opportunities.
            </p>
            <a
              href="mailto:info@unlimitedbuildzone.com"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
            >
              Contact Us <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Unlimited Build Zone</span>
          <span>Supply • Sales • Distribution • Import • Export</span>
        </div>
      </footer>
    </main>
  );
}
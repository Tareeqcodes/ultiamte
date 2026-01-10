"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Ship,
  Warehouse,
  Truck,
  Boxes,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Check,
  PaintBucket,
  Globe,
  Shield,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function Feature({ icon, title }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-yellow-50 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
        {icon}
      </div>
      <div>
        <span className="text-sm font-semibold tracking-wide text-gray-900">
          {title}
        </span>
        <div className="w-8 h-0.5 bg-yellow-500 mt-2"></div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-yellow-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 mb-6">
          <ChevronRight className="transform group-hover:translate-x-1 transition-transform" />
        </div>
        <h4 className="font-bold text-lg mb-4 text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function ContactInfo({ icon, title, content, link }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col p-6 bg-white border border-gray-100 rounded-2xl hover:border-yellow-200 transition-colors"
    >
      {/* Icon and Title in horizontal flex */}
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

function PaintBrand({ name, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <h5 className="font-semibold text-gray-900">{name}</h5>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function UnlimitedBuildZoneLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans antialiased">
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm"
            : "bg-white/80 backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl font-black tracking-tight text-gray-900"
          >
            <span className="text-yellow-600">UNLIMITED</span> BUILD ZONE
          </motion.h1>
          <nav className="hidden md:flex gap-8 font-semibold text-sm">
            {["Services", "Paint", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-yellow-600 font-semibold transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* HERO */}
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
                {[
                  { icon: <Boxes size={20} />, title: "Material Supply" },
                  { icon: <PaintBucket size={20} />, title: "Paint Solutions" },
                  {
                    icon: <Truck size={20} />,
                    title: "Nationwide Distribution",
                  },
                  { icon: <Ship size={20} />, title: "Import & Export" },
                  { icon: <Warehouse size={20} />, title: "Bulk & Retail" },
                  { icon: <Shield size={20} />, title: "Quality Guaranteed" },
                ].map((feature, index) => (
                  <Feature key={index} {...feature} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div variants={fadeInUp} className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-yellow-500"></div>
              <span className="text-sm font-bold text-yellow-600 uppercase tracking-wide">
                Our Services
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
              What We Do
            </h3>
            <p className="text-gray-600 text-lg">
              End‑to‑end sourcing, trade, and distribution services tailored for
              modern Building and construction demands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Building Materials Supply",
                description:
                  "Cement, steel, blocks, aggregates, roofing materials, and essential construction inputs.",
              },
              {
                title: "Premium Paint Supply",
                description:
                  "Interior, exterior, industrial paints & coatings from leading global brands.",
              },
              {
                title: "Import Operations",
                description:
                  "Sourcing high‑grade materials from international manufacturers and suppliers.",
              },
              {
                title: "Export Operations",
                description:
                  "Exporting locally sourced building materials to regional and global markets.",
              },
            ].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* PAINT SECTION */}
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
            {[
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
            ].map((category, index) => (
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
                  {[
                    "Premium quality from trusted global brands",
                    "VOC-compliant and environmentally friendly",
                    "Wide color range with custom mixing available",
                    "Technical support and application guidance",
                    "Bulk pricing for contractors and developers",
                    "Timely delivery across all regions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-100 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-black" />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900">
                    Global Brands Available
                  </h5>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Dulux",
                    "Berger",
                    "Nippon",
                    "Asian",
                    "Kansai",
                    "AkzoNobel",
                    "Jotun",
                    "Sherwin-Williams",
                  ].map((brand, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 rounded-lg text-center"
                    >
                      <span className="font-medium text-gray-900">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT */}
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
              {[
                "Strong supplier and manufacturer partnerships",
                "Wide range of premium paint brands",
                "Scalable logistics and distribution network",
                "Compliance with international trade standards",
                "Technical expertise in material application",
                "Focused on long‑term client relationships",
              ].map((item, index) => (
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
              {[
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
              ].map((value, index) => (
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

      {/* CONTACT */}
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
              <ContactInfo
                icon={<Phone size={18} />}
                title="Call Us"
                content="+2348126907506"
                link="tel:+2348126907506"
              />
              <ContactInfo
                icon={<Mail size={18} />}
                title="Email Us"
                content="info@unlimitedbuildzone.com"
                link="mailto:info@unlimitedbuildzone.com"
              />
              <ContactInfo
                icon={<MapPin size={18} />}
                title="Visit Us"
                content="Global Distribution Network"
              />
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

      {/* FOOTER */}
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
    </main>
  );
}

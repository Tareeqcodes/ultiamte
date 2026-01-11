"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PaintSection from "@/components/PaintSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingButton from "@/components/FloatingBotton";
import Footer from "@/components/Footer";

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
      <Navbar scrolled={scrolled} />
      <Hero />
      <ServicesSection />
      <PaintSection />
      <AboutSection />
      <ContactSection />
      <FloatingButton />
      <Footer />
    </main>
  );
}
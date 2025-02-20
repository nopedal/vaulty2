"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Shield, Lock, Key, Sparkles, Command, Layout } from 'lucide-react';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

const Navigation = () => (
  <nav>
    <ul className="flex items-center space-x-8">
      <li>
        <Link href="/features" className="text-sm text-white/70 hover:text-white transition-colors">
          Features
        </Link>
      </li>
      <li>
        <Link href="/pricing" className="text-sm text-white/70 hover:text-white transition-colors">
          Pricing
        </Link>
      </li>
      <li>
        <Link href="/login" className="text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200">
          Sign in
        </Link>
      </li>
      <li>
        <Link href="/signup" className="text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-200">
          Get Started
        </Link>
      </li>
    </ul>
  </nav>
);

const HeroSection = () => (
  <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 transition-colors cursor-pointer">
      <Command size={14} className="mr-2" /> Built for the modern web
    </div>
    <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
      Secure
      <span className="inline-block mx-4 relative">
        <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">digital</span>
        <svg className="absolute -bottom-8 left-0 w-full" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12C25 12 75 12 100 12" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="12" x2="100" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10B981"/>
              <stop offset="0.5" stopColor="#3B82F6"/>
              <stop offset="1" stopColor="#8B5CF6"/>
            </linearGradient>
          </defs>
        </svg>
      </span>
      assets
    </h1>
    <p className="text-lg text-white/70 max-w-2xl mx-auto">
      Experience the future of digital asset protection with our intuitive, powerful, and secure vault system.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
      <Link href="/dashboard" className="group px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:opacity-90 transition-all duration-200 font-medium inline-flex items-center justify-center">
        Start Building
        <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link href="/demo" className="group px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 font-medium inline-flex items-center justify-center">
        Live Demo
        <Layout size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
      </Link>
    </div>
  </div>
);

const FeaturesGrid = () => {
  const features = [
    {
      icon: Lock,
      title: "Bank-grade Security",
      description: "Enterprise-level encryption keeps your assets safe and secure.",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Zero-knowledge architecture ensures your data remains private.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Key,
      title: "Easy Integration",
      description: "Connect with your favorite tools in just a few clicks.",
      gradient: "from-yellow-400 to-red-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-32">
      {features.map((feature, index) => (
        <div key={index} className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6`}>
            <feature.icon className="w-full h-full text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-white/70">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#030014] text-white py-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-green-400 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-lg font-semibold">Vaulty2</span>
        </Link>
        <ul className="flex items-center space-x-8">
          <li>
            <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-sm text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-blue-500/30 selection:text-white">
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-green-400 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-semibold">Vaulty2</span>
          </Link>
          <Navigation />
        </div>
      </header>
      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <HeroSection />
          <FeaturesGrid />
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-green-400/30 to-transparent rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-purple-500/30 to-transparent rounded-full blur-3xl opacity-20" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
// components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-lg font-semibold">Vaulty2</span>
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/features"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-200"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
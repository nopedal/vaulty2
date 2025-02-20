// components/Hero.tsx
import Link from 'next/link';
import { ChevronRight, Shield, Lock, Key, Command, Layout } from 'lucide-react';

export default function Hero() {
  return (
    <main className="relative pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 transition-colors cursor-pointer">
            <Command size={14} className="mr-2" /> Built for the modern web
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
            Secure
            <span className="inline-block mx-4 relative">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">digital</span>
              <svg className="absolute -bottom-8 left-0 w-full" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C25 12 75 12 100 12" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="12" x2="100" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6"/>
                    <stop offset="0.5" stopColor="#A855F7"/>
                    <stop offset="1" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            assets
          </h1>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience the future of digital asset protection with our intuitive, 
            powerful, and secure vault system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <Link
              href="/dashboard"
              className="group px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all duration-200 font-medium inline-flex items-center justify-center"
            >
              Start Building
              <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="group px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 font-medium inline-flex items-center justify-center"
            >
              Live Demo
              <Layout size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-32">
          {[
            {
              icon: Lock,
              title: "Bank-grade Security",
              description: "Enterprise-level encryption keeps your assets safe and secure.",
              gradient: "from-blue-600 to-cyan-600"
            },
            {
              icon: Shield,
              title: "Privacy First",
              description: "Zero-knowledge architecture ensures your data remains private.",
              gradient: "from-purple-600 to-pink-600"
            },
            {
              icon: Key,
              title: "Easy Integration",
              description: "Connect with your favorite tools in just a few clicks.",
              gradient: "from-orange-600 to-red-600"
            }
          ].map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-500/30 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-purple-500/30 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>
    </main>
  );
}
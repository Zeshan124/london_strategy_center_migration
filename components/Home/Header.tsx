
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>Phone: +44 20 7123 4567</span>
            <span>Email: hello@londonstrategy.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/consultation" className="hover:text-red-400 transition-colors">Free Consultation</Link>
            <Link href="/case-studies" className="hover:text-red-400 transition-colors">Case Studies</Link>
          </div>
        </div>
      </div>
      
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/21157b32f65a0c4c24b8101274f60641/11caa737723ac06453aea8f10ecff760.png" 
                alt="London Strategy Centre"
                className="h-16 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors cursor-pointer">Home</Link>
              <Link href="/about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors cursor-pointer">About</Link>
              <Link href="/services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors cursor-pointer">Services</Link>
              <Link href="/industries" className="text-slate-700 hover:text-slate-900 font-medium transition-colors cursor-pointer">Industries</Link>
              <Link href="/insights" className="text-slate-700 hover:text-slate-900 font-medium transition-colors cursor-pointer">Insights</Link>
              <Link href="/contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors cursor-pointer">Contact</Link>
              <button className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition-colors whitespace-nowrap cursor-pointer">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t py-4">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-slate-700 hover:text-slate-900 font-medium px-4 py-2 cursor-pointer">Home</Link>
                <Link href="/about" className="text-slate-700 hover:text-slate-900 font-medium px-4 py-2 cursor-pointer">About</Link>
                <Link href="/services" className="text-slate-700 hover:text-slate-900 font-medium px-4 py-2 cursor-pointer">Services</Link>
                <Link href="/industries" className="text-slate-700 hover:text-slate-900 font-medium px-4 py-2 cursor-pointer">Industries</Link>
                <Link href="/insights" className="text-slate-700 hover:text-slate-900 font-medium px-4 py-2 cursor-pointer">Insights</Link>
                <Link href="/contact" className="text-slate-700 hover:text-slate-900 font-medium px-4 py-2 cursor-pointer">Contact</Link>
                <button className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition-colors mx-4 whitespace-nowrap cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
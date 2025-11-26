
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '万联节能十五五战略人才引进计划', href: '#', primary: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 print:hidden ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-br-lg rounded-tl-lg"></div>
          <div className="font-bold text-xl tracking-tight text-white">
            万联<span className="text-brand-500">节能</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.primary 
                  ? 'px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-full shadow-lg shadow-brand-900/20' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium block text-center py-2 ${
                  link.primary 
                    ? 'bg-brand-600 text-white rounded-lg' 
                    : 'text-slate-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

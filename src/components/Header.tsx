'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className="fixed z-50 flex justify-between items-center h-[50px] box-border transition-all duration-500"
      style={{
        top: isScrolled ? '20px' : '0px',
        left: isScrolled ? '20px' : '0px',
        right: isScrolled ? '20px' : '0px',
        width: isScrolled ? 'auto' : '100%',
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'var(--background-primary)',
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        border: isScrolled ? '1px solid var(--border-primary)' : 'none',
        borderBottom: isScrolled ? 'none' : '1px solid var(--border-primary)',
        boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.4)' : 'none',
        borderRadius: isScrolled ? '20px' : '0px',
        padding: '12px 40px',
        transform: isScrolled ? 'scale(0.98)' : 'scale(1)'
      }}
    >
      <div className="text-base font-bold">
        <Link href="/" className="flex items-center" style={{color: 'var(--text-primary)', textDecoration: 'none', padding: '0', fontSize: '1rem', fontWeight: '700'}}>
          <Image src="/assets/logo.png" alt="CodeCraft Logo" width={150} height={30} className="h-[30px] w-auto max-w-[150px]" />
        </Link>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center">
        <Link href="/" className="text-[0.9rem] font-normal transition-colors duration-300 hover:text-gray-300" style={{color: 'var(--text-primary)', textDecoration: 'none', padding: '0 12px'}}>Home</Link>
        <Link href="/services" className="text-[0.9rem] font-normal transition-colors duration-300 hover:text-gray-300" style={{color: 'var(--text-primary)', textDecoration: 'none', padding: '0 12px'}}>Services</Link>
        <Link href="/projects" className="text-[0.9rem] font-normal transition-colors duration-300 hover:text-gray-300" style={{color: 'var(--text-primary)', textDecoration: 'none', padding: '0 12px'}}>Projects</Link>
        <Link href="/case-studies" className="text-[0.9rem] font-normal transition-colors duration-300 hover:text-gray-300" style={{color: 'var(--text-primary)', textDecoration: 'none', padding: '0 12px'}}>Case Studies</Link>
        <Link href="/about" className="text-[0.9rem] font-normal transition-colors duration-300 hover:text-gray-300" style={{color: 'var(--text-primary)', textDecoration: 'none', padding: '0 12px'}}>About Us</Link>
        <Link href="/contact" className="text-[0.9rem] font-normal transition-colors duration-300 hover:text-gray-300" style={{color: 'var(--text-primary)', textDecoration: 'none', padding: '0 12px'}}>Contact</Link>
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-800 ml-3">Get a Quote</button>
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span 
          className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          style={{backgroundColor: 'var(--text-primary)'}}
        ></span>
        <span 
          className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
          style={{backgroundColor: 'var(--text-primary)'}}
        ></span>
        <span 
          className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          style={{backgroundColor: 'var(--text-primary)'}}
        ></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="fixed md:hidden z-40 w-full transition-all duration-300"
          style={{
            top: isScrolled ? '90px' : '70px',
            left: isScrolled ? '20px' : '0px',
            right: isScrolled ? '20px' : '0px',
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border-primary)',
            borderRadius: isScrolled ? '16px' : '0px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          <nav className="flex flex-col py-4">
            <Link 
              href="/" 
              className="text-[0.9rem] font-normal transition-colors duration-300 hover:bg-gray-800 px-6 py-3"
              style={{color: 'var(--text-primary)', textDecoration: 'none'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-[0.9rem] font-normal transition-colors duration-300 hover:bg-gray-800 px-6 py-3"
              style={{color: 'var(--text-primary)', textDecoration: 'none'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className="text-[0.9rem] font-normal transition-colors duration-300 hover:bg-gray-800 px-6 py-3"
              style={{color: 'var(--text-primary)', textDecoration: 'none'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/case-studies" 
              className="text-[0.9rem] font-normal transition-colors duration-300 hover:bg-gray-800 px-6 py-3"
              style={{color: 'var(--text-primary)', textDecoration: 'none'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              href="/about" 
              className="text-[0.9rem] font-normal transition-colors duration-300 hover:bg-gray-800 px-6 py-3"
              style={{color: 'var(--text-primary)', textDecoration: 'none'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-[0.9rem] font-normal transition-colors duration-300 hover:bg-gray-800 px-6 py-3"
              style={{color: 'var(--text-primary)', textDecoration: 'none'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-6 py-3">
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

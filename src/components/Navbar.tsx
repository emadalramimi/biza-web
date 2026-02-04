'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { 
      href: '/services',
      label: t('footer.services'),
      children: [
        { href: '/business-development', label: t('nav.business') },
        { href: '/entrepreneurship', label: t('nav.entrepreneurship') },
        { href: '/financial-consulting', label: t('nav.consulting') },
      ]
    },
    { href: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-biza-green/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/biza-logo.png"
                alt="Biza Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-biza-green' : 'text-white'
            }`}>
              {language === 'ar' ? 'بيزه' : 'BIZA'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" suppressHydrationWarning>
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      scrolled
                        ? 'text-gray-700 hover:text-biza-green hover:bg-biza-green/10'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      scrolled
                        ? 'text-gray-700 hover:text-biza-green hover:bg-biza-green/10'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl shadow-biza-green/10 border border-gray-100 overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-gray-700 hover:bg-biza-green/10 hover:text-biza-green transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'text-gray-700 hover:text-biza-green hover:bg-biza-green/10'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn-secondary text-sm"
            >
              {t('nav.getConsultation')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <div className="space-y-2">
                      <span className="block px-4 py-2 text-gray-500 font-medium">
                        {link.label}
                      </span>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-6 py-2 text-gray-700 hover:text-biza-green transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:text-biza-green transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-biza-green transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  {language === 'ar' ? 'English' : 'العربية'}
                </button>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-secondary text-sm"
                >
                  {t('nav.getConsultation')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

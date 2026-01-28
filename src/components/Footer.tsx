'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  MessageCircle
} from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const services = [
    { href: '/business-development', label: t('nav.business') },
    { href: '/entrepreneurship', label: t('nav.entrepreneurship') },
    { href: '/financial-consulting', label: t('nav.consulting') },
  ];

  const socialLinks = [
    { 
      href: 'https://www.instagram.com/biza.om', 
      icon: Instagram, 
      label: 'Instagram' 
    },
    { 
      href: 'https://www.linkedin.com/company/biza-for-financial-services/', 
      icon: Linkedin, 
      label: 'LinkedIn' 
    },
    { 
      href: 'https://wa.me/message/HVVFJVDOVOLRP1', 
      icon: MessageCircle, 
      label: 'WhatsApp' 
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/biza-logo.png"
                  alt="Biza Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">
                {language === 'ar' ? 'بيزه' : 'BIZA'}
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-biza-green transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-biza-yellow">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-biza-green rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-biza-yellow">
              {t('footer.services')}
            </h3>
            <ul className="space-y-4">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-biza-green rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-biza-yellow">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+96877147445"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-biza-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-biza-green" />
                  </div>
                  <span dir="ltr">+968 77147445</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bizaoman.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-biza-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-biza-green" />
                  </div>
                  <span>info@bizaoman.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-biza-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-biza-green" />
                  </div>
                  <span>{t('contact.addressValue')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-start">
              © {new Date().getFullYear()} {language === 'ar' ? 'بيزه للخدمات المالية' : 'Biza Financial Services'}. {t('footer.rights')}.
            </p>
            <a
              href="https://bizaoman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-biza-green text-sm transition-colors"
            >
              bizaoman.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

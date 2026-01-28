'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 start-10 w-20 h-20 opacity-20"
      >
        <Image src="/biza-logo.png" alt="" fill className="object-contain" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 end-10"
      >
        <div className="relative w-48 h-48">
          <Image src="/biza-coin-glod.png" alt="Biza Coin" fill className="object-contain animate-spin-slow" />
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="heading-2 text-white mb-6">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-secondary group flex items-center gap-2"
            >
              {t('cta.button')}
              <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/message/HVVFJVDOVOLRP1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
            <a href="tel:+96877147445" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span dir="ltr">+968 77147445</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a href="mailto:info@bizaoman.com" className="hover:text-white transition-colors">
              info@bizaoman.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

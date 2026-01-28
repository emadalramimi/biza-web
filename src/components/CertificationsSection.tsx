'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const certifications = [
  {
    logo: '/certificates/ODB.png',
    titleKey: 'cert.odb',
    description: {
      ar: 'اعتماد رسمي من بنك التنمية العماني',
      en: 'Official certification from Oman Development Bank'
    }
  },
  {
    logo: '/certificates/MOC.png',
    titleKey: 'cert.moct',
    description: {
      ar: 'تصنيف الدرجة الأولى من وزارة التجارة',
      en: 'First-class rating from Ministry of Commerce'
    }
  },
  {
    logo: '/certificates/invest-oman.png',
    titleKey: 'cert.invest',
    description: {
      ar: 'معتمدون في دراسات الجدوى',
      en: 'Certified for feasibility studies'
    }
  },
];

export default function CertificationsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(61, 154, 126, 0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>
      <div className="absolute top-0 start-1/4 w-96 h-96 bg-biza-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 end-1/4 w-96 h-96 bg-biza-yellow/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 bg-biza-green/20 text-biza-green rounded-full text-sm font-semibold mb-6 border border-biza-green/30"
          >
            {t('cert.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-2 text-white mb-4"
          >
            {language === 'ar' ? 'شريك موثوق ومعتمد' : 'Trusted & Certified Partner'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {language === 'ar' 
              ? 'نحمل شهادات واعتمادات رسمية من أهم المؤسسات الحكومية والمالية في سلطنة عمان'
              : 'We hold official certifications and accreditations from key government and financial institutions in Oman'
            }
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-biza-green/50 transition-all duration-300 hover:shadow-xl hover:shadow-biza-green/10">
                {/* Logo Container with White Background */}
                <div className="relative bg-white p-8 flex items-center justify-center h-64">
                  <div className="relative w-full h-48">
                    <Image
                      src={cert.logo}
                      alt={t(cert.titleKey)}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute top-4 end-4">
                    <div className="w-8 h-8 bg-biza-green rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-gradient-to-b from-slate-800/80 to-slate-900/80">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-biza-green transition-colors duration-300">
                    {t(cert.titleKey)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cert.description[language]}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 start-0 w-full h-1 bg-gradient-to-r from-biza-green to-biza-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800/50 border border-slate-700/50 rounded-full">
            <div className="w-2 h-2 bg-biza-green rounded-full animate-pulse" />
            <span className="text-gray-300 text-sm font-medium">
              {language === 'ar' ? 'جميع الشهادات معتمدة رسمياً ومُحدثة' : 'All certifications are officially verified and up-to-date'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

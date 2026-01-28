'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  FolderKanban, 
  Building2, 
  Receipt,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Calculator,
    titleKey: 'services.financial',
    descKey: 'services.financialDesc',
    href: '/financial-consulting',
  },
  {
    icon: TrendingUp,
    titleKey: 'services.economic',
    descKey: 'services.economicDesc',
    href: '/financial-consulting',
  },
  {
    icon: Target,
    titleKey: 'services.marketing',
    descKey: 'services.marketingDesc',
    href: '/business-development',
  },
  {
    icon: FolderKanban,
    titleKey: 'services.project',
    descKey: 'services.projectDesc',
    href: '/business-development',
  },
  {
    icon: Building2,
    titleKey: 'services.icv',
    descKey: 'services.icvDesc',
    href: '/financial-consulting',
  },
  {
    icon: Receipt,
    titleKey: 'services.tax',
    descKey: 'services.taxDesc',
    href: '/financial-consulting',
  },
];

export default function ServicesSection() {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 start-0 w-96 h-96 bg-biza-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-biza-yellow/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-biza-green/10 text-biza-green rounded-full text-sm font-semibold mb-4"
          >
            {t('services.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-2 text-gray-900 mb-4"
          >
            {t('services.subtitle')}
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block group">
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-biza-green transition-all duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-biza-green/10 flex items-center justify-center mb-6 group-hover:bg-biza-green transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-biza-green group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t(service.descKey)}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-biza-green font-medium group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm">{language === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                    <Arrow className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

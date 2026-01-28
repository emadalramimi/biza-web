'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ClientMarquee from '@/components/ClientMarquee';
import TeamSection from '@/components/TeamSection';
import CertificationsSection from '@/components/CertificationsSection';
import CTASection from '@/components/CTASection';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <>
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 end-0 w-96 h-96 bg-biza-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-0 w-96 h-96 bg-biza-yellow/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-biza-green to-emerald-600 rounded-3xl rotate-3" />
                <div className="absolute inset-0 bg-white rounded-3xl -rotate-3 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <Image
                      src="/biza-logo.png"
                      alt="Biza Logo"
                      fill
                      className="object-contain p-16"
                    />
                  </div>
                </div>
                
                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -start-6 bg-white rounded-2xl p-5 shadow-xl"
                >
                  <div className="text-3xl font-bold text-biza-green">2020</div>
                  <div className="text-gray-500 text-sm">{language === 'ar' ? 'سنة التأسيس' : 'Year Founded'}</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -top-6 -end-6 bg-biza-green rounded-2xl p-5 shadow-xl text-white"
                >
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-white/80 text-sm">{t('stats.projects')}</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-biza-green/10 text-biza-green rounded-full text-sm font-semibold mb-4">
                {t('about.title')}
              </span>
              <h2 className="heading-2 text-gray-900 mb-6">
                {t('about.subtitle')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('about.description')}
              </p>

              {/* Values */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {['value1', 'value2', 'value3'].map((value, index) => (
                  <div
                    key={value}
                    className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-biza-green/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-biza-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-biza-green font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="font-semibold text-gray-900">{t(`about.${value}`)}</div>
                  </div>
                ))}
              </div>

              {/* Vision & Mission */}
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-biza-green/10 to-transparent rounded-xl">
                  <h4 className="font-bold text-biza-green mb-2">{t('about.vision')}</h4>
                  <p className="text-gray-600 text-sm">{t('about.visionText')}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-biza-yellow/10 to-transparent rounded-xl">
                  <h4 className="font-bold text-amber-600 mb-2">{t('about.mission')}</h4>
                  <p className="text-gray-600 text-sm">{t('about.missionText')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ClientMarquee />
      <TeamSection />
      <CertificationsSection />
      <CTASection />
    </>
  );
}

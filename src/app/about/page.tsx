'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TeamSection from '@/components/TeamSection';
import ClientMarquee from '@/components/ClientMarquee';
import CTASection from '@/components/CTASection';
import { Target, Eye, Heart, Award, Users, Briefcase, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="absolute top-20 start-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 end-10 w-96 h-96 bg-biza-yellow/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              {t('about.title')}
            </span>
            <h1 className="heading-1 text-white mb-6">
              {t('about.subtitle')}
            </h1>
            <p className="text-xl text-white/80">
              {t('about.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-biza-green via-emerald-600 to-teal-700 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <Image src="/biza-logo.png" alt="Biza" fill className="object-contain" />
                  </div>
                </div>
              </div>
              
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -end-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-biza-green/10 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-biza-green" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2020</div>
                    <div className="text-gray-500 text-sm">{language === 'ar' ? 'سنة التأسيس' : 'Founded'}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-gray-900 mb-6">
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {language === 'ar' 
                    ? 'تأسست بيزه في عام 2020 بهدف تقديم خدمات مالية واستشارية عالية الجودة. منذ انطلاقها وضعت بيزه نصب عينيها التميز والابتكار كركيزتين أساسيتين في تطوير حلول مهنية تدعم نمو عملائها.'
                    : 'Founded in 2020, Biza was established with the goal of providing high-quality financial and consulting services. Since its inception, Biza has focused on excellence and innovation as two fundamental pillars in developing professional solutions that support client growth.'
                  }
                </p>
                <p>
                  {language === 'ar'
                    ? 'نحن ملتزمون بتقديم قيمة مضافة تعكس فهماً عميقاً للسوق المحلي والإقليمي، مع طموح واضح لنكون من أبرز الجهات المؤثرة في قطاع الخدمات المالية والاستشارية في سلطنة عمان وخارجها.'
                    : 'We are committed to delivering added value that reflects a deep understanding of the local and regional market, with a clear ambition to be among the most influential entities in the financial and consulting services sector in Oman and beyond.'
                  }
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-biza-green/10 rounded-2xl">
                  <div className="text-3xl font-bold text-biza-green">150+</div>
                  <div className="text-gray-600 text-sm">{t('stats.projects')}</div>
                </div>
                <div className="text-center p-4 bg-biza-yellow/10 rounded-2xl">
                  <div className="text-3xl font-bold text-amber-600">98%</div>
                  <div className="text-gray-600 text-sm">{t('stats.satisfaction')}</div>
                </div>
                <div className="text-center p-4 bg-emerald-100 rounded-2xl">
                  <div className="text-3xl font-bold text-emerald-600">5+</div>
                  <div className="text-gray-600 text-sm">{t('stats.experience')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-biza-green transition-all duration-300"
            >
              <div className="w-14 h-14 bg-biza-green/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-biza-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('about.visionText')}</p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-biza-green transition-all duration-300"
            >
              <div className="w-14 h-14 bg-biza-green/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-biza-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('about.missionText')}</p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-biza-green transition-all duration-300"
            >
              <div className="w-14 h-14 bg-biza-green/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-biza-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.values')}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-biza-green rounded-full" />
                  {t('about.value1')}
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-biza-green rounded-full" />
                  {t('about.value2')}
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-biza-green rounded-full" />
                  {t('about.value3')}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { logo: '/certificates/ODB.png', titleKey: 'cert.odb', desc: language === 'ar' ? 'اعتماد رسمي من بنك التنمية العماني' : 'Official certification from Oman Development Bank' },
              { logo: '/certificates/MOC.png', titleKey: 'cert.moct', desc: language === 'ar' ? 'تصنيف الدرجة الأولى من وزارة التجارة' : 'First-class rating from Ministry of Commerce' },
              { logo: '/certificates/invest-oman.png', titleKey: 'cert.invest', desc: language === 'ar' ? 'معتمدون في دراسات الجدوى' : 'Certified for feasibility studies' },
            ].map((cert, index) => (
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
                      {cert.desc}
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

      <TeamSection />
      <ClientMarquee />
      <CTASection />
    </>
  );
}

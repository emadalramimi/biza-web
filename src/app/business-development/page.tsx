'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { 
  BarChart3, 
  Globe, 
  Handshake, 
  Gauge, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    titleKey: 'business.service1.title',
    descKey: 'business.service1.desc',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Globe,
    titleKey: 'business.service2.title',
    descKey: 'business.service2.desc',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Handshake,
    titleKey: 'business.service3.title',
    descKey: 'business.service3.desc',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Gauge,
    titleKey: 'business.service4.title',
    descKey: 'business.service4.desc',
    color: 'from-orange-500 to-red-600',
  },
];

export default function BusinessDevelopmentPage() {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const benefits = language === 'ar' 
    ? ['زيادة الحصة السوقية', 'تعزيز الابتكار', 'تسريع النمو', 'بناء شراكات استراتيجية', 'تحسين الكفاءة التشغيلية']
    : ['Increase Market Share', 'Foster Innovation', 'Accelerate Growth', 'Build Strategic Partnerships', 'Improve Operational Efficiency'];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="absolute top-20 start-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 end-10 w-96 h-96 bg-biza-yellow/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
                {t('nav.business')}
              </span>
              <h1 className="heading-1 text-white mb-6">
                {t('business.hero.title')}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {t('business.hero.subtitle')}
              </p>
              <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                {t('nav.getConsultation')}
                <Arrow className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse-slow" />
                <Image src="/biza-coin-glod.png" alt="Business Growth" fill className="object-contain" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 start-0 bg-white rounded-2xl p-4 shadow-xl"
              >
                <TrendingUp className="w-8 h-8 text-biza-green" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 end-0 bg-white rounded-2xl p-4 shadow-xl"
              >
                <Target className="w-8 h-8 text-amber-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            {t('business.intro')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900">
              {language === 'ar' ? 'خدمات تطوير الأعمال' : 'Business Development Services'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(service.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(service.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-biza-green to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-8">
                {language === 'ar' ? 'لماذا تختار خدماتنا؟' : 'Why Choose Our Services?'}
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-biza-yellow flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
                <Image src="/biza-logo.png" alt="Biza" fill className="object-contain p-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

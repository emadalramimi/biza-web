'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { 
  Calculator, 
  Wallet, 
  Shield, 
  Receipt, 
  FileText, 
  BarChart3,
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: Calculator,
    titleKey: 'financial.service1.title',
    descKey: 'financial.service1.desc',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Wallet,
    titleKey: 'financial.service2.title',
    descKey: 'financial.service2.desc',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Shield,
    titleKey: 'financial.service3.title',
    descKey: 'financial.service3.desc',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Receipt,
    titleKey: 'financial.service4.title',
    descKey: 'financial.service4.desc',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: FileText,
    titleKey: 'financial.service5.title',
    descKey: 'financial.service5.desc',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: BarChart3,
    titleKey: 'financial.service6.title',
    descKey: 'financial.service6.desc',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function FinancialConsultingPage() {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const benefits = language === 'ar' 
    ? ['تحسين التدفق النقدي', 'زيادة الربحية', 'تقليل المخاطر المالية', 'التخطيط الضريبي الفعال', 'اتخاذ قرارات مستنيرة', 'النمو المستدام']
    : ['Improve Cash Flow', 'Increase Profitability', 'Reduce Financial Risks', 'Effective Tax Planning', 'Make Informed Decisions', 'Sustainable Growth'];

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
                {t('nav.consulting')}
              </span>
              <h1 className="heading-1 text-white mb-6">
                {t('financial.hero.title')}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {t('financial.hero.subtitle')}
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
                <div className="absolute inset-0 bg-biza-yellow/20 rounded-full animate-pulse-slow" />
                <Image src="/biza-coin-glod.png" alt="Financial Consulting" fill className="object-contain" />
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
                <Calculator className="w-8 h-8 text-emerald-600" />
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
            {t('financial.intro')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900">
              {language === 'ar' ? 'خدماتنا المالية' : 'Our Financial Services'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t(service.titleKey)}</h3>
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
                {language === 'ar' ? 'لماذا تختار استشاراتنا المالية؟' : 'Why Choose Our Financial Consulting?'}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-biza-yellow flex-shrink-0" />
                    <span>{benefit}</span>
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

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900">
              {language === 'ar' ? 'منهجية العمل' : 'Our Process'}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: language === 'ar' ? 'التقييم' : 'Assessment', desc: language === 'ar' ? 'تحليل الوضع المالي الحالي' : 'Analyze current financial status' },
              { num: '02', title: language === 'ar' ? 'التخطيط' : 'Planning', desc: language === 'ar' ? 'وضع استراتيجية مخصصة' : 'Develop customized strategy' },
              { num: '03', title: language === 'ar' ? 'التنفيذ' : 'Implementation', desc: language === 'ar' ? 'تطبيق الحلول المقترحة' : 'Execute proposed solutions' },
              { num: '04', title: language === 'ar' ? 'المتابعة' : 'Follow-up', desc: language === 'ar' ? 'مراقبة النتائج والتحسين' : 'Monitor results and improve' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-biza-green/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { 
  Users, 
  GraduationCap, 
  Wallet, 
  Building, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Star
} from 'lucide-react';

const services = [
  {
    icon: Users,
    titleKey: 'entrepreneur.service1.title',
    descKey: 'entrepreneur.service1.desc',
    color: 'from-biza-green to-biza-green-dark',
  },
  {
    icon: GraduationCap,
    titleKey: 'entrepreneur.service2.title',
    descKey: 'entrepreneur.service2.desc',
    color: 'from-biza-yellow to-biza-yellow-dark',
  },
  {
    icon: Wallet,
    titleKey: 'entrepreneur.service3.title',
    descKey: 'entrepreneur.service3.desc',
    color: 'from-biza-green-light to-biza-green',
  },
  {
    icon: Building,
    titleKey: 'entrepreneur.service4.title',
    descKey: 'entrepreneur.service4.desc',
    color: 'from-biza-yellow-dark to-biza-yellow',
  },
];

export default function EntrepreneurshipPage() {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  const steps = language === 'ar' 
    ? [
        { icon: Lightbulb, title: 'تقييم الفكرة', desc: 'نقيم فكرتك ونساعدك في تطويرها' },
        { icon: Users, title: 'الإرشاد والتوجيه', desc: 'نوفر لك مرشدين خبراء في مجالك' },
        { icon: GraduationCap, title: 'التدريب', desc: 'نقدم برامج تدريبية متخصصة' },
        { icon: Rocket, title: 'الإطلاق', desc: 'نساعدك في إطلاق مشروعك بنجاح' },
      ]
    : [
        { icon: Lightbulb, title: 'Idea Assessment', desc: 'We assess your idea and help develop it' },
        { icon: Users, title: 'Mentorship', desc: 'Expert mentors in your field' },
        { icon: GraduationCap, title: 'Training', desc: 'Specialized training programs' },
        { icon: Rocket, title: 'Launch', desc: 'Help you launch successfully' },
      ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-biza-green via-biza-green-dark to-slate-900 overflow-hidden">
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
                {t('nav.entrepreneurship')}
              </span>
              <h1 className="heading-1 text-white mb-6">
                {t('entrepreneur.hero.title')}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {t('entrepreneur.hero.subtitle')}
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
                <Image src="/biza-coin-glod.png" alt="Entrepreneurship" fill className="object-contain" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 start-0 bg-white rounded-2xl p-4 shadow-xl"
              >
                <Lightbulb className="w-8 h-8 text-biza-green" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 end-0 bg-white rounded-2xl p-4 shadow-xl"
              >
                <Rocket className="w-8 h-8 text-biza-yellow" />
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
            {t('entrepreneur.intro')}
          </motion.p>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900">
              {language === 'ar' ? 'رحلتك معنا' : 'Your Journey With Us'}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-biza-green to-biza-green-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-biza-green/20 mb-2">{index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -end-3 w-6 h-0.5 bg-biza-green/20 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900">
              {language === 'ar' ? 'خدمات ريادة الأعمال' : 'Entrepreneurship Services'}
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
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
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

      {/* Success Stats */}
      <section className="section-padding bg-gradient-to-br from-biza-green to-biza-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: language === 'ar' ? 'شركة ناشئة' : 'Startups Supported' },
              { value: '30+', label: language === 'ar' ? 'مرشد خبير' : 'Expert Mentors' },
              { value: '5M+', label: language === 'ar' ? 'تمويل محصل' : 'Funding Raised' },
              { value: '90%', label: language === 'ar' ? 'نسبة النجاح' : 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

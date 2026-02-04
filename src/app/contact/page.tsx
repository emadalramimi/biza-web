'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  Instagram,
  Linkedin,
  MessageCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+968 77147445',
      href: 'tel:+96877147445',
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'info@bizaoman.com',
      href: 'mailto:info@bizaoman.com',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: t('contact.addressValue'),
      href: '#',
    },
    {
      icon: Clock,
      label: language === 'ar' ? 'ساعات العمل' : 'Working Hours',
      value: language === 'ar' ? 'الأحد - الخميس: 9 ص - 5 م' : 'Sun - Thu: 9 AM - 5 PM',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/biza.om', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/biza-for-financial-services/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: MessageCircle, href: 'https://wa.me/96877147445', label: 'WhatsApp', color: 'hover:bg-green-500' },
  ];

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
              {t('contact.title')}
            </span>
            <h1 className="heading-1 text-white mb-6">
              {t('contact.subtitle')}
            </h1>
            <p className="text-xl text-white/80">
              {language === 'ar' 
                ? 'تواصل معنا اليوم لبدء رحلة نجاحك المالي'
                : 'Contact us today to start your financial success journey'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-3 text-gray-900 mb-8">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-biza-green focus:ring-2 focus:ring-biza-green/20 outline-none transition-all"
                    placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-biza-green focus:ring-2 focus:ring-biza-green/20 outline-none transition-all"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-biza-green focus:ring-2 focus:ring-biza-green/20 outline-none transition-all"
                      placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-biza-green focus:ring-2 focus:ring-biza-green/20 outline-none transition-all resize-none"
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Sent Successfully!'}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-3 text-gray-900 mb-8">
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-biza-green/10 transition-colors group"
                  >
                    <div className="w-14 h-14 bg-biza-green/10 rounded-xl flex items-center justify-center group-hover:bg-biza-green transition-colors">
                      <info.icon className="w-6 h-6 text-biza-green group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">{info.label}</div>
                      <div className="text-gray-900 font-medium" dir={info.label === t('contact.phone') ? 'ltr' : undefined}>
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('contact.followUs')}
                </h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map/Logo Section */}
              <div className="mt-12 bg-gradient-to-br from-biza-green to-emerald-700 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16">
                    <Image src="/biza-logo.png" alt="Biza" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{language === 'ar' ? 'بيزه للخدمات المالية' : 'Biza Financial Services'}</h3>
                    <p className="text-white/80">bizaoman.com</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {language === 'ar'
                    ? 'نحن هنا لمساعدتك في تحقيق أهدافك المالية. تواصل معنا اليوم واحصل على استشارة مجانية.'
                    : 'We are here to help you achieve your financial goals. Contact us today and get a free consultation.'
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

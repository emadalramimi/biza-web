'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, Award, Briefcase } from 'lucide-react';

const teamMembers = [
  {
    id: 'amira',
    image: '/team/Amira-CEO.jpg',
    nameKey: 'team.amira.name',
    roleKey: 'team.amira.role',
    bioKey: 'team.amira.bio',
    linkedin: 'https://www.linkedin.com/in/amirahamedalkharusi/',
  },
  {
    id: 'fahad',
    image: '/team/Fahad-CFO.png',
    nameKey: 'team.fahad.name',
    roleKey: 'team.fahad.role',
    bioKey: 'team.fahad.bio',
    linkedin: '#',
  },
  {
    id: 'yahya',
    image: '/team/Yahya-expert.jpeg',
    nameKey: 'team.yahya.name',
    roleKey: 'team.yahya.role',
    bioKey: 'team.yahya.bio',
    linkedin: 'https://www.linkedin.com/in/dr-yahya-al-hussaini-559832126/',
  },
];

export default function TeamSection() {
  const { language, t } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 start-0 w-96 h-96 bg-biza-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-biza-yellow/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-biza-green/10 text-biza-green rounded-full text-sm font-semibold mb-6 border border-biza-green/20"
          >
            <Award className="w-4 h-4" />
            {t('team.title')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-2 text-gray-900 mb-6"
          >
            {t('team.subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            {language === 'ar' 
              ? 'فريق من الخبراء المتميزين بخبرات واسعة في المجالات المالية والاقتصادية'
              : 'A team of distinguished experts with extensive experience in financial and economic fields'
            }
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-biza-green/30 transition-all duration-500 hover:shadow-2xl hover:shadow-biza-green/10 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                  <Image
                    src={member.image}
                    alt={t(member.nameKey)}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Professional Badge */}
                  <div className="absolute top-4 start-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-biza-green/90 backdrop-blur-sm rounded-full">
                      <Briefcase className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-semibold text-white">
                        {language === 'ar' ? 'خبير' : 'Expert'}
                      </span>
                    </div>
                  </div>

                  {/* Name and Role Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {t(member.nameKey)}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-0.5 w-8 bg-biza-yellow" />
                        <p className="text-biza-yellow font-semibold text-sm">
                          {t(member.roleKey)}
                        </p>
                      </div>
                    </motion.div>

                    {/* Social Links */}
                    {member.linkedin && member.linkedin !== '#' && (
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-biza-green hover:border-biza-green transition-all duration-300"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio Section */}
                <div className="p-6 bg-white">
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                    {t(member.bioKey)}
                  </p>
                  
                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-biza-green" />
                        {language === 'ar' ? 'معتمد' : 'Certified'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute bottom-0 start-0 w-full h-1 bg-gradient-to-r from-biza-green via-biza-yellow to-biza-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-200 rounded-full">
            <div className="w-2 h-2 bg-biza-green rounded-full animate-pulse" />
            <span className="text-gray-700 text-sm font-medium">
              {language === 'ar' 
                ? 'فريق متكامل من الخبراء في خدمتكم'
                : 'A complete team of experts at your service'
              }
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

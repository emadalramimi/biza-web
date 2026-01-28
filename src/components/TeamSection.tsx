'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: 'amira',
    image: '/team/Amira-CEO.jpg',
    nameKey: 'team.amira.name',
    roleKey: 'team.amira.role',
    bioKey: 'team.amira.bio',
  },
  {
    id: 'fahad',
    image: '/team/Fahad-CFO.png',
    nameKey: 'team.fahad.name',
    roleKey: 'team.fahad.role',
    bioKey: 'team.fahad.bio',
  },
  {
    id: 'yahya',
    image: '/team/Yahya-expert.jpeg',
    nameKey: 'team.yahya.name',
    roleKey: 'team.yahya.role',
    bioKey: 'team.yahya.bio',
  },
];

export default function TeamSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-biza-green/10 text-biza-green rounded-full text-sm font-semibold mb-4"
          >
            {t('team.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-2 text-gray-900 mb-4"
          >
            {t('team.subtitle')}
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-biza-green/20 transition-all duration-500 card-hover">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={t(member.nameKey)}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">
                      {t(member.nameKey)}
                    </h3>
                    <p className="text-biza-yellow font-medium">
                      {t(member.roleKey)}
                    </p>
                  </div>

                  {/* Social Links - Show on Hover */}
                  <div className="absolute top-4 end-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-biza-green hover:bg-biza-green hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-biza-green hover:bg-biza-green hover:text-white transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed line-clamp-4">
                    {t(member.bioKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

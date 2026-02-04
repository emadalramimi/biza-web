'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Building2, Users } from 'lucide-react';

const publicClients = [
  { name: 'Royal Oman Army', logo: '/clients-public/لوجو الجيش السلطاني .svg' },
  { name: 'Sultan Qaboos University', logo: '/clients-public/لوجو جامعة السلطان قابوس .svg' },
  { name: 'Oman Vision 2040', logo: '/clients-public/لوجو روية عمان ٢٠٤٠.svg' },
  { name: 'Chamber of Commerce', logo: '/clients-public/لوجو غرفة تجارة وصناعة .svg' },
  { name: 'Civil Defense', logo: '/clients-public/civil.svg' },
  { name: 'SME Authority', logo: '/clients-public/SME.svg' },
  { name: 'Ministry of Housing', logo: '/clients-public/لوجو وزارة الاسكان .svg' },
  { name: 'Ministry of Economy', logo: '/clients-public/لوجو وزارة الاقتصاد .svg' },
  { name: 'Ministry of Higher Education', logo: '/clients-public/لوجو وزارة التعليم العالي .svg' },
  { name: 'Ministry of Interior', logo: '/clients-public/لوجو وزارة الداخلية .svg' },
  { name: 'Ministry of Transport', logo: '/clients-public/لوجو وزارة النقل و الاتصالات.svg' },
];

const privateClients = [
  { name: 'Almadar', logo: '/clients-private/almadar.svg' },
  { name: 'Almunthir', logo: '/clients-private/almunthir.svg' },
  { name: 'Alnarjis', logo: '/clients-private/alnarjis.svg' },
  { name: 'Alramrami', logo: '/clients-private/alramrami.svg' },
  { name: 'Alshaia', logo: '/clients-private/alshaia.svg' },
  { name: 'Ankaa', logo: '/clients-private/ankaa.svg' },
  { name: 'Dalta', logo: '/clients-private/dalta.svg' },
  { name: 'GIS Hub', logo: '/clients-private/gis-hub.svg' },
  { name: 'Hangarx', logo: '/clients-private/hangarx.svg' },
  { name: 'Naseel', logo: '/clients-private/naseel.svg' },
  { name: 'Rakeza', logo: '/clients-private/rakeza.svg' },
  { name: 'Revan', logo: '/clients-private/revan.svg' },
  { name: 'Tamkeen', logo: '/clients-private/tamkeen.svg' },
  { name: 'Wing Tech', logo: '/clients-private/wing-tech.svg' },
];

export default function ClientMarquee() {
  const { language, t } = useLanguage();

  // Duplicate arrays for seamless infinite loop
  const publicLogos = [...publicClients, ...publicClients, ...publicClients];
  const privateLogos = [...privateClients, ...privateClients, ...privateClients];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-biza-green/10 text-biza-green rounded-full text-sm font-semibold mb-6 border border-biza-green/20"
          >
            <Building2 className="w-4 h-4" />
            {language === 'ar' ? 'شركاؤنا وكياناتنا' : 'Partners & Entities'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-2 text-gray-900 mb-4"
          >
            {language === 'ar' ? 'موثوق به من قبل المؤسسات الرائدة' : 'Trusted by Leading Institutions'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            {language === 'ar' 
              ? 'نفخر بشراكاتنا مع أبرز المؤسسات الحكومية والخاصة في سلطنة عمان'
              : 'Proud to partner with prominent government and private institutions across Oman'
            }
          </motion.p>
        </motion.div>
      </div>

      {/* First Row */}
      <div className="mb-12">
        <div className="relative partners-marquee-container">
          {/* Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
          
          <div className="partners-marquee-track">
            {publicLogos.map((client, index) => (
              <div
                key={`public-${index}`}
                className="partners-logo-card"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="mb-12">
        <div className="relative partners-marquee-container">
          {/* Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div className="partners-marquee-track-reverse">
            {privateLogos.map((client, index) => (
              <div
                key={`private-${index}`}
                className="partners-logo-card"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-biza-green rounded-full animate-pulse" />
            <span className="text-gray-700 text-sm font-medium">
              {language === 'ar' 
                ? '25+ مؤسسة رائدة'
                : '25+ Leading Institutions'
              }
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <span className="text-gray-500 text-sm">
            {language === 'ar' ? 'قطاعين عام وخاص' : 'Public & Private'}
          </span>
        </div>
      </motion.div>

      <style jsx>{`
        .partners-marquee-container {
          overflow: hidden;
          position: relative;
        }

        .partners-marquee-track,
        .partners-marquee-track-reverse {
          display: flex;
          gap: 1rem;
          animation: marquee-scroll 60s linear infinite;
          will-change: transform;
        }

        .partners-marquee-track-reverse {
          animation: marquee-scroll-reverse 60s linear infinite;
        }

        .partners-marquee-track:hover,
        .partners-marquee-track-reverse:hover {
          animation-play-state: paused;
        }

        .partners-logo-card {
          flex-shrink: 0;
          width: 140px;
          height: 140px;
          background: white;
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid #f3f4f6;
          transition: all 0.3s ease;
        }

        .partners-logo-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(49, 138, 131, 0.1);
          border-color: rgba(49, 138, 131, 0.2);
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes marquee-scroll-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .partners-marquee-track,
          .partners-marquee-track-reverse {
            animation-duration: 80s;
          }

          .partners-logo-card {
            width: 110px;
            height: 110px;
            padding: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-marquee-track,
          .partners-marquee-track-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

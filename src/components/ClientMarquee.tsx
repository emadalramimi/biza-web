'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const publicClients = [
  { name: 'Royal Oman Army', logo: '/clients-public/لوجو الجيش السلطاني .svg' },
  { name: 'Sultan Qaboos University', logo: '/clients-public/لوجو جامعة السلطان قابوس .svg' },
  { name: 'Oman Vision 2040', logo: '/clients-public/لوجو روية عمان ٢٠٤٠.svg' },
  { name: 'Chamber of Commerce', logo: '/clients-public/لوجو غرفة تجارة وصناعة .svg' },
  { name: 'Civil Defense', logo: '/clients-public/لوجو هيئة الدفاع المدني .svg' },
  { name: 'SME Authority', logo: '/clients-public/لوجو هيئة الموسسات لصغيرة و المتوسطة .svg' },
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
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="heading-3 text-center text-gray-900 mb-4">
          {t('clients.title')}
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          {t('clients.subtitle')}
        </p>
      </div>

      {/* Public Sector Clients - Moving Right */}
      <div className="relative mb-8">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...publicClients, ...publicClients, ...publicClients, ...publicClients, ...publicClients].map((client, index) => (
            <div
              key={`public-${index}`}
              className="flex-shrink-0 mx-6 md:mx-10"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-6 flex items-center justify-center hover:shadow-xl hover:shadow-biza-green/10 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Private Sector Clients - Moving Left */}
      <div className="relative">
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...privateClients, ...privateClients, ...privateClients, ...privateClients, ...privateClients].map((client, index) => (
            <div
              key={`private-${index}`}
              className="flex-shrink-0 mx-6 md:mx-10"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-6 flex items-center justify-center hover:shadow-xl hover:shadow-biza-green/10 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

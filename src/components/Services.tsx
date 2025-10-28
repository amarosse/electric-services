import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ZapIcon, HomeIcon, LightbulbIcon, WrenchIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react';
const services = [{
  icon: ZapIcon,
  title: 'Электропроводка',
  description: 'Полная замена и монтаж электропроводки в квартирах и домах'
}, {
  icon: LightbulbIcon,
  title: 'Освещение',
  description: 'Установка светильников, люстр и систем освещения'
}, {
  icon: HomeIcon,
  title: 'Розетки и выключатели',
  description: 'Установка и замена розеток, выключателей, автоматов'
}, {
  icon: WrenchIcon,
  title: 'Ремонт и обслуживание',
  description: 'Диагностика и устранение неисправностей электросетей'
}, {
  icon: ShieldCheckIcon,
  title: 'Защита и безопасность',
  description: 'Установка УЗО, дифавтоматов, систем заземления'
}, {
  icon: ClockIcon,
  title: 'Срочный вызов',
  description: 'Аварийный выезд электрика в течение 2 часов'
}];
export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="services" className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр электромонтажных работ с гарантией качества
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
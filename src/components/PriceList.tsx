import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon } from 'lucide-react';
const prices = [{
  service: 'Установка розетки/выключателя',
  price: 'от 500 ₽'
}, {
  service: 'Замена автоматического выключателя',
  price: 'от 800 ₽'
}, {
  service: 'Монтаж люстры/светильника',
  price: 'от 1 000 ₽'
}, {
  service: 'Прокладка кабеля (1 м)',
  price: 'от 200 ₽'
}, {
  service: 'Замена электросчетчика',
  price: 'от 2 500 ₽'
}, {
  service: 'Монтаж электрощита',
  price: 'от 5 000 ₽'
}, {
  service: 'Полная замена проводки (1-комн.)',
  price: 'от 25 000 ₽'
}, {
  service: 'Диагностика электросети',
  price: 'от 1 500 ₽'
}];
export function PriceList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="prices" className="w-full py-20 px-6 bg-gray-50">
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
            Прайс-лист
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачные цены на основные виды работ
          </p>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-500 to-blue-600">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Вид работ
                  </th>
                  <th className="px-6 py-4 text-right text-white font-semibold">
                    Стоимость
                  </th>
                </tr>
              </thead>
              <tbody>
                {prices.map((item, index) => <motion.tr key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={inView ? {
                opacity: 1,
                x: 0
              } : {}} transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.05
              }} className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-800">{item.service}</span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-blue-600">
                      {item.price}
                    </td>
                  </motion.tr>)}
              </tbody>
            </table>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 px-6 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              * Точная стоимость работ рассчитывается после осмотра объекта
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
}
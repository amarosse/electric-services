import React from 'react';
import { motion } from 'framer-motion';
import { ZapIcon, PhoneIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <div className="flex items-center justify-center mb-6">
            <ZapIcon className="w-16 h-16 text-blue-400" strokeWidth={2} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Электромонтажные работы
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-4">
            ИП Александр Петров
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Профессиональный электромонтаж для квартир, домов и офисов.
            Качество, безопасность и гарантия.
          </p>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Заказать услугу
            </a>
            <a href="tel:+79001234567" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              +7 (900) 123-45-67
            </a>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>;
}
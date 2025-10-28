import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
  };
  return <section id="contact" className="w-full py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Оставьте заявку, и мы перезвоним в течение 15 минут
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Телефон
                </h3>
                <a href="tel:+79001234567" className="text-blue-300 hover:text-blue-200 transition-colors">
                  +7 (900) 123-45-67
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MailIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:info@elektrik.ru" className="text-blue-300 hover:text-blue-200 transition-colors">
                  info@elektrik.ru
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPinIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Адрес</h3>
                <p className="text-blue-200">
                  г. Москва, ул. Примерная, д. 123
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Время работы
              </h3>
              <div className="space-y-2 text-blue-200">
                <p>Пн-Пт: 8:00 - 20:00</p>
                <p>Сб-Вс: 9:00 - 18:00</p>
                <p className="text-orange-300 font-semibold mt-4">
                  Аварийные вызовы 24/7
                </p>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input type="text" id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input type="tel" id="phone" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Описание работ
                  </label>
                  <textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <SendIcon className="w-5 h-5" />
                  Отправить заявку
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}
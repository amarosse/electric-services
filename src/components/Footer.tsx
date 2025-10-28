import React from 'react';
import { ZapIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ZapIcon className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">
                ИП Петров А.В.
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Профессиональные электромонтажные работы в Москве и области.
              Гарантия качества на все виды работ.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Быстрые ссылки
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#prices" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Цены
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Мы в соцсетях
            </h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 ИП Петров А.В. Все права защищены. ИНН: 1234567890
          </p>
        </div>
      </div>
    </footer>;
}
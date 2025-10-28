import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const projects = [{
  title: 'Квартира в новостройке',
  description: 'Полный электромонтаж 2-комнатной квартиры',
  image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
}, {
  title: 'Загородный дом',
  description: 'Электропроводка и освещение коттеджа',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
}, {
  title: 'Офисное помещение',
  description: 'Монтаж освещения и силовых линий',
  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
}, {
  title: 'Ремонт проводки',
  description: 'Замена старой проводки в квартире',
  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80'
}];
export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="portfolio" className="w-full py-20 px-6 bg-white">
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
            Наши проекты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Примеры выполненных работ с гарантией качества
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} animate={inView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
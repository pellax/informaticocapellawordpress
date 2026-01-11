'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <main className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section with Profile Photo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Sobre <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Mí</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-slate-300 leading-relaxed"
              >
                Consultor tecnológico especializado en transformar ideas complejas en soluciones escalables y eficientes.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-2xl opacity-30"></div>
                <Image
                  src="/profile.jpg"
                  alt="Informático Capella"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Mi Historia</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Con más de una década de experiencia en el sector tecnológico, he tenido el privilegio de trabajar 
                con empresas de diversos tamaños, desde startups innovadoras hasta grandes corporaciones establecidas.
              </p>
              <p>
                Mi enfoque se centra en comprender profundamente las necesidades del negocio para diseñar e implementar 
                soluciones que no solo resuelvan problemas técnicos, sino que también generen valor real y medible.
              </p>
              <p>
                A lo largo de mi carrera, me he especializado en arquitectura cloud, desarrollo full-stack y prácticas 
                DevOps, siempre manteniendo un compromiso con la excelencia técnica y las mejores prácticas de la industria.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills & Expertise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Áreas de Especialización</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Cloud', skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'Serverless'] },
              { category: 'Backend', skills: ['Node.js', 'PHP', 'Python', 'APIs RESTful', 'GraphQL'] },
              { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
              { category: 'DevOps', skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins'] },
              { category: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB'] },
              { category: 'Arquitectura', skills: ['Microservicios', 'Clean Code', 'TDD', 'SOLID', 'DDD'] },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{area.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Mis Principios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excelencia Técnica',
                description: 'Compromiso con código limpio, arquitecturas sólidas y las mejores prácticas del sector.',
                icon: '🎯'
              },
              {
                title: 'Orientación al Cliente',
                description: 'Entender y superar las expectativas, entregando soluciones que generen impacto real.',
                icon: '🤝'
              },
              {
                title: 'Aprendizaje Continuo',
                description: 'La tecnología evoluciona constantemente, y yo también. Siempre actualizado con las últimas tendencias.',
                icon: '📚'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

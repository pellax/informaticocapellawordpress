'use client';

import { motion } from 'framer-motion';

export default function Servicios() {
  const services = [
    {
      icon: '☁️',
      title: 'Arquitectura Cloud',
      description: 'Diseño e implementación de infraestructuras cloud escalables y seguras.',
      features: [
        'Migración a AWS, Azure o GCP',
        'Optimización de costos cloud',
        'Diseño de arquitecturas resilientes',
        'Implementación de multi-cloud',
        'Disaster recovery y backup',
        'Monitoreo y observabilidad'
      ],
      benefits: 'Reduce costos operativos hasta un 40% mientras mejoras la disponibilidad y escalabilidad.'
    },
    {
      icon: '💻',
      title: 'Desarrollo Full-Stack',
      description: 'Aplicaciones web y móviles con las últimas tecnologías y mejores prácticas.',
      features: [
        'React, Next.js, Vue.js',
        'Node.js, PHP, Python',
        'APIs RESTful y GraphQL',
        'Aplicaciones móviles híbridas',
        'Progressive Web Apps (PWA)',
        'Testing automatizado'
      ],
      benefits: 'Productos digitales robustos y escalables que impulsan el crecimiento de tu negocio.'
    },
    {
      icon: '⚙️',
      title: 'DevOps & CI/CD',
      description: 'Automatización de pipelines y optimización de procesos de desarrollo.',
      features: [
        'Containerización con Docker',
        'Orquestación con Kubernetes',
        'CI/CD con GitHub Actions/Jenkins',
        'Infrastructure as Code (Terraform)',
        'Automatización de despliegues',
        'Monitoreo 24/7'
      ],
      benefits: 'Acelera tus entregas hasta 10x mientras reduces errores y mejoras la calidad.'
    },
    {
      icon: '🔒',
      title: 'Seguridad & Auditoría',
      description: 'Evaluación y mejora de la seguridad de tus sistemas.',
      features: [
        'Auditorías de seguridad',
        'Análisis de vulnerabilidades',
        'Implementación de mejores prácticas',
        'Compliance (GDPR, ISO 27001)',
        'Seguridad en cloud',
        'Hardening de servidores'
      ],
      benefits: 'Protege tus activos digitales y cumple con normativas de seguridad.'
    },
    {
      icon: '📊',
      title: 'Consultoría Técnica',
      description: 'Asesoramiento estratégico para decisiones tecnológicas clave.',
      features: [
        'Evaluación de arquitecturas',
        'Stack tecnológico óptimo',
        'Roadmap de producto',
        'Code review y refactoring',
        'Mentoría de equipos',
        'Due diligence técnico'
      ],
      benefits: 'Toma decisiones tecnológicas informadas que alinean tecnología con objetivos de negocio.'
    },
    {
      icon: '🚀',
      title: 'MVP & Prototipos',
      description: 'Desarrollo rápido de productos mínimos viables para validar ideas.',
      features: [
        'Diseño de MVP lean',
        'Desarrollo ágil',
        'Prototipos funcionales',
        'Validación de mercado',
        'Iteración rápida',
        'Time-to-market optimizado'
      ],
      benefits: 'Valida tu idea en semanas, no meses, minimizando riesgos e inversión inicial.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Descubrimiento',
      description: 'Entendemos tu negocio, objetivos y desafíos técnicos actuales.',
      duration: '1-2 semanas'
    },
    {
      step: '02',
      title: 'Planificación',
      description: 'Diseñamos la solución óptima con roadmap claro y estimaciones realistas.',
      duration: '1 semana'
    },
    {
      step: '03',
      title: 'Implementación',
      description: 'Desarrollo iterativo con entregas frecuentes y feedback continuo.',
      duration: 'Variable'
    },
    {
      step: '04',
      title: 'Entrega & Soporte',
      description: 'Despliegue a producción, documentación y soporte post-lanzamiento.',
      duration: 'Continuo'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Servicios <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Especializados</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Soluciones tecnológicas end-to-end que transforman ideas en productos digitales escalables y rentables.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              
              <h4 className="text-sm font-semibold text-emerald-500 mb-3 uppercase">Incluye:</h4>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-300 text-sm">
                    <span className="text-emerald-500 mr-2 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400 italic">{service.benefits}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Proceso de Trabajo</h2>
          <p className="text-xl text-slate-400 text-center mb-12">Metodología ágil y transparente en cada proyecto</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-xl p-6 border border-slate-700">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 mb-3 text-sm">{item.description}</p>
                  <div className="text-xs text-emerald-500 font-semibold">⏱ {item.duration}</div>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Empezar tu Proyecto?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita de 30 minutos y descubre cómo puedo ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300">
              Agendar Consulta Gratuita →
            </button>
            <a
              href="/portafolio"
              className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700"
            >
              Ver Casos de Éxito
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

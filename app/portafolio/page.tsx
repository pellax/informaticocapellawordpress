'use client';

import { motion } from 'framer-motion';

export default function Portafolio() {
  const projects = [
    {
      title: 'Plataforma E-commerce Enterprise',
      client: 'Retail Internacional',
      category: 'Full-Stack & Cloud',
      description: 'Migración completa de infraestructura legacy a arquitectura cloud nativa con microservicios en AWS.',
      technologies: ['Next.js', 'Node.js', 'AWS', 'Kubernetes', 'PostgreSQL'],
      results: [
        '300% mejora en rendimiento',
        '60% reducción en costos operativos',
        '99.99% uptime alcanzado',
        'Soporta 100K usuarios concurrentes'
      ],
      image: '🛍️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sistema de Gestión Hospitalaria',
      client: 'Healthcare Tech',
      category: 'Enterprise Software',
      description: 'Sistema integral de gestión para red de clínicas con módulos de historias clínicas, facturación y analítica.',
      technologies: ['React', 'Python', 'FastAPI', 'MongoDB', 'Docker'],
      results: [
        '80% reducción en tiempo de atención',
        '50K+ pacientes gestionados',
        'Cumple HIPAA y GDPR',
        'Dashboard de BI en tiempo real'
      ],
      image: '🏥',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Plataforma FinTech SaaS',
      client: 'Startup Financiera',
      category: 'MVP & SaaS',
      description: 'MVP de plataforma de préstamos P2P con integración bancaria, KYC automático y motor de scoring crediticio.',
      technologies: ['Vue.js', 'Node.js', 'Stripe', 'AWS Lambda', 'DynamoDB'],
      results: [
        'MVP en 8 semanas',
        '$2M raised en seed round',
        '10K usuarios primer año',
        'PCI-DSS compliant'
      ],
      image: '💳',
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Sistema IoT para Smart Cities',
      client: 'Gobierno Municipal',
      category: 'IoT & Real-time',
      description: 'Plataforma de monitoreo y control de sensores urbanos para gestión inteligente de alumbrado y tráfico.',
      technologies: ['React', 'Node.js', 'MQTT', 'TimescaleDB', 'Grafana'],
      results: [
        '5000+ sensores conectados',
        '40% ahorro energético',
        'Dashboard en tiempo real',
        'Alertas predictivas con ML'
      ],
      image: '🌆',
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'API Gateway & Microservicios',
      client: 'Empresa de Logística',
      category: 'DevOps & Backend',
      description: 'Refactoring de monolito a arquitectura de microservicios con CI/CD completo y observabilidad.',
      technologies: ['Go', 'Kong', 'Kubernetes', 'Prometheus', 'Terraform'],
      results: [
        '10x más deployments/día',
        '95% reducción en downtime',
        'Escalado automático',
        'Observabilidad completa'
      ],
      image: '📦',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'App Móvil de Delivery',
      client: 'Startup de Food-tech',
      category: 'Mobile & Backend',
      description: 'Aplicación móvil híbrida con backend serverless para pedidos de comida con tracking en tiempo real.',
      technologies: ['React Native', 'Firebase', 'Google Maps', 'Stripe', 'Node.js'],
      results: [
        '50K+ descargas',
        '4.8★ rating en stores',
        'Real-time tracking',
        'Multi-tenant architecture'
      ],
      image: '🍔',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'CTO, TechCorp',
      text: 'La migración a cloud que realizó fue impecable. Redujo nuestros costos en un 60% mientras mejoraba significativamente el rendimiento.',
      avatar: '👩‍💼'
    },
    {
      name: 'Carlos Martínez',
      role: 'CEO, FinStart',
      text: 'Entregó nuestro MVP en tiempo récord sin comprometer la calidad. Su expertise técnico fue fundamental para nuestra ronda de inversión.',
      avatar: '👨‍💻'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Product Manager, HealthTech',
      text: 'Excelente comunicación y entendimiento del negocio. No solo entrega código, sino soluciones que generan valor real.',
      avatar: '👩‍⚕️'
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
            Casos de <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Éxito</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Proyectos reales que demuestran mi capacidad para entregar soluciones tecnológicas de alto impacto.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-9xl opacity-10">{project.image}</div>
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-white/80 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="text-white/90 font-medium">{project.client}</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <p className="text-slate-300 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase">Stack Tecnológico:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-emerald-500 mb-3 uppercase">Resultados:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-sm">
                        <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-24 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl border border-slate-700 p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Impacto Medible</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Proyectos Completados' },
              { value: '30+', label: 'Clientes Satisfechos' },
              { value: '10+', label: 'Años de Experiencia' },
              { value: '100%', label: 'Proyectos Exitosos' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Lo Que Dicen Mis Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8"
              >
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <p className="text-slate-300 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tu Proyecto Será el Próximo Caso de Éxito?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Hablemos sobre cómo puedo ayudarte a alcanzar resultados similares
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300">
            Agendar Consulta →
          </button>
        </motion.section>
      </div>
    </main>
  );
}

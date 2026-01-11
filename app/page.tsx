import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-slate-400">
              Soluciones tecnológicas que transforman tu negocio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '☁️',
                title: 'Arquitectura Cloud',
                description: 'Diseño e implementación de infraestructura escalable en AWS, Azure y GCP.',
                features: ['Migración a Cloud', 'Optimización de costos', 'Alta disponibilidad']
              },
              {
                icon: '💻',
                title: 'Desarrollo Full-Stack',
                description: 'Aplicaciones web y móviles con las últimas tecnologías y mejores prácticas.',
                features: ['React/Next.js', 'Node.js/PHP', 'APIs RESTful']
              },
              {
                icon: '⚙️',
                title: 'DevOps & Automatización',
                description: 'CI/CD, containerización y optimización de pipelines de desarrollo.',
                features: ['Docker/Kubernetes', 'GitHub Actions', 'Monitoreo 24/7']
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <span className="text-emerald-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Idea?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Agenda una consultoría gratuita de 30 minutos y descubre cómo puedo ayudarte
          </p>
          <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all duration-300 shadow-xl">
            Contactar Ahora →
          </button>
        </div>
      </section>
    </main>
  );
}

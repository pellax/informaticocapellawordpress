'use client';

import { motion } from 'framer-motion';

export default function Experiencia() {
  const timeline = [
    {
      year: '2024 - Presente',
      role: 'Consultor Tecnológico Senior',
      company: 'Freelance / Consultoría Independiente',
      type: 'Independiente',
      description: 'Consultoría especializada en arquitectura cloud, desarrollo full-stack y transformación digital para empresas de diversos sectores.',
      achievements: [
        'Migración exitosa de 15+ aplicaciones a cloud (AWS/Azure/GCP)',
        'Reducción promedio de 50% en costos de infraestructura',
        'Implementación de arquitecturas serverless y microservicios',
        'Mentoría de equipos técnicos en mejores prácticas'
      ],
      technologies: ['AWS', 'Azure', 'Next.js', 'Node.js', 'Kubernetes', 'Terraform']
    },
    {
      year: '2021 - 2024',
      role: 'Tech Lead / Arquitecto de Software',
      company: 'TechCorp Solutions',
      type: 'Full-time',
      description: 'Liderazgo técnico de equipo de 8 desarrolladores, diseño de arquitecturas y definición de estándares técnicos.',
      achievements: [
        'Diseño e implementación de arquitectura de microservicios',
        'Reducción de 70% en tiempo de deployment con CI/CD',
        'Implementación de observabilidad y monitoreo 24/7',
        'Liderazgo en adopción de prácticas DevOps'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Docker', 'Kubernetes', 'PostgreSQL']
    },
    {
      year: '2018 - 2021',
      role: 'Senior Full-Stack Developer',
      company: 'StartupHub',
      type: 'Full-time',
      description: 'Desarrollo de aplicaciones web y móviles para startups en fase de crecimiento, desde MVP hasta escalado.',
      achievements: [
        'Desarrollo de 10+ MVPs para startups exitosas',
        'Optimización de rendimiento logrando mejoras de 300%',
        'Implementación de testing automatizado (TDD)',
        'Migración progresiva de legacy a arquitecturas modernas'
      ],
      technologies: ['Vue.js', 'React', 'PHP', 'Laravel', 'MySQL', 'Redis']
    },
    {
      year: '2015 - 2018',
      role: 'Full-Stack Developer',
      company: 'Digital Agency Pro',
      type: 'Full-time',
      description: 'Desarrollo de sitios web, e-commerce y aplicaciones corporativas para clientes internacionales.',
      achievements: [
        'Desarrollo de 30+ proyectos web exitosos',
        'Implementación de soluciones e-commerce de alta conversión',
        'Integración con APIs de terceros y servicios externos',
        'Optimización SEO técnico y performance web'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'jQuery', 'MySQL', 'HTML/CSS']
    },
    {
      year: '2012 - 2015',
      role: 'Junior Developer',
      company: 'WebStudio',
      type: 'Full-time',
      description: 'Inicios profesionales en desarrollo web, aprendiendo fundamentos y colaborando en proyectos diversos.',
      achievements: [
        'Desarrollo de componentes frontend responsivos',
        'Colaboración en proyectos de equipo con metodologías ágiles',
        'Aprendizaje continuo de nuevas tecnologías',
        'Soporte técnico y mantenimiento de aplicaciones'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git']
    }
  ];

  const certifications = [
    { name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF', year: '2022' },
    { name: 'Google Cloud Professional Architect', issuer: 'Google Cloud', year: '2022' },
    { name: 'Microsoft Azure Solutions Architect', issuer: 'Microsoft', year: '2021' },
    { name: 'Professional Scrum Master (PSM I)', issuer: 'Scrum.org', year: '2020' }
  ];

  const skills = {
    'Cloud & Infrastructure': [
      { name: 'AWS', level: 95 },
      { name: 'Azure', level: 85 },
      { name: 'Google Cloud', level: 80 },
      { name: 'Kubernetes', level: 90 },
      { name: 'Docker', level: 95 },
      { name: 'Terraform', level: 85 }
    ],
    'Backend': [
      { name: 'Node.js', level: 95 },
      { name: 'PHP', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Go', level: 70 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 }
    ],
    'Frontend': [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 95 },
      { name: 'Vue.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Responsive Design', level: 95 }
    ],
    'DevOps & Tools': [
      { name: 'CI/CD', level: 90 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'Jenkins', level: 80 },
      { name: 'Monitoring', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'Linux', level: 90 }
    ]
  };

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
            Mi <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Trayectoria</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Más de 10 años construyendo soluciones tecnológicas que generan impacto real en diversos sectores.
          </p>
        </motion.div>

        {/* Timeline */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Experiencia Profesional</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 hover:border-blue-500 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <div className="text-emerald-500 font-semibold mb-2">{item.year}</div>
                      <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                      <div className="text-slate-400 flex items-center gap-2">
                        <span>{item.company}</span>
                        <span className="text-xs px-2 py-1 bg-slate-700 rounded">{item.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{item.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase">Logros Destacados:</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-slate-300 text-sm">
                          <span className="text-emerald-500 mr-2 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + catIndex * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
                <div className="space-y-4">
                  {skillList.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-emerald-500 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 1 + catIndex * 0.1 + idx * 0.05, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Certificaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-emerald-500 transition-all duration-300"
              >
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <div className="text-slate-400 text-sm mb-1">{cert.issuer}</div>
                <div className="text-emerald-500 text-sm font-semibold">{cert.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Buscas un Profesional con Esta Experiencia?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Pongamos esta experiencia a trabajar en tu próximo proyecto
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300">
            Contactar Ahora →
          </button>
        </motion.section>
      </div>
    </main>
  );
}

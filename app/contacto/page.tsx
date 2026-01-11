'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por contactarme! Te responderé pronto.');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'info@informaticocapella.com',
      link: 'mailto:info@informaticocapella.com',
      description: 'Respondo en menos de 24 horas'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/informatico-capella',
      link: 'https://linkedin.com',
      description: 'Conecta conmigo profesionalmente'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/informatico-capella',
      link: 'https://github.com',
      description: 'Revisa mis proyectos públicos'
    },
    {
      icon: '🌍',
      title: 'Disponibilidad',
      value: 'Remote & On-site',
      description: 'Trabajo con clientes globalmente'
    }
  ];

  const faqs = [
    {
      question: '¿Cuál es tu disponibilidad para nuevos proyectos?',
      answer: 'Actualmente estoy aceptando nuevos proyectos. Mi calendario se llena con 2-3 semanas de anticipación, por lo que te recomiendo contactarme lo antes posible.'
    },
    {
      question: '¿Trabajas con startups o solo con empresas grandes?',
      answer: 'Trabajo con empresas de todos los tamaños, desde startups en fase inicial hasta corporaciones. Lo importante es que el proyecto sea desafiante y tenga un impacto real.'
    },
    {
      question: '¿Cuáles son tus tarifas?',
      answer: 'Mis tarifas varían según el tipo y complejidad del proyecto. Ofrezco modelos de facturación por hora, proyecto fijo o retainer mensual. Agenda una consulta para discutir tu proyecto.'
    },
    {
      question: '¿Ofreces soporte post-lanzamiento?',
      answer: 'Sí, todos mis proyectos incluyen un período de soporte post-lanzamiento. También ofrezco contratos de mantenimiento continuos según las necesidades del cliente.'
    },
    {
      question: '¿Trabajas solo o con un equipo?',
      answer: 'Trabajo principalmente de forma independiente, pero tengo una red de colaboradores de confianza para proyectos más grandes que requieren especialistas adicionales.'
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
            Hablemos de tu <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Proyecto</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Estoy aquí para ayudarte a convertir tus ideas en realidad. Cuéntame sobre tu proyecto y descubramos cómo puedo aportar valor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Envíame un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                    Presupuesto estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="5k-10k">€5,000 - €10,000</option>
                    <option value="10k-25k">€10,000 - €25,000</option>
                    <option value="25k-50k">€25,000 - €50,000</option>
                    <option value="50k+">€50,000+</option>
                    <option value="not-sure">Aún no lo sé</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Cuéntame sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Describe tu proyecto, objetivos, timeline y cualquier detalle relevante..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Enviar Mensaje →
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors mb-2 block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-slate-300 mb-2">{info.value}</div>
                )}
                <p className="text-sm text-slate-400">{info.description}</p>
              </motion.div>
            ))}

            {/* Quick Response Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-to-r from-blue-900/50 to-emerald-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6"
            >
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Respuesta Rápida</h3>
              <p className="text-sm text-slate-300">
                Respondo a todos los mensajes en menos de 24 horas. Si tu proyecto es urgente, menciónalo en el mensaje.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl border border-slate-700 p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Prefieres una Consulta en Directo?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Agenda una videollamada de 30 minutos gratuita para discutir tu proyecto
          </p>
          <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all duration-300 shadow-xl">
            Agendar Consulta Gratuita →
          </button>
        </motion.section>
      </div>
    </main>
  );
}

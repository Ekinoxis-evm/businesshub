'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Building, Network, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export function LocationSection() {
  return (
    <section id="our-location" className="section-padding bg-dark-surface">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ubicación del Evento
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-dark-border bg-dark-bg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Image
                    src="/aliados/zonamerica.png"
                    alt="NIDO Zonamerica"
                    width={200}
                    height={100}
                    className="mx-auto mb-6"
                  />
                  <p className="text-text-secondary leading-relaxed">
                    El centro de innovación tecnológica de la región.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-text-primary">
                      Calle 36#128-321, Auto. Cali - Jamundi #760030
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-text-primary">
                      Zona Franca de Servicios Tecnológicos
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Network className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-text-primary">
                      Hub de Innovación Tecnológica
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/place/ZONAMERICA/@3.3269781,-76.5214538,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a1df68efbd65:0x5cd25776a8ad1743!8m2!3d3.3269781!4d-76.5214538!16s%2Fg%2F11fxb9b_l0?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver en Google Maps
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-dark-border bg-dark-bg overflow-hidden">
              <div className="relative h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.9384567890123!2d-76.5238728!3d3.3269781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1df68efbd65%3A0x5cd25776a8ad1743!2sZONAMERICA!5e0!3m2!1sen!2sco!4v1640995200000!5m2!1sen!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </Card>

            <Card className="border-dark-border bg-dark-bg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-text-primary mb-4">
                  ¿Por qué Zonamerica?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                    <span>Ecosistema de innovación consolidado</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                    <span>Conectividad internacional</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                    <span>Beneficios tributarios para empresas tech</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full mt-2 flex-shrink-0" />
                    <span>Comunidad de emprendedores activa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

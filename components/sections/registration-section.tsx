'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface RegistrationSectionProps {
  date: string
  location: string
  duration: string
  price: string
}

export function RegistrationSection({ date, location, duration, price }: RegistrationSectionProps) {
  const benefits = [
    {
      image: "/registry/tickets.png",
      title: "Acceso para 2 personas",
      description: "Tu empresa puede enviar hasta 2 representantes al evento completo, maximizando la oportunidad de networking."
    },
    {
      image: "/registry/directorio.png",
      title: "Directorio digital exclusivo",
      description: "Obtén acceso a un directorio privado con contactos verificados, sectores y perfiles profesionales de todos los asistentes."
    },
    {
      image: "/registry/deal.png",
      title: "10 contactos garantizados",
      description: "Cada participante tendrá la oportunidad de generar al menos 10 conexiones estratégicas de alto valor durante el evento."
    },
    {
      image: "/registry/chat.png",
      title: "Grupo de networking permanente",
      description: "Acceso a un grupo exclusivo post-evento para mantener y potenciar las relaciones construidas, facilitando colaboraciones futuras."
    },
    {
      image: "/registry/swag.png",
      title: "Kit de bienvenida premium",
      description: "Recibe un kit exclusivo con materiales del evento, recursos de networking y merchandising de Cali Business Hub."
    }
  ]

  return (
    <section id="registro" className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 via-primary-cyan/5 to-primary-purple/10" />
      
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Reserva tu Cupo
          </h2>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-primary-cyan/30 bg-gradient-to-br from-dark-surface to-dark-surface/50 overflow-hidden">
                <div className="relative h-52 w-full bg-gradient-to-br from-primary-cyan/20 to-primary-purple/20">
                  <Image 
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/40 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-primary leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Registration Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://app.formbricks.com/s/d3fvwf8i8yvalmbqrf98h0tr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 rounded-2xl bg-gradient-to-r from-primary-cyan to-primary-purple text-2xl font-bold text-white hover:from-primary-cyan/90 hover:to-primary-purple/90 transition-all duration-300 shadow-2xl shadow-primary-cyan/30 hover:scale-105 hover:shadow-primary-cyan/50"
          >
            Reservar mi cupo ahora
          </a>
        </motion.div>

      </div>
    </section>
  )
}

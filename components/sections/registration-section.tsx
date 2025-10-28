'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface RegistrationSectionProps {
  date: string
  location: string
  duration: string
  price: string
}

export function RegistrationSection({ date, location, duration, price }: RegistrationSectionProps) {
  const benefits = [
    "Acceso completo al evento",
    "Materiales de trabajo incluidos",
    "Cóctel premium y networking",
    "Directorio privado de participantes",
    "Grupo de networking post-evento",
    "Garantía de 3 conexiones estratégicas"
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

        {/* Luma Registration Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-primary-cyan/30 bg-gradient-to-br from-dark-surface to-dark-surface/50">
            <CardContent className="p-6">
              <div className="w-full">
                <iframe
                  src="https://luma.com/embed/event/evt-ODlgBpRSQ2PabGn/simple"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                  allow="fullscreen; payment"
                  aria-hidden="false"
                  tabIndex={0}
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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

        {/* Formbricks Registration Form - Embedded iframe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-primary-cyan/30 bg-gradient-to-br from-dark-surface to-dark-surface/50">
            <CardContent className="p-6">
              <div 
                style={{ position: 'relative', height: '80dvh', overflow: 'auto' }}
                className="w-full rounded-lg"
              >
                <iframe 
                  src="https://app.formbricks.com/s/d3fvwf8i8yvalmbqrf98h0tr"
                  frameBorder="0" 
                  style={{ 
                    position: 'absolute', 
                    left: 0, 
                    top: 0, 
                    width: '100%', 
                    height: '100%', 
                    border: 0 
                  }}
                  title="Formulario de registro - Cali Business Hub"
                  allow="clipboard-read; clipboard-write"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}

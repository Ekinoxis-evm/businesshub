'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Briefcase, Network, Award } from 'lucide-react'

interface DifferentialSectionProps {
  differential: string
}

interface Metric {
  icon: React.ReactNode
  value: string
  label: string
  delay: number
}

export function DifferentialSection({ differential }: DifferentialSectionProps) {
  const metrics: Metric[] = [
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      value: '+50',
      label: 'Directores Selectos',
      delay: 0.1
    },
    {
      icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10" />,
      value: '2',
      label: 'Workshops Prácticos',
      delay: 0.2
    },
    {
      icon: <Network className="w-8 h-8 md:w-10 md:h-10" />,
      value: '+2',
      label: 'Conexiones Garantizadas',
      delay: 0.3
    },
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10" />,
      value: '100%',
      label: 'Evento Exclusivo',
      delay: 0.4
    }
  ]

  return (
    <section className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      <div className="container-max relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-primary-cyan/30 bg-gradient-to-br from-dark-surface to-dark-surface/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl gradient-text mb-4">
                Metodología Exclusiva
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl text-text-primary leading-relaxed mb-12">
                {differential}
              </p>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: metric.delay }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center space-y-3 p-4 rounded-lg bg-dark-surface/30 hover:bg-dark-surface/50 transition-colors"
                  >
                    <div className="text-primary-cyan">
                      {metric.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text">
                      {metric.value}
                    </div>
                    <div className="text-sm md:text-base text-text-primary font-medium text-center">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

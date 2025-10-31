'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Users, Zap } from 'lucide-react'

interface DifferentialSectionProps {
  differential: string
}

export function DifferentialSection({ differential }: DifferentialSectionProps) {
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
              <p className="text-xl text-text-primary leading-relaxed mb-8">
                {differential}
              </p>
              
              <div className="text-center">
                <div className="text-8xl md:text-9xl font-bold gradient-text mb-8">
                  3
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

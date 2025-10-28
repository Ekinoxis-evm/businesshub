'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Target, Zap, Briefcase } from 'lucide-react'
import Image from 'next/image'

interface AboutSectionProps {
  context: string
  attendees: string[]
}

export function AboutSection({ context, attendees }: AboutSectionProps) {
  const attendeeTypes = [
    { icon: Users, title: "CEOs & Fundadores", description: "Empresarios con visión de crecimiento", image: "/branding/Img/13630.jpg" },
    { icon: Target, title: "Inversionistas", description: "Líderes con capital y propósito", image: "/branding/Img/2115.jpg" },
    { icon: Zap, title: "Ejecutivos", description: "Con poder de decisión y alianzas estratégicas", image: "/branding/Img/72349.jpg" },
    { icon: Briefcase, title: "Emprendedores", description: "Consolidados que desean escalar", image: "/branding/Img/40965.jpg" }
  ]

  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Conecta. Inspírate. Escala.
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {context}
          </p>
        </motion.div>

        {/* Attendee Types Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {attendeeTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center card-hover border-dark-border bg-dark-surface overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image 
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-text-primary">
                    {type.title}
                  </h3>
                  <p className="text-text-secondary">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
